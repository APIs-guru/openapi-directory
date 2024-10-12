# openapi_client.ListManagementTermApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_management_term_add_term**](ListManagementTermApi.md#list_management_term_add_term) | **POST** /contentmoderator/lists/v1.0/termlists/{listId}/terms/{term} | 
[**list_management_term_delete_all_terms**](ListManagementTermApi.md#list_management_term_delete_all_terms) | **DELETE** /contentmoderator/lists/v1.0/termlists/{listId}/terms | 
[**list_management_term_delete_term**](ListManagementTermApi.md#list_management_term_delete_term) | **DELETE** /contentmoderator/lists/v1.0/termlists/{listId}/terms/{term} | 
[**list_management_term_get_all_terms**](ListManagementTermApi.md#list_management_term_get_all_terms) | **GET** /contentmoderator/lists/v1.0/termlists/{listId}/terms | 


# **list_management_term_add_term**
> list_management_term_add_term(list_id, term, language)



Add a term to the term list with list Id equal to list Id passed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListManagementTermApi(api_client)
    list_id = 'list_id_example' # str | List Id of the image list.
    term = 'term_example' # str | Term to be deleted
    language = 'language_example' # str | Language of the terms.

    try:
        api_instance.list_management_term_add_term(list_id, term, language)
    except Exception as e:
        print("Exception when calling ListManagementTermApi->list_management_term_add_term: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_id** | **str**| List Id of the image list. | 
 **term** | **str**| Term to be deleted | 
 **language** | **str**| Language of the terms. | 

### Return type

void (empty response body)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_management_term_delete_all_terms**
> str list_management_term_delete_all_terms(list_id, language)



Deletes all terms from the list with list Id equal to the list Id passed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListManagementTermApi(api_client)
    list_id = 'list_id_example' # str | List Id of the image list.
    language = 'language_example' # str | Language of the terms.

    try:
        api_response = api_instance.list_management_term_delete_all_terms(list_id, language)
        print("The response of ListManagementTermApi->list_management_term_delete_all_terms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListManagementTermApi->list_management_term_delete_all_terms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_id** | **str**| List Id of the image list. | 
 **language** | **str**| Language of the terms. | 

### Return type

**str**

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_management_term_delete_term**
> str list_management_term_delete_term(list_id, term, language)



Deletes a term from the list with list Id equal to the list Id passed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListManagementTermApi(api_client)
    list_id = 'list_id_example' # str | List Id of the image list.
    term = 'term_example' # str | Term to be deleted
    language = 'language_example' # str | Language of the terms.

    try:
        api_response = api_instance.list_management_term_delete_term(list_id, term, language)
        print("The response of ListManagementTermApi->list_management_term_delete_term:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListManagementTermApi->list_management_term_delete_term: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_id** | **str**| List Id of the image list. | 
 **term** | **str**| Term to be deleted | 
 **language** | **str**| Language of the terms. | 

### Return type

**str**

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_management_term_get_all_terms**
> Terms list_management_term_get_all_terms(list_id, language, offset=offset, limit=limit)



Gets all terms from the list with list Id equal to the list Id passed.

### Example

* Api Key Authentication (apim_key):

```python
import openapi_client
from openapi_client.models.terms import Terms
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apim_key
configuration.api_key['apim_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apim_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListManagementTermApi(api_client)
    list_id = 'list_id_example' # str | List Id of the image list.
    language = 'language_example' # str | Language of the terms.
    offset = 56 # int | The pagination start index. (optional)
    limit = 56 # int | The max limit. (optional)

    try:
        api_response = api_instance.list_management_term_get_all_terms(list_id, language, offset=offset, limit=limit)
        print("The response of ListManagementTermApi->list_management_term_get_all_terms:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListManagementTermApi->list_management_term_get_all_terms: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **list_id** | **str**| List Id of the image list. | 
 **language** | **str**| Language of the terms. | 
 **offset** | **int**| The pagination start index. | [optional] 
 **limit** | **int**| The max limit. | [optional] 

### Return type

[**Terms**](Terms.md)

### Authorization

[apim_key](../README.md#apim_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

