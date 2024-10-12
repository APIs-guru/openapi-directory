# openapi_client.ShareApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**provider_share_subscriptions_get_by_share**](ShareApi.md#provider_share_subscriptions_get_by_share) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions/{providerShareSubscriptionId} | Get share subscription in a provider share.
[**provider_share_subscriptions_list_by_share**](ShareApi.md#provider_share_subscriptions_list_by_share) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions | List of available share subscriptions to a provider share.
[**provider_share_subscriptions_reinstate**](ShareApi.md#provider_share_subscriptions_reinstate) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions/{providerShareSubscriptionId}/reinstate | Reinstate share subscription in a provider share.
[**provider_share_subscriptions_revoke**](ShareApi.md#provider_share_subscriptions_revoke) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/providerShareSubscriptions/{providerShareSubscriptionId}/revoke | Revoke share subscription in a provider share.
[**shares_create**](ShareApi.md#shares_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName} | Create a share in the given account.
[**shares_delete**](ShareApi.md#shares_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName} | Deletes a share
[**shares_get**](ShareApi.md#shares_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName} | Get a specified share
[**shares_list_by_account**](ShareApi.md#shares_list_by_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares | List of available shares under an account.
[**shares_list_synchronization_details**](ShareApi.md#shares_list_synchronization_details) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/listSynchronizationDetails | List data set level details for a share synchronization
[**shares_list_synchronizations**](ShareApi.md#shares_list_synchronizations) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shares/{shareName}/listSynchronizations | List Synchronizations in a share


# **provider_share_subscriptions_get_by_share**
> ProviderShareSubscription provider_share_subscriptions_get_by_share(subscription_id, resource_group_name, account_name, share_name, provider_share_subscription_id, api_version)

Get share subscription in a provider share.

Get share subscription in a provider share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provider_share_subscription import ProviderShareSubscription
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
    api_instance = openapi_client.ShareApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    provider_share_subscription_id = 'provider_share_subscription_id_example' # str | To locate shareSubscription
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Get share subscription in a provider share.
        api_response = api_instance.provider_share_subscriptions_get_by_share(subscription_id, resource_group_name, account_name, share_name, provider_share_subscription_id, api_version)
        print("The response of ShareApi->provider_share_subscriptions_get_by_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->provider_share_subscriptions_get_by_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **provider_share_subscription_id** | **str**| To locate shareSubscription | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**ProviderShareSubscription**](ProviderShareSubscription.md)

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

# **provider_share_subscriptions_list_by_share**
> ProviderShareSubscriptionList provider_share_subscriptions_list_by_share(subscription_id, resource_group_name, account_name, share_name, api_version, skip_token=skip_token)

List of available share subscriptions to a provider share.

List share subscriptions in a provider share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provider_share_subscription_list import ProviderShareSubscriptionList
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
    api_instance = openapi_client.ShareApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | Continuation Token (optional)

    try:
        # List of available share subscriptions to a provider share.
        api_response = api_instance.provider_share_subscriptions_list_by_share(subscription_id, resource_group_name, account_name, share_name, api_version, skip_token=skip_token)
        print("The response of ShareApi->provider_share_subscriptions_list_by_share:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->provider_share_subscriptions_list_by_share: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **api_version** | **str**| The api version to use. | 
 **skip_token** | **str**| Continuation Token | [optional] 

### Return type

[**ProviderShareSubscriptionList**](ProviderShareSubscriptionList.md)

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

# **provider_share_subscriptions_reinstate**
> ProviderShareSubscription provider_share_subscriptions_reinstate(subscription_id, resource_group_name, account_name, share_name, provider_share_subscription_id, api_version)

Reinstate share subscription in a provider share.

Reinstate share subscription in a provider share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provider_share_subscription import ProviderShareSubscription
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
    api_instance = openapi_client.ShareApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    provider_share_subscription_id = 'provider_share_subscription_id_example' # str | To locate shareSubscription
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Reinstate share subscription in a provider share.
        api_response = api_instance.provider_share_subscriptions_reinstate(subscription_id, resource_group_name, account_name, share_name, provider_share_subscription_id, api_version)
        print("The response of ShareApi->provider_share_subscriptions_reinstate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->provider_share_subscriptions_reinstate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **provider_share_subscription_id** | **str**| To locate shareSubscription | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**ProviderShareSubscription**](ProviderShareSubscription.md)

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

# **provider_share_subscriptions_revoke**
> ProviderShareSubscription provider_share_subscriptions_revoke(subscription_id, resource_group_name, account_name, share_name, provider_share_subscription_id, api_version)

Revoke share subscription in a provider share.

Revoke share subscription in a provider share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.provider_share_subscription import ProviderShareSubscription
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
    api_instance = openapi_client.ShareApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    provider_share_subscription_id = 'provider_share_subscription_id_example' # str | To locate shareSubscription
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Revoke share subscription in a provider share.
        api_response = api_instance.provider_share_subscriptions_revoke(subscription_id, resource_group_name, account_name, share_name, provider_share_subscription_id, api_version)
        print("The response of ShareApi->provider_share_subscriptions_revoke:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->provider_share_subscriptions_revoke: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **provider_share_subscription_id** | **str**| To locate shareSubscription | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**ProviderShareSubscription**](ProviderShareSubscription.md)

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
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **shares_create**
> Share shares_create(subscription_id, resource_group_name, account_name, share_name, api_version, share)

Create a share in the given account.

Create a share 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share import Share
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
    api_instance = openapi_client.ShareApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    api_version = 'api_version_example' # str | The api version to use.
    share = openapi_client.Share() # Share | The share payload

    try:
        # Create a share in the given account.
        api_response = api_instance.shares_create(subscription_id, resource_group_name, account_name, share_name, api_version, share)
        print("The response of ShareApi->shares_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->shares_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **api_version** | **str**| The api version to use. | 
 **share** | [**Share**](Share.md)| The share payload | 

### Return type

[**Share**](Share.md)

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

# **shares_delete**
> OperationResponse shares_delete(subscription_id, resource_group_name, account_name, share_name, api_version)

Deletes a share

Delete a share 

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
    api_instance = openapi_client.ShareApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Deletes a share
        api_response = api_instance.shares_delete(subscription_id, resource_group_name, account_name, share_name, api_version)
        print("The response of ShareApi->shares_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->shares_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
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

# **shares_get**
> Share shares_get(subscription_id, resource_group_name, account_name, share_name, api_version)

Get a specified share

Get a share 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share import Share
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
    api_instance = openapi_client.ShareApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share to retrieve.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Get a specified share
        api_response = api_instance.shares_get(subscription_id, resource_group_name, account_name, share_name, api_version)
        print("The response of ShareApi->shares_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->shares_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share to retrieve. | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**Share**](Share.md)

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

# **shares_list_by_account**
> ShareList shares_list_by_account(subscription_id, resource_group_name, account_name, api_version, skip_token=skip_token)

List of available shares under an account.

List shares in an account

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share_list import ShareList
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
    api_instance = openapi_client.ShareApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | Continuation Token (optional)

    try:
        # List of available shares under an account.
        api_response = api_instance.shares_list_by_account(subscription_id, resource_group_name, account_name, api_version, skip_token=skip_token)
        print("The response of ShareApi->shares_list_by_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->shares_list_by_account: %s\n" % e)
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

[**ShareList**](ShareList.md)

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

# **shares_list_synchronization_details**
> SynchronizationDetailsList shares_list_synchronization_details(subscription_id, resource_group_name, account_name, share_name, api_version, share_synchronization, skip_token=skip_token)

List data set level details for a share synchronization

List synchronization details

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share_synchronization import ShareSynchronization
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
    api_instance = openapi_client.ShareApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    api_version = 'api_version_example' # str | The api version to use.
    share_synchronization = openapi_client.ShareSynchronization() # ShareSynchronization | Share Synchronization payload.
    skip_token = 'skip_token_example' # str | Continuation token (optional)

    try:
        # List data set level details for a share synchronization
        api_response = api_instance.shares_list_synchronization_details(subscription_id, resource_group_name, account_name, share_name, api_version, share_synchronization, skip_token=skip_token)
        print("The response of ShareApi->shares_list_synchronization_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->shares_list_synchronization_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **api_version** | **str**| The api version to use. | 
 **share_synchronization** | [**ShareSynchronization**](ShareSynchronization.md)| Share Synchronization payload. | 
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

# **shares_list_synchronizations**
> ShareSynchronizationList shares_list_synchronizations(subscription_id, resource_group_name, account_name, share_name, api_version, skip_token=skip_token)

List Synchronizations in a share

List synchronizations of a share

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.share_synchronization_list import ShareSynchronizationList
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
    api_instance = openapi_client.ShareApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_name = 'share_name_example' # str | The name of the share.
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | Continuation token (optional)

    try:
        # List Synchronizations in a share
        api_response = api_instance.shares_list_synchronizations(subscription_id, resource_group_name, account_name, share_name, api_version, skip_token=skip_token)
        print("The response of ShareApi->shares_list_synchronizations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShareApi->shares_list_synchronizations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_name** | **str**| The name of the share. | 
 **api_version** | **str**| The api version to use. | 
 **skip_token** | **str**| Continuation token | [optional] 

### Return type

[**ShareSynchronizationList**](ShareSynchronizationList.md)

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

