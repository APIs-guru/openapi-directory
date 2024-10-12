# openapi_client.BotApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bots_create**](BotApi.md#bots_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName} | 
[**bots_delete**](BotApi.md#bots_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName} | 
[**bots_get**](BotApi.md#bots_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName} | 
[**bots_get_check_name_availability**](BotApi.md#bots_get_check_name_availability) | **GET** /providers/Microsoft.BotService/botServices/checkNameAvailability | 
[**bots_list**](BotApi.md#bots_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.BotService/botServices | 
[**bots_list_by_resource_group**](BotApi.md#bots_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices | 
[**bots_update**](BotApi.md#bots_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BotService/botServices/{resourceName} | 


# **bots_create**
> Bot bots_create(resource_group_name, resource_name, api_version, subscription_id, parameters)



Creates a Bot Service. Bot Service is a resource group wide resource type.

### Example


```python
import openapi_client
from openapi_client.models.bot import Bot
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
    api_instance = openapi_client.BotApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Bot resource group in the user subscription.
    resource_name = 'resource_name_example' # str | The name of the Bot resource.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-12-01
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    parameters = openapi_client.Bot() # Bot | The parameters to provide for the created bot.

    try:
        api_response = api_instance.bots_create(resource_group_name, resource_name, api_version, subscription_id, parameters)
        print("The response of BotApi->bots_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BotApi->bots_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Bot resource group in the user subscription. | 
 **resource_name** | **str**| The name of the Bot resource. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-12-01 | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **parameters** | [**Bot**](Bot.md)| The parameters to provide for the created bot. | 

### Return type

[**Bot**](Bot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If resource is created successfully or already existed, the service should return 200 (OK). |  -  |
**201** | If resource is created successfully, the service should return 201 (Created). Execution to continue asynchronously. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bots_delete**
> bots_delete(resource_group_name, resource_name, api_version, subscription_id)



Deletes a Bot Service from the resource group. 

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
    api_instance = openapi_client.BotApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Bot resource group in the user subscription.
    resource_name = 'resource_name_example' # str | The name of the Bot resource.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-12-01
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_instance.bots_delete(resource_group_name, resource_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling BotApi->bots_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Bot resource group in the user subscription. | 
 **resource_name** | **str**| The name of the Bot resource. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-12-01 | 
 **subscription_id** | **str**| Azure Subscription ID. | 

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
**200** | A 200 (OK) should be returned if the object exists and was deleted successfully; |  -  |
**204** | a 204 (NoContent) should be used if the resource does not exist and the request is well formed. |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bots_get**
> Bot bots_get(resource_group_name, resource_name, api_version, subscription_id)



Returns a BotService specified by the parameters.

### Example


```python
import openapi_client
from openapi_client.models.bot import Bot
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
    api_instance = openapi_client.BotApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Bot resource group in the user subscription.
    resource_name = 'resource_name_example' # str | The name of the Bot resource.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-12-01
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_response = api_instance.bots_get(resource_group_name, resource_name, api_version, subscription_id)
        print("The response of BotApi->bots_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BotApi->bots_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Bot resource group in the user subscription. | 
 **resource_name** | **str**| The name of the Bot resource. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-12-01 | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

[**Bot**](Bot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource provider should return 200 (OK) to indicate that the operation completed successfully.  |  -  |
**0** | Error response describing why the operation failed. If the resource group *or* resource does not exist, 404 (NotFound) should be returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bots_get_check_name_availability**
> CheckNameAvailabilityResponseBody bots_get_check_name_availability(api_version, parameters)



Check whether a bot name is available.

### Example


```python
import openapi_client
from openapi_client.models.check_name_availability_request_body import CheckNameAvailabilityRequestBody
from openapi_client.models.check_name_availability_response_body import CheckNameAvailabilityResponseBody
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
    api_instance = openapi_client.BotApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-12-01
    parameters = openapi_client.CheckNameAvailabilityRequestBody() # CheckNameAvailabilityRequestBody | The request body parameters to provide for the check name availability request

    try:
        api_response = api_instance.bots_get_check_name_availability(api_version, parameters)
        print("The response of BotApi->bots_get_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BotApi->bots_get_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-12-01 | 
 **parameters** | [**CheckNameAvailabilityRequestBody**](CheckNameAvailabilityRequestBody.md)| The request body parameters to provide for the check name availability request | 

### Return type

[**CheckNameAvailabilityResponseBody**](CheckNameAvailabilityResponseBody.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code. The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses. If a resource provider does not support paging, it should return the same body but leave nextLink empty for future compatibility. For a detailed explanation of each field in the response body, please refer to the request body description in the PUT resource section.  |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bots_list**
> BotResponseList bots_list(api_version, subscription_id)



Returns all the resources of a particular type belonging to a subscription.

### Example


```python
import openapi_client
from openapi_client.models.bot_response_list import BotResponseList
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
    api_instance = openapi_client.BotApi(api_client)
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-12-01
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.

    try:
        api_response = api_instance.bots_list(api_version, subscription_id)
        print("The response of BotApi->bots_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BotApi->bots_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-12-01 | 
 **subscription_id** | **str**| Azure Subscription ID. | 

### Return type

[**BotResponseList**](BotResponseList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code. The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses. If a resource provider does not support paging, it should return the same body but leave nextLink empty for future compatibility. For a detailed explanation of each field in the response body, please refer to the request body description in the PUT resource section.  |  -  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bots_list_by_resource_group**
> BotResponseList bots_list_by_resource_group(resource_group_name, subscription_id, api_version)



Returns all the resources of a particular type belonging to a resource group

### Example


```python
import openapi_client
from openapi_client.models.bot_response_list import BotResponseList
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
    api_instance = openapi_client.BotApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Bot resource group in the user subscription.
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-12-01

    try:
        api_response = api_instance.bots_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of BotApi->bots_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BotApi->bots_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Bot resource group in the user subscription. | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-12-01 | 

### Return type

[**BotResponseList**](BotResponseList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource provider should return 200 (OK) to indicate that the operation completed successfully. For other errors (e.g. internal errors) use the appropriate HTTP error code. The nextLink field is expected to point to the URL the client should use to fetch the next page (per server side paging). This matches the OData guidelines for paged responses here. If a resource provider does not support paging, it should return the same body (JSON object with \&quot;value\&quot; property) but omit nextLink entirely (or set to null, *not* empty string) for future compatibility. The nextLink should be implemented using following query parameters: · skipToken: opaque token that allows the resource provider to skip resources already enumerated. This value is defined and returned by the RP after first request via nextLink. · top: the optional client query parameter which defines the maximum number of records to be returned by the server. Implementation details: · NextLink may include all the query parameters (specifically OData $filter) used by the client in the first query.  · Server may return less records than requested with nextLink. Returning zero records with NextLink is an acceptable response.  Clients must fetch records until the nextLink is not returned back / null. Clients should never rely on number of returned records to determinate if pagination is completed. |  -  |
**0** | Error response describing why the operation failed. If the resource group does not exist, 404 (NotFound) will be returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **bots_update**
> Bot bots_update(resource_group_name, resource_name, api_version, subscription_id, parameters)



Updates a Bot Service

### Example


```python
import openapi_client
from openapi_client.models.bot import Bot
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
    api_instance = openapi_client.BotApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Bot resource group in the user subscription.
    resource_name = 'resource_name_example' # str | The name of the Bot resource.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request. Current version is 2017-12-01
    subscription_id = 'subscription_id_example' # str | Azure Subscription ID.
    parameters = openapi_client.Bot() # Bot | The parameters to provide for the created bot.

    try:
        api_response = api_instance.bots_update(resource_group_name, resource_name, api_version, subscription_id, parameters)
        print("The response of BotApi->bots_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BotApi->bots_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Bot resource group in the user subscription. | 
 **resource_name** | **str**| The name of the Bot resource. | 
 **api_version** | **str**| Version of the API to be used with the client request. Current version is 2017-12-01 | 
 **subscription_id** | **str**| Azure Subscription ID. | 
 **parameters** | [**Bot**](Bot.md)| The parameters to provide for the created bot. | 

### Return type

[**Bot**](Bot.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resource provider should return 200 (OK) to indicate that the operation completed successfully.  |  -  |
**201** | If resource is updated successfully, the service should return 201 (Created). Execution to continue asynchronously. |  -  |
**0** | Error response describing why the operation failed. If the resource group *or* resource does not exist, 404 (NotFound) should be returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

