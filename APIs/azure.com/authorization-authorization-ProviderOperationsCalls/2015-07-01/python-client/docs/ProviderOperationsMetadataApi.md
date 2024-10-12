# openapi_client.ProviderOperationsMetadataApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**provider_operations_metadata_get**](ProviderOperationsMetadataApi.md#provider_operations_metadata_get) | **GET** /providers/Microsoft.Authorization/providerOperations/{resourceProviderNamespace} | 
[**provider_operations_metadata_list**](ProviderOperationsMetadataApi.md#provider_operations_metadata_list) | **GET** /providers/Microsoft.Authorization/providerOperations | 


# **provider_operations_metadata_get**
> ProviderOperationsMetadata provider_operations_metadata_get(resource_provider_namespace, api_version, expand=expand)



Gets provider operations metadata for the specified resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provider_operations_metadata import ProviderOperationsMetadata
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
    api_instance = openapi_client.ProviderOperationsMetadataApi(api_client)
    resource_provider_namespace = 'resource_provider_namespace_example' # str | The namespace of the resource provider.
    api_version = 'api_version_example' # str | The API version to use for the operation.
    expand = 'resourceTypes' # str | Specifies whether to expand the values. (optional) (default to 'resourceTypes')

    try:
        api_response = api_instance.provider_operations_metadata_get(resource_provider_namespace, api_version, expand=expand)
        print("The response of ProviderOperationsMetadataApi->provider_operations_metadata_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderOperationsMetadataApi->provider_operations_metadata_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_provider_namespace** | **str**| The namespace of the resource provider. | 
 **api_version** | **str**| The API version to use for the operation. | 
 **expand** | **str**| Specifies whether to expand the values. | [optional] [default to &#39;resourceTypes&#39;]

### Return type

[**ProviderOperationsMetadata**](ProviderOperationsMetadata.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the operations metadata. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provider_operations_metadata_list**
> ProviderOperationsMetadataListResult provider_operations_metadata_list(api_version, expand=expand)



Gets provider operations metadata for all resource providers.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provider_operations_metadata_list_result import ProviderOperationsMetadataListResult
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
    api_instance = openapi_client.ProviderOperationsMetadataApi(api_client)
    api_version = 'api_version_example' # str | The API version to use for this operation.
    expand = 'resourceTypes' # str | Specifies whether to expand the values. (optional) (default to 'resourceTypes')

    try:
        api_response = api_instance.provider_operations_metadata_list(api_version, expand=expand)
        print("The response of ProviderOperationsMetadataApi->provider_operations_metadata_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderOperationsMetadataApi->provider_operations_metadata_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to use for this operation. | 
 **expand** | **str**| Specifies whether to expand the values. | [optional] [default to &#39;resourceTypes&#39;]

### Return type

[**ProviderOperationsMetadataListResult**](ProviderOperationsMetadataListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns an array of the operations metadata. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

