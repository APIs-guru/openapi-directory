# openapi_client.PayCodeApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_pay_code**](PayCodeApi.md#delete_pay_code) | **DELETE** /Employer/{EmployerId}/PayCode/{PayCodeId} | Deletes a pay code
[**delete_pay_code_revision**](PayCodeApi.md#delete_pay_code_revision) | **DELETE** /Employer/{EmployerId}/PayCode/{PayCodeId}/{EffectiveDate} | Deletes a pay code revision
[**delete_pay_code_revision_by_number**](PayCodeApi.md#delete_pay_code_revision_by_number) | **DELETE** /Employer/{EmployerId}/PayCode/{PayCodeId}/Revision/{RevisionNumber} | Delete an PayCode revision matching the specified revision number.
[**get_all_pay_code_tags_0**](PayCodeApi.md#get_all_pay_code_tags_0) | **GET** /Employer/{EmployerId}/PayCodes/Tags | Get all pay code tags
[**get_pay_code_by_effective_date**](PayCodeApi.md#get_pay_code_by_effective_date) | **GET** /Employer/{EmployerId}/PayCode/{PayCodeId}/{EffectiveDate} | Gets pay code for specified date
[**get_pay_code_from_employer**](PayCodeApi.md#get_pay_code_from_employer) | **GET** /Employer/{EmployerId}/PayCode/{PayCodeId} | Gets the specified pay code from the employer
[**get_pay_code_revision_by_number**](PayCodeApi.md#get_pay_code_revision_by_number) | **GET** /Employer/{EmployerId}/PayCode/{PayCodeId}/Revision/{RevisionNumber} | Gets the pay code by revision number
[**get_pay_code_revisions**](PayCodeApi.md#get_pay_code_revisions) | **GET** /Employer/{EmployerId}/PayCode/{PayCodeId}/Revisions | Get all revisions of the Pay Code
[**get_pay_codes_by_effective_date**](PayCodeApi.md#get_pay_codes_by_effective_date) | **GET** /Employer/{EmployerId}/PayCodes/{EffectiveDate} | Gets all pay codes for specified date
[**get_pay_codes_from_employer**](PayCodeApi.md#get_pay_codes_from_employer) | **GET** /Employer/{EmployerId}/PayCodes | Gets the pay codes from the employer
[**get_pay_codes_from_nominal_code**](PayCodeApi.md#get_pay_codes_from_nominal_code) | **GET** /Employer/{EmployerId}/NominalCode/{NominalCodeId}/PayCodes | Gets the pay codes by nominal code
[**get_pay_codes_with_tag_0**](PayCodeApi.md#get_pay_codes_with_tag_0) | **GET** /Employer/{EmployerId}/PayCodes/Tag/{TagId} | Get pay codes with tag
[**patch_pay_code**](PayCodeApi.md#patch_pay_code) | **PATCH** /Employer/{EmployerId}/PayCode/{PayCodeId} | Patches the pay code
[**post_pay_code**](PayCodeApi.md#post_pay_code) | **POST** /Employer/{EmployerId}/PayCodes | Create a new pay code
[**put_pay_code**](PayCodeApi.md#put_pay_code) | **PUT** /Employer/{EmployerId}/PayCode/{PayCodeId} | Updates a pay code


# **delete_pay_code**
> delete_pay_code(employer_id, pay_code_id, authorization, api_version)

Deletes a pay code

Delete the specified pay code

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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_code_id = 'pay_code_id_example' # str | The pay code unique identifier. E.g. BASIC
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Deletes a pay code
        api_instance.delete_pay_code(employer_id, pay_code_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling PayCodeApi->delete_pay_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_code_id** | **str**| The pay code unique identifier. E.g. BASIC | 
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

# **delete_pay_code_revision**
> delete_pay_code_revision(employer_id, pay_code_id, effective_date, authorization, api_version)

Deletes a pay code revision

Delete the pay code revision for the specified date

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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_code_id = 'pay_code_id_example' # str | The pay code unique identifier. E.g. BASIC
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Deletes a pay code revision
        api_instance.delete_pay_code_revision(employer_id, pay_code_id, effective_date, authorization, api_version)
    except Exception as e:
        print("Exception when calling PayCodeApi->delete_pay_code_revision: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_code_id** | **str**| The pay code unique identifier. E.g. BASIC | 
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

# **delete_pay_code_revision_by_number**
> delete_pay_code_revision_by_number(employer_id, pay_code_id, revision_number, authorization, api_version)

Delete an PayCode revision matching the specified revision number.

Deletes the specified pay code revision for the matching revision number

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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_code_id = 'pay_code_id_example' # str | The pay code unique identifier. E.g. BASIC
    revision_number = 'revision_number_example' # str | The revision number. E.g. 1
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Delete an PayCode revision matching the specified revision number.
        api_instance.delete_pay_code_revision_by_number(employer_id, pay_code_id, revision_number, authorization, api_version)
    except Exception as e:
        print("Exception when calling PayCodeApi->delete_pay_code_revision_by_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_code_id** | **str**| The pay code unique identifier. E.g. BASIC | 
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

# **get_all_pay_code_tags_0**
> LinkCollection get_all_pay_code_tags_0(employer_id, authorization, api_version)

Get all pay code tags

Gets all the pay code tags

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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all pay code tags
        api_response = api_instance.get_all_pay_code_tags_0(employer_id, authorization, api_version)
        print("The response of PayCodeApi->get_all_pay_code_tags_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayCodeApi->get_all_pay_code_tags_0: %s\n" % e)
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

# **get_pay_code_by_effective_date**
> PayCode get_pay_code_by_effective_date(employer_id, pay_code_id, effective_date, authorization, api_version)

Gets pay code for specified date

Gets the pay code revision for the specified effective date

### Example


```python
import openapi_client
from openapi_client.models.pay_code import PayCode
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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_code_id = 'pay_code_id_example' # str | The pay code unique identifier. E.g. BASIC
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets pay code for specified date
        api_response = api_instance.get_pay_code_by_effective_date(employer_id, pay_code_id, effective_date, authorization, api_version)
        print("The response of PayCodeApi->get_pay_code_by_effective_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayCodeApi->get_pay_code_by_effective_date: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_code_id** | **str**| The pay code unique identifier. E.g. BASIC | 
 **effective_date** | **date**| The effective date to be applied. E.g 2016-04-06 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**PayCode**](PayCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pay code object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pay_code_from_employer**
> PayCode get_pay_code_from_employer(employer_id, pay_code_id, authorization, api_version)

Gets the specified pay code from the employer

Returns the specified pay code from the employer

### Example


```python
import openapi_client
from openapi_client.models.pay_code import PayCode
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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_code_id = 'pay_code_id_example' # str | The pay code unique identifier. E.g. BASIC
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the specified pay code from the employer
        api_response = api_instance.get_pay_code_from_employer(employer_id, pay_code_id, authorization, api_version)
        print("The response of PayCodeApi->get_pay_code_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayCodeApi->get_pay_code_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_code_id** | **str**| The pay code unique identifier. E.g. BASIC | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**PayCode**](PayCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pay code object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pay_code_revision_by_number**
> PayCode get_pay_code_revision_by_number(employer_id, pay_code_id, revision_number, authorization, api_version)

Gets the pay code by revision number

Get the pay code revision matching the specified revision number

### Example


```python
import openapi_client
from openapi_client.models.pay_code import PayCode
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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_code_id = 'pay_code_id_example' # str | The pay code unique identifier. E.g. BASIC
    revision_number = 'revision_number_example' # str | The revision number. E.g. 1
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the pay code by revision number
        api_response = api_instance.get_pay_code_revision_by_number(employer_id, pay_code_id, revision_number, authorization, api_version)
        print("The response of PayCodeApi->get_pay_code_revision_by_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayCodeApi->get_pay_code_revision_by_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_code_id** | **str**| The pay code unique identifier. E.g. BASIC | 
 **revision_number** | **str**| The revision number. E.g. 1 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**PayCode**](PayCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pay code object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_pay_code_revisions**
> LinkCollection get_pay_code_revisions(employer_id, pay_code_id, authorization, api_version)

Get all revisions of the Pay Code

Returns links to all revisions of the pay code

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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_code_id = 'pay_code_id_example' # str | The pay code unique identifier. E.g. BASIC
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get all revisions of the Pay Code
        api_response = api_instance.get_pay_code_revisions(employer_id, pay_code_id, authorization, api_version)
        print("The response of PayCodeApi->get_pay_code_revisions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayCodeApi->get_pay_code_revisions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_code_id** | **str**| The pay code unique identifier. E.g. BASIC | 
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

# **get_pay_codes_by_effective_date**
> LinkCollection get_pay_codes_by_effective_date(employer_id, effective_date, authorization, api_version)

Gets all pay codes for specified date

Gets the effective pay code revision for the specified date

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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    effective_date = '2013-10-20' # date | The effective date to be applied. E.g 2016-04-06
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets all pay codes for specified date
        api_response = api_instance.get_pay_codes_by_effective_date(employer_id, effective_date, authorization, api_version)
        print("The response of PayCodeApi->get_pay_codes_by_effective_date:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayCodeApi->get_pay_codes_by_effective_date: %s\n" % e)
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

# **get_pay_codes_from_employer**
> LinkCollection get_pay_codes_from_employer(employer_id, authorization, api_version)

Gets the pay codes from the employer

Get links to all the pay codes for the specified employer

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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the pay codes from the employer
        api_response = api_instance.get_pay_codes_from_employer(employer_id, authorization, api_version)
        print("The response of PayCodeApi->get_pay_codes_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayCodeApi->get_pay_codes_from_employer: %s\n" % e)
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

# **get_pay_codes_from_nominal_code**
> LinkCollection get_pay_codes_from_nominal_code(employer_id, nominal_code_id, authorization, api_version)

Gets the pay codes by nominal code

Get the pay codes that share the specified nominal code

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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    nominal_code_id = 'nominal_code_id_example' # str | The nominal code unique identifier. E.g. NOM001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the pay codes by nominal code
        api_response = api_instance.get_pay_codes_from_nominal_code(employer_id, nominal_code_id, authorization, api_version)
        print("The response of PayCodeApi->get_pay_codes_from_nominal_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayCodeApi->get_pay_codes_from_nominal_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **nominal_code_id** | **str**| The nominal code unique identifier. E.g. NOM001 | 
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

# **get_pay_codes_with_tag_0**
> LinkCollection get_pay_codes_with_tag_0(employer_id, tag_id, authorization, api_version)

Get pay codes with tag

Gets the pay codes with the tag

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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    tag_id = 'tag_id_example' # str | The tag unique identifier. E.g. MyTag
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Get pay codes with tag
        api_response = api_instance.get_pay_codes_with_tag_0(employer_id, tag_id, authorization, api_version)
        print("The response of PayCodeApi->get_pay_codes_with_tag_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayCodeApi->get_pay_codes_with_tag_0: %s\n" % e)
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

# **patch_pay_code**
> PayCode patch_pay_code(employer_id, pay_code_id, authorization, api_version, pay_code)

Patches the pay code

Patches the specified pay code object with the supplied values

### Example


```python
import openapi_client
from openapi_client.models.pay_code import PayCode
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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_code_id = 'pay_code_id_example' # str | The pay code unique identifier. E.g. BASIC
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    pay_code = openapi_client.PayCode() # PayCode | The pay code object.

    try:
        # Patches the pay code
        api_response = api_instance.patch_pay_code(employer_id, pay_code_id, authorization, api_version, pay_code)
        print("The response of PayCodeApi->patch_pay_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayCodeApi->patch_pay_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_code_id** | **str**| The pay code unique identifier. E.g. BASIC | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **pay_code** | [**PayCode**](PayCode.md)| The pay code object. | 

### Return type

[**PayCode**](PayCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pay code object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_pay_code**
> Link post_pay_code(employer_id, authorization, api_version, pay_code)

Create a new pay code

Create a new pay code object

### Example


```python
import openapi_client
from openapi_client.models.link import Link
from openapi_client.models.pay_code import PayCode
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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    pay_code = openapi_client.PayCode() # PayCode | The pay code object.

    try:
        # Create a new pay code
        api_response = api_instance.post_pay_code(employer_id, authorization, api_version, pay_code)
        print("The response of PayCodeApi->post_pay_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayCodeApi->post_pay_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **pay_code** | [**PayCode**](PayCode.md)| The pay code object. | 

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

# **put_pay_code**
> PayCode put_pay_code(employer_id, pay_code_id, authorization, api_version, pay_code)

Updates a pay code

Updates the existing specified pay code object

### Example


```python
import openapi_client
from openapi_client.models.pay_code import PayCode
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
    api_instance = openapi_client.PayCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    pay_code_id = 'pay_code_id_example' # str | The pay code unique identifier. E.g. BASIC
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    pay_code = openapi_client.PayCode() # PayCode | The pay code object.

    try:
        # Updates a pay code
        api_response = api_instance.put_pay_code(employer_id, pay_code_id, authorization, api_version, pay_code)
        print("The response of PayCodeApi->put_pay_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PayCodeApi->put_pay_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **pay_code_id** | **str**| The pay code unique identifier. E.g. BASIC | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **pay_code** | [**PayCode**](PayCode.md)| The pay code object. | 

### Return type

[**PayCode**](PayCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The pay code object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

