# openapi_client.CallsParticipantsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calls_participants_add**](CallsParticipantsApi.md#calls_participants_add) | **POST** /calls.participants.add | 
[**calls_participants_remove**](CallsParticipantsApi.md#calls_participants_remove) | **POST** /calls.participants.remove | 


# **calls_participants_add**
> DefaultSuccessTemplate calls_participants_add(token, id, users)



Registers new participants added to a Call.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
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
    api_instance = openapi_client.CallsParticipantsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `calls:write`
    id = 'id_example' # str | `id` returned by the [`calls.add`](/methods/calls.add) method.
    users = 'users_example' # str | The list of users to add as participants in the Call. [Read more on how to specify users here](/apis/calls#users).

    try:
        api_response = api_instance.calls_participants_add(token, id, users)
        print("The response of CallsParticipantsApi->calls_participants_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallsParticipantsApi->calls_participants_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;calls:write&#x60; | 
 **id** | **str**| &#x60;id&#x60; returned by the [&#x60;calls.add&#x60;](/methods/calls.add) method. | 
 **users** | **str**| The list of users to add as participants in the Call. [Read more on how to specify users here](/apis/calls#users). | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **calls_participants_remove**
> DefaultSuccessTemplate calls_participants_remove(token, id, users)



Registers participants removed from a Call.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
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
    api_instance = openapi_client.CallsParticipantsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `calls:write`
    id = 'id_example' # str | `id` returned by the [`calls.add`](/methods/calls.add) method.
    users = 'users_example' # str | The list of users to remove as participants in the Call. [Read more on how to specify users here](/apis/calls#users).

    try:
        api_response = api_instance.calls_participants_remove(token, id, users)
        print("The response of CallsParticipantsApi->calls_participants_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallsParticipantsApi->calls_participants_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;calls:write&#x60; | 
 **id** | **str**| &#x60;id&#x60; returned by the [&#x60;calls.add&#x60;](/methods/calls.add) method. | 
 **users** | **str**| The list of users to remove as participants in the Call. [Read more on how to specify users here](/apis/calls#users). | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

