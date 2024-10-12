# openapi_client.ListsApi

All URIs are relative to *https://api.inboxroute.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contacts_lists_get**](ListsApi.md#contacts_lists_get) | **GET** /contacts/lists | 
[**contacts_lists_listid_delete**](ListsApi.md#contacts_lists_listid_delete) | **DELETE** /contacts/lists/{listid} | 
[**contacts_lists_listid_put**](ListsApi.md#contacts_lists_listid_put) | **PUT** /contacts/lists/{listid} | 
[**contacts_lists_post**](ListsApi.md#contacts_lists_post) | **POST** /contacts/lists | 


# **contacts_lists_get**
> ContactListPage contacts_lists_get(offset=offset, limit=limit, sort=sort)



Get a paged result of contact lists.

### Example

* Api Key Authentication (mqApiKey):

```python
import openapi_client
from openapi_client.models.contact_list_page import ContactListPage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.inboxroute.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.inboxroute.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: mqApiKey
configuration.api_key['mqApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['mqApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    offset = 56 # int | Skip that many records (optional)
    limit = 56 # int | Maximum number of items in page (optional)
    sort = 'sort_example' # str | Property to sort by. Append '-' for descending order. (optional)

    try:
        api_response = api_instance.contacts_lists_get(offset=offset, limit=limit, sort=sort)
        print("The response of ListsApi->contacts_lists_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->contacts_lists_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**| Skip that many records | [optional] 
 **limit** | **int**| Maximum number of items in page | [optional] 
 **sort** | **str**| Property to sort by. Append &#39;-&#39; for descending order. | [optional] 

### Return type

[**ContactListPage**](ContactListPage.md)

### Authorization

[mqApiKey](../README.md#mqApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page object |  -  |
**401** | Invalid api key or key does not have access to this ressource |  -  |
**404** | The requested resource was not found |  -  |
**422** | The request parameters were invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_lists_listid_delete**
> contacts_lists_listid_delete(listid)



Delete an existing contact list

### Example

* Api Key Authentication (mqApiKey):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.inboxroute.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.inboxroute.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: mqApiKey
configuration.api_key['mqApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['mqApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    listid = 'listid_example' # str | Unique 16 characters ID of the contact list

    try:
        api_instance.contacts_lists_listid_delete(listid)
    except Exception as e:
        print("Exception when calling ListsApi->contacts_lists_listid_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listid** | **str**| Unique 16 characters ID of the contact list | 

### Return type

void (empty response body)

### Authorization

[mqApiKey](../README.md#mqApiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Empty response |  -  |
**401** | Invalid api key or key does not have access to this ressource |  -  |
**404** | The requested resource was not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_lists_listid_put**
> contacts_lists_listid_put(listid, contactlist=contactlist)



Update an existing contact list

### Example

* Api Key Authentication (mqApiKey):

```python
import openapi_client
from openapi_client.models.contact_list_update import ContactListUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.inboxroute.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.inboxroute.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: mqApiKey
configuration.api_key['mqApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['mqApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    listid = 'listid_example' # str | Unique 16 characters ID of the contact list
    contactlist = openapi_client.ContactListUpdate() # ContactListUpdate | Contact list properties to update (optional)

    try:
        api_instance.contacts_lists_listid_put(listid, contactlist=contactlist)
    except Exception as e:
        print("Exception when calling ListsApi->contacts_lists_listid_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listid** | **str**| Unique 16 characters ID of the contact list | 
 **contactlist** | [**ContactListUpdate**](ContactListUpdate.md)| Contact list properties to update | [optional] 

### Return type

void (empty response body)

### Authorization

[mqApiKey](../README.md#mqApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Empty response |  -  |
**401** | Invalid api key or key does not have access to this ressource |  -  |
**404** | The requested resource was not found |  -  |
**422** | The request parameters were invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_lists_post**
> NewId contacts_lists_post(contactlist=contactlist)



Add a new contact list

### Example

* Api Key Authentication (mqApiKey):

```python
import openapi_client
from openapi_client.models.contact_list_update import ContactListUpdate
from openapi_client.models.new_id import NewId
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.inboxroute.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.inboxroute.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: mqApiKey
configuration.api_key['mqApiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['mqApiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListsApi(api_client)
    contactlist = openapi_client.ContactListUpdate() # ContactListUpdate | Contact list initial properties (optional)

    try:
        api_response = api_instance.contacts_lists_post(contactlist=contactlist)
        print("The response of ListsApi->contacts_lists_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListsApi->contacts_lists_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactlist** | [**ContactListUpdate**](ContactListUpdate.md)| Contact list initial properties | [optional] 

### Return type

[**NewId**](NewId.md)

### Authorization

[mqApiKey](../README.md#mqApiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page object |  -  |
**401** | Invalid api key or key does not have access to this ressource |  -  |
**422** | The request parameters were invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

