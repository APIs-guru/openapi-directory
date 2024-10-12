# openapi_client.FilesCommentsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**files_comments_delete**](FilesCommentsApi.md#files_comments_delete) | **POST** /files.comments.delete | 


# **files_comments_delete**
> FilesCommentsDeleteSchema files_comments_delete(token=token, file=file, id=id)



Deletes an existing comment on a file.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.files_comments_delete_schema import FilesCommentsDeleteSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FilesCommentsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `files:write:user` (optional)
    file = 'file_example' # str | File to delete a comment from. (optional)
    id = 'id_example' # str | The comment to delete. (optional)

    try:
        api_response = api_instance.files_comments_delete(token=token, file=file, id=id)
        print("The response of FilesCommentsApi->files_comments_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FilesCommentsApi->files_comments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;files:write:user&#x60; | [optional] 
 **file** | **str**| File to delete a comment from. | [optional] 
 **id** | **str**| The comment to delete. | [optional] 

### Return type

[**FilesCommentsDeleteSchema**](FilesCommentsDeleteSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standard success response is very simple |  -  |
**0** | Standard failure response when used with an invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

