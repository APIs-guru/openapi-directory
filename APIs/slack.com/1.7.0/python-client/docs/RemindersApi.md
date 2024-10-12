# openapi_client.RemindersApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reminders_add**](RemindersApi.md#reminders_add) | **POST** /reminders.add | 
[**reminders_complete**](RemindersApi.md#reminders_complete) | **POST** /reminders.complete | 
[**reminders_delete**](RemindersApi.md#reminders_delete) | **POST** /reminders.delete | 
[**reminders_info**](RemindersApi.md#reminders_info) | **GET** /reminders.info | 
[**reminders_list**](RemindersApi.md#reminders_list) | **GET** /reminders.list | 


# **reminders_add**
> RemindersAddSchema reminders_add(token, text, time, user=user)



Creates a reminder.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.reminders_add_schema import RemindersAddSchema
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
    api_instance = openapi_client.RemindersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `reminders:write`
    text = 'text_example' # str | The content of the reminder
    time = 'time_example' # str | When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. \\\"in 15 minutes,\\\" or \\\"every Thursday\\\")
    user = 'user_example' # str | The user who will receive the reminder. If no user is specified, the reminder will go to user who created it. (optional)

    try:
        api_response = api_instance.reminders_add(token, text, time, user=user)
        print("The response of RemindersApi->reminders_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RemindersApi->reminders_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;reminders:write&#x60; | 
 **text** | **str**| The content of the reminder | 
 **time** | **str**| When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. \\\&quot;in 15 minutes,\\\&quot; or \\\&quot;every Thursday\\\&quot;) | 
 **user** | **str**| The user who will receive the reminder. If no user is specified, the reminder will go to user who created it. | [optional] 

### Return type

[**RemindersAddSchema**](RemindersAddSchema.md)

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

# **reminders_complete**
> RemindersCompleteSchema reminders_complete(token=token, reminder=reminder)



Marks a reminder as complete.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.reminders_complete_schema import RemindersCompleteSchema
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
    api_instance = openapi_client.RemindersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `reminders:write` (optional)
    reminder = 'reminder_example' # str | The ID of the reminder to be marked as complete (optional)

    try:
        api_response = api_instance.reminders_complete(token=token, reminder=reminder)
        print("The response of RemindersApi->reminders_complete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RemindersApi->reminders_complete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;reminders:write&#x60; | [optional] 
 **reminder** | **str**| The ID of the reminder to be marked as complete | [optional] 

### Return type

[**RemindersCompleteSchema**](RemindersCompleteSchema.md)

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

# **reminders_delete**
> RemindersDeleteSchema reminders_delete(token=token, reminder=reminder)



Deletes a reminder.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.reminders_delete_schema import RemindersDeleteSchema
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
    api_instance = openapi_client.RemindersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `reminders:write` (optional)
    reminder = 'reminder_example' # str | The ID of the reminder (optional)

    try:
        api_response = api_instance.reminders_delete(token=token, reminder=reminder)
        print("The response of RemindersApi->reminders_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RemindersApi->reminders_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;reminders:write&#x60; | [optional] 
 **reminder** | **str**| The ID of the reminder | [optional] 

### Return type

[**RemindersDeleteSchema**](RemindersDeleteSchema.md)

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

# **reminders_info**
> RemindersInfoSchema reminders_info(token=token, reminder=reminder)



Gets information about a reminder.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.reminders_info_schema import RemindersInfoSchema
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
    api_instance = openapi_client.RemindersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `reminders:read` (optional)
    reminder = 'reminder_example' # str | The ID of the reminder (optional)

    try:
        api_response = api_instance.reminders_info(token=token, reminder=reminder)
        print("The response of RemindersApi->reminders_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RemindersApi->reminders_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;reminders:read&#x60; | [optional] 
 **reminder** | **str**| The ID of the reminder | [optional] 

### Return type

[**RemindersInfoSchema**](RemindersInfoSchema.md)

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

# **reminders_list**
> RemindersListSchema reminders_list(token=token)



Lists all reminders created by or for a given user.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.reminders_list_schema import RemindersListSchema
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
    api_instance = openapi_client.RemindersApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `reminders:read` (optional)

    try:
        api_response = api_instance.reminders_list(token=token)
        print("The response of RemindersApi->reminders_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RemindersApi->reminders_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;reminders:read&#x60; | [optional] 

### Return type

[**RemindersListSchema**](RemindersListSchema.md)

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

