# openapi_client.TeamProfileApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**team_profile_get**](TeamProfileApi.md#team_profile_get) | **GET** /team.profile.get | 


# **team_profile_get**
> TeamProfileGetSuccessSchema team_profile_get(token, visibility=visibility)



Retrieve a team's profile.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.team_profile_get_success_schema import TeamProfileGetSuccessSchema
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
    api_instance = openapi_client.TeamProfileApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `users.profile:read`
    visibility = 'visibility_example' # str | Filter by visibility. (optional)

    try:
        api_response = api_instance.team_profile_get(token, visibility=visibility)
        print("The response of TeamProfileApi->team_profile_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TeamProfileApi->team_profile_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;users.profile:read&#x60; | 
 **visibility** | **str**| Filter by visibility. | [optional] 

### Return type

[**TeamProfileGetSuccessSchema**](TeamProfileGetSuccessSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

