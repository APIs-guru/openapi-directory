# openapi_client.SubscriptionsApi

All URIs are relative to *https://connect.signl4.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptions_get**](SubscriptionsApi.md#subscriptions_get) | **GET** /subscriptions | Get infos of all available/managed subscriptions.
[**subscriptions_subscription_id_channel_prices_get**](SubscriptionsApi.md#subscriptions_subscription_id_channel_prices_get) | **GET** /subscriptions/{subscriptionId}/channelPrices | Returns the subscription&#39;s channel price information.
[**subscriptions_subscription_id_features_get**](SubscriptionsApi.md#subscriptions_subscription_id_features_get) | **GET** /subscriptions/{subscriptionId}/features | Returns the features of a specified subscription.
[**subscriptions_subscription_id_get**](SubscriptionsApi.md#subscriptions_subscription_id_get) | **GET** /subscriptions/{subscriptionId} | Get infos of a specific subscription.
[**subscriptions_subscription_id_profile_put**](SubscriptionsApi.md#subscriptions_subscription_id_profile_put) | **PUT** /subscriptions/{subscriptionId}/profile | Updates a subscriptions profile.
[**subscriptions_subscription_id_user_licenses_get**](SubscriptionsApi.md#subscriptions_subscription_id_user_licenses_get) | **GET** /subscriptions/{subscriptionId}/userLicenses | Gets a subscription&#39;s user licenses.


# **subscriptions_get**
> List[SubscriptionInfo] subscriptions_get()

Get infos of all available/managed subscriptions.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.subscription_info import SubscriptionInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
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

    try:
        # Get infos of all available/managed subscriptions.
        api_response = api_instance.subscriptions_get()
        print("The response of SubscriptionsApi->subscriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[SubscriptionInfo]**](SubscriptionInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_subscription_id_channel_prices_get**
> ChannelPriceInfo subscriptions_subscription_id_channel_prices_get(subscription_id)

Returns the subscription's channel price information.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.channel_price_info import ChannelPriceInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
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
    subscription_id = 'subscription_id_example' # str | Id of the subscription that needs to be retrieved.

    try:
        # Returns the subscription's channel price information.
        api_response = api_instance.subscriptions_subscription_id_channel_prices_get(subscription_id)
        print("The response of SubscriptionsApi->subscriptions_subscription_id_channel_prices_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_subscription_id_channel_prices_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Id of the subscription that needs to be retrieved. | 

### Return type

[**ChannelPriceInfo**](ChannelPriceInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_subscription_id_features_get**
> List[SubscriptionFeature] subscriptions_subscription_id_features_get(subscription_id)

Returns the features of a specified subscription.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.subscription_feature import SubscriptionFeature
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
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
    subscription_id = 'subscription_id_example' # str | Id of the subscription from which the features need to be retrieved.

    try:
        # Returns the features of a specified subscription.
        api_response = api_instance.subscriptions_subscription_id_features_get(subscription_id)
        print("The response of SubscriptionsApi->subscriptions_subscription_id_features_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_subscription_id_features_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Id of the subscription from which the features need to be retrieved. | 

### Return type

[**List[SubscriptionFeature]**](SubscriptionFeature.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_subscription_id_get**
> SubscriptionInfo subscriptions_subscription_id_get(subscription_id)

Get infos of a specific subscription.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.subscription_info import SubscriptionInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
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
    subscription_id = 'subscription_id_example' # str | Id of the subscription that's to be retrieved.

    try:
        # Get infos of a specific subscription.
        api_response = api_instance.subscriptions_subscription_id_get(subscription_id)
        print("The response of SubscriptionsApi->subscriptions_subscription_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_subscription_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Id of the subscription that&#39;s to be retrieved. | 

### Return type

[**SubscriptionInfo**](SubscriptionInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_subscription_id_profile_put**
> SubscriptionInfo subscriptions_subscription_id_profile_put(subscription_id, subscription_profile=subscription_profile)

Updates a subscriptions profile.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.subscription_info import SubscriptionInfo
from openapi_client.models.subscription_profile import SubscriptionProfile
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
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
    subscription_id = 'subscription_id_example' # str | ID of the subscription to be updated
    subscription_profile = openapi_client.SubscriptionProfile() # SubscriptionProfile | Profile data to update subscription with (optional)

    try:
        # Updates a subscriptions profile.
        api_response = api_instance.subscriptions_subscription_id_profile_put(subscription_id, subscription_profile=subscription_profile)
        print("The response of SubscriptionsApi->subscriptions_subscription_id_profile_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_subscription_id_profile_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| ID of the subscription to be updated | 
 **subscription_profile** | [**SubscriptionProfile**](SubscriptionProfile.md)| Profile data to update subscription with | [optional] 

### Return type

[**SubscriptionInfo**](SubscriptionInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_subscription_id_user_licenses_get**
> UserLicenseInfo subscriptions_subscription_id_user_licenses_get(subscription_id)

Gets a subscription's user licenses.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.user_license_info import UserLicenseInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
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
    subscription_id = 'subscription_id_example' # str | ID of the subscription

    try:
        # Gets a subscription's user licenses.
        api_response = api_instance.subscriptions_subscription_id_user_licenses_get(subscription_id)
        print("The response of SubscriptionsApi->subscriptions_subscription_id_user_licenses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubscriptionsApi->subscriptions_subscription_id_user_licenses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| ID of the subscription | 

### Return type

[**UserLicenseInfo**](UserLicenseInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

