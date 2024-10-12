# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**account_filters_create_or_update**](DefaultApi.md#account_filters_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/accountFilters/{filterName} | Create or update an Account Filter
[**account_filters_delete**](DefaultApi.md#account_filters_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/accountFilters/{filterName} | Delete an Account Filter.
[**account_filters_get**](DefaultApi.md#account_filters_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/accountFilters/{filterName} | Get an Account Filter.
[**account_filters_list**](DefaultApi.md#account_filters_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/accountFilters | List Account Filters
[**account_filters_update**](DefaultApi.md#account_filters_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Media/mediaServices/{accountName}/accountFilters/{filterName} | Update an Account Filter


# **account_filters_create_or_update**
> AccountFilter account_filters_create_or_update(subscription_id, resource_group_name, account_name, filter_name, api_version, parameters)

Create or update an Account Filter

Creates or updates an Account Filter in the Media Services account.

### Example


```python
import openapi_client
from openapi_client.models.account_filter import AccountFilter
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
    filter_name = 'filter_name_example' # str | The Account Filter name
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.AccountFilter() # AccountFilter | The request parameters

    try:
        # Create or update an Account Filter
        api_response = api_instance.account_filters_create_or_update(subscription_id, resource_group_name, account_name, filter_name, api_version, parameters)
        print("The response of DefaultApi->account_filters_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->account_filters_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **filter_name** | **str**| The Account Filter name | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**AccountFilter**](AccountFilter.md)| The request parameters | 

### Return type

[**AccountFilter**](AccountFilter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **account_filters_delete**
> account_filters_delete(subscription_id, resource_group_name, account_name, filter_name, api_version)

Delete an Account Filter.

Deletes an Account Filter in the Media Services account.

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
    filter_name = 'filter_name_example' # str | The Account Filter name
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Delete an Account Filter.
        api_instance.account_filters_delete(subscription_id, resource_group_name, account_name, filter_name, api_version)
    except Exception as e:
        print("Exception when calling DefaultApi->account_filters_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **filter_name** | **str**| The Account Filter name | 
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

# **account_filters_get**
> AccountFilter account_filters_get(subscription_id, resource_group_name, account_name, filter_name, api_version)

Get an Account Filter.

Get the details of an Account Filter in the Media Services account.

### Example


```python
import openapi_client
from openapi_client.models.account_filter import AccountFilter
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
    filter_name = 'filter_name_example' # str | The Account Filter name
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.

    try:
        # Get an Account Filter.
        api_response = api_instance.account_filters_get(subscription_id, resource_group_name, account_name, filter_name, api_version)
        print("The response of DefaultApi->account_filters_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->account_filters_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **filter_name** | **str**| The Account Filter name | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**AccountFilter**](AccountFilter.md)

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

# **account_filters_list**
> AccountFilterCollection account_filters_list(subscription_id, resource_group_name, account_name, api_version)

List Account Filters

List Account Filters in the Media Services account.

### Example


```python
import openapi_client
from openapi_client.models.account_filter_collection import AccountFilterCollection
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

    try:
        # List Account Filters
        api_response = api_instance.account_filters_list(subscription_id, resource_group_name, account_name, api_version)
        print("The response of DefaultApi->account_filters_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->account_filters_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 

### Return type

[**AccountFilterCollection**](AccountFilterCollection.md)

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

# **account_filters_update**
> AccountFilter account_filters_update(subscription_id, resource_group_name, account_name, filter_name, api_version, parameters)

Update an Account Filter

Updates an existing Account Filter in the Media Services account.

### Example


```python
import openapi_client
from openapi_client.models.account_filter import AccountFilter
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
    filter_name = 'filter_name_example' # str | The Account Filter name
    api_version = 'api_version_example' # str | The Version of the API to be used with the client request.
    parameters = openapi_client.AccountFilter() # AccountFilter | The request parameters

    try:
        # Update an Account Filter
        api_response = api_instance.account_filters_update(subscription_id, resource_group_name, account_name, filter_name, api_version, parameters)
        print("The response of DefaultApi->account_filters_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->account_filters_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The unique identifier for a Microsoft Azure subscription. | 
 **resource_group_name** | **str**| The name of the resource group within the Azure subscription. | 
 **account_name** | **str**| The Media Services account name. | 
 **filter_name** | **str**| The Account Filter name | 
 **api_version** | **str**| The Version of the API to be used with the client request. | 
 **parameters** | [**AccountFilter**](AccountFilter.md)| The request parameters | 

### Return type

[**AccountFilter**](AccountFilter.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Detailed error information. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

