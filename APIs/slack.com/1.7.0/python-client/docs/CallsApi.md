# openapi_client.CallsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**calls_add**](CallsApi.md#calls_add) | **POST** /calls.add | 
[**calls_end**](CallsApi.md#calls_end) | **POST** /calls.end | 
[**calls_info**](CallsApi.md#calls_info) | **GET** /calls.info | 
[**calls_participants_add_0**](CallsApi.md#calls_participants_add_0) | **POST** /calls.participants.add | 
[**calls_participants_remove_0**](CallsApi.md#calls_participants_remove_0) | **POST** /calls.participants.remove | 
[**calls_update**](CallsApi.md#calls_update) | **POST** /calls.update | 


# **calls_add**
> DefaultSuccessTemplate calls_add(token, external_unique_id, join_url, created_by=created_by, date_start=date_start, desktop_app_join_url=desktop_app_join_url, external_display_id=external_display_id, title=title, users=users)



Registers a new Call.

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
    api_instance = openapi_client.CallsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `calls:write`
    external_unique_id = 'external_unique_id_example' # str | An ID supplied by the 3rd-party Call provider. It must be unique across all Calls from that service.
    join_url = 'join_url_example' # str | The URL required for a client to join the Call.
    created_by = 'created_by_example' # str | The valid Slack user ID of the user who created this Call. When this method is called with a user token, the `created_by` field is optional and defaults to the authed user of the token. Otherwise, the field is required. (optional)
    date_start = 56 # int | Call start time in UTC UNIX timestamp format (optional)
    desktop_app_join_url = 'desktop_app_join_url_example' # str | When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL. (optional)
    external_display_id = 'external_display_id_example' # str | An optional, human-readable ID supplied by the 3rd-party Call provider. If supplied, this ID will be displayed in the Call object. (optional)
    title = 'title_example' # str | The name of the Call. (optional)
    users = 'users_example' # str | The list of users to register as participants in the Call. [Read more on how to specify users here](/apis/calls#users). (optional)

    try:
        api_response = api_instance.calls_add(token, external_unique_id, join_url, created_by=created_by, date_start=date_start, desktop_app_join_url=desktop_app_join_url, external_display_id=external_display_id, title=title, users=users)
        print("The response of CallsApi->calls_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallsApi->calls_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;calls:write&#x60; | 
 **external_unique_id** | **str**| An ID supplied by the 3rd-party Call provider. It must be unique across all Calls from that service. | 
 **join_url** | **str**| The URL required for a client to join the Call. | 
 **created_by** | **str**| The valid Slack user ID of the user who created this Call. When this method is called with a user token, the &#x60;created_by&#x60; field is optional and defaults to the authed user of the token. Otherwise, the field is required. | [optional] 
 **date_start** | **int**| Call start time in UTC UNIX timestamp format | [optional] 
 **desktop_app_join_url** | **str**| When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL. | [optional] 
 **external_display_id** | **str**| An optional, human-readable ID supplied by the 3rd-party Call provider. If supplied, this ID will be displayed in the Call object. | [optional] 
 **title** | **str**| The name of the Call. | [optional] 
 **users** | **str**| The list of users to register as participants in the Call. [Read more on how to specify users here](/apis/calls#users). | [optional] 

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

# **calls_end**
> DefaultSuccessTemplate calls_end(token, id, duration=duration)



Ends a Call.

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
    api_instance = openapi_client.CallsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `calls:write`
    id = 'id_example' # str | `id` returned when registering the call using the [`calls.add`](/methods/calls.add) method.
    duration = 56 # int | Call duration in seconds (optional)

    try:
        api_response = api_instance.calls_end(token, id, duration=duration)
        print("The response of CallsApi->calls_end:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallsApi->calls_end: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;calls:write&#x60; | 
 **id** | **str**| &#x60;id&#x60; returned when registering the call using the [&#x60;calls.add&#x60;](/methods/calls.add) method. | 
 **duration** | **int**| Call duration in seconds | [optional] 

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

# **calls_info**
> DefaultSuccessTemplate calls_info(token, id)



Returns information about a Call.

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
    api_instance = openapi_client.CallsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `calls:read`
    id = 'id_example' # str | `id` of the Call returned by the [`calls.add`](/methods/calls.add) method.

    try:
        api_response = api_instance.calls_info(token, id)
        print("The response of CallsApi->calls_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallsApi->calls_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;calls:read&#x60; | 
 **id** | **str**| &#x60;id&#x60; of the Call returned by the [&#x60;calls.add&#x60;](/methods/calls.add) method. | 

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

# **calls_participants_add_0**
> DefaultSuccessTemplate calls_participants_add_0(token, id, users)



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
    api_instance = openapi_client.CallsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `calls:write`
    id = 'id_example' # str | `id` returned by the [`calls.add`](/methods/calls.add) method.
    users = 'users_example' # str | The list of users to add as participants in the Call. [Read more on how to specify users here](/apis/calls#users).

    try:
        api_response = api_instance.calls_participants_add_0(token, id, users)
        print("The response of CallsApi->calls_participants_add_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallsApi->calls_participants_add_0: %s\n" % e)
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

# **calls_participants_remove_0**
> DefaultSuccessTemplate calls_participants_remove_0(token, id, users)



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
    api_instance = openapi_client.CallsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `calls:write`
    id = 'id_example' # str | `id` returned by the [`calls.add`](/methods/calls.add) method.
    users = 'users_example' # str | The list of users to remove as participants in the Call. [Read more on how to specify users here](/apis/calls#users).

    try:
        api_response = api_instance.calls_participants_remove_0(token, id, users)
        print("The response of CallsApi->calls_participants_remove_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallsApi->calls_participants_remove_0: %s\n" % e)
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

# **calls_update**
> DefaultSuccessTemplate calls_update(token, id, desktop_app_join_url=desktop_app_join_url, join_url=join_url, title=title)



Updates information about a Call.

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
    api_instance = openapi_client.CallsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `calls:write`
    id = 'id_example' # str | `id` returned by the [`calls.add`](/methods/calls.add) method.
    desktop_app_join_url = 'desktop_app_join_url_example' # str | When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL. (optional)
    join_url = 'join_url_example' # str | The URL required for a client to join the Call. (optional)
    title = 'title_example' # str | The name of the Call. (optional)

    try:
        api_response = api_instance.calls_update(token, id, desktop_app_join_url=desktop_app_join_url, join_url=join_url, title=title)
        print("The response of CallsApi->calls_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CallsApi->calls_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;calls:write&#x60; | 
 **id** | **str**| &#x60;id&#x60; returned by the [&#x60;calls.add&#x60;](/methods/calls.add) method. | 
 **desktop_app_join_url** | **str**| When supplied, available Slack clients will attempt to directly launch the 3rd-party Call with this URL. | [optional] 
 **join_url** | **str**| The URL required for a client to join the Call. | [optional] 
 **title** | **str**| The name of the Call. | [optional] 

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

