# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**streaming_locators_create**](DefaultApi.md#streaming_locators_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingLocators/{streamingLocatorName} | Create a Streaming Locator
[**streaming_locators_delete**](DefaultApi.md#streaming_locators_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingLocators/{streamingLocatorName} | Delete a Streaming Locator
[**streaming_locators_get**](DefaultApi.md#streaming_locators_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingLocators/{streamingLocatorName} | Get a Streaming Locator
[**streaming_locators_list**](DefaultApi.md#streaming_locators_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingLocators | List Streaming Locators
[**streaming_locators_list_content_keys**](DefaultApi.md#streaming_locators_list_content_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingLocators/{streamingLocatorName}/listContentKeys | List Content Keys
[**streaming_locators_list_paths**](DefaultApi.md#streaming_locators_list_paths) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingLocators/{streamingLocatorName}/listPaths | List Paths
[**streaming_policies_create**](DefaultApi.md#streaming_policies_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingPolicies/{streamingPolicyName} | Create a Streaming Policy
[**streaming_policies_delete**](DefaultApi.md#streaming_policies_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingPolicies/{streamingPolicyName} | Delete a Streaming Policy
[**streaming_policies_get**](DefaultApi.md#streaming_policies_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingPolicies/{streamingPolicyName} | Get a Streaming Policy
[**streaming_policies_list**](DefaultApi.md#streaming_policies_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/streamingPolicies | List Streaming Policies


# **streaming_locators_create**
> StreamingLocator streaming_locators_create(subscription_id, resource_group_name, account_name, streaming_locator_name, api_version, parameters)

Create a Streaming Locator

Create a Streaming Locator in the Media Services account

### Example


```python
import openapi_client
from openapi_client.models.streaming_locator import StreamingLocator
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_locator_name = 'streaming_locator_name_example' # str | The Streaming Locator name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.StreamingLocator() # StreamingLocator | The request parameters

    try:
        # Create a Streaming Locator
        api_response = api_instance.streaming_locators_create(subscription_id, resource_group_name, account_name, streaming_locator_name, api_version, parameters)
        print("The response of DefaultApi->streaming_locators_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->streaming_locators_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_locator_name** | **str**| The Streaming Locator name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**StreamingLocator**](StreamingLocator.md)| The request parameters | 

### Return type

[**StreamingLocator**](StreamingLocator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_locators_delete**
> streaming_locators_delete(subscription_id, resource_group_name, account_name, streaming_locator_name, api_version)

Delete a Streaming Locator

Deletes a Streaming Locator in the Media Services account

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_locator_name = 'streaming_locator_name_example' # str | The Streaming Locator name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Delete a Streaming Locator
        api_instance.streaming_locators_delete(subscription_id, resource_group_name, account_name, streaming_locator_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->streaming_locators_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_locator_name** | **str**| The Streaming Locator name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

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
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_locators_get**
> StreamingLocator streaming_locators_get(subscription_id, resource_group_name, account_name, streaming_locator_name, api_version)

Get a Streaming Locator

Get the details of a Streaming Locator in the Media Services account

### Example


```python
import openapi_client
from openapi_client.models.streaming_locator import StreamingLocator
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_locator_name = 'streaming_locator_name_example' # str | The Streaming Locator name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get a Streaming Locator
        api_response = api_instance.streaming_locators_get(subscription_id, resource_group_name, account_name, streaming_locator_name, api_version)
        print("The response of DefaultApi->streaming_locators_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->streaming_locators_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_locator_name** | **str**| The Streaming Locator name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**StreamingLocator**](StreamingLocator.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NotFound |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_locators_list**
> StreamingLocatorCollection streaming_locators_list(subscription_id, resource_group_name, account_name, api_version, filter=filter, top=top, orderby=orderby)

List Streaming Locators

Lists the Streaming Locators in the account

### Example


```python
import openapi_client
from openapi_client.models.streaming_locator_collection import StreamingLocatorCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    filter = 'filter_example' # str | Restricts the set of items returned. (optional)
    top = 56 # int | Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. (optional)
    orderby = 'orderby_example' # str | Specifies the key by which the result collection should be ordered. (optional)

    try:
        # List Streaming Locators
        api_response = api_instance.streaming_locators_list(subscription_id, resource_group_name, account_name, api_version, filter=filter, top=top, orderby=orderby)
        print("The response of DefaultApi->streaming_locators_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->streaming_locators_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **filter** | **str**| Restricts the set of items returned. | [optional] 
 **top** | **int**| Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. | [optional] 
 **orderby** | **str**| Specifies the key by which the result collection should be ordered. | [optional] 

### Return type

[**StreamingLocatorCollection**](StreamingLocatorCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_locators_list_content_keys**
> ListContentKeysResponse streaming_locators_list_content_keys(subscription_id, resource_group_name, account_name, streaming_locator_name, api_version)

List Content Keys

List Content Keys used by this Streaming Locator

### Example


```python
import openapi_client
from openapi_client.models.list_content_keys_response import ListContentKeysResponse
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_locator_name = 'streaming_locator_name_example' # str | The Streaming Locator name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # List Content Keys
        api_response = api_instance.streaming_locators_list_content_keys(subscription_id, resource_group_name, account_name, streaming_locator_name, api_version)
        print("The response of DefaultApi->streaming_locators_list_content_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->streaming_locators_list_content_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_locator_name** | **str**| The Streaming Locator name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**ListContentKeysResponse**](ListContentKeysResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_locators_list_paths**
> ListPathsResponse streaming_locators_list_paths(subscription_id, resource_group_name, account_name, streaming_locator_name, api_version)

List Paths

List Paths supported by this Streaming Locator

### Example


```python
import openapi_client
from openapi_client.models.list_paths_response import ListPathsResponse
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_locator_name = 'streaming_locator_name_example' # str | The Streaming Locator name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # List Paths
        api_response = api_instance.streaming_locators_list_paths(subscription_id, resource_group_name, account_name, streaming_locator_name, api_version)
        print("The response of DefaultApi->streaming_locators_list_paths:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->streaming_locators_list_paths: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_locator_name** | **str**| The Streaming Locator name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**ListPathsResponse**](ListPathsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_policies_create**
> StreamingPolicy streaming_policies_create(subscription_id, resource_group_name, account_name, streaming_policy_name, api_version, parameters)

Create a Streaming Policy

Create a Streaming Policy in the Media Services account

### Example


```python
import openapi_client
from openapi_client.models.streaming_policy import StreamingPolicy
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_policy_name = 'streaming_policy_name_example' # str | The Streaming Policy name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.StreamingPolicy() # StreamingPolicy | The request parameters

    try:
        # Create a Streaming Policy
        api_response = api_instance.streaming_policies_create(subscription_id, resource_group_name, account_name, streaming_policy_name, api_version, parameters)
        print("The response of DefaultApi->streaming_policies_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->streaming_policies_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_policy_name** | **str**| The Streaming Policy name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**StreamingPolicy**](StreamingPolicy.md)| The request parameters | 

### Return type

[**StreamingPolicy**](StreamingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_policies_delete**
> streaming_policies_delete(subscription_id, resource_group_name, account_name, streaming_policy_name, api_version)

Delete a Streaming Policy

Deletes a Streaming Policy in the Media Services account

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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_policy_name = 'streaming_policy_name_example' # str | The Streaming Policy name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Delete a Streaming Policy
        api_instance.streaming_policies_delete(subscription_id, resource_group_name, account_name, streaming_policy_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->streaming_policies_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_policy_name** | **str**| The Streaming Policy name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

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
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_policies_get**
> StreamingPolicy streaming_policies_get(subscription_id, resource_group_name, account_name, streaming_policy_name, api_version)

Get a Streaming Policy

Get the details of a Streaming Policy in the Media Services account

### Example


```python
import openapi_client
from openapi_client.models.streaming_policy import StreamingPolicy
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    streaming_policy_name = 'streaming_policy_name_example' # str | The Streaming Policy name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get a Streaming Policy
        api_response = api_instance.streaming_policies_get(subscription_id, resource_group_name, account_name, streaming_policy_name, api_version)
        print("The response of DefaultApi->streaming_policies_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->streaming_policies_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **streaming_policy_name** | **str**| The Streaming Policy name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**StreamingPolicy**](StreamingPolicy.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | NotFound |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **streaming_policies_list**
> StreamingPolicyCollection streaming_policies_list(subscription_id, resource_group_name, account_name, api_version, filter=filter, top=top, orderby=orderby)

List Streaming Policies

Lists the Streaming Policies in the account

### Example


```python
import openapi_client
from openapi_client.models.streaming_policy_collection import StreamingPolicyCollection
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The unique identifier for a Microsoft Azure subscription.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the Azure subscription.
    account_name = 'account_name_example' # str | The Media Services account name.
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    filter = 'filter_example' # str | Restricts the set of items returned. (optional)
    top = 56 # int | Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. (optional)
    orderby = 'orderby_example' # str | Specifies the key by which the result collection should be ordered. (optional)

    try:
        # List Streaming Policies
        api_response = api_instance.streaming_policies_list(subscription_id, resource_group_name, account_name, api_version, filter=filter, top=top, orderby=orderby)
        print("The response of DefaultApi->streaming_policies_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->streaming_policies_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **filter** | **str**| Restricts the set of items returned. | [optional] 
 **top** | **int**| Specifies a non-negative integer n that limits the number of items returned from a collection. The service returns the number of available items up to but not greater than the specified value n. | [optional] 
 **orderby** | **str**| Specifies the key by which the result collection should be ordered. | [optional] 

### Return type

[**StreamingPolicyCollection**](StreamingPolicyCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

