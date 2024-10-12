# openapi_client.TemplatesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_documents_templates_id**](TemplatesApi.md#delete_documents_templates_id) | **DELETE** /documents/templates/{templateID} | Delete a template
[**delete_documents_templates_id_labels_id**](TemplatesApi.md#delete_documents_templates_id_labels_id) | **DELETE** /documents/templates/{templateID}/labels/{labelID} | Delete a label from a template
[**get_documents_templates**](TemplatesApi.md#get_documents_templates) | **GET** /documents/templates | List all templates
[**get_documents_templates_id**](TemplatesApi.md#get_documents_templates_id) | **GET** /documents/templates/{templateID} | Retrieve a template
[**get_documents_templates_id_labels**](TemplatesApi.md#get_documents_templates_id_labels) | **GET** /documents/templates/{templateID}/labels | List all labels for a template
[**post_documents_templates**](TemplatesApi.md#post_documents_templates) | **POST** /documents/templates | Create a template
[**post_documents_templates_id_labels**](TemplatesApi.md#post_documents_templates_id_labels) | **POST** /documents/templates/{templateID}/labels | Add a label to a template
[**put_documents_templates_id**](TemplatesApi.md#put_documents_templates_id) | **PUT** /documents/templates/{templateID} | Update a template


# **delete_documents_templates_id**
> delete_documents_templates_id(template_id, zap_trace_span=zap_trace_span)

Delete a template

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    template_id = 'template_id_example' # str | The template ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a template
        api_instance.delete_documents_templates_id(template_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling TemplatesApi->delete_documents_templates_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**| The template ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**204** | Delete has been accepted |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_documents_templates_id_labels_id**
> delete_documents_templates_id_labels_id(template_id, label_id, zap_trace_span=zap_trace_span)

Delete a label from a template

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    template_id = 'template_id_example' # str | The template ID.
    label_id = 'label_id_example' # str | The label ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Delete a label from a template
        api_instance.delete_documents_templates_id_labels_id(template_id, label_id, zap_trace_span=zap_trace_span)
    except Exception as e:
        print("Exception when calling TemplatesApi->delete_documents_templates_id_labels_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**| The template ID. | 
 **label_id** | **str**| The label ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

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
**204** | Delete has been accepted |  -  |
**404** | Template not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_documents_templates**
> Documents get_documents_templates(zap_trace_span=zap_trace_span, org=org, org_id=org_id)

List all templates

### Example


```python
import openapi_client
from openapi_client.models.documents import Documents
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)
    org = 'org_example' # str | Specifies the name of the organization of the template. (optional)
    org_id = 'org_id_example' # str | Specifies the organization ID of the template. (optional)

    try:
        # List all templates
        api_response = api_instance.get_documents_templates(zap_trace_span=zap_trace_span, org=org, org_id=org_id)
        print("The response of TemplatesApi->get_documents_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get_documents_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 
 **org** | **str**| Specifies the name of the organization of the template. | [optional] 
 **org_id** | **str**| Specifies the organization ID of the template. | [optional] 

### Return type

[**Documents**](Documents.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of template documents |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_documents_templates_id**
> Document get_documents_templates_id(template_id, zap_trace_span=zap_trace_span)

Retrieve a template

### Example


```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    template_id = 'template_id_example' # str | The template ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Retrieve a template
        api_response = api_instance.get_documents_templates_id(template_id, zap_trace_span=zap_trace_span)
        print("The response of TemplatesApi->get_documents_templates_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get_documents_templates_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**| The template ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The template requested |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_documents_templates_id_labels**
> LabelsResponse get_documents_templates_id_labels(template_id, zap_trace_span=zap_trace_span)

List all labels for a template

### Example


```python
import openapi_client
from openapi_client.models.labels_response import LabelsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    template_id = 'template_id_example' # str | The template ID.
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # List all labels for a template
        api_response = api_instance.get_documents_templates_id_labels(template_id, zap_trace_span=zap_trace_span)
        print("The response of TemplatesApi->get_documents_templates_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->get_documents_templates_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**| The template ID. | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelsResponse**](LabelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of all labels for a template |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_documents_templates**
> Document post_documents_templates(document_create, zap_trace_span=zap_trace_span)

Create a template

### Example


```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.models.document_create import DocumentCreate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    document_create = openapi_client.DocumentCreate() # DocumentCreate | Template that will be created
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Create a template
        api_response = api_instance.post_documents_templates(document_create, zap_trace_span=zap_trace_span)
        print("The response of TemplatesApi->post_documents_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->post_documents_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **document_create** | [**DocumentCreate**](DocumentCreate.md)| Template that will be created | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Template created |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_documents_templates_id_labels**
> LabelResponse post_documents_templates_id_labels(template_id, label_mapping, zap_trace_span=zap_trace_span)

Add a label to a template

### Example


```python
import openapi_client
from openapi_client.models.label_mapping import LabelMapping
from openapi_client.models.label_response import LabelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    template_id = 'template_id_example' # str | The template ID.
    label_mapping = openapi_client.LabelMapping() # LabelMapping | Label to add
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Add a label to a template
        api_response = api_instance.post_documents_templates_id_labels(template_id, label_mapping, zap_trace_span=zap_trace_span)
        print("The response of TemplatesApi->post_documents_templates_id_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->post_documents_templates_id_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**| The template ID. | 
 **label_mapping** | [**LabelMapping**](LabelMapping.md)| Label to add | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**LabelResponse**](LabelResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The label added to the template |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **put_documents_templates_id**
> Document put_documents_templates_id(template_id, document_update, zap_trace_span=zap_trace_span)

Update a template

### Example


```python
import openapi_client
from openapi_client.models.document import Document
from openapi_client.models.document_update import DocumentUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TemplatesApi(api_client)
    template_id = 'template_id_example' # str | The template ID.
    document_update = openapi_client.DocumentUpdate() # DocumentUpdate | Template that will be updated
    zap_trace_span = '{\"baggage\":{\"key\":\"value\"},\"span_id\":\"1\",\"trace_id\":\"1\"}' # str | OpenTracing span context (optional)

    try:
        # Update a template
        api_response = api_instance.put_documents_templates_id(template_id, document_update, zap_trace_span=zap_trace_span)
        print("The response of TemplatesApi->put_documents_templates_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TemplatesApi->put_documents_templates_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**| The template ID. | 
 **document_update** | [**DocumentUpdate**](DocumentUpdate.md)| Template that will be updated | 
 **zap_trace_span** | **str**| OpenTracing span context | [optional] 

### Return type

[**Document**](Document.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The newly updated template |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

