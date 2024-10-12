# openapi_client.ShareSubscriptionApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**consumer_source_data_sets_list_by_share_subscription**](ShareSubscriptionApi.md#consumer_source_data_sets_list_by_share_subscription) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/ConsumerSourceDataSets | Get source dataSets of a shareSubscription.
[**share_subscriptions_cancel_synchronization**](ShareSubscriptionApi.md#share_subscriptions_cancel_synchronization) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/cancelSynchronization | Request cancellation of a data share snapshot
[**share_subscriptions_create**](ShareSubscriptionApi.md#share_subscriptions_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName} | Create shareSubscription in an account.
[**share_subscriptions_delete**](ShareSubscriptionApi.md#share_subscriptions_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName} | Delete shareSubscription in an account.
[**share_subscriptions_get**](ShareSubscriptionApi.md#share_subscriptions_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName} | Get shareSubscription in an account.
[**share_subscriptions_list_by_account**](ShareSubscriptionApi.md#share_subscriptions_list_by_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions | List of available share subscriptions under an account.
[**share_subscriptions_list_source_share_synchronization_settings**](ShareSubscriptionApi.md#share_subscriptions_list_source_share_synchronization_settings) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/listSourceShareSynchronizationSettings | Get source share synchronization settings for a shareSubscription.
[**share_subscriptions_list_synchronization_details**](ShareSubscriptionApi.md#share_subscriptions_list_synchronization_details) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/listSynchronizationDetails | List data set level details for a share subscription synchronization
[**share_subscriptions_list_synchronizations**](ShareSubscriptionApi.md#share_subscriptions_list_synchronizations) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/listSynchronizations | List Synchronizations in a share subscription.
[**share_subscriptions_synchronize**](ShareSubscriptionApi.md#share_subscriptions_synchronize) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/Synchronize | Initiate an asynchronous data share job


# **consumer_source_data_sets_list_by_share_subscription**
> ConsumerSourceDataSetList consumer_source_data_sets_list_by_share_subscription(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, skip_token=skip_token)

Get source dataSets of a shareSubscription.

Get source dataSets of a shareSubscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.consumer_source_data_set_list import ConsumerSourceDataSetList
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
    api_instance = openapi_client.ShareSubscriptionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the shareSubscription.
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | Continuation token (optional)

    try:
        # Get source dataSets of a shareSubscription.
        api_response = api_instance.consumer_source_data_sets_list_by_share_subscription(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, skip_token=skip_token)
        print("The response of ShareSubscriptionApi->consumer_source_data_sets_list_by_share_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareSubscriptionApi->consumer_source_data_sets_list_by_share_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the shareSubscription. | 
 **api_version** | **str**| The api version to use. | 
 **skip_token** | **str**| Continuation token | [optional] 

### Return type

[**ConsumerSourceDataSetList**](ConsumerSourceDataSetList.md)

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

# **share_subscriptions_cancel_synchronization**
> ShareSubscriptionSynchronization share_subscriptions_cancel_synchronization(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, share_subscription_synchronization)

Request cancellation of a data share snapshot

Request to cancel a synchronization.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share_subscription_synchronization import ShareSubscriptionSynchronization
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
    api_instance = openapi_client.ShareSubscriptionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the shareSubscription.
    api_version = 'api_version_example' # str | The api version to use.
    share_subscription_synchronization = openapi_client.ShareSubscriptionSynchronization() # ShareSubscriptionSynchronization | Share Subscription Synchronization payload.

    try:
        # Request cancellation of a data share snapshot
        api_response = api_instance.share_subscriptions_cancel_synchronization(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, share_subscription_synchronization)
        print("The response of ShareSubscriptionApi->share_subscriptions_cancel_synchronization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareSubscriptionApi->share_subscriptions_cancel_synchronization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the shareSubscription. | 
 **api_version** | **str**| The api version to use. | 
 **share_subscription_synchronization** | [**ShareSubscriptionSynchronization**](ShareSubscriptionSynchronization.md)| Share Subscription Synchronization payload. | 

### Return type

[**ShareSubscriptionSynchronization**](ShareSubscriptionSynchronization.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**202** | Accepted |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **share_subscriptions_create**
> ShareSubscription share_subscriptions_create(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, share_subscription)

Create shareSubscription in an account.

Create a shareSubscription in an account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share_subscription import ShareSubscription
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
    api_instance = openapi_client.ShareSubscriptionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the shareSubscription.
    api_version = 'api_version_example' # str | The api version to use.
    share_subscription = openapi_client.ShareSubscription() # ShareSubscription | create parameters for shareSubscription

    try:
        # Create shareSubscription in an account.
        api_response = api_instance.share_subscriptions_create(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, share_subscription)
        print("The response of ShareSubscriptionApi->share_subscriptions_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareSubscriptionApi->share_subscriptions_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the shareSubscription. | 
 **api_version** | **str**| The api version to use. | 
 **share_subscription** | [**ShareSubscription**](ShareSubscription.md)| create parameters for shareSubscription | 

### Return type

[**ShareSubscription**](ShareSubscription.md)

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

# **share_subscriptions_delete**
> OperationResponse share_subscriptions_delete(subscription_id, resource_group_name, account_name, share_subscription_name, api_version)

Delete shareSubscription in an account.

Delete a shareSubscription in an account

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
    api_instance = openapi_client.ShareSubscriptionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the shareSubscription.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Delete shareSubscription in an account.
        api_response = api_instance.share_subscriptions_delete(subscription_id, resource_group_name, account_name, share_subscription_name, api_version)
        print("The response of ShareSubscriptionApi->share_subscriptions_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareSubscriptionApi->share_subscriptions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the shareSubscription. | 
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

# **share_subscriptions_get**
> ShareSubscription share_subscriptions_get(subscription_id, resource_group_name, account_name, share_subscription_name, api_version)

Get shareSubscription in an account.

Get a shareSubscription in an account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share_subscription import ShareSubscription
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
    api_instance = openapi_client.ShareSubscriptionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the shareSubscription.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Get shareSubscription in an account.
        api_response = api_instance.share_subscriptions_get(subscription_id, resource_group_name, account_name, share_subscription_name, api_version)
        print("The response of ShareSubscriptionApi->share_subscriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareSubscriptionApi->share_subscriptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the shareSubscription. | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**ShareSubscription**](ShareSubscription.md)

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

# **share_subscriptions_list_by_account**
> ShareSubscriptionList share_subscriptions_list_by_account(subscription_id, resource_group_name, account_name, api_version, skip_token=skip_token)

List of available share subscriptions under an account.

List share subscriptions in an account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share_subscription_list import ShareSubscriptionList
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
    api_instance = openapi_client.ShareSubscriptionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | Continuation Token (optional)

    try:
        # List of available share subscriptions under an account.
        api_response = api_instance.share_subscriptions_list_by_account(subscription_id, resource_group_name, account_name, api_version, skip_token=skip_token)
        print("The response of ShareSubscriptionApi->share_subscriptions_list_by_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareSubscriptionApi->share_subscriptions_list_by_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **api_version** | **str**| The api version to use. | 
 **skip_token** | **str**| Continuation Token | [optional] 

### Return type

[**ShareSubscriptionList**](ShareSubscriptionList.md)

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

# **share_subscriptions_list_source_share_synchronization_settings**
> SourceShareSynchronizationSettingList share_subscriptions_list_source_share_synchronization_settings(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, skip_token=skip_token)

Get source share synchronization settings for a shareSubscription.

Get synchronization settings set on a share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.source_share_synchronization_setting_list import SourceShareSynchronizationSettingList
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
    api_instance = openapi_client.ShareSubscriptionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the shareSubscription.
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | Continuation token (optional)

    try:
        # Get source share synchronization settings for a shareSubscription.
        api_response = api_instance.share_subscriptions_list_source_share_synchronization_settings(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, skip_token=skip_token)
        print("The response of ShareSubscriptionApi->share_subscriptions_list_source_share_synchronization_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareSubscriptionApi->share_subscriptions_list_source_share_synchronization_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the shareSubscription. | 
 **api_version** | **str**| The api version to use. | 
 **skip_token** | **str**| Continuation token | [optional] 

### Return type

[**SourceShareSynchronizationSettingList**](SourceShareSynchronizationSettingList.md)

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

# **share_subscriptions_list_synchronization_details**
> SynchronizationDetailsList share_subscriptions_list_synchronization_details(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, share_subscription_synchronization, skip_token=skip_token)

List data set level details for a share subscription synchronization

List synchronization details

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share_subscription_synchronization import ShareSubscriptionSynchronization
from openapi_client.models.synchronization_details_list import SynchronizationDetailsList
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
    api_instance = openapi_client.ShareSubscriptionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the share subscription.
    api_version = 'api_version_example' # str | The api version to use.
    share_subscription_synchronization = openapi_client.ShareSubscriptionSynchronization() # ShareSubscriptionSynchronization | Share Subscription Synchronization payload.
    skip_token = 'skip_token_example' # str | Continuation token (optional)

    try:
        # List data set level details for a share subscription synchronization
        api_response = api_instance.share_subscriptions_list_synchronization_details(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, share_subscription_synchronization, skip_token=skip_token)
        print("The response of ShareSubscriptionApi->share_subscriptions_list_synchronization_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareSubscriptionApi->share_subscriptions_list_synchronization_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the share subscription. | 
 **api_version** | **str**| The api version to use. | 
 **share_subscription_synchronization** | [**ShareSubscriptionSynchronization**](ShareSubscriptionSynchronization.md)| Share Subscription Synchronization payload. | 
 **skip_token** | **str**| Continuation token | [optional] 

### Return type

[**SynchronizationDetailsList**](SynchronizationDetailsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **share_subscriptions_list_synchronizations**
> ShareSubscriptionSynchronizationList share_subscriptions_list_synchronizations(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, skip_token=skip_token)

List Synchronizations in a share subscription.

List synchronizations of a share subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share_subscription_synchronization_list import ShareSubscriptionSynchronizationList
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
    api_instance = openapi_client.ShareSubscriptionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the share subscription.
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | Continuation token (optional)

    try:
        # List Synchronizations in a share subscription.
        api_response = api_instance.share_subscriptions_list_synchronizations(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, skip_token=skip_token)
        print("The response of ShareSubscriptionApi->share_subscriptions_list_synchronizations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareSubscriptionApi->share_subscriptions_list_synchronizations: %s\n" % e)
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

[**ShareSubscriptionSynchronizationList**](ShareSubscriptionSynchronizationList.md)

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

# **share_subscriptions_synchronize**
> ShareSubscriptionSynchronization share_subscriptions_synchronize(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, synchronize)

Initiate an asynchronous data share job

Initiate a copy

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share_subscription_synchronization import ShareSubscriptionSynchronization
from openapi_client.models.synchronize import Synchronize
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
    api_instance = openapi_client.ShareSubscriptionApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of share subscription
    api_version = 'api_version_example' # str | The api version to use.
    synchronize = openapi_client.Synchronize() # Synchronize | Synchronize payload

    try:
        # Initiate an asynchronous data share job
        api_response = api_instance.share_subscriptions_synchronize(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, synchronize)
        print("The response of ShareSubscriptionApi->share_subscriptions_synchronize:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareSubscriptionApi->share_subscriptions_synchronize: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of share subscription | 
 **api_version** | **str**| The api version to use. | 
 **synchronize** | [**Synchronize**](Synchronize.md)| Synchronize payload | 

### Return type

[**ShareSubscriptionSynchronization**](ShareSubscriptionSynchronization.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**202** | Accepted |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

