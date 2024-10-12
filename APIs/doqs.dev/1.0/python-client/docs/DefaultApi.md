# openapi_client.DefaultApi

All URIs are relative to *https://api.doqs.dev/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_template_designer_templates_post**](DefaultApi.md#create_template_designer_templates_post) | **POST** /designer/templates | Create Template
[**delete_designer_templates_id_delete**](DefaultApi.md#delete_designer_templates_id_delete) | **DELETE** /designer/templates/{id} | Delete
[**generate_pdf_designer_templates_id_generate_post**](DefaultApi.md#generate_pdf_designer_templates_id_generate_post) | **POST** /designer/templates/{id}/generate | Generate Pdf
[**list_templates_designer_templates_get**](DefaultApi.md#list_templates_designer_templates_get) | **GET** /designer/templates | List Templates
[**list_templates_designer_templates_id_get**](DefaultApi.md#list_templates_designer_templates_id_get) | **GET** /designer/templates/{id} | List Templates
[**preview_designer_templates_preview_post**](DefaultApi.md#preview_designer_templates_preview_post) | **POST** /designer/templates/preview | Preview
[**update_template_designer_templates_id_put**](DefaultApi.md#update_template_designer_templates_id_put) | **PUT** /designer/templates/{id} | Update Template


# **create_template_designer_templates_post**
> ResponseOkDesignerTemplate create_template_designer_templates_post(create_or_update_template_request)

Create Template

### Example

* Api Key Authentication (apiKeyAuth):

```python
import openapi_client
from openapi_client.models.create_or_update_template_request import CreateOrUpdateTemplateRequest
from openapi_client.models.response_ok_designer_template import ResponseOkDesignerTemplate
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
    api_instance = openapi_client.DefaultApi(api_client)
    create_or_update_template_request = openapi_client.CreateOrUpdateTemplateRequest() # CreateOrUpdateTemplateRequest | 

    try:
        # Create Template
        api_response = api_instance.create_template_designer_templates_post(create_or_update_template_request)
        print("The response of DefaultApi->create_template_designer_templates_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->create_template_designer_templates_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_or_update_template_request** | [**CreateOrUpdateTemplateRequest**](CreateOrUpdateTemplateRequest.md)|  | 

### Return type

[**ResponseOkDesignerTemplate**](ResponseOkDesignerTemplate.md)

### Authorization

[apiKeyAuth](../README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful Response |  -  |
**4XX** | Client Error |  -  |
**5XX** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_designer_templates_id_delete**
> ResponseOkNoneType delete_designer_templates_id_delete(id)

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
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        # Delete
        api_response = api_instance.delete_designer_templates_id_delete(id)
        print("The response of DefaultApi->delete_designer_templates_id_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->delete_designer_templates_id_delete: %s\n" % e)
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

# **generate_pdf_designer_templates_id_generate_post**
> object generate_pdf_designer_templates_id_generate_post(id, generate_pdf_payload)

Generate Pdf

### Example

* Api Key Authentication (apiKeyAuth):

```python
import openapi_client
from openapi_client.models.generate_pdf_payload import GeneratePDFPayload
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
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | 
    generate_pdf_payload = openapi_client.GeneratePDFPayload() # GeneratePDFPayload | 

    try:
        # Generate Pdf
        api_response = api_instance.generate_pdf_designer_templates_id_generate_post(id, generate_pdf_payload)
        print("The response of DefaultApi->generate_pdf_designer_templates_id_generate_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->generate_pdf_designer_templates_id_generate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **generate_pdf_payload** | [**GeneratePDFPayload**](GeneratePDFPayload.md)|  | 

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

# **list_templates_designer_templates_get**
> ResponseOkListFillrEntitiesDesignerTemplateDesignerTemplate list_templates_designer_templates_get(limit=limit, offset=offset)

List Templates

### Example

* Api Key Authentication (apiKeyAuth):

```python
import openapi_client
from openapi_client.models.response_ok_list_fillr_entities_designer_template_designer_template import ResponseOkListFillrEntitiesDesignerTemplateDesignerTemplate
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
    api_instance = openapi_client.DefaultApi(api_client)
    limit = 100 # int |  (optional) (default to 100)
    offset = 0 # int |  (optional) (default to 0)

    try:
        # List Templates
        api_response = api_instance.list_templates_designer_templates_get(limit=limit, offset=offset)
        print("The response of DefaultApi->list_templates_designer_templates_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_templates_designer_templates_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**|  | [optional] [default to 100]
 **offset** | **int**|  | [optional] [default to 0]

### Return type

[**ResponseOkListFillrEntitiesDesignerTemplateDesignerTemplate**](ResponseOkListFillrEntitiesDesignerTemplateDesignerTemplate.md)

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

# **list_templates_designer_templates_id_get**
> ResponseOkDesignerTemplate list_templates_designer_templates_id_get(id)

List Templates

### Example

* Api Key Authentication (apiKeyAuth):

```python
import openapi_client
from openapi_client.models.response_ok_designer_template import ResponseOkDesignerTemplate
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
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        # List Templates
        api_response = api_instance.list_templates_designer_templates_id_get(id)
        print("The response of DefaultApi->list_templates_designer_templates_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->list_templates_designer_templates_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**ResponseOkDesignerTemplate**](ResponseOkDesignerTemplate.md)

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

# **preview_designer_templates_preview_post**
> ResponseOkPreviewResponse preview_designer_templates_preview_post(preview_model)

Preview

### Example

* Api Key Authentication (apiKeyAuth):

```python
import openapi_client
from openapi_client.models.preview_model import PreviewModel
from openapi_client.models.response_ok_preview_response import ResponseOkPreviewResponse
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
    api_instance = openapi_client.DefaultApi(api_client)
    preview_model = openapi_client.PreviewModel() # PreviewModel | 

    try:
        # Preview
        api_response = api_instance.preview_designer_templates_preview_post(preview_model)
        print("The response of DefaultApi->preview_designer_templates_preview_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->preview_designer_templates_preview_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **preview_model** | [**PreviewModel**](PreviewModel.md)|  | 

### Return type

[**ResponseOkPreviewResponse**](ResponseOkPreviewResponse.md)

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

# **update_template_designer_templates_id_put**
> ResponseOkDesignerTemplate update_template_designer_templates_id_put(id, create_or_update_template_request)

Update Template

### Example

* Api Key Authentication (apiKeyAuth):

```python
import openapi_client
from openapi_client.models.create_or_update_template_request import CreateOrUpdateTemplateRequest
from openapi_client.models.response_ok_designer_template import ResponseOkDesignerTemplate
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
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | 
    create_or_update_template_request = openapi_client.CreateOrUpdateTemplateRequest() # CreateOrUpdateTemplateRequest | 

    try:
        # Update Template
        api_response = api_instance.update_template_designer_templates_id_put(id, create_or_update_template_request)
        print("The response of DefaultApi->update_template_designer_templates_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->update_template_designer_templates_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **create_or_update_template_request** | [**CreateOrUpdateTemplateRequest**](CreateOrUpdateTemplateRequest.md)|  | 

### Return type

[**ResponseOkDesignerTemplate**](ResponseOkDesignerTemplate.md)

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

