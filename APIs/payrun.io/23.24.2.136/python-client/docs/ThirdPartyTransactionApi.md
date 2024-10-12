# openapi_client.ThirdPartyTransactionApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_third_party_transaction_tag_0**](ThirdPartyTransactionApi.md#delete_third_party_transaction_tag_0) | **DELETE** /Employer/{EmployerId}/ThirdPartyTransaction/{ThirdPartyTransactionId}/Tag/{TagId} | Delete third party transaction tag
[**get_all_third_party_transaction_tags_0**](ThirdPartyTransactionApi.md#get_all_third_party_transaction_tags_0) | **GET** /Employer/{EmployerId}/ThirdPartyTransactions/Tags | Get all third party transaction tags
[**get_all_third_party_transactions_with_tag_0**](ThirdPartyTransactionApi.md#get_all_third_party_transactions_with_tag_0) | **GET** /Employer/{EmployerId}/ThirdPartyTransactions/Tag/{TagId} | Get links to tagged third party transactions
[**get_tag_from_third_party_transaction_0**](ThirdPartyTransactionApi.md#get_tag_from_third_party_transaction_0) | **GET** /Employer/{EmployerId}/ThirdPartyTransaction/{ThirdPartyTransactionId}/Tag/{TagId} | Get third party transaction tag
[**get_tags_from_third_party_transaction_0**](ThirdPartyTransactionApi.md#get_tags_from_third_party_transaction_0) | **GET** /Employer/{EmployerId}/ThirdPartyTransaction/{ThirdPartyTransactionId}/Tags | Get tags from third party transaction
[**put_third_party_transaction_tag_0**](ThirdPartyTransactionApi.md#put_third_party_transaction_tag_0) | **PUT** /Employer/{EmployerId}/ThirdPartyTransaction/{ThirdPartyTransactionId}/Tag/{TagId} | insert third party transaction tag


# **delete_third_party_transaction_tag_0**
> delete_third_party_transaction_tag_0(employer_id, third_party_transaction_id, tag_id, authorization, api_version)

Delete third party transaction tag

Deletes a tag from the third party transaction

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ThirdPartyTransactionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    third_party_transaction_id = 'third_party_transaction_id_example' # str | The third party transaction unique identifier. E.g TP001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete third party transaction tag
        api_instance.delete_third_party_transaction_tag_0(employer_id, third_party_transaction_id, tag_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling ThirdPartyTransactionApi->delete_third_party_transaction_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **third_party_transaction_id** | **str**| The third party transaction unique identifier. E.g TP001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

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
**200** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_third_party_transaction_tags_0**
> LinkCollection get_all_third_party_transaction_tags_0(employer_id, authorization, api_version)

Get all third party transaction tags

Gets all the third party transaction tags

### Example


```python
import openapi_client
from openapi_client.models.link_collection import LinkCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ThirdPartyTransactionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all third party transaction tags
        api_response = api_instance.get_all_third_party_transaction_tags_0(employer_id, authorization, api_version)
        print("The response of ThirdPartyTransactionApi->get_all_third_party_transaction_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyTransactionApi->get_all_third_party_transaction_tags_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**LinkCollection**](LinkCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The link collection object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_all_third_party_transactions_with_tag_0**
> LinkCollection get_all_third_party_transactions_with_tag_0(employer_id, tag_id, authorization, api_version)

Get links to tagged third party transactions

Gets the third party transactions with the specified tag

### Example


```python
import openapi_client
from openapi_client.models.link_collection import LinkCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ThirdPartyTransactionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get links to tagged third party transactions
        api_response = api_instance.get_all_third_party_transactions_with_tag_0(employer_id, tag_id, authorization, api_version)
        print("The response of ThirdPartyTransactionApi->get_all_third_party_transactions_with_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyTransactionApi->get_all_third_party_transactions_with_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**LinkCollection**](LinkCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The link collection object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tag_from_third_party_transaction_0**
> Tag get_tag_from_third_party_transaction_0(employer_id, third_party_transaction_id, tag_id, authorization, api_version)

Get third party transaction tag

Gets a tag from the third party transaction

### Example


```python
import openapi_client
from openapi_client.models.tag import Tag
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ThirdPartyTransactionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    third_party_transaction_id = 'third_party_transaction_id_example' # str | The third party transaction unique identifier. E.g TP001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get third party transaction tag
        api_response = api_instance.get_tag_from_third_party_transaction_0(employer_id, third_party_transaction_id, tag_id, authorization, api_version)
        print("The response of ThirdPartyTransactionApi->get_tag_from_third_party_transaction_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyTransactionApi->get_tag_from_third_party_transaction_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **third_party_transaction_id** | **str**| The third party transaction unique identifier. E.g TP001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tag object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tags_from_third_party_transaction_0**
> LinkCollection get_tags_from_third_party_transaction_0(employer_id, third_party_transaction_id, authorization, api_version)

Get tags from third party transaction

Gets all tags from the third party transaction

### Example


```python
import openapi_client
from openapi_client.models.link_collection import LinkCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ThirdPartyTransactionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    third_party_transaction_id = 'third_party_transaction_id_example' # str | The third party transaction unique identifier. E.g TP001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get tags from third party transaction
        api_response = api_instance.get_tags_from_third_party_transaction_0(employer_id, third_party_transaction_id, authorization, api_version)
        print("The response of ThirdPartyTransactionApi->get_tags_from_third_party_transaction_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyTransactionApi->get_tags_from_third_party_transaction_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **third_party_transaction_id** | **str**| The third party transaction unique identifier. E.g TP001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**LinkCollection**](LinkCollection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The link collection object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_third_party_transaction_tag_0**
> Tag put_third_party_transaction_tag_0(employer_id, third_party_transaction_id, tag_id, authorization, api_version)

insert third party transaction tag

Inserts a tag on the third party transaction

### Example


```python
import openapi_client
from openapi_client.models.tag import Tag
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.test.payrun.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.test.payrun.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ThirdPartyTransactionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    third_party_transaction_id = 'third_party_transaction_id_example' # str | The third party transaction unique identifier. E.g TP001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # insert third party transaction tag
        api_response = api_instance.put_third_party_transaction_tag_0(employer_id, third_party_transaction_id, tag_id, authorization, api_version)
        print("The response of ThirdPartyTransactionApi->put_third_party_transaction_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ThirdPartyTransactionApi->put_third_party_transaction_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **third_party_transaction_id** | **str**| The third party transaction unique identifier. E.g TP001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The tag object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

