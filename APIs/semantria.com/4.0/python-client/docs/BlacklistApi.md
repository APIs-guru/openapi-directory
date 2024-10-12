# openapi_client.BlacklistApi

All URIs are relative to *https://api.semantria.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_blacklist**](BlacklistApi.md#add_blacklist) | **POST** /blacklist.{content_type} | Add items to blacklist
[**delete_blacklist_items**](BlacklistApi.md#delete_blacklist_items) | **DELETE** /blacklist.{content_type} | Remove items from blacklist
[**get_blacklist**](BlacklistApi.md#get_blacklist) | **GET** /blacklist.{content_type} | Retrieve blacklisted items
[**update_blacklist**](BlacklistApi.md#update_blacklist) | **PUT** /blacklist.{content_type} | Update items in blacklist


# **add_blacklist**
> List[BlacklistItemResponseVersion] add_blacklist(content_type, blacklisted_items, config_id=config_id)

Add items to blacklist

This method adds new unique items to the backlist on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.blacklist_item_response_version import BlacklistItemResponseVersion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BlacklistApi(api_client)
    content_type = 'content_type_example' # str | 
    blacklisted_items = None # object | List of parametrized JSON or XML objects.
    config_id = 'config_id_example' # str | Identifier of configuration blacklist linked to. (optional)

    try:
        # Add items to blacklist
        api_response = api_instance.add_blacklist(content_type, blacklisted_items, config_id=config_id)
        print("The response of BlacklistApi->add_blacklist:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlacklistApi->add_blacklist: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **blacklisted_items** | **object**| List of parametrized JSON or XML objects. | 
 **config_id** | **str**| Identifier of configuration blacklist linked to. | [optional] 

### Return type

[**List[BlacklistItemResponseVersion]**](BlacklistItemResponseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**202** | Client request accepted and queued. |  -  |
**400** | Incoming request body is incorrect. Server responds with details. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**406** | Number of allowed blacklisted items per configuration achieved. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_blacklist_items**
> delete_blacklist_items(content_type, blacklisted_item_ids, config_id=config_id)

Remove items from blacklist

This method removes certain blacklisted items by their values on Semantria side.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BlacklistApi(api_client)
    content_type = 'content_type_example' # str | 
    blacklisted_item_ids = ['blacklisted_item_ids_example'] # List[str] | List of unique blacklisted item identifiers (string).
    config_id = 'config_id_example' # str | Identifier of configuration blacklist items linked to. (optional)

    try:
        # Remove items from blacklist
        api_instance.delete_blacklist_items(content_type, blacklisted_item_ids, config_id=config_id)
    except Exception as e:
        print("Exception when calling BlacklistApi->delete_blacklist_items: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **blacklisted_item_ids** | [**List[str]**](str.md)| List of unique blacklisted item identifiers (string). | 
 **config_id** | **str**| Identifier of configuration blacklist items linked to. | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**202** | Client request accepted and queued. |  -  |
**400** | Incoming request body is incorrect. Server responds with details. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**403** | Forbidden. Server responds if client tries to remove primary configuration. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_blacklist**
> List[BlacklistItemResponseVersion] get_blacklist(content_type, config_id=config_id)

Retrieve blacklisted items

This method retrieves all backlisted items available on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.blacklist_item_response_version import BlacklistItemResponseVersion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BlacklistApi(api_client)
    content_type = 'content_type_example' # str | 
    config_id = 'config_id_example' # str | Identifier of configuration blacklist linked to. (optional)

    try:
        # Retrieve blacklisted items
        api_response = api_instance.get_blacklist(content_type, config_id=config_id)
        print("The response of BlacklistApi->get_blacklist:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlacklistApi->get_blacklist: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **config_id** | **str**| Identifier of configuration blacklist linked to. | [optional] 

### Return type

[**List[BlacklistItemResponseVersion]**](BlacklistItemResponseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Client request accepted and queued. Server responds with the blacklist. |  -  |
**202** | Client request accepted, no blacklist found. Server responds with empty body. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_blacklist**
> List[BlacklistItemResponseVersion] update_blacklist(content_type, blacklisted_items, config_id=config_id)

Update items in blacklist

This method updates existing items by unique IDs in the backlist on Semantria side.

### Example


```python
import openapi_client
from openapi_client.models.blacklist_item_response_version import BlacklistItemResponseVersion
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.semantria.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.semantria.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BlacklistApi(api_client)
    content_type = 'content_type_example' # str | 
    blacklisted_items = None # object | List of parametrized JSON or XML objects.
    config_id = 'config_id_example' # str | Identifier of configuration blacklist linked to. (optional)

    try:
        # Update items in blacklist
        api_response = api_instance.update_blacklist(content_type, blacklisted_items, config_id=config_id)
        print("The response of BlacklistApi->update_blacklist:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BlacklistApi->update_blacklist: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **content_type** | **str**|  | 
 **blacklisted_items** | **object**| List of parametrized JSON or XML objects. | 
 **config_id** | **str**| Identifier of configuration blacklist linked to. | [optional] 

### Return type

[**List[BlacklistItemResponseVersion]**](BlacklistItemResponseVersion.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No response was specified |  -  |
**202** | Client request accepted and queued. |  -  |
**400** | Incoming request body is incorrect. Server responds with details. |  -  |
**401** | Authentication failed. |  -  |
**402** | Unauthorized. Limit of system calls is reached or subscription is expired. |  -  |
**406** | Number of allowed blacklisted items per configuration achieved. |  -  |
**500** | Server side issue. Server may respond with the details in response body. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

