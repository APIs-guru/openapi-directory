# openapi_client.CompaniesApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**companies_add**](CompaniesApi.md#companies_add) | **POST** /hris/companies | Create Company
[**companies_all**](CompaniesApi.md#companies_all) | **GET** /hris/companies | List Companies
[**companies_delete**](CompaniesApi.md#companies_delete) | **DELETE** /hris/companies/{id} | Delete Company
[**companies_one**](CompaniesApi.md#companies_one) | **GET** /hris/companies/{id} | Get Company
[**companies_update**](CompaniesApi.md#companies_update) | **PATCH** /hris/companies/{id} | Update Company


# **companies_add**
> CreateHrisCompanyResponse companies_add(x_apideck_consumer_id, x_apideck_app_id, hris_company, raw=raw, x_apideck_service_id=x_apideck_service_id)

Create Company

Create Company

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.create_hris_company_response import CreateHrisCompanyResponse
from openapi_client.models.hris_company import HrisCompany
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CompaniesApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    hris_company = openapi_client.HrisCompany() # HrisCompany | 
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)

    try:
        # Create Company
        api_response = api_instance.companies_add(x_apideck_consumer_id, x_apideck_app_id, hris_company, raw=raw, x_apideck_service_id=x_apideck_service_id)
        print("The response of CompaniesApi->companies_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompaniesApi->companies_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **hris_company** | [**HrisCompany**](HrisCompany.md)|  | 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 

### Return type

[**CreateHrisCompanyResponse**](CreateHrisCompanyResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Companies |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **companies_all**
> GetHrisCompaniesResponse companies_all(x_apideck_consumer_id, x_apideck_app_id, raw=raw, x_apideck_service_id=x_apideck_service_id, cursor=cursor, limit=limit, pass_through=pass_through, fields=fields)

List Companies

List Companies

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_hris_companies_response import GetHrisCompaniesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CompaniesApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 20 # int | Number of results to return. Minimum 1, Maximum 200, Default 20 (optional) (default to 20)
    pass_through = None # PassThroughQuery | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads (optional)
    fields = 'id,updated_at' # str | The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded. (optional)

    try:
        # List Companies
        api_response = api_instance.companies_all(x_apideck_consumer_id, x_apideck_app_id, raw=raw, x_apideck_service_id=x_apideck_service_id, cursor=cursor, limit=limit, pass_through=pass_through, fields=fields)
        print("The response of CompaniesApi->companies_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompaniesApi->companies_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **cursor** | **str**| Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | [optional] 
 **limit** | **int**| Number of results to return. Minimum 1, Maximum 200, Default 20 | [optional] [default to 20]
 **pass_through** | [**PassThroughQuery**](object.md)| Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]&#x3D;leads becomes ?search&#x3D;leads | [optional] 
 **fields** | **str**| The &#39;fields&#39; parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. &lt;br /&gt;&lt;br /&gt;Example: &#x60;fields&#x3D;name,email,addresses.city&#x60;&lt;br /&gt;&lt;br /&gt;In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | [optional] 

### Return type

[**GetHrisCompaniesResponse**](GetHrisCompaniesResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Companies |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **companies_delete**
> DeleteHrisCompanyResponse companies_delete(id, x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw)

Delete Company

Delete Company

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.delete_hris_company_response import DeleteHrisCompanyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CompaniesApi(api_client)
    id = 'id_example' # str | ID of the record you are acting upon.
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)

    try:
        # Delete Company
        api_response = api_instance.companies_delete(id, x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw)
        print("The response of CompaniesApi->companies_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompaniesApi->companies_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the record you are acting upon. | 
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]

### Return type

[**DeleteHrisCompanyResponse**](DeleteHrisCompanyResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Companies |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **companies_one**
> GetHrisCompanyResponse companies_one(id, x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw, fields=fields)

Get Company

Get Company

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_hris_company_response import GetHrisCompanyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CompaniesApi(api_client)
    id = 'id_example' # str | ID of the record you are acting upon.
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    fields = 'id,updated_at' # str | The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded. (optional)

    try:
        # Get Company
        api_response = api_instance.companies_one(id, x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw, fields=fields)
        print("The response of CompaniesApi->companies_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompaniesApi->companies_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the record you are acting upon. | 
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]
 **fields** | **str**| The &#39;fields&#39; parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. &lt;br /&gt;&lt;br /&gt;Example: &#x60;fields&#x3D;name,email,addresses.city&#x60;&lt;br /&gt;&lt;br /&gt;In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | [optional] 

### Return type

[**GetHrisCompanyResponse**](GetHrisCompanyResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Company |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **companies_update**
> UpdateHrisCompanyResponse companies_update(id, x_apideck_consumer_id, x_apideck_app_id, hris_company, x_apideck_service_id=x_apideck_service_id, raw=raw)

Update Company

Update Company

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.hris_company import HrisCompany
from openapi_client.models.update_hris_company_response import UpdateHrisCompanyResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CompaniesApi(api_client)
    id = 'id_example' # str | ID of the record you are acting upon.
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    hris_company = openapi_client.HrisCompany() # HrisCompany | 
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)

    try:
        # Update Company
        api_response = api_instance.companies_update(id, x_apideck_consumer_id, x_apideck_app_id, hris_company, x_apideck_service_id=x_apideck_service_id, raw=raw)
        print("The response of CompaniesApi->companies_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CompaniesApi->companies_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the record you are acting upon. | 
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **hris_company** | [**HrisCompany**](HrisCompany.md)|  | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]

### Return type

[**UpdateHrisCompanyResponse**](UpdateHrisCompanyResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Companies |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

