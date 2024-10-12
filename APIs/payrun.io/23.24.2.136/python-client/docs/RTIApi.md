# openapi_client.RTIApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_rti_transaction**](RTIApi.md#delete_rti_transaction) | **DELETE** /Employer/{EmployerId}/RtiTransaction/{RtiTransactionId} | Delete the RTI transaction
[**get_all_rti_transaction_tags_0**](RTIApi.md#get_all_rti_transaction_tags_0) | **GET** /Employer/{EmployerId}/RtiTransactions/Tags | Get all RTI transaction tags
[**get_rti_transaction_from_employer**](RTIApi.md#get_rti_transaction_from_employer) | **GET** /Employer/{EmployerId}/RtiTransaction/{RtiTransactionId} | Get the RTI transaction
[**get_rti_transaction_summaries_from_employer**](RTIApi.md#get_rti_transaction_summaries_from_employer) | **GET** /Employer/{EmployerId}/RtiTransactions/Summary | Get all RTI transaction summaries for the employer
[**get_rti_transaction_summary_from_employer**](RTIApi.md#get_rti_transaction_summary_from_employer) | **GET** /Employer/{EmployerId}/RtiTransaction/{RtiTransactionId}/Summary | Get the RTI transaction summary
[**get_rti_transactions_from_employer**](RTIApi.md#get_rti_transactions_from_employer) | **GET** /Employer/{EmployerId}/RtiTransactions | Get all RTI transactions for the employer
[**get_rti_transactions_with_tag_0**](RTIApi.md#get_rti_transactions_with_tag_0) | **GET** /Employer/{EmployerId}/RtiTransactions/Tag/{TagId} | Get RTI transactions with tag


# **delete_rti_transaction**
> delete_rti_transaction(employer_id, rti_transaction_id, authorization, api_version)

Delete the RTI transaction

Deletes the specified RTI transaction

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
    api_instance = openapi_client.RTIApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    rti_transaction_id = 'rti_transaction_id_example' # str | The RTI transaction unique identifier. E.g. FPS001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete the RTI transaction
        api_instance.delete_rti_transaction(employer_id, rti_transaction_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling RTIApi->delete_rti_transaction: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **rti_transaction_id** | **str**| The RTI transaction unique identifier. E.g. FPS001 | 
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

# **get_all_rti_transaction_tags_0**
> LinkCollection get_all_rti_transaction_tags_0(employer_id, authorization, api_version)

Get all RTI transaction tags

Gets all the RTI transaction tags

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
    api_instance = openapi_client.RTIApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all RTI transaction tags
        api_response = api_instance.get_all_rti_transaction_tags_0(employer_id, authorization, api_version)
        print("The response of RTIApi->get_all_rti_transaction_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RTIApi->get_all_rti_transaction_tags_0: %s\n" % e)
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

# **get_rti_transaction_from_employer**
> RtiTransactionBase get_rti_transaction_from_employer(employer_id, rti_transaction_id, authorization, api_version)

Get the RTI transaction

Returns the specified RTI transaction

### Example


```python
import openapi_client
from openapi_client.models.rti_transaction_base import RtiTransactionBase
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
    api_instance = openapi_client.RTIApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    rti_transaction_id = 'rti_transaction_id_example' # str | The RTI transaction unique identifier. E.g. FPS001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get the RTI transaction
        api_response = api_instance.get_rti_transaction_from_employer(employer_id, rti_transaction_id, authorization, api_version)
        print("The response of RTIApi->get_rti_transaction_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RTIApi->get_rti_transaction_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **rti_transaction_id** | **str**| The RTI transaction unique identifier. E.g. FPS001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**RtiTransactionBase**](RtiTransactionBase.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The rti transaction base object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rti_transaction_summaries_from_employer**
> LinkCollection get_rti_transaction_summaries_from_employer(employer_id, authorization, api_version)

Get all RTI transaction summaries for the employer

Get links for all RTI transaction summaries for the specified employer

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
    api_instance = openapi_client.RTIApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all RTI transaction summaries for the employer
        api_response = api_instance.get_rti_transaction_summaries_from_employer(employer_id, authorization, api_version)
        print("The response of RTIApi->get_rti_transaction_summaries_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RTIApi->get_rti_transaction_summaries_from_employer: %s\n" % e)
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

# **get_rti_transaction_summary_from_employer**
> RtiTransactionBase get_rti_transaction_summary_from_employer(employer_id, rti_transaction_id, authorization, api_version)

Get the RTI transaction summary

Returns the specified RTI transaction summary data excluding some poroperties

### Example


```python
import openapi_client
from openapi_client.models.rti_transaction_base import RtiTransactionBase
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
    api_instance = openapi_client.RTIApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    rti_transaction_id = 'rti_transaction_id_example' # str | The RTI transaction unique identifier. E.g. FPS001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get the RTI transaction summary
        api_response = api_instance.get_rti_transaction_summary_from_employer(employer_id, rti_transaction_id, authorization, api_version)
        print("The response of RTIApi->get_rti_transaction_summary_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RTIApi->get_rti_transaction_summary_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **rti_transaction_id** | **str**| The RTI transaction unique identifier. E.g. FPS001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**RtiTransactionBase**](RtiTransactionBase.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The rti transaction base object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_rti_transactions_from_employer**
> LinkCollection get_rti_transactions_from_employer(employer_id, authorization, api_version)

Get all RTI transactions for the employer

Get links for all RTI transactions for the specified employer

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
    api_instance = openapi_client.RTIApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all RTI transactions for the employer
        api_response = api_instance.get_rti_transactions_from_employer(employer_id, authorization, api_version)
        print("The response of RTIApi->get_rti_transactions_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RTIApi->get_rti_transactions_from_employer: %s\n" % e)
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

# **get_rti_transactions_with_tag_0**
> LinkCollection get_rti_transactions_with_tag_0(employer_id, tag_id, authorization, api_version)

Get RTI transactions with tag

Gets the RTI transactions with the tag

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
    api_instance = openapi_client.RTIApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get RTI transactions with tag
        api_response = api_instance.get_rti_transactions_with_tag_0(employer_id, tag_id, authorization, api_version)
        print("The response of RTIApi->get_rti_transactions_with_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RTIApi->get_rti_transactions_with_tag_0: %s\n" % e)
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

