# openapi_client.MetadataApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metadata_get**](MetadataApi.md#metadata_get) | **GET** /providers/Microsoft.ResourceHealth/metadata/{name} | Gets the metadata entity.
[**metadata_list**](MetadataApi.md#metadata_list) | **GET** /providers/Microsoft.ResourceHealth/metadata | Gets the list of metadata entities.


# **metadata_get**
> MetadataEntity metadata_get(name, api_version)

Gets the metadata entity.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metadata_entity import MetadataEntity
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
    api_instance = openapi_client.MetadataApi(api_client)
    name = 'name_example' # str | Name of metadata entity.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        # Gets the metadata entity.
        api_response = api_instance.metadata_get(name, api_version)
        print("The response of MetadataApi->metadata_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetadataApi->metadata_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of metadata entity. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**MetadataEntity**](MetadataEntity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully retrieved metadata entities |  -  |
**404** | Client sent unknown metadata name |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **metadata_list**
> MetadataEntityListResult metadata_list(api_version)

Gets the list of metadata entities.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.metadata_entity_list_result import MetadataEntityListResult
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
    api_instance = openapi_client.MetadataApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        # Gets the list of metadata entities.
        api_response = api_instance.metadata_list(api_version)
        print("The response of MetadataApi->metadata_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetadataApi->metadata_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 

### Return type

[**MetadataEntityListResult**](MetadataEntityListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Successfully retrieved metadata entities |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

