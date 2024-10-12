# openapi_client.OnCallApi

All URIs are relative to *https://api.victorops.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_public_v1_oncall_current_get**](OnCallApi.md#api_public_v1_oncall_current_get) | **GET** /api-public/v1/oncall/current | Get an organization&#39;s on-call users
[**api_public_v1_policies_policy_oncall_user_patch**](OnCallApi.md#api_public_v1_policies_policy_oncall_user_patch) | **PATCH** /api-public/v1/policies/{policy}/oncall/user | Create an on-call override (take on-call)
[**api_public_v1_team_team_oncall_schedule_get**](OnCallApi.md#api_public_v1_team_team_oncall_schedule_get) | **GET** /api-public/v1/team/{team}/oncall/schedule | Get a team&#39;s on-call schedule
[**api_public_v1_team_team_oncall_user_patch**](OnCallApi.md#api_public_v1_team_team_oncall_user_patch) | **PATCH** /api-public/v1/team/{team}/oncall/user | Create an on-call override (take on-call)
[**api_public_v1_user_user_oncall_schedule_get**](OnCallApi.md#api_public_v1_user_user_oncall_schedule_get) | **GET** /api-public/v1/user/{user}/oncall/schedule | Get a user&#39;s on-call schedule
[**api_public_v2_team_team_oncall_schedule_get**](OnCallApi.md#api_public_v2_team_team_oncall_schedule_get) | **GET** /api-public/v2/team/{team}/oncall/schedule | Get a team&#39;s on-call schedule
[**api_public_v2_user_user_oncall_schedule_get**](OnCallApi.md#api_public_v2_user_user_oncall_schedule_get) | **GET** /api-public/v2/user/{user}/oncall/schedule | Get a user&#39;s on-call schedule


# **api_public_v1_oncall_current_get**
> ApiPublicV1OncallCurrentGet200Response api_public_v1_oncall_current_get(x_vo_api_id, x_vo_api_key)

Get an organization's on-call users

Get all on-call users/teams for your organization.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.api_public_v1_oncall_current_get200_response import ApiPublicV1OncallCurrentGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OnCallApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # Get an organization's on-call users
        api_response = api_instance.api_public_v1_oncall_current_get(x_vo_api_id, x_vo_api_key)
        print("The response of OnCallApi->api_public_v1_oncall_current_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OnCallApi->api_public_v1_oncall_current_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**ApiPublicV1OncallCurrentGet200Response**](ApiPublicV1OncallCurrentGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All users and escalation policies currently on call |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_policies_policy_oncall_user_patch**
> TakeResult api_public_v1_policies_policy_oncall_user_patch(x_vo_api_id, x_vo_api_key, policy, body)

Create an on-call override (take on-call)

Replaces a currently on-call user in the escalation policy with another.  In many cases, the policy slug will match the slug of the team that contains it.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.take_request import TakeRequest
from openapi_client.models.take_result import TakeResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OnCallApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    policy = 'policy_example' # str | The VictorOps policy 'slug'
    body = openapi_client.TakeRequest() # TakeRequest | The take on-call payload

    try:
        # Create an on-call override (take on-call)
        api_response = api_instance.api_public_v1_policies_policy_oncall_user_patch(x_vo_api_id, x_vo_api_key, policy, body)
        print("The response of OnCallApi->api_public_v1_policies_policy_oncall_user_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OnCallApi->api_public_v1_policies_policy_oncall_user_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **policy** | **str**| The VictorOps policy &#39;slug&#39; | 
 **body** | [**TakeRequest**](TakeRequest.md)| The take on-call payload | 

### Return type

[**TakeResult**](TakeResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the take request |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team or user(s) not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_team_team_oncall_schedule_get**
> OnCallAndOverrides api_public_v1_team_team_oncall_schedule_get(x_vo_api_id, x_vo_api_key, team, days_forward=days_forward, days_skip=days_skip, step=step)

Get a team's on-call schedule

__NOTE: This call is deprecated. Please use `GET /api-public/v2/team/{team}/oncall/schedule`.__  Get the on-call schedule for a team, including on-call overrides.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.on_call_and_overrides import OnCallAndOverrides
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OnCallApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    team = 'team_example' # str | The VictorOps team 'slug'
    days_forward = 14.0 # float | Days to include in returned schedule (30 max) (optional) (default to 14.0)
    days_skip = 0.0 # float | Days to skip before computing schedule to return (90 max) (optional) (default to 0.0)
    step = 0.0 # float | Step of escalation policy (3 max) (optional) (default to 0.0)

    try:
        # Get a team's on-call schedule
        api_response = api_instance.api_public_v1_team_team_oncall_schedule_get(x_vo_api_id, x_vo_api_key, team, days_forward=days_forward, days_skip=days_skip, step=step)
        print("The response of OnCallApi->api_public_v1_team_team_oncall_schedule_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OnCallApi->api_public_v1_team_team_oncall_schedule_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **team** | **str**| The VictorOps team &#39;slug&#39; | 
 **days_forward** | **float**| Days to include in returned schedule (30 max) | [optional] [default to 14.0]
 **days_skip** | **float**| Days to skip before computing schedule to return (90 max) | [optional] [default to 0.0]
 **step** | **float**| Step of escalation policy (3 max) | [optional] [default to 0.0]

### Return type

[**OnCallAndOverrides**](OnCallAndOverrides.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The on-call schedule for the team |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_team_team_oncall_user_patch**
> TakeResult api_public_v1_team_team_oncall_user_patch(x_vo_api_id, x_vo_api_key, team, body)

Create an on-call override (take on-call)

__NOTE: This API call is deprecated. Please use `PATCH /api-public/v2/policies/{policy}/oncall/user`__  Replaces a currently on-call user on the team with another.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.take_request import TakeRequest
from openapi_client.models.take_result import TakeResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OnCallApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    team = 'team_example' # str | The VictorOps team 'slug'
    body = openapi_client.TakeRequest() # TakeRequest | The take on-call payload

    try:
        # Create an on-call override (take on-call)
        api_response = api_instance.api_public_v1_team_team_oncall_user_patch(x_vo_api_id, x_vo_api_key, team, body)
        print("The response of OnCallApi->api_public_v1_team_team_oncall_user_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OnCallApi->api_public_v1_team_team_oncall_user_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **team** | **str**| The VictorOps team &#39;slug&#39; | 
 **body** | [**TakeRequest**](TakeRequest.md)| The take on-call payload | 

### Return type

[**TakeResult**](TakeResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The result of the take request |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team or user(s) not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_user_user_oncall_schedule_get**
> List[OnCallAndOverrides] api_public_v1_user_user_oncall_schedule_get(x_vo_api_id, x_vo_api_key, user, days_forward=days_forward, days_skip=days_skip, step=step)

Get a user's on-call schedule

__NOTE: This call is deprecated. Please use `GET /api-public/v2/user/{user}/oncall/schedule`.__  Get the on-call schedule for a user for all teams, including on-call overrides.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.on_call_and_overrides import OnCallAndOverrides
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OnCallApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID
    days_forward = 14.0 # float | Days to include in returned schedule (30 max) (optional) (default to 14.0)
    days_skip = 0.0 # float | Days to skip before computing schedule to return (90 max) (optional) (default to 0.0)
    step = 0.0 # float | Step of escalation policy (3 max) (optional) (default to 0.0)

    try:
        # Get a user's on-call schedule
        api_response = api_instance.api_public_v1_user_user_oncall_schedule_get(x_vo_api_id, x_vo_api_key, user, days_forward=days_forward, days_skip=days_skip, step=step)
        print("The response of OnCallApi->api_public_v1_user_user_oncall_schedule_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OnCallApi->api_public_v1_user_user_oncall_schedule_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 
 **days_forward** | **float**| Days to include in returned schedule (30 max) | [optional] [default to 14.0]
 **days_skip** | **float**| Days to skip before computing schedule to return (90 max) | [optional] [default to 0.0]
 **step** | **float**| Step of escalation policy (3 max) | [optional] [default to 0.0]

### Return type

[**List[OnCallAndOverrides]**](OnCallAndOverrides.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The on-call schedule for the user |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v2_team_team_oncall_schedule_get**
> TeamSchedule api_public_v2_team_team_oncall_schedule_get(x_vo_api_id, x_vo_api_key, team, days_forward=days_forward, days_skip=days_skip, step=step)

Get a team's on-call schedule

Get the on-call schedule for a team, including on-call overrides.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.team_schedule import TeamSchedule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OnCallApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    team = 'team_example' # str | The VictorOps team 'slug'
    days_forward = 14.0 # float | Days to include in returned schedule (30 max) (optional) (default to 14.0)
    days_skip = 0.0 # float | Days to skip before computing schedule to return (90 max) (optional) (default to 0.0)
    step = 0.0 # float | Step of escalation policy (3 max) (optional) (default to 0.0)

    try:
        # Get a team's on-call schedule
        api_response = api_instance.api_public_v2_team_team_oncall_schedule_get(x_vo_api_id, x_vo_api_key, team, days_forward=days_forward, days_skip=days_skip, step=step)
        print("The response of OnCallApi->api_public_v2_team_team_oncall_schedule_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OnCallApi->api_public_v2_team_team_oncall_schedule_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **team** | **str**| The VictorOps team &#39;slug&#39; | 
 **days_forward** | **float**| Days to include in returned schedule (30 max) | [optional] [default to 14.0]
 **days_skip** | **float**| Days to skip before computing schedule to return (90 max) | [optional] [default to 0.0]
 **step** | **float**| Step of escalation policy (3 max) | [optional] [default to 0.0]

### Return type

[**TeamSchedule**](TeamSchedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The on-call schedule for the team |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v2_user_user_oncall_schedule_get**
> UserSchedule api_public_v2_user_user_oncall_schedule_get(x_vo_api_id, x_vo_api_key, user, days_forward=days_forward, days_skip=days_skip, step=step)

Get a user's on-call schedule

Get the on-call schedule for a user for all teams the user is on, including on-call overrides.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.user_schedule import UserSchedule
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OnCallApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    user = 'user_example' # str | The VictorOps user ID
    days_forward = 14.0 # float | Days to include in returned schedule (30 max) (optional) (default to 14.0)
    days_skip = 0.0 # float | Days to skip before computing schedule to return (90 max) (optional) (default to 0.0)
    step = 0.0 # float | Step of escalation policy (3 max) (optional) (default to 0.0)

    try:
        # Get a user's on-call schedule
        api_response = api_instance.api_public_v2_user_user_oncall_schedule_get(x_vo_api_id, x_vo_api_key, user, days_forward=days_forward, days_skip=days_skip, step=step)
        print("The response of OnCallApi->api_public_v2_user_user_oncall_schedule_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OnCallApi->api_public_v2_user_user_oncall_schedule_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **user** | **str**| The VictorOps user ID | 
 **days_forward** | **float**| Days to include in returned schedule (30 max) | [optional] [default to 14.0]
 **days_skip** | **float**| Days to skip before computing schedule to return (90 max) | [optional] [default to 0.0]
 **step** | **float**| Step of escalation policy (3 max) | [optional] [default to 0.0]

### Return type

[**UserSchedule**](UserSchedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The on-call schedule for the user |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

