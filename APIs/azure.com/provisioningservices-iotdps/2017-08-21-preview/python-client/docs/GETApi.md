# openapi_client.GETApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dps_certificate_get**](GETApi.md#dps_certificate_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates/{certificateName} | 
[**dps_certificates_list**](GETApi.md#dps_certificates_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/certificates | 
[**iot_dps_resource_get**](GETApi.md#iot_dps_resource_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName} | Get the non-security related metadata of the provisioning service.
[**iot_dps_resource_get_operation_result**](GETApi.md#iot_dps_resource_get_operation_result) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/operationresults/{operationId} | 
[**iot_dps_resource_list_by_resource_group**](GETApi.md#iot_dps_resource_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices | 
[**iot_dps_resource_list_by_subscription**](GETApi.md#iot_dps_resource_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Devices/provisioningServices | Get all the provisioning services in a subscription.
[**iot_dps_resource_list_valid_skus**](GETApi.md#iot_dps_resource_list_valid_skus) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/provisioningServices/{provisioningServiceName}/skus | Get the list of valid SKUs for a provisioning service.


# **dps_certificate_get**
> CertificateResponse dps_certificate_get(certificate_name, subscription_id, resource_group_name, provisioning_service_name, api_version, if_match=if_match)



Get the certificate from the provisioning service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_response import CertificateResponse
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
    api_instance = openapi_client.GETApi(api_client)
    certificate_name = 'certificate_name_example' # str | Name of the certificate to retrieve.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group identifier.
    provisioning_service_name = 'provisioning_service_name_example' # str | Name of the provisioning service the certificate is associated with.
    api_version = 'api_version_example' # str | The version of the API.
    if_match = 'if_match_example' # str | ETag of the certificate. (optional)

    try:
        api_response = api_instance.dps_certificate_get(certificate_name, subscription_id, resource_group_name, provisioning_service_name, api_version, if_match=if_match)
        print("The response of GETApi->dps_certificate_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->dps_certificate_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **certificate_name** | **str**| Name of the certificate to retrieve. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| Resource group identifier. | 
 **provisioning_service_name** | **str**| Name of the provisioning service the certificate is associated with. | 
 **api_version** | **str**| The version of the API. | 
 **if_match** | **str**| ETag of the certificate. | [optional] 

### Return type

[**CertificateResponse**](CertificateResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Metadata for the specified certificate. |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dps_certificates_list**
> CertificateListDescription dps_certificates_list(subscription_id, resource_group_name, provisioning_service_name, api_version)



Get all the certificates tied to the provisioning service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.certificate_list_description import CertificateListDescription
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
    api_instance = openapi_client.GETApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of resource group.
    provisioning_service_name = 'provisioning_service_name_example' # str | Name of provisioning service to retrieve certificates for.
    api_version = 'api_version_example' # str | The version of the API.

    try:
        api_response = api_instance.dps_certificates_list(subscription_id, resource_group_name, provisioning_service_name, api_version)
        print("The response of GETApi->dps_certificates_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->dps_certificates_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| Name of resource group. | 
 **provisioning_service_name** | **str**| Name of provisioning service to retrieve certificates for. | 
 **api_version** | **str**| The version of the API. | 

### Return type

[**CertificateListDescription**](CertificateListDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of certificate descriptions in a JSON-serialized array. |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_dps_resource_get**
> ProvisioningServiceDescription iot_dps_resource_get(provisioning_service_name, subscription_id, resource_group_name, api_version)

Get the non-security related metadata of the provisioning service.

Get the non-security related metadata of the provisioning service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provisioning_service_description import ProvisioningServiceDescription
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
    api_instance = openapi_client.GETApi(api_client)
    provisioning_service_name = 'provisioning_service_name_example' # str | Name of the provisioning service to retrieve.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    api_version = 'api_version_example' # str | The version of the API.

    try:
        # Get the non-security related metadata of the provisioning service.
        api_response = api_instance.iot_dps_resource_get(provisioning_service_name, subscription_id, resource_group_name, api_version)
        print("The response of GETApi->iot_dps_resource_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_dps_resource_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provisioning_service_name** | **str**| Name of the provisioning service to retrieve. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| Resource group name. | 
 **api_version** | **str**| The version of the API. | 

### Return type

[**ProvisioningServiceDescription**](ProvisioningServiceDescription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Provisioning service description with no keys is included in the response. |  -  |
**0** | Default error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_dps_resource_get_operation_result**
> AsyncOperationResult iot_dps_resource_get_operation_result(operation_id, subscription_id, resource_group_name, provisioning_service_name, asyncinfo, api_version)



Gets the status of a long running operation, such as create, update or delete a provisioning service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.async_operation_result import AsyncOperationResult
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
    api_instance = openapi_client.GETApi(api_client)
    operation_id = 'operation_id_example' # str | Operation id corresponding to long running operation. Use this to poll for the status.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group identifier.
    provisioning_service_name = 'provisioning_service_name_example' # str | Name of provisioning service that the operation is running on.
    asyncinfo = 'true' # str | Async header used to poll on the status of the operation, obtained while creating the long running operation. (default to 'true')
    api_version = 'api_version_example' # str | The version of the API.

    try:
        api_response = api_instance.iot_dps_resource_get_operation_result(operation_id, subscription_id, resource_group_name, provisioning_service_name, asyncinfo, api_version)
        print("The response of GETApi->iot_dps_resource_get_operation_result:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_dps_resource_get_operation_result: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operation_id** | **str**| Operation id corresponding to long running operation. Use this to poll for the status. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| Resource group identifier. | 
 **provisioning_service_name** | **str**| Name of provisioning service that the operation is running on. | 
 **asyncinfo** | **str**| Async header used to poll on the status of the operation, obtained while creating the long running operation. | [default to &#39;true&#39;]
 **api_version** | **str**| The version of the API. | 

### Return type

[**AsyncOperationResult**](AsyncOperationResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The status of the long running operation. |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_dps_resource_list_by_resource_group**
> ProvisioningServiceDescriptionListResult iot_dps_resource_list_by_resource_group(subscription_id, resource_group_name, api_version)



Get a list of all provisioning services in the given resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provisioning_service_description_list_result import ProvisioningServiceDescriptionListResult
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
    api_instance = openapi_client.GETApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Resource group identifier.
    api_version = 'api_version_example' # str | The version of the API.

    try:
        api_response = api_instance.iot_dps_resource_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of GETApi->iot_dps_resource_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_dps_resource_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| Resource group identifier. | 
 **api_version** | **str**| The version of the API. | 

### Return type

[**ProvisioningServiceDescriptionListResult**](ProvisioningServiceDescriptionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of provisioning services in the resource group. |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_dps_resource_list_by_subscription**
> ProvisioningServiceDescriptionListResult iot_dps_resource_list_by_subscription(subscription_id, api_version)

Get all the provisioning services in a subscription.

Get all the provisioning services in a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provisioning_service_description_list_result import ProvisioningServiceDescriptionListResult
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
    api_instance = openapi_client.GETApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    api_version = 'api_version_example' # str | The version of the API.

    try:
        # Get all the provisioning services in a subscription.
        api_response = api_instance.iot_dps_resource_list_by_subscription(subscription_id, api_version)
        print("The response of GETApi->iot_dps_resource_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_dps_resource_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **api_version** | **str**| The version of the API. | 

### Return type

[**ProvisioningServiceDescriptionListResult**](ProvisioningServiceDescriptionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized array of the metadata from all the provisioning services in the subscription. |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **iot_dps_resource_list_valid_skus**
> IotDpsSkuDefinitionListResult iot_dps_resource_list_valid_skus(provisioning_service_name, subscription_id, resource_group_name, api_version)

Get the list of valid SKUs for a provisioning service.

Get the list of valid SKUs for a provisioning service.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.iot_dps_sku_definition_list_result import IotDpsSkuDefinitionListResult
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
    api_instance = openapi_client.GETApi(api_client)
    provisioning_service_name = 'provisioning_service_name_example' # str | Name of provisioning service.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | Name of resource group.
    api_version = 'api_version_example' # str | The version of the API.

    try:
        # Get the list of valid SKUs for a provisioning service.
        api_response = api_instance.iot_dps_resource_list_valid_skus(provisioning_service_name, subscription_id, resource_group_name, api_version)
        print("The response of GETApi->iot_dps_resource_list_valid_skus:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GETApi->iot_dps_resource_list_valid_skus: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provisioning_service_name** | **str**| Name of provisioning service. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| Name of resource group. | 
 **api_version** | **str**| The version of the API. | 

### Return type

[**IotDpsSkuDefinitionListResult**](IotDpsSkuDefinitionListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains a JSON-serialized array of the valid SKUs for this provisioning service. |  -  |
**0** | Default error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

