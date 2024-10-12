# openapi_client.TemplatesApi

All URIs are relative to *https://us1.pdfgeneratorapi.com/api/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copy_template**](TemplatesApi.md#copy_template) | **POST** /templates/templateId/copy | Copy template
[**create_template**](TemplatesApi.md#create_template) | **POST** /templates | Create template
[**delete_template**](TemplatesApi.md#delete_template) | **DELETE** /templates/templateId | Delete template
[**get_editor_url**](TemplatesApi.md#get_editor_url) | **POST** /templates/templateId/editor | Open editor
[**get_template**](TemplatesApi.md#get_template) | **GET** /templates/templateId | Get template
[**get_templates**](TemplatesApi.md#get_templates) | **GET** /templates | Get templates
[**update_template**](TemplatesApi.md#update_template) | **PUT** /templates/templateId | Update template


# **copy_template**
> CreateTemplate200Response copy_template(template_id, name=name)

Copy template

Creates a copy of a template to the workspace specified in authentication parameters.

### Example

* Bearer (JWT) Authentication (JSONWebTokenAuth):

```python
import openapi_client
from openapi_client.models.create_template200_response import CreateTemplate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://us1.pdfgeneratorapi.com/api/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://us1.pdfgeneratorapi.com/api/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): JSONWebTokenAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    template_id = 19375 # int | Template unique identifier
    name = 'My copied template' # str | Name for the copied template. If name is not specified then the original name is used. (optional)

    try:
        # Copy template
        api_response = api_instance.copy_template(template_id, name=name)
        print("The response of TemplatesApi->copy_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->copy_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **int**| Template unique identifier | 
 **name** | **str**| Name for the copied template. If name is not specified then the original name is used. | [optional] 

### Return type

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Template configuration as JSON object |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_template**
> CreateTemplate200Response create_template(template_definition_new)

Create template

Creates a new template. If template configuration is not specified in the request body then an empty template is created. Template is placed to the workspace specified in authentication params. Template configuration must be sent in the request body.

### Example

* Bearer (JWT) Authentication (JSONWebTokenAuth):

```python
import openapi_client
from openapi_client.models.create_template200_response import CreateTemplate200Response
from openapi_client.models.template_definition_new import TemplateDefinitionNew
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://us1.pdfgeneratorapi.com/api/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://us1.pdfgeneratorapi.com/api/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): JSONWebTokenAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    template_definition_new = openapi_client.TemplateDefinitionNew() # TemplateDefinitionNew | Template configuration as JSON string

    try:
        # Create template
        api_response = api_instance.create_template(template_definition_new)
        print("The response of TemplatesApi->create_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->create_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_definition_new** | [**TemplateDefinitionNew**](TemplateDefinitionNew.md)| Template configuration as JSON string | 

### Return type

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Template configuration as JSON object |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_template**
> DeleteTemplate200Response delete_template(template_id)

Delete template

Deletes the template from workspace

### Example

* Bearer (JWT) Authentication (JSONWebTokenAuth):

```python
import openapi_client
from openapi_client.models.delete_template200_response import DeleteTemplate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://us1.pdfgeneratorapi.com/api/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://us1.pdfgeneratorapi.com/api/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): JSONWebTokenAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    template_id = 19375 # int | Template unique identifier

    try:
        # Delete template
        api_response = api_instance.delete_template(template_id)
        print("The response of TemplatesApi->delete_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->delete_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **int**| Template unique identifier | 

### Return type

[**DeleteTemplate200Response**](DeleteTemplate200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successfully executed. |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_editor_url**
> GetEditorUrl200Response get_editor_url(template_id, body, language=language)

Open editor

Returns an unique URL which you can use to redirect your user to the editor from your application or use the generated URL as iframe source to show the editor within your application. 

### Example

* Bearer (JWT) Authentication (JSONWebTokenAuth):

```python
import openapi_client
from openapi_client.models.get_editor_url200_response import GetEditorUrl200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://us1.pdfgeneratorapi.com/api/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://us1.pdfgeneratorapi.com/api/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): JSONWebTokenAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    template_id = 19375 # int | Template unique identifier
    body = None # object | Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file.
    language = 'en' # str | Specify the editor UI language. Defaults to organization editor language. (optional)

    try:
        # Open editor
        api_response = api_instance.get_editor_url(template_id, body, language=language)
        print("The response of TemplatesApi->get_editor_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get_editor_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **int**| Template unique identifier | 
 **body** | **object**| Data used to generate the PDF. This can be JSON encoded string or a public URL to your JSON file. | 
 **language** | **str**| Specify the editor UI language. Defaults to organization editor language. | [optional] 

### Return type

[**GetEditorUrl200Response**](GetEditorUrl200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns an URL which you can use to redirect your user to the editor or use as iframe source |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_template**
> CreateTemplate200Response get_template(template_id)

Get template

Returns template configuration

### Example

* Bearer (JWT) Authentication (JSONWebTokenAuth):

```python
import openapi_client
from openapi_client.models.create_template200_response import CreateTemplate200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://us1.pdfgeneratorapi.com/api/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://us1.pdfgeneratorapi.com/api/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): JSONWebTokenAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    template_id = 19375 # int | Template unique identifier

    try:
        # Get template
        api_response = api_instance.get_template(template_id)
        print("The response of TemplatesApi->get_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **int**| Template unique identifier | 

### Return type

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Template configuration as JSON object |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_templates**
> GetTemplates200Response get_templates()

Get templates

Returns a list of templates available for the authenticated workspace

### Example

* Bearer (JWT) Authentication (JSONWebTokenAuth):

```python
import openapi_client
from openapi_client.models.get_templates200_response import GetTemplates200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://us1.pdfgeneratorapi.com/api/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://us1.pdfgeneratorapi.com/api/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): JSONWebTokenAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)

    try:
        # Get templates
        api_response = api_instance.get_templates()
        print("The response of TemplatesApi->get_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get_templates: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetTemplates200Response**](GetTemplates200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of template objects |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_template**
> CreateTemplate200Response update_template(template_id, template_definition_new)

Update template

Updates template configuration. The template configuration for pages and layout must be complete as the entire configuration is replaced and not merged.

### Example

* Bearer (JWT) Authentication (JSONWebTokenAuth):

```python
import openapi_client
from openapi_client.models.create_template200_response import CreateTemplate200Response
from openapi_client.models.template_definition_new import TemplateDefinitionNew
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://us1.pdfgeneratorapi.com/api/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://us1.pdfgeneratorapi.com/api/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): JSONWebTokenAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    template_id = 19375 # int | Template unique identifier
    template_definition_new = openapi_client.TemplateDefinitionNew() # TemplateDefinitionNew | Template configuration as JSON string

    try:
        # Update template
        api_response = api_instance.update_template(template_id, template_definition_new)
        print("The response of TemplatesApi->update_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->update_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **int**| Template unique identifier | 
 **template_definition_new** | [**TemplateDefinitionNew**](TemplateDefinitionNew.md)| Template configuration as JSON string | 

### Return type

[**CreateTemplate200Response**](CreateTemplate200Response.md)

### Authorization

[JSONWebTokenAuth](../README.md#JSONWebTokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Template configuration as JSON object |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

