# openapi_client.IntegrationRuntimeObjectMetadataApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**integration_runtime_object_metadata_get**](IntegrationRuntimeObjectMetadataApi.md#integration_runtime_object_metadata_get) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/getObjectMetadata | 
[**integration_runtime_object_metadata_refresh**](IntegrationRuntimeObjectMetadataApi.md#integration_runtime_object_metadata_refresh) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/refreshObjectMetadata | 


# **integration_runtime_object_metadata_get**
> IntegrationRuntimeObjectMetadataGet200Response integration_runtime_object_metadata_get(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version, get_metadata_request=get_metadata_request)



Get a SSIS integration runtime object metadata by specified path. The return is pageable metadata list.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.get_ssis_object_metadata_request import GetSsisObjectMetadataRequest
from openapi_client.models.integration_runtime_object_metadata_get200_response import IntegrationRuntimeObjectMetadataGet200Response
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
    api_instance = openapi_client.IntegrationRuntimeObjectMetadataApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.
    get_metadata_request = openapi_client.GetSsisObjectMetadataRequest() # GetSsisObjectMetadataRequest | The parameters for getting a SSIS object metadata. (optional)

    try:
        api_response = api_instance.integration_runtime_object_metadata_get(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version, get_metadata_request=get_metadata_request)
        print("The response of IntegrationRuntimeObjectMetadataApi->integration_runtime_object_metadata_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimeObjectMetadataApi->integration_runtime_object_metadata_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 
 **get_metadata_request** | [**GetSsisObjectMetadataRequest**](GetSsisObjectMetadataRequest.md)| The parameters for getting a SSIS object metadata. | [optional] 

### Return type

[**IntegrationRuntimeObjectMetadataGet200Response**](IntegrationRuntimeObjectMetadataGet200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **integration_runtime_object_metadata_refresh**
> SsisObjectMetadataStatusResponse integration_runtime_object_metadata_refresh(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)



Refresh a SSIS integration runtime object metadata.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.ssis_object_metadata_status_response import SsisObjectMetadataStatusResponse
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
    api_instance = openapi_client.IntegrationRuntimeObjectMetadataApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    integration_runtime_name = 'integration_runtime_name_example' # str | The integration runtime name.
    api_version = 'api_version_example' # str | The API version.

    try:
        api_response = api_instance.integration_runtime_object_metadata_refresh(subscription_id, resource_group_name, factory_name, integration_runtime_name, api_version)
        print("The response of IntegrationRuntimeObjectMetadataApi->integration_runtime_object_metadata_refresh:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IntegrationRuntimeObjectMetadataApi->integration_runtime_object_metadata_refresh: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **integration_runtime_name** | **str**| The integration runtime name. | 
 **api_version** | **str**| The API version. | 

### Return type

[**SsisObjectMetadataStatusResponse**](SsisObjectMetadataStatusResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Accepted. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

