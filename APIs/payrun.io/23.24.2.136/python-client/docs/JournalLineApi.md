# openapi_client.JournalLineApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_journal_line_tag_0**](JournalLineApi.md#delete_journal_line_tag_0) | **DELETE** /Employer/{EmployerId}/JournalLine/{JournalLineId}/Tag/{TagId} | Delete journal line tag
[**get_all_journal_line_tags_0**](JournalLineApi.md#get_all_journal_line_tags_0) | **GET** /Employer/{EmployerId}/JournalLines/Tags | Get all journal line tags
[**get_all_journal_lines_with_tag_0**](JournalLineApi.md#get_all_journal_lines_with_tag_0) | **GET** /Employer/{EmployerId}/JournalLines/Tag/{TagId} | Get links to tagged journal lines
[**get_tag_from_journal_line_0**](JournalLineApi.md#get_tag_from_journal_line_0) | **GET** /Employer/{EmployerId}/JournalLine/{JournalLineId}/Tag/{TagId} | Get journal line tag
[**get_tags_from_journal_line_0**](JournalLineApi.md#get_tags_from_journal_line_0) | **GET** /Employer/{EmployerId}/JournalLine/{JournalLineId}/Tags | Get tags from journal line
[**put_journal_line_tag_0**](JournalLineApi.md#put_journal_line_tag_0) | **PUT** /Employer/{EmployerId}/JournalLine/{JournalLineId}/Tag/{TagId} | Insert journal line tag


# **delete_journal_line_tag_0**
> delete_journal_line_tag_0(employer_id, journal_line_id, tag_id, authorization, api_version)

Delete journal line tag

Deletes a tag from the journal line

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
    api_instance = openapi_client.JournalLineApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    journal_line_id = 'journal_line_id_example' # str | The journal line unique identifier. E.g JL001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete journal line tag
        api_instance.delete_journal_line_tag_0(employer_id, journal_line_id, tag_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling JournalLineApi->delete_journal_line_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **journal_line_id** | **str**| The journal line unique identifier. E.g JL001 | 
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

# **get_all_journal_line_tags_0**
> LinkCollection get_all_journal_line_tags_0(employer_id, authorization, api_version)

Get all journal line tags

Gets all the journal line tags

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
    api_instance = openapi_client.JournalLineApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all journal line tags
        api_response = api_instance.get_all_journal_line_tags_0(employer_id, authorization, api_version)
        print("The response of JournalLineApi->get_all_journal_line_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalLineApi->get_all_journal_line_tags_0: %s\n" % e)
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

# **get_all_journal_lines_with_tag_0**
> LinkCollection get_all_journal_lines_with_tag_0(employer_id, tag_id, authorization, api_version)

Get links to tagged journal lines

Gets the journal lines with the specified tag

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
    api_instance = openapi_client.JournalLineApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get links to tagged journal lines
        api_response = api_instance.get_all_journal_lines_with_tag_0(employer_id, tag_id, authorization, api_version)
        print("The response of JournalLineApi->get_all_journal_lines_with_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalLineApi->get_all_journal_lines_with_tag_0: %s\n" % e)
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

# **get_tag_from_journal_line_0**
> Tag get_tag_from_journal_line_0(employer_id, journal_line_id, tag_id, authorization, api_version)

Get journal line tag

Gets a tag from the journal line

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
    api_instance = openapi_client.JournalLineApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    journal_line_id = 'journal_line_id_example' # str | The journal line unique identifier. E.g JL001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get journal line tag
        api_response = api_instance.get_tag_from_journal_line_0(employer_id, journal_line_id, tag_id, authorization, api_version)
        print("The response of JournalLineApi->get_tag_from_journal_line_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalLineApi->get_tag_from_journal_line_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **journal_line_id** | **str**| The journal line unique identifier. E.g JL001 | 
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

# **get_tags_from_journal_line_0**
> LinkCollection get_tags_from_journal_line_0(employer_id, journal_line_id, authorization, api_version)

Get tags from journal line

Gets all tags from the journal line

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
    api_instance = openapi_client.JournalLineApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    journal_line_id = 'journal_line_id_example' # str | The journal line unique identifier. E.g JL001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get tags from journal line
        api_response = api_instance.get_tags_from_journal_line_0(employer_id, journal_line_id, authorization, api_version)
        print("The response of JournalLineApi->get_tags_from_journal_line_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalLineApi->get_tags_from_journal_line_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **journal_line_id** | **str**| The journal line unique identifier. E.g JL001 | 
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

# **put_journal_line_tag_0**
> Tag put_journal_line_tag_0(employer_id, journal_line_id, tag_id, authorization, api_version)

Insert journal line tag

Inserts a tag on the journal line

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
    api_instance = openapi_client.JournalLineApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    journal_line_id = 'journal_line_id_example' # str | The journal line unique identifier. E.g JL001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Insert journal line tag
        api_response = api_instance.put_journal_line_tag_0(employer_id, journal_line_id, tag_id, authorization, api_version)
        print("The response of JournalLineApi->put_journal_line_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling JournalLineApi->put_journal_line_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **journal_line_id** | **str**| The journal line unique identifier. E.g JL001 | 
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

