# openapi_client.CertificatesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**certificate_create_or_update**](CertificatesApi.md#certificate_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates/{certificateId} | 
[**certificate_delete**](CertificatesApi.md#certificate_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates/{certificateId} | 
[**certificate_get**](CertificatesApi.md#certificate_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates/{certificateId} | 
[**certificate_get_entity_tag**](CertificatesApi.md#certificate_get_entity_tag) | **HEAD** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates/{certificateId} | 
[**certificate_list_by_service**](CertificatesApi.md#certificate_list_by_service) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/certificates | 


# **certificate_create_or_update**
> CertificateContract certificate_create_or_update(resource_group_name, service_name, certificate_id, api_version, subscription_id, parameters, if_match=if_match)



Creates or updates the certificate being used for authentication with the backend.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_contract import CertificateContract
from openapi_client.models.certificate_create_or_update_parameters import CertificateCreateOrUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    certificate_id = 'certificate_id_example' # str | Identifier of the certificate entity. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.CertificateCreateOrUpdateParameters() # CertificateCreateOrUpdateParameters | Create or Update parameters.
    if_match = 'if_match_example' # str | The entity state (Etag) version of the certificate to update. A value of \"*\" can be used for If-Match to unconditionally apply the operation.. (optional)

    try:
        api_response = api_instance.certificate_create_or_update(resource_group_name, service_name, certificate_id, api_version, subscription_id, parameters, if_match=if_match)
        print("The response of CertificatesApi->certificate_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificate_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **certificate_id** | **str**| Identifier of the certificate entity. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**CertificateCreateOrUpdateParameters**](CertificateCreateOrUpdateParameters.md)| Create or Update parameters. | 
 **if_match** | **str**| The entity state (Etag) version of the certificate to update. A value of \&quot;*\&quot; can be used for If-Match to unconditionally apply the operation.. | [optional] 

### Return type

[**CertificateContract**](CertificateContract.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The certificate details were successfully updated. |  -  |
**201** | The new certificate was successfully added. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_delete**
> certificate_delete(resource_group_name, service_name, certificate_id, if_match, api_version, subscription_id)



Deletes specific certificate.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    certificate_id = 'certificate_id_example' # str | Identifier of the certificate entity. Must be unique in the current API Management service instance.
    if_match = 'if_match_example' # str | The entity state (Etag) version of the certificate to delete. A value of \"*\" can be used for If-Match to unconditionally apply the operation.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.certificate_delete(resource_group_name, service_name, certificate_id, if_match, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificate_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **certificate_id** | **str**| Identifier of the certificate entity. Must be unique in the current API Management service instance. | 
 **if_match** | **str**| The entity state (Etag) version of the certificate to delete. A value of \&quot;*\&quot; can be used for If-Match to unconditionally apply the operation. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The certificate was successfully deleted. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_get**
> CertificateContract certificate_get(resource_group_name, service_name, certificate_id, api_version, subscription_id)



Gets the details of the certificate specified by its identifier.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_contract import CertificateContract
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    certificate_id = 'certificate_id_example' # str | Identifier of the certificate entity. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.certificate_get(resource_group_name, service_name, certificate_id, api_version, subscription_id)
        print("The response of CertificatesApi->certificate_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificate_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **certificate_id** | **str**| Identifier of the certificate entity. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**CertificateContract**](CertificateContract.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body contains the specified Certificate entity. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_get_entity_tag**
> certificate_get_entity_tag(resource_group_name, service_name, certificate_id, api_version, subscription_id)



Gets the entity state (Etag) version of the certificate specified by its identifier.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    certificate_id = 'certificate_id_example' # str | Identifier of the certificate entity. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.certificate_get_entity_tag(resource_group_name, service_name, certificate_id, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificate_get_entity_tag: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **certificate_id** | **str**| Identifier of the certificate entity. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Specified certificate entity exists and current entity state version is present in the ETag header. |  * ETag - Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. <br>  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificate_list_by_service**
> CertificateCollection certificate_list_by_service(resource_group_name, service_name, api_version, subscription_id, filter=filter, top=top, skip=skip)



Lists a collection of all certificates in the specified service instance.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_collection import CertificateCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CertificatesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | | Field          | Supported operators    | Supported functions                         | |----------------|------------------------|---------------------------------------------| | id             | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | subject        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | thumbprint     | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | expirationDate | ge, le, eq, ne, gt, lt | N/A                                         | (optional)
    top = 56 # int | Number of records to return. (optional)
    skip = 56 # int | Number of records to skip. (optional)

    try:
        api_response = api_instance.certificate_list_by_service(resource_group_name, service_name, api_version, subscription_id, filter=filter, top=top, skip=skip)
        print("The response of CertificatesApi->certificate_list_by_service:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificate_list_by_service: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| | Field          | Supported operators    | Supported functions                         | |----------------|------------------------|---------------------------------------------| | id             | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | subject        | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | thumbprint     | ge, le, eq, ne, gt, lt | substringof, contains, startswith, endswith | | expirationDate | ge, le, eq, ne, gt, lt | N/A                                         | | [optional] 
 **top** | **int**| Number of records to return. | [optional] 
 **skip** | **int**| Number of records to skip. | [optional] 

### Return type

[**CertificateCollection**](CertificateCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns a collection of Certificate entity. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

