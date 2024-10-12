# openapi_client.ProfileApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**profiles_create**](ProfileApi.md#profiles_create) | **POST** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/images/{imageId}/profiles | Create a Profile.
[**profiles_list_query**](ProfileApi.md#profiles_list_query) | **GET** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/images/{imageId}/profiles | Get a list of Image Profiles.
[**profiles_query_by_id**](ProfileApi.md#profiles_query_by_id) | **GET** /modelmanagement/v1.0/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.MachineLearningServices/workspaces/{workspace}/images/{imageId}/profiles/{id} | Get a Profile.


# **profiles_create**
> profiles_create(subscription_id, resource_group, workspace, image_id, input_request)

Create a Profile.

Create a Profile for an Image.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.profile_request_base import ProfileRequestBase
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProfileApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    image_id = 'image_id_example' # str | The Image Id.
    input_request = openapi_client.ProfileRequestBase() # ProfileRequestBase | The payload that is used to create the Profile.

    try:
        # Create a Profile.
        api_instance.profiles_create(subscription_id, resource_group, workspace, image_id, input_request)
    except Exception as e:
        print("Exception when calling ProfileApi->profiles_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **image_id** | **str**| The Image Id. | 
 **input_request** | [**ProfileRequestBase**](ProfileRequestBase.md)| The payload that is used to create the Profile. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The request was accepted. The header &#39;Operation-Location&#39; contains the async operation location URL. Accessing this URL with a GET call will return the status of the background task. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_list_query**
> PaginatedProfileResponseList profiles_list_query(subscription_id, resource_group, workspace, image_id, name=name, description=description, tags=tags, properties=properties, count=count, skip_token=skip_token, order_by=order_by)

Get a list of Image Profiles.

If no filter is passed, the query lists all Profiles for the Image. The returned list is paginated and the count of items in each page is an optional parameter.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.paginated_profile_response_list import PaginatedProfileResponseList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProfileApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    image_id = 'image_id_example' # str | The Image Id.
    name = 'name_example' # str | The Profile name. (optional)
    description = 'description_example' # str | The Profile description. (optional)
    tags = 'tags_example' # str | A set of tags with which to filter the returned models.              It is a comma separated string of tags key or tags key=value              Example: tagKey1,tagKey2,tagKey3=value3 (optional)
    properties = 'properties_example' # str | A set of properties with which to filter the returned models.              It is a comma separated string of properties key and/or properties key=value              Example: propKey1,propKey2,propKey3=value3 (optional)
    count = 56 # int | The number of items to retrieve in a page. (optional)
    skip_token = 'skip_token_example' # str | The continuation token to retrieve the next page. (optional)
    order_by = CreatedAtDesc # str | The option to order the response. (optional) (default to CreatedAtDesc)

    try:
        # Get a list of Image Profiles.
        api_response = api_instance.profiles_list_query(subscription_id, resource_group, workspace, image_id, name=name, description=description, tags=tags, properties=properties, count=count, skip_token=skip_token, order_by=order_by)
        print("The response of ProfileApi->profiles_list_query:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->profiles_list_query: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **image_id** | **str**| The Image Id. | 
 **name** | **str**| The Profile name. | [optional] 
 **description** | **str**| The Profile description. | [optional] 
 **tags** | **str**| A set of tags with which to filter the returned models.              It is a comma separated string of tags key or tags key&#x3D;value              Example: tagKey1,tagKey2,tagKey3&#x3D;value3 | [optional] 
 **properties** | **str**| A set of properties with which to filter the returned models.              It is a comma separated string of properties key and/or properties key&#x3D;value              Example: propKey1,propKey2,propKey3&#x3D;value3 | [optional] 
 **count** | **int**| The number of items to retrieve in a page. | [optional] 
 **skip_token** | **str**| The continuation token to retrieve the next page. | [optional] 
 **order_by** | **str**| The option to order the response. | [optional] [default to CreatedAtDesc]

### Return type

[**PaginatedProfileResponseList**](PaginatedProfileResponseList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **profiles_query_by_id**
> ProfileResponse profiles_query_by_id(subscription_id, resource_group, workspace, image_id, id)

Get a Profile.

Get the Profile for an Image.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.profile_response import ProfileResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProfileApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure Subscription ID.
    resource_group = 'resource_group_example' # str | The Name of the resource group in which the workspace is located.
    workspace = 'workspace_example' # str | The name of the workspace.
    image_id = 'image_id_example' # str | The Image Id.
    id = 'id_example' # str | The Profile Id.

    try:
        # Get a Profile.
        api_response = api_instance.profiles_query_by_id(subscription_id, resource_group, workspace, image_id, id)
        print("The response of ProfileApi->profiles_query_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProfileApi->profiles_query_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure Subscription ID. | 
 **resource_group** | **str**| The Name of the resource group in which the workspace is located. | 
 **workspace** | **str**| The name of the workspace. | 
 **image_id** | **str**| The Image Id. | 
 **id** | **str**| The Profile Id. | 

### Return type

[**ProfileResponse**](ProfileResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

