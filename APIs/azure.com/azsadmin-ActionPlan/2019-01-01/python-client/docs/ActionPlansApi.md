# openapi_client.ActionPlansApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**action_plans_get**](ActionPlansApi.md#action_plans_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/actionPlans/{planId} | 
[**action_plans_list**](ActionPlansApi.md#action_plans_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Deployment.Admin/locations/global/actionPlans | 


# **action_plans_get**
> ActionPlanResourceEntity action_plans_get(subscription_id, plan_id, api_version)



Gets the specified action plan

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.action_plan_resource_entity import ActionPlanResourceEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionPlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    plan_id = 'plan_id_example' # str | Identifier of the action plan.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')

    try:
        api_response = api_instance.action_plans_get(subscription_id, plan_id, api_version)
        print("The response of ActionPlansApi->action_plans_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActionPlansApi->action_plans_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **plan_id** | **str**| Identifier of the action plan. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]

### Return type

[**ActionPlanResourceEntity**](ActionPlanResourceEntity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NOT FOUND |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **action_plans_list**
> ActionPlanList action_plans_list(subscription_id, api_version)



Gets the list of action plans

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.action_plan_list import ActionPlanList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ActionPlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = '2019-01-01' # str | Client API Version. (default to '2019-01-01')

    try:
        api_response = api_instance.action_plans_list(subscription_id, api_version)
        print("The response of ActionPlansApi->action_plans_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ActionPlansApi->action_plans_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Client API Version. | [default to &#39;2019-01-01&#39;]

### Return type

[**ActionPlanList**](ActionPlanList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

