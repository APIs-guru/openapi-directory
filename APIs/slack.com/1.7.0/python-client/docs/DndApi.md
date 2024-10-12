# openapi_client.DndApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dnd_end_dnd**](DndApi.md#dnd_end_dnd) | **POST** /dnd.endDnd | 
[**dnd_end_snooze**](DndApi.md#dnd_end_snooze) | **POST** /dnd.endSnooze | 
[**dnd_info**](DndApi.md#dnd_info) | **GET** /dnd.info | 
[**dnd_set_snooze**](DndApi.md#dnd_set_snooze) | **POST** /dnd.setSnooze | 
[**dnd_team_info**](DndApi.md#dnd_team_info) | **GET** /dnd.teamInfo | 


# **dnd_end_dnd**
> DndEndDndSchema dnd_end_dnd(token)



Ends the current user's Do Not Disturb session immediately.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.dnd_end_dnd_schema import DndEndDndSchema
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
    api_instance = openapi_client.DndApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `dnd:write`

    try:
        api_response = api_instance.dnd_end_dnd(token)
        print("The response of DndApi->dnd_end_dnd:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DndApi->dnd_end_dnd: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;dnd:write&#x60; | 

### Return type

[**DndEndDndSchema**](DndEndDndSchema.md)

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

# **dnd_end_snooze**
> DndEndSnoozeSchema dnd_end_snooze(token)



Ends the current user's snooze mode immediately.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.dnd_end_snooze_schema import DndEndSnoozeSchema
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
    api_instance = openapi_client.DndApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `dnd:write`

    try:
        api_response = api_instance.dnd_end_snooze(token)
        print("The response of DndApi->dnd_end_snooze:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DndApi->dnd_end_snooze: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;dnd:write&#x60; | 

### Return type

[**DndEndSnoozeSchema**](DndEndSnoozeSchema.md)

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

# **dnd_info**
> DndInfoSchema dnd_info(token=token, user=user)



Retrieves a user's current Do Not Disturb status.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.dnd_info_schema import DndInfoSchema
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
    api_instance = openapi_client.DndApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `dnd:read` (optional)
    user = 'user_example' # str | User to fetch status for (defaults to current user) (optional)

    try:
        api_response = api_instance.dnd_info(token=token, user=user)
        print("The response of DndApi->dnd_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DndApi->dnd_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;dnd:read&#x60; | [optional] 
 **user** | **str**| User to fetch status for (defaults to current user) | [optional] 

### Return type

[**DndInfoSchema**](DndInfoSchema.md)

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

# **dnd_set_snooze**
> DndSetSnoozeSchema dnd_set_snooze(num_minutes, token)



Turns on Do Not Disturb mode for the current user, or changes its duration.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.dnd_set_snooze_schema import DndSetSnoozeSchema
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
    api_instance = openapi_client.DndApi(api_client)
    num_minutes = 'num_minutes_example' # str | Number of minutes, from now, to snooze until.
    token = 'token_example' # str | Authentication token. Requires scope: `dnd:write`

    try:
        api_response = api_instance.dnd_set_snooze(num_minutes, token)
        print("The response of DndApi->dnd_set_snooze:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DndApi->dnd_set_snooze: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **num_minutes** | **str**| Number of minutes, from now, to snooze until. | 
 **token** | **str**| Authentication token. Requires scope: &#x60;dnd:write&#x60; | 

### Return type

[**DndSetSnoozeSchema**](DndSetSnoozeSchema.md)

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

# **dnd_team_info**
> DefaultSuccessTemplate dnd_team_info(token=token, users=users)



Retrieves the Do Not Disturb status for up to 50 users on a team.

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
    api_instance = openapi_client.DndApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `dnd:read` (optional)
    users = 'users_example' # str | Comma-separated list of users to fetch Do Not Disturb status for (optional)

    try:
        api_response = api_instance.dnd_team_info(token=token, users=users)
        print("The response of DndApi->dnd_team_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DndApi->dnd_team_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;dnd:read&#x60; | [optional] 
 **users** | **str**| Comma-separated list of users to fetch Do Not Disturb status for | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

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

