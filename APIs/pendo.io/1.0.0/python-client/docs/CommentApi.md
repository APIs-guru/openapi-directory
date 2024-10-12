# openapi_client.CommentApi

All URIs are relative to *https://api.feedback.eu.pendo.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comments_get**](CommentApi.md#comments_get) | **GET** /comments | fetch Comment records


# **comments_get**
> List[Comment] comments_get(case_id)

fetch Comment records

get a list of Comment records

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.comment import Comment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CommentApi(api_client)
    case_id = 56 # int | case_id

    try:
        # fetch Comment records
        api_response = api_instance.comments_get(case_id)
        print("The response of CommentApi->comments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CommentApi->comments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **case_id** | **int**| case_id | 

### Return type

[**List[Comment]**](Comment.md)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Comment records |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

