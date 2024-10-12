# openapi_client.SubscriptionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptions_create_or_update**](SubscriptionsApi.md#subscriptions_create_or_update) | **PUT** /subscriptions/{subscriptionId} | 
[**subscriptions_delete**](SubscriptionsApi.md#subscriptions_delete) | **DELETE** /subscriptions/{subscriptionId} | 
[**subscriptions_get**](SubscriptionsApi.md#subscriptions_get) | **GET** /subscriptions/{subscriptionId} | 
[**subscriptions_list**](SubscriptionsApi.md#subscriptions_list) | **GET** /subscriptions | 


# **subscriptions_create_or_update**
> Subscription subscriptions_create_or_update(subscription_id, api_version, new_subscription)



Create or updates a subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription import Subscription
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Id of the subscription.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')
    new_subscription = openapi_client.Subscription() # Subscription | Subscription parameter.

    try:
        api_response = api_instance.subscriptions_create_or_update(subscription_id, api_version, new_subscription)
        print("The response of SubscriptionsApi->subscriptions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Id of the subscription. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]
 **new_subscription** | [**Subscription**](Subscription.md)| Subscription parameter. | 

### Return type

[**Subscription**](Subscription.md)

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

# **subscriptions_delete**
> subscriptions_delete(subscription_id, api_version)



Delete the specified subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Id of the subscription.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_instance.subscriptions_delete(subscription_id, api_version)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Id of the subscription. | 
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

# **subscriptions_get**
> Subscription subscriptions_get(subscription_id, api_version)



Gets details about particular subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription import Subscription
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Id of the subscription.
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.subscriptions_get(subscription_id, api_version)
        print("The response of SubscriptionsApi->subscriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Id of the subscription. | 
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**Subscription**](Subscription.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_list**
> SubscriptionList subscriptions_list(api_version)



Get the list of subscriptions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.subscription_list import SubscriptionList
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
    api_instance = openapi_client.SubscriptionsApi(api_client)
    api_version = '2015-11-01' # str | Client Api Version. (default to '2015-11-01')

    try:
        api_response = api_instance.subscriptions_list(api_version)
        print("The response of SubscriptionsApi->subscriptions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | [default to &#39;2015-11-01&#39;]

### Return type

[**SubscriptionList**](SubscriptionList.md)

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

