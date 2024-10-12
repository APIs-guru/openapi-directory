# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**subscriptions_cancel**](DefaultApi.md#subscriptions_cancel) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Subscription/cancel | 
[**subscriptions_enable**](DefaultApi.md#subscriptions_enable) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Subscription/enable | 
[**subscriptions_rename**](DefaultApi.md#subscriptions_rename) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Subscription/rename | 


# **subscriptions_cancel**
> CanceledSubscriptionId subscriptions_cancel(subscription_id, api_version)



The operation to cancel a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.canceled_subscription_id import CanceledSubscriptionId
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2019-03-01-preview

    try:
        api_response = api_instance.subscriptions_cancel(subscription_id, api_version)
        print("The response of DefaultApi->subscriptions_cancel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->subscriptions_cancel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2019-03-01-preview | 

### Return type

[**CanceledSubscriptionId**](CanceledSubscriptionId.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Describes the error if the operation is not successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_enable**
> EnabledSubscriptionId subscriptions_enable(subscription_id, api_version)



The operation to enable a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.enabled_subscription_id import EnabledSubscriptionId
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2019-03-01-preview

    try:
        api_response = api_instance.subscriptions_enable(subscription_id, api_version)
        print("The response of DefaultApi->subscriptions_enable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->subscriptions_enable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2019-03-01-preview | 

### Return type

[**EnabledSubscriptionId**](EnabledSubscriptionId.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Describes the error if the operation is not successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **subscriptions_rename**
> RenamedSubscriptionId subscriptions_rename(subscription_id, api_version, body)



The operation to rename a subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.renamed_subscription_id import RenamedSubscriptionId
from openapi_client.models.subscription_name import SubscriptionName
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2019-03-01-preview
    body = openapi_client.SubscriptionName() # SubscriptionName | Subscription Name

    try:
        api_response = api_instance.subscriptions_rename(subscription_id, api_version, body)
        print("The response of DefaultApi->subscriptions_rename:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->subscriptions_rename: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2019-03-01-preview | 
 **body** | [**SubscriptionName**](SubscriptionName.md)| Subscription Name | 

### Return type

[**RenamedSubscriptionId**](RenamedSubscriptionId.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |
**0** | Describes the error if the operation is not successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

