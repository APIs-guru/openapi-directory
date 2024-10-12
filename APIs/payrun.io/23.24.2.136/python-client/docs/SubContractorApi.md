# openapi_client.SubContractorApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_sub_contractor**](SubContractorApi.md#delete_sub_contractor) | **DELETE** /Employer/{EmployerId}/SubContractor/{SubContractorId} | Delete an sub contractor
[**delete_sub_contractor_revision**](SubContractorApi.md#delete_sub_contractor_revision) | **DELETE** /Employer/{EmployerId}/SubContractor/{SubContractorId}/{EffectiveDate} | Delete an sub contractor revision matching the specified revision date.
[**delete_sub_contractor_revision_by_number**](SubContractorApi.md#delete_sub_contractor_revision_by_number) | **DELETE** /Employer/{EmployerId}/SubContractor/{SubContractorId}/Revision/{RevisionNumber} | Delete an SubContractor revision matching the specified revision number.
[**get_sub_contractor_by_effective_date**](SubContractorApi.md#get_sub_contractor_by_effective_date) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/{EffectiveDate} | Get sub contractor by effective date.
[**get_sub_contractor_from_employer**](SubContractorApi.md#get_sub_contractor_from_employer) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId} | Get sub contractor from employer
[**get_sub_contractor_revision_by_number**](SubContractorApi.md#get_sub_contractor_revision_by_number) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/Revision/{RevisionNumber} | Gets the sub contractor by revision number
[**get_sub_contractor_revisions**](SubContractorApi.md#get_sub_contractor_revisions) | **GET** /Employer/{EmployerId}/SubContractor/{SubContractorId}/Revisions | Get all sub contractor revisions
[**get_sub_contractors_by_effective_date**](SubContractorApi.md#get_sub_contractors_by_effective_date) | **GET** /Employer/{EmployerId}/SubContractors/{EffectiveDate} | Get sub contractors from employer at a given effective date.
[**get_sub_contractors_from_employer**](SubContractorApi.md#get_sub_contractors_from_employer) | **GET** /Employer/{EmployerId}/SubContractors | Get sub contractors from employer.
[**patch_sub_contractor**](SubContractorApi.md#patch_sub_contractor) | **PATCH** /Employer/{EmployerId}/SubContractor/{SubContractorId} | Patches the sub contractor
[**post_sub_contractor_into_employer**](SubContractorApi.md#post_sub_contractor_into_employer) | **POST** /Employer/{EmployerId}/SubContractors | Create a new sub contractor
[**put_sub_contractor_into_employer**](SubContractorApi.md#put_sub_contractor_into_employer) | **PUT** /Employer/{EmployerId}/SubContractor/{SubContractorId} | Updates the sub contractor


# **delete_sub_contractor**
> delete_sub_contractor(employer_id, sub_contractor_id, authorization, api_version)

Delete an sub contractor

Delete the specified sub contractor

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
    api_instance = openapi_client.SubContractorApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete an sub contractor
        api_instance.delete_sub_contractor(employer_id, sub_contractor_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling SubContractorApi->delete_sub_contractor: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
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
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_sub_contractor_revision**
> delete_sub_contractor_revision(employer_id, sub_contractor_id, effective_date, authorization, api_version)

Delete an sub contractor revision matching the specified revision date.

Deletes the specified sub contractor revision for the matching revision date

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
    api_instance = openapi_client.SubContractorApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete an sub contractor revision matching the specified revision date.
        api_instance.delete_sub_contractor_revision(employer_id, sub_contractor_id, effective_date, authorization, api_version)
    except Exception as e:
        print("Exception when calling SubContractorApi->delete_sub_contractor_revision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
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
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_sub_contractor_revision_by_number**
> delete_sub_contractor_revision_by_number(employer_id, sub_contractor_id, revision_number, authorization, api_version)

Delete an SubContractor revision matching the specified revision number.

Deletes the specified sub contractor revision for the matching revision number

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
    api_instance = openapi_client.SubContractorApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    revision_number = 'revision_number_example' # str | The revision number. E.g. 1
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete an SubContractor revision matching the specified revision number.
        api_instance.delete_sub_contractor_revision_by_number(employer_id, sub_contractor_id, revision_number, authorization, api_version)
    except Exception as e:
        print("Exception when calling SubContractorApi->delete_sub_contractor_revision_by_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **revision_number** | **str**| The revision number. E.g. 1 | 
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
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sub_contractor_by_effective_date**
> SubContractor get_sub_contractor_by_effective_date(employer_id, sub_contractor_id, effective_date, authorization, api_version)

Get sub contractor by effective date.

Returns the sub contractor's state at the specified effective date.

### Example


```python
import openapi_client
from openapi_client.models.sub_contractor import SubContractor
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
    api_instance = openapi_client.SubContractorApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get sub contractor by effective date.
        api_response = api_instance.get_sub_contractor_by_effective_date(employer_id, sub_contractor_id, effective_date, authorization, api_version)
        print("The response of SubContractorApi->get_sub_contractor_by_effective_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubContractorApi->get_sub_contractor_by_effective_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**SubContractor**](SubContractor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The sub contractor object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sub_contractor_from_employer**
> SubContractor get_sub_contractor_from_employer(employer_id, sub_contractor_id, authorization, api_version)

Get sub contractor from employer

Gets the specified sub contractor from employer.

### Example


```python
import openapi_client
from openapi_client.models.sub_contractor import SubContractor
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
    api_instance = openapi_client.SubContractorApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get sub contractor from employer
        api_response = api_instance.get_sub_contractor_from_employer(employer_id, sub_contractor_id, authorization, api_version)
        print("The response of SubContractorApi->get_sub_contractor_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubContractorApi->get_sub_contractor_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**SubContractor**](SubContractor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The sub contractor object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sub_contractor_revision_by_number**
> SubContractor get_sub_contractor_revision_by_number(employer_id, sub_contractor_id, revision_number, authorization, api_version)

Gets the sub contractor by revision number

Get the sub contractor revision matching the specified revision number

### Example


```python
import openapi_client
from openapi_client.models.sub_contractor import SubContractor
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
    api_instance = openapi_client.SubContractorApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    revision_number = 'revision_number_example' # str | The revision number. E.g. 1
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the sub contractor by revision number
        api_response = api_instance.get_sub_contractor_revision_by_number(employer_id, sub_contractor_id, revision_number, authorization, api_version)
        print("The response of SubContractorApi->get_sub_contractor_revision_by_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubContractorApi->get_sub_contractor_revision_by_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **revision_number** | **str**| The revision number. E.g. 1 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**SubContractor**](SubContractor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The sub contractor object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_sub_contractor_revisions**
> LinkCollection get_sub_contractor_revisions(employer_id, sub_contractor_id, authorization, api_version)

Get all sub contractor revisions

Gets links to all the sub contractor revisions

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
    api_instance = openapi_client.SubContractorApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all sub contractor revisions
        api_response = api_instance.get_sub_contractor_revisions(employer_id, sub_contractor_id, authorization, api_version)
        print("The response of SubContractorApi->get_sub_contractor_revisions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubContractorApi->get_sub_contractor_revisions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
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

# **get_sub_contractors_by_effective_date**
> LinkCollection get_sub_contractors_by_effective_date(employer_id, effective_date, authorization, api_version)

Get sub contractors from employer at a given effective date.

Get links to all sub contractors for the employer on specified effective date.

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
    api_instance = openapi_client.SubContractorApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get sub contractors from employer at a given effective date.
        api_response = api_instance.get_sub_contractors_by_effective_date(employer_id, effective_date, authorization, api_version)
        print("The response of SubContractorApi->get_sub_contractors_by_effective_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubContractorApi->get_sub_contractors_by_effective_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
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

# **get_sub_contractors_from_employer**
> LinkCollection get_sub_contractors_from_employer(employer_id, authorization, api_version)

Get sub contractors from employer.

Get links to all sub contractors for the specified employer.

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
    api_instance = openapi_client.SubContractorApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get sub contractors from employer.
        api_response = api_instance.get_sub_contractors_from_employer(employer_id, authorization, api_version)
        print("The response of SubContractorApi->get_sub_contractors_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubContractorApi->get_sub_contractors_from_employer: %s\n" % e)
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

# **patch_sub_contractor**
> SubContractor patch_sub_contractor(employer_id, sub_contractor_id, authorization, api_version, sub_contractor)

Patches the sub contractor

Patches the specified sub contractor with the supplied values

### Example


```python
import openapi_client
from openapi_client.models.sub_contractor import SubContractor
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
    api_instance = openapi_client.SubContractorApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    sub_contractor = openapi_client.SubContractor() # SubContractor | The sub contractor object.

    try:
        # Patches the sub contractor
        api_response = api_instance.patch_sub_contractor(employer_id, sub_contractor_id, authorization, api_version, sub_contractor)
        print("The response of SubContractorApi->patch_sub_contractor:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubContractorApi->patch_sub_contractor: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **sub_contractor** | [**SubContractor**](SubContractor.md)| The sub contractor object. | 

### Return type

[**SubContractor**](SubContractor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The sub contractor object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_sub_contractor_into_employer**
> Link post_sub_contractor_into_employer(employer_id, authorization, api_version, sub_contractor)

Create a new sub contractor

Create a new sub contractor object

### Example


```python
import openapi_client
from openapi_client.models.link import Link
from openapi_client.models.sub_contractor import SubContractor
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
    api_instance = openapi_client.SubContractorApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    sub_contractor = openapi_client.SubContractor() # SubContractor | The sub contractor object.

    try:
        # Create a new sub contractor
        api_response = api_instance.post_sub_contractor_into_employer(employer_id, authorization, api_version, sub_contractor)
        print("The response of SubContractorApi->post_sub_contractor_into_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubContractorApi->post_sub_contractor_into_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **sub_contractor** | [**SubContractor**](SubContractor.md)| The sub contractor object. | 

### Return type

[**Link**](Link.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The link object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_sub_contractor_into_employer**
> SubContractor put_sub_contractor_into_employer(employer_id, sub_contractor_id, authorization, api_version, sub_contractor)

Updates the sub contractor

Updates the existing specified sub contractor object

### Example


```python
import openapi_client
from openapi_client.models.sub_contractor import SubContractor
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
    api_instance = openapi_client.SubContractorApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    sub_contractor_id = 'sub_contractor_id_example' # str | The sub contractors' unique identifier. E.g SUB001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    sub_contractor = openapi_client.SubContractor() # SubContractor | The sub contractor object.

    try:
        # Updates the sub contractor
        api_response = api_instance.put_sub_contractor_into_employer(employer_id, sub_contractor_id, authorization, api_version, sub_contractor)
        print("The response of SubContractorApi->put_sub_contractor_into_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SubContractorApi->put_sub_contractor_into_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **sub_contractor_id** | **str**| The sub contractors&#39; unique identifier. E.g SUB001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **sub_contractor** | [**SubContractor**](SubContractor.md)| The sub contractor object. | 

### Return type

[**SubContractor**](SubContractor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The sub contractor object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

