# openapi_client.UserApi

All URIs are relative to *https://api.botify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_user_projects**](UserApi.md#get_user_projects) | **GET** /projects/{username} | List all active projects for the user


# **get_user_projects**
> GetUserProjects200Response get_user_projects(username, page=page, size=size)

List all active projects for the user

List all active projects for the user

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.get_user_projects200_response import GetUserProjects200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserApi(api_client)
    username = 'username_example' # str | User's identifier
    page = 56 # int | Page Number (optional)
    size = 56 # int | Page Size (optional)

    try:
        # List all active projects for the user
        api_response = api_instance.get_user_projects(username, page=page, size=size)
        print("The response of UserApi->get_user_projects:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserApi->get_user_projects: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **page** | **int**| Page Number | [optional] 
 **size** | **int**| Page Size | [optional] 

### Return type

[**GetUserProjects200Response**](GetUserProjects200Response.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

