# openapi_client.EscalationPoliciesApi

All URIs are relative to *https://api.victorops.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_public_v1_policies_get**](EscalationPoliciesApi.md#api_public_v1_policies_get) | **GET** /api-public/v1/policies | Get escalation policy info
[**api_public_v1_team_team_policies_get**](EscalationPoliciesApi.md#api_public_v1_team_team_policies_get) | **GET** /api-public/v1/team/{team}/policies | Retrieve a list of escalation policies for a team


# **api_public_v1_policies_get**
> EscalationPolicyInfoList api_public_v1_policies_get(x_vo_api_id, x_vo_api_key)

Get escalation policy info

Retrieves a list of escalation policy information. This API may be called a maximum of once a minute.

### Example


```python
import openapi_client
from openapi_client.models.escalation_policy_info_list import EscalationPolicyInfoList
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
    api_instance = openapi_client.EscalationPoliciesApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # Get escalation policy info
        api_response = api_instance.api_public_v1_policies_get(x_vo_api_id, x_vo_api_key)
        print("The response of EscalationPoliciesApi->api_public_v1_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EscalationPoliciesApi->api_public_v1_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**EscalationPolicyInfoList**](EscalationPolicyInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of escalation policies |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Path not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_team_team_policies_get**
> EscalationPolicyList api_public_v1_team_team_policies_get(x_vo_api_id, x_vo_api_key, team)

Retrieve a list of escalation policies for a team

Get the escalation policies for the specified team.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.escalation_policy_list import EscalationPolicyList
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
    api_instance = openapi_client.EscalationPoliciesApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    team = 'team_example' # str | The VictorOps team to fetch

    try:
        # Retrieve a list of escalation policies for a team
        api_response = api_instance.api_public_v1_team_team_policies_get(x_vo_api_id, x_vo_api_key, team)
        print("The response of EscalationPoliciesApi->api_public_v1_team_team_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EscalationPoliciesApi->api_public_v1_team_team_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **team** | **str**| The VictorOps team to fetch | 

### Return type

[**EscalationPolicyList**](EscalationPolicyList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The escalation policy list. This does not include details about the actual notification steps of the policy. |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | Team not found |  -  |
**422** | Team name or email is unavailable, or you have reached your team limit.  |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

