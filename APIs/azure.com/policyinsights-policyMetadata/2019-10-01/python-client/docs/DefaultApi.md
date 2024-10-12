# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**policy_metadata_get_resource**](DefaultApi.md#policy_metadata_get_resource) | **GET** /providers/Microsoft.PolicyInsights/policyMetadata/{resourceName} | 
[**policy_metadata_list**](DefaultApi.md#policy_metadata_list) | **GET** /providers/Microsoft.PolicyInsights/policyMetadata | 


# **policy_metadata_get_resource**
> PolicyMetadata policy_metadata_get_resource(resource_name, api_version)



Get policy metadata resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_metadata import PolicyMetadata
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
    api_instance = openapi_client.DefaultApi(api_client)
    resource_name = 'resource_name_example' # str | The name of the policy metadata resource.
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.policy_metadata_get_resource(resource_name, api_version)
        print("The response of DefaultApi->policy_metadata_get_resource:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_metadata_get_resource: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_name** | **str**| The name of the policy metadata resource. | 
 **api_version** | **str**| Client Api Version. | 

### Return type

[**PolicyMetadata**](PolicyMetadata.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Policy metadata resource definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **policy_metadata_list**
> PolicyMetadataCollection policy_metadata_list(api_version, top=top)



Get a list of the policy metadata resources.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.policy_metadata_collection import PolicyMetadataCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    top = 56 # int | Maximum number of records to return. (optional)

    try:
        api_response = api_instance.policy_metadata_list(api_version, top=top)
        print("The response of DefaultApi->policy_metadata_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->policy_metadata_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **top** | **int**| Maximum number of records to return. | [optional] 

### Return type

[**PolicyMetadataCollection**](PolicyMetadataCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Policy metadata resource collection. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

