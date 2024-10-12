# openapi_client.TemplatesApi

All URIs are relative to *https://api.doqs.dev/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](TemplatesApi.md#create) | **POST** /templates | Create
[**delete_templates_id_delete**](TemplatesApi.md#delete_templates_id_delete) | **DELETE** /templates/{id} | Delete 
[**fill**](TemplatesApi.md#fill) | **POST** /templates/{id}/fill | Fill
[**get**](TemplatesApi.md#get) | **GET** /templates/{id} | Get Template
[**get_file_templates_id_file_get**](TemplatesApi.md#get_file_templates_id_file_get) | **GET** /templates/{id}/file | Get File
[**list**](TemplatesApi.md#list) | **GET** /templates | List 
[**update**](TemplatesApi.md#update) | **PUT** /templates/{id} | Update


# **create**
> ResponseOkTemplate create(file)

Create

### Example

* Api Key Authentication (apiKeyAuth):

```python
import openapi_client
from openapi_client.models.response_ok_template import ResponseOkTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.doqs.dev/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.doqs.dev/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    file = None # bytearray | 

    try:
        # Create
        api_response = api_instance.create(file)
        print("The response of TemplatesApi->create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **bytearray**|  | 

### Return type

[**ResponseOkTemplate**](ResponseOkTemplate.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**4XX** | Client Error |  -  |
**5XX** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_templates_id_delete**
> ResponseOkNoneType delete_templates_id_delete(id)

Delete 

### Example

* Api Key Authentication (apiKeyAuth):

```python
import openapi_client
from openapi_client.models.response_ok_none_type import ResponseOkNoneType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.doqs.dev/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.doqs.dev/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete 
        api_response = api_instance.delete_templates_id_delete(id)
        print("The response of TemplatesApi->delete_templates_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->delete_templates_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**ResponseOkNoneType**](ResponseOkNoneType.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**4XX** | Client Error |  -  |
**5XX** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fill**
> object fill(id, fill_template_request)

Fill

### Example

* Api Key Authentication (apiKeyAuth):

```python
import openapi_client
from openapi_client.models.fill_template_request import FillTemplateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.doqs.dev/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.doqs.dev/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    id = 'id_example' # str | 
    fill_template_request = openapi_client.FillTemplateRequest() # FillTemplateRequest | 

    try:
        # Fill
        api_response = api_instance.fill(id, fill_template_request)
        print("The response of TemplatesApi->fill:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->fill: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **fill_template_request** | [**FillTemplateRequest**](FillTemplateRequest.md)|  | 

### Return type

**object**

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**4XX** | Client Error |  -  |
**5XX** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get**
> ResponseOkTemplate get(id)

Get Template

### Example

* Api Key Authentication (apiKeyAuth):

```python
import openapi_client
from openapi_client.models.response_ok_template import ResponseOkTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.doqs.dev/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.doqs.dev/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get Template
        api_response = api_instance.get(id)
        print("The response of TemplatesApi->get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**ResponseOkTemplate**](ResponseOkTemplate.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**4XX** | Client Error |  -  |
**5XX** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_file_templates_id_file_get**
> ResponseOkHttpUrl get_file_templates_id_file_get(id)

Get File

### Example

* Api Key Authentication (apiKeyAuth):

```python
import openapi_client
from openapi_client.models.response_ok_http_url import ResponseOkHttpUrl
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.doqs.dev/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.doqs.dev/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get File
        api_response = api_instance.get_file_templates_id_file_get(id)
        print("The response of TemplatesApi->get_file_templates_id_file_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get_file_templates_id_file_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**ResponseOkHttpUrl**](ResponseOkHttpUrl.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**4XX** | Client Error |  -  |
**5XX** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
> ResponseOkListAppsApiRoutesTemplatesTemplate list(limit=limit, offset=offset)

List 

### Example

* Api Key Authentication (apiKeyAuth):

```python
import openapi_client
from openapi_client.models.response_ok_list_apps_api_routes_templates_template import ResponseOkListAppsApiRoutesTemplatesTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.doqs.dev/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.doqs.dev/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    limit = 100 # int |  (optional) (default to 100)
    offset = 0 # int |  (optional) (default to 0)

    try:
        # List 
        api_response = api_instance.list(limit=limit, offset=offset)
        print("The response of TemplatesApi->list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] [default to 100]
 **offset** | **int**|  | [optional] [default to 0]

### Return type

[**ResponseOkListAppsApiRoutesTemplatesTemplate**](ResponseOkListAppsApiRoutesTemplatesTemplate.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**4XX** | Client Error |  -  |
**5XX** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update**
> ResponseOkTemplate update(id, update_template_request)

Update

### Example

* Api Key Authentication (apiKeyAuth):

```python
import openapi_client
from openapi_client.models.response_ok_template import ResponseOkTemplate
from openapi_client.models.update_template_request import UpdateTemplateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.doqs.dev/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.doqs.dev/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyAuth
configuration.api_key['apiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    id = 'id_example' # str | 
    update_template_request = openapi_client.UpdateTemplateRequest() # UpdateTemplateRequest | 

    try:
        # Update
        api_response = api_instance.update(id, update_template_request)
        print("The response of TemplatesApi->update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **update_template_request** | [**UpdateTemplateRequest**](UpdateTemplateRequest.md)|  | 

### Return type

[**ResponseOkTemplate**](ResponseOkTemplate.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**4XX** | Client Error |  -  |
**5XX** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

