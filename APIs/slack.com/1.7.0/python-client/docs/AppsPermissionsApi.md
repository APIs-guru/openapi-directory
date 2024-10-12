# openapi_client.AppsPermissionsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apps_permissions_info**](AppsPermissionsApi.md#apps_permissions_info) | **GET** /apps.permissions.info | 
[**apps_permissions_request**](AppsPermissionsApi.md#apps_permissions_request) | **GET** /apps.permissions.request | 


# **apps_permissions_info**
> AppsPermissionsInfoSchema apps_permissions_info(token=token)



Returns list of permissions this app has on a team.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.apps_permissions_info_schema import AppsPermissionsInfoSchema
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
    api_instance = openapi_client.AppsPermissionsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none` (optional)

    try:
        api_response = api_instance.apps_permissions_info(token=token)
        print("The response of AppsPermissionsApi->apps_permissions_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsPermissionsApi->apps_permissions_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | [optional] 

### Return type

[**AppsPermissionsInfoSchema**](AppsPermissionsInfoSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standard success response when used with a user token |  -  |
**0** | Standard failure response when used with an invalid token |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **apps_permissions_request**
> AppsPermissionsRequestSchema apps_permissions_request(token, scopes, trigger_id)



Allows an app to request additional scopes

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.apps_permissions_request_schema import AppsPermissionsRequestSchema
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
    api_instance = openapi_client.AppsPermissionsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `none`
    scopes = 'scopes_example' # str | A comma separated list of scopes to request for
    trigger_id = 'trigger_id_example' # str | Token used to trigger the permissions API

    try:
        api_response = api_instance.apps_permissions_request(token, scopes, trigger_id)
        print("The response of AppsPermissionsApi->apps_permissions_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsPermissionsApi->apps_permissions_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;none&#x60; | 
 **scopes** | **str**| A comma separated list of scopes to request for | 
 **trigger_id** | **str**| Token used to trigger the permissions API | 

### Return type

[**AppsPermissionsRequestSchema**](AppsPermissionsRequestSchema.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Standard success response when used with a user token |  -  |
**0** | Standard failure response when trigger_id is invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

