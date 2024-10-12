# openapi_client.HolidaySchemeApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_holiday_scheme**](HolidaySchemeApi.md#delete_holiday_scheme) | **DELETE** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId} | Delete an holiday scheme
[**delete_holiday_scheme_revision**](HolidaySchemeApi.md#delete_holiday_scheme_revision) | **DELETE** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/{EffectiveDate} | Delete an holiday scheme revision matching the specified revision date.
[**delete_holiday_scheme_revision_by_number**](HolidaySchemeApi.md#delete_holiday_scheme_revision_by_number) | **DELETE** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Revision/{RevisionNumber} | Delete an HolidayScheme revision matching the specified revision number.
[**delete_holiday_scheme_tag_0**](HolidaySchemeApi.md#delete_holiday_scheme_tag_0) | **DELETE** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Tag/{TagId} | Delete holiday scheme tag
[**get_all_holiday_scheme_tags_0**](HolidaySchemeApi.md#get_all_holiday_scheme_tags_0) | **GET** /Employer/{EmployerId}/HolidaySchemes/Tags | Get all holiday scheme tags
[**get_holiday_scheme_by_effective_date**](HolidaySchemeApi.md#get_holiday_scheme_by_effective_date) | **GET** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/{EffectiveDate} | Get holiday scheme by effective date.
[**get_holiday_scheme_from_employer**](HolidaySchemeApi.md#get_holiday_scheme_from_employer) | **GET** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId} | Get holiday scheme from employer
[**get_holiday_scheme_revision_by_number**](HolidaySchemeApi.md#get_holiday_scheme_revision_by_number) | **GET** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Revision/{RevisionNumber} | Gets the holiday scheme revision by revision number
[**get_holiday_scheme_revisions**](HolidaySchemeApi.md#get_holiday_scheme_revisions) | **GET** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Revisions | Get all holiday scheme revisions
[**get_holiday_schemes_by_effective_date**](HolidaySchemeApi.md#get_holiday_schemes_by_effective_date) | **GET** /Employer/{EmployerId}/HolidaySchemes/{EffectiveDate} | Get holiday schemes from employer at a given effective date.
[**get_holiday_schemes_from_employer**](HolidaySchemeApi.md#get_holiday_schemes_from_employer) | **GET** /Employer/{EmployerId}/HolidaySchemes | Get holiday schemes from employer.
[**get_holiday_schemes_with_tag_0**](HolidaySchemeApi.md#get_holiday_schemes_with_tag_0) | **GET** /Employer/{EmployerId}/HolidaySchemes/Tag/{TagId} | Get holiday schemes with tag
[**get_tag_from_holiday_scheme_0**](HolidaySchemeApi.md#get_tag_from_holiday_scheme_0) | **GET** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Tag/{TagId} | Get holiday scheme tag
[**get_tag_from_holiday_scheme_revision_0**](HolidaySchemeApi.md#get_tag_from_holiday_scheme_revision_0) | **GET** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Tag/{TagId}/{EffectiveDate} | Get holiday scheme revision tag
[**get_tags_from_holiday_scheme_0**](HolidaySchemeApi.md#get_tags_from_holiday_scheme_0) | **GET** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Tags | Get all tags from the holiday scheme
[**get_tags_from_holiday_scheme_revision_0**](HolidaySchemeApi.md#get_tags_from_holiday_scheme_revision_0) | **GET** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Tags/{EffectiveDate} | Get all holiday scheme revision tags
[**patch_holiday_scheme**](HolidaySchemeApi.md#patch_holiday_scheme) | **PATCH** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId} | Patches the holiday scheme
[**post_holiday_scheme_into_employer**](HolidaySchemeApi.md#post_holiday_scheme_into_employer) | **POST** /Employer/{EmployerId}/HolidaySchemes | Create a new holiday scheme
[**put_holiday_scheme_into_employer**](HolidaySchemeApi.md#put_holiday_scheme_into_employer) | **PUT** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId} | Updates the holiday scheme
[**put_holiday_scheme_tag_0**](HolidaySchemeApi.md#put_holiday_scheme_tag_0) | **PUT** /Employer/{EmployerId}/HolidayScheme/{HolidaySchemeId}/Tag/{TagId} | Insert holiday scheme tag


# **delete_holiday_scheme**
> delete_holiday_scheme(employer_id, holiday_scheme_id, authorization, api_version)

Delete an holiday scheme

Delete the specified holiday scheme

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete an holiday scheme
        api_instance.delete_holiday_scheme(employer_id, holiday_scheme_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->delete_holiday_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
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

# **delete_holiday_scheme_revision**
> delete_holiday_scheme_revision(employer_id, holiday_scheme_id, effective_date, authorization, api_version)

Delete an holiday scheme revision matching the specified revision date.

Deletes the specified holiday scheme revision for the matching revision date

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete an holiday scheme revision matching the specified revision date.
        api_instance.delete_holiday_scheme_revision(employer_id, holiday_scheme_id, effective_date, authorization, api_version)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->delete_holiday_scheme_revision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
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

# **delete_holiday_scheme_revision_by_number**
> delete_holiday_scheme_revision_by_number(employer_id, holiday_scheme_id, revision_number, authorization, api_version)

Delete an HolidayScheme revision matching the specified revision number.

Deletes the specified holiday scheme revision for the matching revision number

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    revision_number = 'revision_number_example' # str | The revision number. E.g. 1
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete an HolidayScheme revision matching the specified revision number.
        api_instance.delete_holiday_scheme_revision_by_number(employer_id, holiday_scheme_id, revision_number, authorization, api_version)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->delete_holiday_scheme_revision_by_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
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

# **delete_holiday_scheme_tag_0**
> delete_holiday_scheme_tag_0(employer_id, holiday_scheme_id, tag_id, authorization, api_version)

Delete holiday scheme tag

Deletes a tag from the holiday scheme

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete holiday scheme tag
        api_instance.delete_holiday_scheme_tag_0(employer_id, holiday_scheme_id, tag_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->delete_holiday_scheme_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
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

# **get_all_holiday_scheme_tags_0**
> LinkCollection get_all_holiday_scheme_tags_0(employer_id, authorization, api_version)

Get all holiday scheme tags

Gets all the holiday scheme tags

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all holiday scheme tags
        api_response = api_instance.get_all_holiday_scheme_tags_0(employer_id, authorization, api_version)
        print("The response of HolidaySchemeApi->get_all_holiday_scheme_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->get_all_holiday_scheme_tags_0: %s\n" % e)
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

# **get_holiday_scheme_by_effective_date**
> HolidayScheme get_holiday_scheme_by_effective_date(employer_id, holiday_scheme_id, effective_date, authorization, api_version)

Get holiday scheme by effective date.

Returns the holiday scheme's state at the specified effective date.

### Example


```python
import openapi_client
from openapi_client.models.holiday_scheme import HolidayScheme
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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get holiday scheme by effective date.
        api_response = api_instance.get_holiday_scheme_by_effective_date(employer_id, holiday_scheme_id, effective_date, authorization, api_version)
        print("The response of HolidaySchemeApi->get_holiday_scheme_by_effective_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->get_holiday_scheme_by_effective_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**HolidayScheme**](HolidayScheme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The holiday scheme object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_holiday_scheme_from_employer**
> HolidayScheme get_holiday_scheme_from_employer(employer_id, holiday_scheme_id, authorization, api_version)

Get holiday scheme from employer

Gets the specified holiday scheme from employer.

### Example


```python
import openapi_client
from openapi_client.models.holiday_scheme import HolidayScheme
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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get holiday scheme from employer
        api_response = api_instance.get_holiday_scheme_from_employer(employer_id, holiday_scheme_id, authorization, api_version)
        print("The response of HolidaySchemeApi->get_holiday_scheme_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->get_holiday_scheme_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**HolidayScheme**](HolidayScheme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The holiday scheme object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_holiday_scheme_revision_by_number**
> HolidayScheme get_holiday_scheme_revision_by_number(employer_id, holiday_scheme_id, revision_number, authorization, api_version)

Gets the holiday scheme revision by revision number

Get the holiday scheme revision matching the specified revision number

### Example


```python
import openapi_client
from openapi_client.models.holiday_scheme import HolidayScheme
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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    revision_number = 'revision_number_example' # str | The revision number. E.g. 1
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the holiday scheme revision by revision number
        api_response = api_instance.get_holiday_scheme_revision_by_number(employer_id, holiday_scheme_id, revision_number, authorization, api_version)
        print("The response of HolidaySchemeApi->get_holiday_scheme_revision_by_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->get_holiday_scheme_revision_by_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
 **revision_number** | **str**| The revision number. E.g. 1 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**HolidayScheme**](HolidayScheme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The holiday scheme object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_holiday_scheme_revisions**
> LinkCollection get_holiday_scheme_revisions(employer_id, holiday_scheme_id, authorization, api_version)

Get all holiday scheme revisions

Gets links to all the holiday scheme revisions

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all holiday scheme revisions
        api_response = api_instance.get_holiday_scheme_revisions(employer_id, holiday_scheme_id, authorization, api_version)
        print("The response of HolidaySchemeApi->get_holiday_scheme_revisions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->get_holiday_scheme_revisions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
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

# **get_holiday_schemes_by_effective_date**
> LinkCollection get_holiday_schemes_by_effective_date(employer_id, effective_date, authorization, api_version)

Get holiday schemes from employer at a given effective date.

Get links to all holiday schemes for the employer on specified effective date.

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get holiday schemes from employer at a given effective date.
        api_response = api_instance.get_holiday_schemes_by_effective_date(employer_id, effective_date, authorization, api_version)
        print("The response of HolidaySchemeApi->get_holiday_schemes_by_effective_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->get_holiday_schemes_by_effective_date: %s\n" % e)
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

# **get_holiday_schemes_from_employer**
> LinkCollection get_holiday_schemes_from_employer(employer_id, authorization, api_version)

Get holiday schemes from employer.

Get links to all holiday schemes for the specified employer.

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get holiday schemes from employer.
        api_response = api_instance.get_holiday_schemes_from_employer(employer_id, authorization, api_version)
        print("The response of HolidaySchemeApi->get_holiday_schemes_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->get_holiday_schemes_from_employer: %s\n" % e)
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

# **get_holiday_schemes_with_tag_0**
> LinkCollection get_holiday_schemes_with_tag_0(employer_id, tag_id, authorization, api_version)

Get holiday schemes with tag

Gets the holiday scheme with the tag

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get holiday schemes with tag
        api_response = api_instance.get_holiday_schemes_with_tag_0(employer_id, tag_id, authorization, api_version)
        print("The response of HolidaySchemeApi->get_holiday_schemes_with_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->get_holiday_schemes_with_tag_0: %s\n" % e)
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

# **get_tag_from_holiday_scheme_0**
> Tag get_tag_from_holiday_scheme_0(employer_id, holiday_scheme_id, tag_id, authorization, api_version)

Get holiday scheme tag

Gets the tag from the holiday scheme

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get holiday scheme tag
        api_response = api_instance.get_tag_from_holiday_scheme_0(employer_id, holiday_scheme_id, tag_id, authorization, api_version)
        print("The response of HolidaySchemeApi->get_tag_from_holiday_scheme_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->get_tag_from_holiday_scheme_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
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

# **get_tag_from_holiday_scheme_revision_0**
> Tag get_tag_from_holiday_scheme_revision_0(employer_id, holiday_scheme_id, tag_id, effective_date, authorization, api_version)

Get holiday scheme revision tag

Gets the tag from the holiday scheme revision

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get holiday scheme revision tag
        api_response = api_instance.get_tag_from_holiday_scheme_revision_0(employer_id, holiday_scheme_id, tag_id, effective_date, authorization, api_version)
        print("The response of HolidaySchemeApi->get_tag_from_holiday_scheme_revision_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->get_tag_from_holiday_scheme_revision_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
 **tag_id** | **str**| The tag unique identifier. E.g. MyTag | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
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

# **get_tags_from_holiday_scheme_0**
> LinkCollection get_tags_from_holiday_scheme_0(employer_id, holiday_scheme_id, authorization, api_version)

Get all tags from the holiday scheme

Gets all the tags from the holiday scheme

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all tags from the holiday scheme
        api_response = api_instance.get_tags_from_holiday_scheme_0(employer_id, holiday_scheme_id, authorization, api_version)
        print("The response of HolidaySchemeApi->get_tags_from_holiday_scheme_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->get_tags_from_holiday_scheme_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
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

# **get_tags_from_holiday_scheme_revision_0**
> LinkCollection get_tags_from_holiday_scheme_revision_0(employer_id, holiday_scheme_id, effective_date, authorization, api_version)

Get all holiday scheme revision tags

Gets all the tags from the holiday scheme revision

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all holiday scheme revision tags
        api_response = api_instance.get_tags_from_holiday_scheme_revision_0(employer_id, holiday_scheme_id, effective_date, authorization, api_version)
        print("The response of HolidaySchemeApi->get_tags_from_holiday_scheme_revision_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->get_tags_from_holiday_scheme_revision_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
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

# **patch_holiday_scheme**
> HolidayScheme patch_holiday_scheme(employer_id, holiday_scheme_id, authorization, api_version, holiday_scheme)

Patches the holiday scheme

Patches the specified holiday scheme with the supplied values

### Example


```python
import openapi_client
from openapi_client.models.holiday_scheme import HolidayScheme
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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    holiday_scheme = openapi_client.HolidayScheme() # HolidayScheme | The holiday scheme object.

    try:
        # Patches the holiday scheme
        api_response = api_instance.patch_holiday_scheme(employer_id, holiday_scheme_id, authorization, api_version, holiday_scheme)
        print("The response of HolidaySchemeApi->patch_holiday_scheme:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->patch_holiday_scheme: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **holiday_scheme** | [**HolidayScheme**](HolidayScheme.md)| The holiday scheme object. | 

### Return type

[**HolidayScheme**](HolidayScheme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The holiday scheme object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_holiday_scheme_into_employer**
> Link post_holiday_scheme_into_employer(employer_id, authorization, api_version, holiday_scheme)

Create a new holiday scheme

Create a new holiday scheme object

### Example


```python
import openapi_client
from openapi_client.models.holiday_scheme import HolidayScheme
from openapi_client.models.link import Link
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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    holiday_scheme = openapi_client.HolidayScheme() # HolidayScheme | The holiday scheme object.

    try:
        # Create a new holiday scheme
        api_response = api_instance.post_holiday_scheme_into_employer(employer_id, authorization, api_version, holiday_scheme)
        print("The response of HolidaySchemeApi->post_holiday_scheme_into_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->post_holiday_scheme_into_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **holiday_scheme** | [**HolidayScheme**](HolidayScheme.md)| The holiday scheme object. | 

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

# **put_holiday_scheme_into_employer**
> HolidayScheme put_holiday_scheme_into_employer(employer_id, holiday_scheme_id, authorization, api_version, holiday_scheme)

Updates the holiday scheme

Updates the existing specified holiday scheme object

### Example


```python
import openapi_client
from openapi_client.models.holiday_scheme import HolidayScheme
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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    holiday_scheme = openapi_client.HolidayScheme() # HolidayScheme | The holiday scheme object.

    try:
        # Updates the holiday scheme
        api_response = api_instance.put_holiday_scheme_into_employer(employer_id, holiday_scheme_id, authorization, api_version, holiday_scheme)
        print("The response of HolidaySchemeApi->put_holiday_scheme_into_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->put_holiday_scheme_into_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **holiday_scheme** | [**HolidayScheme**](HolidayScheme.md)| The holiday scheme object. | 

### Return type

[**HolidayScheme**](HolidayScheme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The holiday scheme object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_holiday_scheme_tag_0**
> Tag put_holiday_scheme_tag_0(employer_id, holiday_scheme_id, tag_id, authorization, api_version)

Insert holiday scheme tag

Inserts a new tag on the holiday scheme

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
    api_instance = openapi_client.HolidaySchemeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    holiday_scheme_id = 'holiday_scheme_id_example' # str | The holiday schemes' unique identifier. E.g HOLSCH001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Insert holiday scheme tag
        api_response = api_instance.put_holiday_scheme_tag_0(employer_id, holiday_scheme_id, tag_id, authorization, api_version)
        print("The response of HolidaySchemeApi->put_holiday_scheme_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HolidaySchemeApi->put_holiday_scheme_tag_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **holiday_scheme_id** | **str**| The holiday schemes&#39; unique identifier. E.g HOLSCH001 | 
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

