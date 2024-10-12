# openapi_client.ChannelsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**channels_create_or_update**](ChannelsApi.md#channels_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/Channels/{channelName} | Create or Update the EngagementFabric channel
[**channels_delete**](ChannelsApi.md#channels_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/Channels/{channelName} | Delete the EngagementFabric channel
[**channels_get**](ChannelsApi.md#channels_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/Channels/{channelName} | Get the EngagementFabric channel
[**channels_list_by_account**](ChannelsApi.md#channels_list_by_account) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EngagementFabric/Accounts/{accountName}/Channels | List the EngagementFabric channels


# **channels_create_or_update**
> Channel channels_create_or_update(subscription_id, resource_group_name, account_name, channel_name, api_version, channel)

Create or Update the EngagementFabric channel

### Example


```python
import openapi_client
from openapi_client.models.channel import Channel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    account_name = 'account_name_example' # str | Account Name
    channel_name = 'channel_name_example' # str | Channel Name
    api_version = 'api_version_example' # str | API version
    channel = openapi_client.Channel() # Channel | The EngagementFabric channel description

    try:
        # Create or Update the EngagementFabric channel
        api_response = api_instance.channels_create_or_update(subscription_id, resource_group_name, account_name, channel_name, api_version, channel)
        print("The response of ChannelsApi->channels_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->channels_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **resource_group_name** | **str**| Resource Group Name | 
 **account_name** | **str**| Account Name | 
 **channel_name** | **str**| Channel Name | 
 **api_version** | **str**| API version | 
 **channel** | [**Channel**](Channel.md)| The EngagementFabric channel description | 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **channels_delete**
> channels_delete(subscription_id, resource_group_name, account_name, channel_name, api_version)

Delete the EngagementFabric channel

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    account_name = 'account_name_example' # str | Account Name
    channel_name = 'channel_name_example' # str | The EngagementFabric channel name
    api_version = 'api_version_example' # str | API version

    try:
        # Delete the EngagementFabric channel
        api_instance.channels_delete(subscription_id, resource_group_name, account_name, channel_name, api_version)
    except Exception as e:
        print("Exception when calling ChannelsApi->channels_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **resource_group_name** | **str**| Resource Group Name | 
 **account_name** | **str**| Account Name | 
 **channel_name** | **str**| The EngagementFabric channel name | 
 **api_version** | **str**| API version | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**204** | NoContent |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **channels_get**
> Channel channels_get(subscription_id, resource_group_name, account_name, channel_name, api_version)

Get the EngagementFabric channel

### Example


```python
import openapi_client
from openapi_client.models.channel import Channel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    account_name = 'account_name_example' # str | Account Name
    channel_name = 'channel_name_example' # str | Channel Name
    api_version = 'api_version_example' # str | API version

    try:
        # Get the EngagementFabric channel
        api_response = api_instance.channels_get(subscription_id, resource_group_name, account_name, channel_name, api_version)
        print("The response of ChannelsApi->channels_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->channels_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **resource_group_name** | **str**| Resource Group Name | 
 **account_name** | **str**| Account Name | 
 **channel_name** | **str**| Channel Name | 
 **api_version** | **str**| API version | 

### Return type

[**Channel**](Channel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **channels_list_by_account**
> ChannelList channels_list_by_account(subscription_id, resource_group_name, account_name, api_version)

List the EngagementFabric channels

### Example


```python
import openapi_client
from openapi_client.models.channel_list import ChannelList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription ID
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    account_name = 'account_name_example' # str | Account Name
    api_version = 'api_version_example' # str | API version

    try:
        # List the EngagementFabric channels
        api_response = api_instance.channels_list_by_account(subscription_id, resource_group_name, account_name, api_version)
        print("The response of ChannelsApi->channels_list_by_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelsApi->channels_list_by_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription ID | 
 **resource_group_name** | **str**| Resource Group Name | 
 **account_name** | **str**| Account Name | 
 **api_version** | **str**| API version | 

### Return type

[**ChannelList**](ChannelList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

