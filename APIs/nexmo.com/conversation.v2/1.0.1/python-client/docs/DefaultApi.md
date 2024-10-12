# openapi_client.DefaultApi

All URIs are relative to *https://api.nexmo.com/v0.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_users**](DefaultApi.md#get_users) | **GET** /users | List Users


# **get_users**
> GetUsers200Response get_users(page_size=page_size, order=order, cursor=cursor)

List Users

### Example


```python
import openapi_client
from openapi_client.models.get_users200_response import GetUsers200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.nexmo.com/v0.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.nexmo.com/v0.2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    page_size = 10 # int | The number of results returned per page.   The default value is `10`. The maximum value is `100`. (optional) (default to 10)
    order = asc # str | Show the most (`desc`) / least (`asc`) recently created entries first (optional) (default to asc)
    cursor = 'cursor_example' # str | The cursor to start returning results from.  You are not expected to provide this manually, but to follow the url provided in `_links.next.href` in the response which contains a `cursor` value  (optional)

    try:
        # List Users
        api_response = api_instance.get_users(page_size=page_size, order=order, cursor=cursor)
        print("The response of DefaultApi->get_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->get_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_size** | **int**| The number of results returned per page.   The default value is &#x60;10&#x60;. The maximum value is &#x60;100&#x60;. | [optional] [default to 10]
 **order** | **str**| Show the most (&#x60;desc&#x60;) / least (&#x60;asc&#x60;) recently created entries first | [optional] [default to asc]
 **cursor** | **str**| The cursor to start returning results from.  You are not expected to provide this manually, but to follow the url provided in &#x60;_links.next.href&#x60; in the response which contains a &#x60;cursor&#x60; value  | [optional] 

### Return type

[**GetUsers200Response**](GetUsers200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

