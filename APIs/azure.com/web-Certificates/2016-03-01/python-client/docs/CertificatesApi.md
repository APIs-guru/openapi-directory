# openapi_client.CertificatesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**certificates_create_or_update**](CertificatesApi.md#certificates_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name} | Create or update a certificate.
[**certificates_delete**](CertificatesApi.md#certificates_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name} | Delete a certificate.
[**certificates_get**](CertificatesApi.md#certificates_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name} | Get a certificate.
[**certificates_list**](CertificatesApi.md#certificates_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Web/certificates | Get all certificates for a subscription.
[**certificates_list_by_resource_group**](CertificatesApi.md#certificates_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates | Get all certificates in a resource group.
[**certificates_update**](CertificatesApi.md#certificates_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/certificates/{name} | Create or update a certificate.


# **certificates_create_or_update**
> Certificate certificates_create_or_update(resource_group_name, name, subscription_id, api_version, certificate_envelope)

Create or update a certificate.

Create or update a certificate.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate import Certificate
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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    certificate_envelope = openapi_client.Certificate() # Certificate | Details of certificate, if it exists already.

    try:
        # Create or update a certificate.
        api_response = api_instance.certificates_create_or_update(resource_group_name, name, subscription_id, api_version, certificate_envelope)
        print("The response of CertificatesApi->certificates_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **certificate_envelope** | [**Certificate**](Certificate.md)| Details of certificate, if it exists already. | 

### Return type

[**Certificate**](Certificate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificates_delete**
> certificates_delete(resource_group_name, name, subscription_id, api_version)

Delete a certificate.

Delete a certificate.

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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete a certificate.
        api_instance.certificates_delete(resource_group_name, name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully deleted certificate. |  -  |
**204** | Certificate does not exist. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificates_get**
> Certificate certificates_get(resource_group_name, name, subscription_id, api_version)

Get a certificate.

Get a certificate.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate import Certificate
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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get a certificate.
        api_response = api_instance.certificates_get(resource_group_name, name, subscription_id, api_version)
        print("The response of CertificatesApi->certificates_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**Certificate**](Certificate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificates_list**
> CertificateCollection certificates_list(subscription_id, api_version)

Get all certificates for a subscription.

Get all certificates for a subscription.

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
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all certificates for a subscription.
        api_response = api_instance.certificates_list(subscription_id, api_version)
        print("The response of CertificatesApi->certificates_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificates_list_by_resource_group**
> CertificateCollection certificates_list_by_resource_group(resource_group_name, subscription_id, api_version)

Get all certificates in a resource group.

Get all certificates in a resource group.

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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all certificates in a resource group.
        api_response = api_instance.certificates_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of CertificatesApi->certificates_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **certificates_update**
> Certificate certificates_update(resource_group_name, name, subscription_id, api_version, certificate_envelope)

Create or update a certificate.

Create or update a certificate.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate import Certificate
from openapi_client.models.certificate_patch_resource import CertificatePatchResource
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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    name = 'name_example' # str | Name of the certificate.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    certificate_envelope = openapi_client.CertificatePatchResource() # CertificatePatchResource | Details of certificate, if it exists already.

    try:
        # Create or update a certificate.
        api_response = api_instance.certificates_update(resource_group_name, name, subscription_id, api_version, certificate_envelope)
        print("The response of CertificatesApi->certificates_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CertificatesApi->certificates_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **name** | **str**| Name of the certificate. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **certificate_envelope** | [**CertificatePatchResource**](CertificatePatchResource.md)| Details of certificate, if it exists already. | 

### Return type

[**Certificate**](Certificate.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

