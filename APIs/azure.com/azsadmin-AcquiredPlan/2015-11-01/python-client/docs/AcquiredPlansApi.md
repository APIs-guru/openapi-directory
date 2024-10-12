# openapi_client.AcquiredPlansApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**acquired_plans_create**](AcquiredPlansApi.md#acquired_plans_create) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/subscriptions/{targetSubscriptionId}/acquiredPlans/{planAcquisitionId} | 
[**acquired_plans_delete**](AcquiredPlansApi.md#acquired_plans_delete) | **DELETE** /subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/subscriptions/{targetSubscriptionId}/acquiredPlans/{planAcquisitionId} | 
[**acquired_plans_get**](AcquiredPlansApi.md#acquired_plans_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/subscriptions/{targetSubscriptionId}/acquiredPlans/{planAcquisitionId} | 
[**acquired_plans_list**](AcquiredPlansApi.md#acquired_plans_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Subscriptions.Admin/subscriptions/{targetSubscriptionId}/acquiredPlans | 


# **acquired_plans_create**
> PlanAcquisition acquired_plans_create(subscription_id, target_subscription_id, plan_acquisition_id, api_version, new_acquired_plan)



Creates an acquired plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.plan_acquisition import PlanAcquisition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AcquiredPlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    target_subscription_id = 'target_subscription_id_example' # str | The target subscription ID.
    plan_acquisition_id = 'plan_acquisition_id_example' # str | The plan acquisition Identifier
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')
    new_acquired_plan = openapi_client.PlanAcquisition() # PlanAcquisition | The new acquired plan.

    try:
        api_response = api_instance.acquired_plans_create(subscription_id, target_subscription_id, plan_acquisition_id, api_version, new_acquired_plan)
        print("The response of AcquiredPlansApi->acquired_plans_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcquiredPlansApi->acquired_plans_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **target_subscription_id** | **str**| The target subscription ID. | 
 **plan_acquisition_id** | **str**| The plan acquisition Identifier | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]
 **new_acquired_plan** | [**PlanAcquisition**](PlanAcquisition.md)| The new acquired plan. | 

### Return type

[**PlanAcquisition**](PlanAcquisition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **acquired_plans_delete**
> acquired_plans_delete(subscription_id, target_subscription_id, plan_acquisition_id, api_version)



Deletes an acquired plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AcquiredPlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    target_subscription_id = 'target_subscription_id_example' # str | The target subscription ID.
    plan_acquisition_id = 'plan_acquisition_id_example' # str | The plan acquisition Identifier
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_instance.acquired_plans_delete(subscription_id, target_subscription_id, plan_acquisition_id, api_version)
    except Exception as e:
        print("Exception when calling AcquiredPlansApi->acquired_plans_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **target_subscription_id** | **str**| The target subscription ID. | 
 **plan_acquisition_id** | **str**| The plan acquisition Identifier | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **acquired_plans_get**
> PlanAcquisition acquired_plans_get(subscription_id, target_subscription_id, plan_acquisition_id, api_version)



Gets the specified plan acquired by a subscription consuming the offer.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.plan_acquisition import PlanAcquisition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AcquiredPlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    target_subscription_id = 'target_subscription_id_example' # str | The target subscription ID.
    plan_acquisition_id = 'plan_acquisition_id_example' # str | The plan acquisition Identifier
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.acquired_plans_get(subscription_id, target_subscription_id, plan_acquisition_id, api_version)
        print("The response of AcquiredPlansApi->acquired_plans_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcquiredPlansApi->acquired_plans_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **target_subscription_id** | **str**| The target subscription ID. | 
 **plan_acquisition_id** | **str**| The plan acquisition Identifier | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**PlanAcquisition**](PlanAcquisition.md)

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

# **acquired_plans_list**
> PlanAcquisitionList acquired_plans_list(subscription_id, target_subscription_id, api_version)



Get a collection of all acquired plans that subscription has access to.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.plan_acquisition_list import PlanAcquisitionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AcquiredPlansApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call.
    target_subscription_id = 'target_subscription_id_example' # str | The target subscription ID.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.acquired_plans_list(subscription_id, target_subscription_id, api_version)
        print("The response of AcquiredPlansApi->acquired_plans_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AcquiredPlansApi->acquired_plans_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription.The subscription ID forms part of the URI for every service call. | 
 **target_subscription_id** | **str**| The target subscription ID. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**PlanAcquisitionList**](PlanAcquisitionList.md)

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

