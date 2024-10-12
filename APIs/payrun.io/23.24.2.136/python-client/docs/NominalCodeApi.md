# openapi_client.NominalCodeApi

All URIs are relative to *https://api.test.payrun.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_nominal_code**](NominalCodeApi.md#delete_nominal_code) | **DELETE** /Employer/{EmployerId}/NominalCode/{NominalCodeId} | Deletes the nominal codes
[**get_nominal_code_from_employer**](NominalCodeApi.md#get_nominal_code_from_employer) | **GET** /Employer/{EmployerId}/NominalCode/{NominalCodeId} | Gets the nominal code
[**get_nominal_codes_from_employer**](NominalCodeApi.md#get_nominal_codes_from_employer) | **GET** /Employer/{EmployerId}/NominalCodes | Gets the nominal codes
[**post_nominal_code**](NominalCodeApi.md#post_nominal_code) | **POST** /Employer/{EmployerId}/NominalCodes | Insert nominal code
[**put_nominal_code**](NominalCodeApi.md#put_nominal_code) | **PUT** /Employer/{EmployerId}/NominalCode/{NominalCodeId} | Insert nominal code


# **delete_nominal_code**
> delete_nominal_code(employer_id, nominal_code_id, authorization, api_version)

Deletes the nominal codes

Deletes the nominal code

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
    api_instance = openapi_client.NominalCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    nominal_code_id = 'nominal_code_id_example' # str | The nominal code unique identifier. E.g. NOM001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Deletes the nominal codes
        api_instance.delete_nominal_code(employer_id, nominal_code_id, authorization, api_version)
    except Exception as e:
        print("Exception when calling NominalCodeApi->delete_nominal_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **nominal_code_id** | **str**| The nominal code unique identifier. E.g. NOM001 | 
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

# **get_nominal_code_from_employer**
> NominalCode get_nominal_code_from_employer(employer_id, nominal_code_id, authorization, api_version)

Gets the nominal code

Gets the nominal code

### Example


```python
import openapi_client
from openapi_client.models.nominal_code import NominalCode
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
    api_instance = openapi_client.NominalCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    nominal_code_id = 'nominal_code_id_example' # str | The nominal code unique identifier. E.g. NOM001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the nominal code
        api_response = api_instance.get_nominal_code_from_employer(employer_id, nominal_code_id, authorization, api_version)
        print("The response of NominalCodeApi->get_nominal_code_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NominalCodeApi->get_nominal_code_from_employer: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **nominal_code_id** | **str**| The nominal code unique identifier. E.g. NOM001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]

### Return type

[**NominalCode**](NominalCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The nominal code object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_nominal_codes_from_employer**
> LinkCollection get_nominal_codes_from_employer(employer_id, authorization, api_version)

Gets the nominal codes

Gets the nominal code links

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
    api_instance = openapi_client.NominalCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')

    try:
        # Gets the nominal codes
        api_response = api_instance.get_nominal_codes_from_employer(employer_id, authorization, api_version)
        print("The response of NominalCodeApi->get_nominal_codes_from_employer:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NominalCodeApi->get_nominal_codes_from_employer: %s\n" % e)
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

# **post_nominal_code**
> Link post_nominal_code(employer_id, authorization, api_version, nominal_code)

Insert nominal code

Inserts a new nominal code

### Example


```python
import openapi_client
from openapi_client.models.link import Link
from openapi_client.models.nominal_code import NominalCode
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
    api_instance = openapi_client.NominalCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    nominal_code = openapi_client.NominalCode() # NominalCode | The nominal code object.

    try:
        # Insert nominal code
        api_response = api_instance.post_nominal_code(employer_id, authorization, api_version, nominal_code)
        print("The response of NominalCodeApi->post_nominal_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NominalCodeApi->post_nominal_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **nominal_code** | [**NominalCode**](NominalCode.md)| The nominal code object. | 

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

# **put_nominal_code**
> NominalCode put_nominal_code(employer_id, nominal_code_id, authorization, api_version, nominal_code)

Insert nominal code

Inserts a new nominal code at the specified resource location

### Example


```python
import openapi_client
from openapi_client.models.nominal_code import NominalCode
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
    api_instance = openapi_client.NominalCodeApi(api_client)
    employer_id = 'employer_id_example' # str | The employers' unique identifier. E.g ER001
    nominal_code_id = 'nominal_code_id_example' # str | The nominal code unique identifier. E.g. NOM001
    authorization = 'Auto' # str | The OAuth 1 authorization header. &apos;Auto&apos; enables auto complete. (default to 'Auto')
    api_version = 'default' # str | The version of the api to target. Omit or set as &apos;default&apos; to target the current api version. (default to 'default')
    nominal_code = openapi_client.NominalCode() # NominalCode | The nominal code object.

    try:
        # Insert nominal code
        api_response = api_instance.put_nominal_code(employer_id, nominal_code_id, authorization, api_version, nominal_code)
        print("The response of NominalCodeApi->put_nominal_code:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NominalCodeApi->put_nominal_code: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **employer_id** | **str**| The employers&#39; unique identifier. E.g ER001 | 
 **nominal_code_id** | **str**| The nominal code unique identifier. E.g. NOM001 | 
 **authorization** | **str**| The OAuth 1 authorization header. &amp;apos;Auto&amp;apos; enables auto complete. | [default to &#39;Auto&#39;]
 **api_version** | **str**| The version of the api to target. Omit or set as &amp;apos;default&amp;apos; to target the current api version. | [default to &#39;default&#39;]
 **nominal_code** | [**NominalCode**](NominalCode.md)| The nominal code object. | 

### Return type

[**NominalCode**](NominalCode.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The nominal code object. |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

