# openapi_client.DataSetMappingApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**data_set_mappings_create**](DataSetMappingApi.md#data_set_mappings_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings/{dataSetMappingName} | Maps a source data set in the source share to a sink data set in the share subscription.  Enables copying the data set from source to destination.
[**data_set_mappings_delete**](DataSetMappingApi.md#data_set_mappings_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings/{dataSetMappingName} | Delete DataSetMapping in a shareSubscription.
[**data_set_mappings_get**](DataSetMappingApi.md#data_set_mappings_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings/{dataSetMappingName} | Get DataSetMapping in a shareSubscription.
[**data_set_mappings_list_by_share_subscription**](DataSetMappingApi.md#data_set_mappings_list_by_share_subscription) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataShare/accounts/{accountName}/shareSubscriptions/{shareSubscriptionName}/dataSetMappings | List DataSetMappings in a share subscription.


# **data_set_mappings_create**
> DataSetMapping data_set_mappings_create(subscription_id, resource_group_name, account_name, share_subscription_name, data_set_mapping_name, api_version, data_set_mapping)

Maps a source data set in the source share to a sink data set in the share subscription.  Enables copying the data set from source to destination.

Create a DataSetMapping 

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_set_mapping import DataSetMapping
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
    api_instance = openapi_client.DataSetMappingApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the share subscription which will hold the data set sink.
    data_set_mapping_name = 'data_set_mapping_name_example' # str | The name of the data set mapping to be created.
    api_version = 'api_version_example' # str | The api version to use.
    data_set_mapping = openapi_client.DataSetMapping() # DataSetMapping | Destination data set configuration details.

    try:
        # Maps a source data set in the source share to a sink data set in the share subscription.  Enables copying the data set from source to destination.
        api_response = api_instance.data_set_mappings_create(subscription_id, resource_group_name, account_name, share_subscription_name, data_set_mapping_name, api_version, data_set_mapping)
        print("The response of DataSetMappingApi->data_set_mappings_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSetMappingApi->data_set_mappings_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the share subscription which will hold the data set sink. | 
 **data_set_mapping_name** | **str**| The name of the data set mapping to be created. | 
 **api_version** | **str**| The api version to use. | 
 **data_set_mapping** | [**DataSetMapping**](DataSetMapping.md)| Destination data set configuration details. | 

### Return type

[**DataSetMapping**](DataSetMapping.md)

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

# **data_set_mappings_delete**
> data_set_mappings_delete(subscription_id, resource_group_name, account_name, share_subscription_name, data_set_mapping_name, api_version)

Delete DataSetMapping in a shareSubscription.

Delete a DataSetMapping in a shareSubscription

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
    api_instance = openapi_client.DataSetMappingApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the shareSubscription.
    data_set_mapping_name = 'data_set_mapping_name_example' # str | The name of the dataSetMapping.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Delete DataSetMapping in a shareSubscription.
        api_instance.data_set_mappings_delete(subscription_id, resource_group_name, account_name, share_subscription_name, data_set_mapping_name, api_version)
    except Exception as e:
        print("Exception when calling DataSetMappingApi->data_set_mappings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the shareSubscription. | 
 **data_set_mapping_name** | **str**| The name of the dataSetMapping. | 
 **api_version** | **str**| The api version to use. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | Success |  -  |
**0** | An error response received from the Microsoft.DataShare resource provider. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **data_set_mappings_get**
> DataSetMapping data_set_mappings_get(subscription_id, resource_group_name, account_name, share_subscription_name, data_set_mapping_name, api_version)

Get DataSetMapping in a shareSubscription.

Get a DataSetMapping in a shareSubscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_set_mapping import DataSetMapping
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
    api_instance = openapi_client.DataSetMappingApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the shareSubscription.
    data_set_mapping_name = 'data_set_mapping_name_example' # str | The name of the dataSetMapping.
    api_version = 'api_version_example' # str | The api version to use.

    try:
        # Get DataSetMapping in a shareSubscription.
        api_response = api_instance.data_set_mappings_get(subscription_id, resource_group_name, account_name, share_subscription_name, data_set_mapping_name, api_version)
        print("The response of DataSetMappingApi->data_set_mappings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSetMappingApi->data_set_mappings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier | 
 **resource_group_name** | **str**| The resource group name. | 
 **account_name** | **str**| The name of the share account. | 
 **share_subscription_name** | **str**| The name of the shareSubscription. | 
 **data_set_mapping_name** | **str**| The name of the dataSetMapping. | 
 **api_version** | **str**| The api version to use. | 

### Return type

[**DataSetMapping**](DataSetMapping.md)

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

# **data_set_mappings_list_by_share_subscription**
> DataSetMappingList data_set_mappings_list_by_share_subscription(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, skip_token=skip_token)

List DataSetMappings in a share subscription.

List DataSetMappings in a share subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.data_set_mapping_list import DataSetMappingList
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
    api_instance = openapi_client.DataSetMappingApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    account_name = 'account_name_example' # str | The name of the share account.
    share_subscription_name = 'share_subscription_name_example' # str | The name of the share subscription.
    api_version = 'api_version_example' # str | The api version to use.
    skip_token = 'skip_token_example' # str | Continuation token (optional)

    try:
        # List DataSetMappings in a share subscription.
        api_response = api_instance.data_set_mappings_list_by_share_subscription(subscription_id, resource_group_name, account_name, share_subscription_name, api_version, skip_token=skip_token)
        print("The response of DataSetMappingApi->data_set_mappings_list_by_share_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DataSetMappingApi->data_set_mappings_list_by_share_subscription: %s\n" % e)
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

[**DataSetMappingList**](DataSetMappingList.md)

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

