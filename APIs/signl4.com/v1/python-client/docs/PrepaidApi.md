# openapi_client.PrepaidApi

All URIs are relative to *https://connect.signl4.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**prepaid_balance_get**](PrepaidApi.md#prepaid_balance_get) | **GET** /prepaid/balance | Get your subscription&#39;s current prepaid balance.
[**prepaid_settings_get**](PrepaidApi.md#prepaid_settings_get) | **GET** /prepaid/settings | Get your subscription&#39;s current prepaid settings.
[**prepaid_settings_put**](PrepaidApi.md#prepaid_settings_put) | **PUT** /prepaid/settings | Update your subscription&#39;s current prepaid settings.
[**prepaid_transactions_get**](PrepaidApi.md#prepaid_transactions_get) | **GET** /prepaid/transactions | Get your subscription&#39;s prepaid transactions.
[**subscriptions_subscription_id_prepaid_balance_get**](PrepaidApi.md#subscriptions_subscription_id_prepaid_balance_get) | **GET** /subscriptions/{subscriptionId}/prepaidBalance | Get a subscription&#39;s current prepaid balance.
[**subscriptions_subscription_id_prepaid_settings_get**](PrepaidApi.md#subscriptions_subscription_id_prepaid_settings_get) | **GET** /subscriptions/{subscriptionId}/prepaidSettings | Get a subscription&#39;s current prepaid settings.
[**subscriptions_subscription_id_prepaid_settings_put**](PrepaidApi.md#subscriptions_subscription_id_prepaid_settings_put) | **PUT** /subscriptions/{subscriptionId}/prepaidSettings | Update a subscription&#39;s current prepaid settings.
[**subscriptions_subscription_id_prepaid_transactions_get**](PrepaidApi.md#subscriptions_subscription_id_prepaid_transactions_get) | **GET** /subscriptions/{subscriptionId}/prepaidTransactions | Get a subscription&#39;s prepaid transactions.


# **prepaid_balance_get**
> PrepaidBalanceInfo prepaid_balance_get()

Get your subscription's current prepaid balance.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.prepaid_balance_info import PrepaidBalanceInfo
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
    api_instance = openapi_client.PrepaidApi(api_client)

    try:
        # Get your subscription's current prepaid balance.
        api_response = api_instance.prepaid_balance_get()
        print("The response of PrepaidApi->prepaid_balance_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrepaidApi->prepaid_balance_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PrepaidBalanceInfo**](PrepaidBalanceInfo.md)

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

# **prepaid_settings_get**
> PrepaidSettingsInfo prepaid_settings_get()

Get your subscription's current prepaid settings.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.prepaid_settings_info import PrepaidSettingsInfo
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
    api_instance = openapi_client.PrepaidApi(api_client)

    try:
        # Get your subscription's current prepaid settings.
        api_response = api_instance.prepaid_settings_get()
        print("The response of PrepaidApi->prepaid_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrepaidApi->prepaid_settings_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PrepaidSettingsInfo**](PrepaidSettingsInfo.md)

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

# **prepaid_settings_put**
> PrepaidSettingsInfo prepaid_settings_put(prepaid_settings_info=prepaid_settings_info)

Update your subscription's current prepaid settings.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.prepaid_settings_info import PrepaidSettingsInfo
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
    api_instance = openapi_client.PrepaidApi(api_client)
    prepaid_settings_info = openapi_client.PrepaidSettingsInfo() # PrepaidSettingsInfo | Settings object containing the new values. (optional)

    try:
        # Update your subscription's current prepaid settings.
        api_response = api_instance.prepaid_settings_put(prepaid_settings_info=prepaid_settings_info)
        print("The response of PrepaidApi->prepaid_settings_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrepaidApi->prepaid_settings_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prepaid_settings_info** | [**PrepaidSettingsInfo**](PrepaidSettingsInfo.md)| Settings object containing the new values. | [optional] 

### Return type

[**PrepaidSettingsInfo**](PrepaidSettingsInfo.md)

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
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **prepaid_transactions_get**
> List[PrepaidTransactionInfo] prepaid_transactions_get()

Get your subscription's prepaid transactions.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.prepaid_transaction_info import PrepaidTransactionInfo
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
    api_instance = openapi_client.PrepaidApi(api_client)

    try:
        # Get your subscription's prepaid transactions.
        api_response = api_instance.prepaid_transactions_get()
        print("The response of PrepaidApi->prepaid_transactions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrepaidApi->prepaid_transactions_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[PrepaidTransactionInfo]**](PrepaidTransactionInfo.md)

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

# **subscriptions_subscription_id_prepaid_balance_get**
> PrepaidBalanceInfo subscriptions_subscription_id_prepaid_balance_get(subscription_id)

Get a subscription's current prepaid balance.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.prepaid_balance_info import PrepaidBalanceInfo
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
    api_instance = openapi_client.PrepaidApi(api_client)
    subscription_id = 'subscription_id_example' # str | 

    try:
        # Get a subscription's current prepaid balance.
        api_response = api_instance.subscriptions_subscription_id_prepaid_balance_get(subscription_id)
        print("The response of PrepaidApi->subscriptions_subscription_id_prepaid_balance_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrepaidApi->subscriptions_subscription_id_prepaid_balance_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**|  | 

### Return type

[**PrepaidBalanceInfo**](PrepaidBalanceInfo.md)

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

# **subscriptions_subscription_id_prepaid_settings_get**
> PrepaidSettingsInfo subscriptions_subscription_id_prepaid_settings_get(subscription_id)

Get a subscription's current prepaid settings.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.prepaid_settings_info import PrepaidSettingsInfo
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
    api_instance = openapi_client.PrepaidApi(api_client)
    subscription_id = 'subscription_id_example' # str | 

    try:
        # Get a subscription's current prepaid settings.
        api_response = api_instance.subscriptions_subscription_id_prepaid_settings_get(subscription_id)
        print("The response of PrepaidApi->subscriptions_subscription_id_prepaid_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrepaidApi->subscriptions_subscription_id_prepaid_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**|  | 

### Return type

[**PrepaidSettingsInfo**](PrepaidSettingsInfo.md)

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

# **subscriptions_subscription_id_prepaid_settings_put**
> PrepaidSettingsInfo subscriptions_subscription_id_prepaid_settings_put(subscription_id, prepaid_settings_info=prepaid_settings_info)

Update a subscription's current prepaid settings.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.prepaid_settings_info import PrepaidSettingsInfo
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
    api_instance = openapi_client.PrepaidApi(api_client)
    subscription_id = 'subscription_id_example' # str | ID of the subscription
    prepaid_settings_info = openapi_client.PrepaidSettingsInfo() # PrepaidSettingsInfo | Settings object containing the new values. (optional)

    try:
        # Update a subscription's current prepaid settings.
        api_response = api_instance.subscriptions_subscription_id_prepaid_settings_put(subscription_id, prepaid_settings_info=prepaid_settings_info)
        print("The response of PrepaidApi->subscriptions_subscription_id_prepaid_settings_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrepaidApi->subscriptions_subscription_id_prepaid_settings_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| ID of the subscription | 
 **prepaid_settings_info** | [**PrepaidSettingsInfo**](PrepaidSettingsInfo.md)| Settings object containing the new values. | [optional] 

### Return type

[**PrepaidSettingsInfo**](PrepaidSettingsInfo.md)

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

# **subscriptions_subscription_id_prepaid_transactions_get**
> List[PrepaidTransactionInfo] subscriptions_subscription_id_prepaid_transactions_get(subscription_id)

Get a subscription's prepaid transactions.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.prepaid_transaction_info import PrepaidTransactionInfo
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
    api_instance = openapi_client.PrepaidApi(api_client)
    subscription_id = 'subscription_id_example' # str | ID of the subscription to get transactions for

    try:
        # Get a subscription's prepaid transactions.
        api_response = api_instance.subscriptions_subscription_id_prepaid_transactions_get(subscription_id)
        print("The response of PrepaidApi->subscriptions_subscription_id_prepaid_transactions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrepaidApi->subscriptions_subscription_id_prepaid_transactions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| ID of the subscription to get transactions for | 

### Return type

[**List[PrepaidTransactionInfo]**](PrepaidTransactionInfo.md)

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

