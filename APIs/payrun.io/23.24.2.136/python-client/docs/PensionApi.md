# openapi_client.PensionApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_pension**](PensionApi.md#delete_pension) | **DELETE** /Employer/{EmployerId}/Pension/{PensionId} | Delete a Pension
[**delete_pension_revision**](PensionApi.md#delete_pension_revision) | **DELETE** /Employer/{EmployerId}/Pension/{PensionId}/{EffectiveDate} | Delete an Pension revision matching the specified revision date.
[**delete_pension_revision_by_number**](PensionApi.md#delete_pension_revision_by_number) | **DELETE** /Employer/{EmployerId}/Pension/{PensionId}/Revision/{RevisionNumber} | Delete an Pension revision matching the specified revision number.
[**get_pension_by_effective_date**](PensionApi.md#get_pension_by_effective_date) | **GET** /Employer/{EmployerId}/Pension/{PensionId}/{EffectiveDate} | Get pension by effective date.
[**get_pension_from_employer**](PensionApi.md#get_pension_from_employer) | **GET** /Employer/{EmployerId}/Pension/{PensionId} | Get pension from employer
[**get_pension_revision_by_number**](PensionApi.md#get_pension_revision_by_number) | **GET** /Employer/{EmployerId}/Pension/{PensionId}/Revision/{RevisionNumber} | Gets the pension by revision number
[**get_pension_revisions**](PensionApi.md#get_pension_revisions) | **GET** /Employer/{EmployerId}/Pension/{PensionId}/Revisions | Get all pension revisions
[**get_pensions_by_effective_date**](PensionApi.md#get_pensions_by_effective_date) | **GET** /Employer/{EmployerId}/Pensions/{EffectiveDate} | Get pensions from employer at a given effective date.
[**get_pensions_from_employer**](PensionApi.md#get_pensions_from_employer) | **GET** /Employer/{EmployerId}/Pensions | Get pensions from employer.
[**patch_pension**](PensionApi.md#patch_pension) | **PATCH** /Employer/{EmployerId}/Pension/{PensionId} | Patches the pension
[**post_pension_into_employer**](PensionApi.md#post_pension_into_employer) | **POST** /Employer/{EmployerId}/Pensions | Create a new Pension
[**put_pension_into_employer**](PensionApi.md#put_pension_into_employer) | **PUT** /Employer/{EmployerId}/Pension/{PensionId} | Updates the Pension


# **delete_pension**
> delete_pension(employer_id, pension_id, authorization, api_version)

Delete a Pension

Delete the specified ppension

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
    api_instance = openapi_client.PensionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pension_id = 'pension_id_example' # str | The pensions' unique identifier. E.g PEN001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete a Pension
        api_instance.delete_pension(employer_id, pension_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling PensionApi->delete_pension: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pension_id** | **str**| The pensions&#39; unique identifier. E.g PEN001 | 
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

# **delete_pension_revision**
> delete_pension_revision(employer_id, pension_id, effective_date, authorization, api_version)

Delete an Pension revision matching the specified revision date.

Deletes the specified pension revision for the matching revision date

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
    api_instance = openapi_client.PensionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pension_id = 'pension_id_example' # str | The pensions' unique identifier. E.g PEN001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete an Pension revision matching the specified revision date.
        api_instance.delete_pension_revision(employer_id, pension_id, effective_date, authorization, api_version)
    except Exception as e:
        print("Exception when calling PensionApi->delete_pension_revision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pension_id** | **str**| The pensions&#39; unique identifier. E.g PEN001 | 
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

# **delete_pension_revision_by_number**
> delete_pension_revision_by_number(employer_id, pension_id, revision_number, authorization, api_version)

Delete an Pension revision matching the specified revision number.

Deletes the specified pension revision for the matching revision number

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
    api_instance = openapi_client.PensionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pension_id = 'pension_id_example' # str | The pensions' unique identifier. E.g PEN001
    revision_number = 'revision_number_example' # str | The revision number. E.g. 1
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete an Pension revision matching the specified revision number.
        api_instance.delete_pension_revision_by_number(employer_id, pension_id, revision_number, authorization, api_version)
    except Exception as e:
        print("Exception when calling PensionApi->delete_pension_revision_by_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pension_id** | **str**| The pensions&#39; unique identifier. E.g PEN001 | 
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

# **get_pension_by_effective_date**
> Pension get_pension_by_effective_date(employer_id, pension_id, effective_date, authorization, api_version)

Get pension by effective date.

Returns the penion's state at the specified effective date.

### Example


```python
import openapi_client
from openapi_client.models.pension import Pension
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
    api_instance = openapi_client.PensionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pension_id = 'pension_id_example' # str | The pensions' unique identifier. E.g PEN001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get pension by effective date.
        api_response = api_instance.get_pension_by_effective_date(employer_id, pension_id, effective_date, authorization, api_version)
        print("The response of PensionApi->get_pension_by_effective_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PensionApi->get_pension_by_effective_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pension_id** | **str**| The pensions&#39; unique identifier. E.g PEN001 | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Pension**](Pension.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pension object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pension_from_employer**
> Pension get_pension_from_employer(employer_id, pension_id, authorization, api_version)

Get pension from employer

Gets the specified pension from employer by pension code.

### Example


```python
import openapi_client
from openapi_client.models.pension import Pension
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
    api_instance = openapi_client.PensionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pension_id = 'pension_id_example' # str | The pensions' unique identifier. E.g PEN001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get pension from employer
        api_response = api_instance.get_pension_from_employer(employer_id, pension_id, authorization, api_version)
        print("The response of PensionApi->get_pension_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PensionApi->get_pension_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pension_id** | **str**| The pensions&#39; unique identifier. E.g PEN001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Pension**](Pension.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pension object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pension_revision_by_number**
> Pension get_pension_revision_by_number(employer_id, pension_id, revision_number, authorization, api_version)

Gets the pension by revision number

Get the pension revision matching the specified revision number

### Example


```python
import openapi_client
from openapi_client.models.pension import Pension
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
    api_instance = openapi_client.PensionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pension_id = 'pension_id_example' # str | The pensions' unique identifier. E.g PEN001
    revision_number = 'revision_number_example' # str | The revision number. E.g. 1
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the pension by revision number
        api_response = api_instance.get_pension_revision_by_number(employer_id, pension_id, revision_number, authorization, api_version)
        print("The response of PensionApi->get_pension_revision_by_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PensionApi->get_pension_revision_by_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pension_id** | **str**| The pensions&#39; unique identifier. E.g PEN001 | 
 **revision_number** | **str**| The revision number. E.g. 1 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**Pension**](Pension.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pension object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pension_revisions**
> LinkCollection get_pension_revisions(employer_id, pension_id, authorization, api_version)

Get all pension revisions

Returns links to all revisions of the pension

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
    api_instance = openapi_client.PensionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pension_id = 'pension_id_example' # str | The pensions' unique identifier. E.g PEN001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all pension revisions
        api_response = api_instance.get_pension_revisions(employer_id, pension_id, authorization, api_version)
        print("The response of PensionApi->get_pension_revisions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PensionApi->get_pension_revisions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pension_id** | **str**| The pensions&#39; unique identifier. E.g PEN001 | 
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

# **get_pensions_by_effective_date**
> LinkCollection get_pensions_by_effective_date(employer_id, effective_date, authorization, api_version)

Get pensions from employer at a given effective date.

Get links to all pensions for the employer on specified effective date.

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
    api_instance = openapi_client.PensionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get pensions from employer at a given effective date.
        api_response = api_instance.get_pensions_by_effective_date(employer_id, effective_date, authorization, api_version)
        print("The response of PensionApi->get_pensions_by_effective_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PensionApi->get_pensions_by_effective_date: %s\n" % e)
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

# **get_pensions_from_employer**
> LinkCollection get_pensions_from_employer(employer_id, authorization, api_version)

Get pensions from employer.

Get links to all pensions for the specified employer.

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
    api_instance = openapi_client.PensionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get pensions from employer.
        api_response = api_instance.get_pensions_from_employer(employer_id, authorization, api_version)
        print("The response of PensionApi->get_pensions_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PensionApi->get_pensions_from_employer: %s\n" % e)
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

# **patch_pension**
> Pension patch_pension(employer_id, pension_id, authorization, api_version, pension)

Patches the pension

Patches the specified pension with the supplied values

### Example


```python
import openapi_client
from openapi_client.models.pension import Pension
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
    api_instance = openapi_client.PensionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pension_id = 'pension_id_example' # str | The pensions' unique identifier. E.g PEN001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    pension = openapi_client.Pension() # Pension | The pension object.

    try:
        # Patches the pension
        api_response = api_instance.patch_pension(employer_id, pension_id, authorization, api_version, pension)
        print("The response of PensionApi->patch_pension:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PensionApi->patch_pension: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pension_id** | **str**| The pensions&#39; unique identifier. E.g PEN001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **pension** | [**Pension**](Pension.md)| The pension object. | 

### Return type

[**Pension**](Pension.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pension object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_pension_into_employer**
> Link post_pension_into_employer(employer_id, authorization, api_version, pension)

Create a new Pension

Create a new pension object

### Example


```python
import openapi_client
from openapi_client.models.link import Link
from openapi_client.models.pension import Pension
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
    api_instance = openapi_client.PensionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    pension = openapi_client.Pension() # Pension | The pension object.

    try:
        # Create a new Pension
        api_response = api_instance.post_pension_into_employer(employer_id, authorization, api_version, pension)
        print("The response of PensionApi->post_pension_into_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PensionApi->post_pension_into_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **pension** | [**Pension**](Pension.md)| The pension object. | 

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

# **put_pension_into_employer**
> Pension put_pension_into_employer(employer_id, pension_id, authorization, api_version, pension)

Updates the Pension

Updates existing or inserts the specified pension object

### Example


```python
import openapi_client
from openapi_client.models.pension import Pension
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
    api_instance = openapi_client.PensionApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pension_id = 'pension_id_example' # str | The pensions' unique identifier. E.g PEN001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    pension = openapi_client.Pension() # Pension | The pension object.

    try:
        # Updates the Pension
        api_response = api_instance.put_pension_into_employer(employer_id, pension_id, authorization, api_version, pension)
        print("The response of PensionApi->put_pension_into_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PensionApi->put_pension_into_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pension_id** | **str**| The pensions&#39; unique identifier. E.g PEN001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **pension** | [**Pension**](Pension.md)| The pension object. | 

### Return type

[**Pension**](Pension.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pension object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

