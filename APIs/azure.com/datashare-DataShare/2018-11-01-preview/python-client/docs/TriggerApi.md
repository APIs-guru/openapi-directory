# openapi_client.TriggerApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**triggers_create**](TriggerApi.md#triggers_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/triggers/{triggerName} | This method creates a trigger for a share subscription
[**triggers_delete**](TriggerApi.md#triggers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/triggers/{triggerName} | Delete Trigger in a shareSubscription.
[**triggers_get**](TriggerApi.md#triggers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/triggers/{triggerName} | Get Trigger in a shareSubscription.
[**triggers_list_by_share_subscription**](TriggerApi.md#triggers_list_by_share_subscription) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/triggers | List Triggers in a share subscription.


# **triggers_create**
> Trigger triggers_create(subscription_id, resource_group_name, account_name, share_subscription_name, trigger_name, api_version, trigger)

This method creates a trigger for a share subscription

Create a Trigger 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.trigger import Trigger
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
    api_instance = openapi_client.TriggerApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the share subscription which will hold the data set sink.
    trigger_name = 'trigger_name_example' # str | The name of the trigger.
    api_version = 'api_version_example' # str | The api version to use.
    trigger = openapi_client.Trigger() # Trigger | Trigger details.

    try:
        # This method creates a trigger for a share subscription
        api_response = api_instance.triggers_create(subscription_id, resource_group_name, account_name, share_subscription_name, trigger_name, api_version, trigger)
        print("The response of TriggerApi->triggers_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TriggerApi->triggers_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the share subscription which will hold the data set sink. | 
 **trigger_name** | **str**| The name of the trigger. | 
 **api_version** | **str**| The api version to use. | 
 **trigger** | [**Trigger**](Trigger.md)| Trigger details. | 

### Return type

[**Trigger**](Trigger.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**201** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggers_delete**
> OperationResponse triggers_delete(subscription_id, resource_group_name, account_name, share_subscription_name, trigger_name, api_version)

Delete Trigger in a shareSubscription.

Delete a Trigger in a shareSubscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_response import OperationResponse
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
    api_instance = openapi_client.TriggerApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the shareSubscription.
    trigger_name = 'trigger_name_example' # str | The name of the trigger.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Delete Trigger in a shareSubscription.
        api_response = api_instance.triggers_delete(subscription_id, resource_group_name, account_name, share_subscription_name, trigger_name, api_version)
        print("The response of TriggerApi->triggers_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TriggerApi->triggers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the shareSubscription. | 
 **trigger_name** | **str**| The name of the trigger. | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**OperationResponse**](OperationResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**202** | Accepted |  -  |
**204** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggers_get**
> Trigger triggers_get(subscription_id, resource_group_name, account_name, share_subscription_name, trigger_name, api_version)

Get Trigger in a shareSubscription.

Get a Trigger in a shareSubscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.trigger import Trigger
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
    api_instance = openapi_client.TriggerApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the shareSubscription.
    trigger_name = 'trigger_name_example' # str | The name of the trigger.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Get Trigger in a shareSubscription.
        api_response = api_instance.triggers_get(subscription_id, resource_group_name, account_name, share_subscription_name, trigger_name, api_version)
        print("The response of TriggerApi->triggers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TriggerApi->triggers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the shareSubscription. | 
 **trigger_name** | **str**| The name of the trigger. | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**Trigger**](Trigger.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggers_list_by_share_subscription**
> TriggerList triggers_list_by_share_subscription(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, skip_token=skip_token)

List Triggers in a share subscription.

List Triggers in a share subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.trigger_list import TriggerList
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
    api_instance = openapi_client.TriggerApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the share subscription.
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | Continuation token (optional)

    try:
        # List Triggers in a share subscription.
        api_response = api_instance.triggers_list_by_share_subscription(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, skip_token=skip_token)
        print("The response of TriggerApi->triggers_list_by_share_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TriggerApi->triggers_list_by_share_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the share subscription. | 
 **api_version** | **str**| The api version to use. | 
 **skip_token** | **str**| Continuation token | [optional] 

### Return type

[**TriggerList**](TriggerList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

