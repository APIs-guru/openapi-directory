# openapi_client.ContactsApi

All URIs are relative to *https://api.inboxroute.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contacts_contactid_delete**](ContactsApi.md#contacts_contactid_delete) | **DELETE** /contacts/{contactid} | 
[**contacts_contactid_put**](ContactsApi.md#contacts_contactid_put) | **PUT** /contacts/{contactid} | 
[**contacts_get**](ContactsApi.md#contacts_get) | **GET** /contacts | 


# **contacts_contactid_delete**
> contacts_contactid_delete(contactid)



Delete an existing contact

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
    api_instance = openapi_client.ContactsApi(api_client)
    contactid = 'contactid_example' # str | Unique 16 characters ID of the contact

    try:
        api_instance.contacts_contactid_delete(contactid)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_contactid_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactid** | **str**| Unique 16 characters ID of the contact | 

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

# **contacts_contactid_put**
> contacts_contactid_put(contactid, contact)



Update an existing contact

### Example

* Api Key Authentication (mqApiKey):

```python
import openapi_client
from openapi_client.models.contact_update import ContactUpdate
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
    api_instance = openapi_client.ContactsApi(api_client)
    contactid = 'contactid_example' # str | Unique 16 characters ID of the contact
    contact = openapi_client.ContactUpdate() # ContactUpdate | Contact properties to update

    try:
        api_instance.contacts_contactid_put(contactid, contact)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_contactid_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactid** | **str**| Unique 16 characters ID of the contact | 
 **contact** | [**ContactUpdate**](ContactUpdate.md)| Contact properties to update | 

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

# **contacts_get**
> ContactPage contacts_get(listid=listid, offset=offset, limit=limit, sort=sort)



Get a paged result of contacts from a list

### Example

* Api Key Authentication (mqApiKey):

```python
import openapi_client
from openapi_client.models.contact_page import ContactPage
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
    api_instance = openapi_client.ContactsApi(api_client)
    listid = 'listid_example' # str | Unique 16 characters ID of the contact list to get contacts of (optional)
    offset = 56 # int | Skip that many records (optional)
    limit = 56 # int | Maximum number of items in page (optional)
    sort = 'sort_example' # str | Property to sort by. Append '-' for descending order. (optional)

    try:
        api_response = api_instance.contacts_get(listid=listid, offset=offset, limit=limit, sort=sort)
        print("The response of ContactsApi->contacts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listid** | **str**| Unique 16 characters ID of the contact list to get contacts of | [optional] 
 **offset** | **int**| Skip that many records | [optional] 
 **limit** | **int**| Maximum number of items in page | [optional] 
 **sort** | **str**| Property to sort by. Append &#39;-&#39; for descending order. | [optional] 

### Return type

[**ContactPage**](ContactPage.md)

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

