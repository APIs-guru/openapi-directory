# openapi_client.InfluxDBTemplatesApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apply_template**](InfluxDBTemplatesApi.md#apply_template) | **POST** /templates/apply | Apply or dry-run an InfluxDB Template
[**create_stack**](InfluxDBTemplatesApi.md#create_stack) | **POST** /stacks | Create a new stack
[**delete_stack**](InfluxDBTemplatesApi.md#delete_stack) | **DELETE** /stacks/{stack_id} | Delete a stack and associated resources
[**export_template**](InfluxDBTemplatesApi.md#export_template) | **POST** /templates/export | Export a new Influx Template
[**list_stacks**](InfluxDBTemplatesApi.md#list_stacks) | **GET** /stacks | List all installed InfluxDB templates
[**read_stack**](InfluxDBTemplatesApi.md#read_stack) | **GET** /stacks/{stack_id} | Retrieve a stack
[**uninstall_stack**](InfluxDBTemplatesApi.md#uninstall_stack) | **POST** /stacks/{stack_id}/uninstall | Uninstall an InfluxDB Stack
[**update_stack**](InfluxDBTemplatesApi.md#update_stack) | **PATCH** /stacks/{stack_id} | Update an InfluxDB Stack


# **apply_template**
> TemplateSummary apply_template(template_apply)

Apply or dry-run an InfluxDB Template

### Example


```python
import openapi_client
from openapi_client.models.template_apply import TemplateApply
from openapi_client.models.template_summary import TemplateSummary
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
    api_instance = openapi_client.InfluxDBTemplatesApi(api_client)
    template_apply = openapi_client.TemplateApply() # TemplateApply | 

    try:
        # Apply or dry-run an InfluxDB Template
        api_response = api_instance.apply_template(template_apply)
        print("The response of InfluxDBTemplatesApi->apply_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfluxDBTemplatesApi->apply_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_apply** | [**TemplateApply**](TemplateApply.md)|  | 

### Return type

[**TemplateSummary**](TemplateSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-jsonnet, text/yml
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Influx package dry-run successful, no new resources created. The provided diff and summary will not have IDs for resources that do not exist at the time of the dry run.  |  -  |
**201** | Influx package applied successfully. Newly created resources created available in summary. The diff compares the state of the world before the package is applied with the changes the application will impose. This corresponds to &#x60;\&quot;dryRun\&quot;: true&#x60;  |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_stack**
> Stack create_stack(post_stack_request)

Create a new stack

### Example


```python
import openapi_client
from openapi_client.models.post_stack_request import PostStackRequest
from openapi_client.models.stack import Stack
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
    api_instance = openapi_client.InfluxDBTemplatesApi(api_client)
    post_stack_request = openapi_client.PostStackRequest() # PostStackRequest | Stack to create.

    try:
        # Create a new stack
        api_response = api_instance.create_stack(post_stack_request)
        print("The response of InfluxDBTemplatesApi->create_stack:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfluxDBTemplatesApi->create_stack: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_stack_request** | [**PostStackRequest**](PostStackRequest.md)| Stack to create. | 

### Return type

[**Stack**](Stack.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | InfluxDB Stack created |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_stack**
> delete_stack(stack_id, org_id)

Delete a stack and associated resources

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
    api_instance = openapi_client.InfluxDBTemplatesApi(api_client)
    stack_id = 'stack_id_example' # str | Theidentifier of the stack.
    org_id = 'org_id_example' # str | The identifier of the organization.

    try:
        # Delete a stack and associated resources
        api_instance.delete_stack(stack_id, org_id)
    except Exception as e:
        print("Exception when calling InfluxDBTemplatesApi->delete_stack: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stack_id** | **str**| Theidentifier of the stack. | 
 **org_id** | **str**| The identifier of the organization. | 

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
**204** | The stack and its associated resources are deleted |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_template**
> List[TemplateInner] export_template(export_template_request=export_template_request)

Export a new Influx Template

### Example


```python
import openapi_client
from openapi_client.models.export_template_request import ExportTemplateRequest
from openapi_client.models.template_inner import TemplateInner
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
    api_instance = openapi_client.InfluxDBTemplatesApi(api_client)
    export_template_request = openapi_client.ExportTemplateRequest() # ExportTemplateRequest | Export resources as an InfluxDB template. (optional)

    try:
        # Export a new Influx Template
        api_response = api_instance.export_template(export_template_request=export_template_request)
        print("The response of InfluxDBTemplatesApi->export_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfluxDBTemplatesApi->export_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **export_template_request** | [**ExportTemplateRequest**](ExportTemplateRequest.md)| Export resources as an InfluxDB template. | [optional] 

### Return type

[**List[TemplateInner]**](TemplateInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, application/x-yaml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | InfluxDB template created |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_stacks**
> ListStacks200Response list_stacks(org_id, name=name, stack_id=stack_id)

List all installed InfluxDB templates

### Example


```python
import openapi_client
from openapi_client.models.list_stacks200_response import ListStacks200Response
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
    api_instance = openapi_client.InfluxDBTemplatesApi(api_client)
    org_id = 'org_id_example' # str | The organization id of the stacks
    name = 'name_example' # str | A collection of names to filter the list by. (optional)
    stack_id = 'stack_id_example' # str | A collection of stackIDs to filter the list by. (optional)

    try:
        # List all installed InfluxDB templates
        api_response = api_instance.list_stacks(org_id, name=name, stack_id=stack_id)
        print("The response of InfluxDBTemplatesApi->list_stacks:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfluxDBTemplatesApi->list_stacks: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization id of the stacks | 
 **name** | **str**| A collection of names to filter the list by. | [optional] 
 **stack_id** | **str**| A collection of stackIDs to filter the list by. | [optional] 

### Return type

[**ListStacks200Response**](ListStacks200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Influx stacks found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **read_stack**
> Stack read_stack(stack_id)

Retrieve a stack

### Example


```python
import openapi_client
from openapi_client.models.stack import Stack
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
    api_instance = openapi_client.InfluxDBTemplatesApi(api_client)
    stack_id = 'stack_id_example' # str | Theidentifier of the stack.

    try:
        # Retrieve a stack
        api_response = api_instance.read_stack(stack_id)
        print("The response of InfluxDBTemplatesApi->read_stack:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfluxDBTemplatesApi->read_stack: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stack_id** | **str**| Theidentifier of the stack. | 

### Return type

[**Stack**](Stack.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The InfluxDB stack |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **uninstall_stack**
> Stack uninstall_stack(stack_id)

Uninstall an InfluxDB Stack

### Example


```python
import openapi_client
from openapi_client.models.stack import Stack
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
    api_instance = openapi_client.InfluxDBTemplatesApi(api_client)
    stack_id = 'stack_id_example' # str | The stack id

    try:
        # Uninstall an InfluxDB Stack
        api_response = api_instance.uninstall_stack(stack_id)
        print("The response of InfluxDBTemplatesApi->uninstall_stack:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfluxDBTemplatesApi->uninstall_stack: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stack_id** | **str**| The stack id | 

### Return type

[**Stack**](Stack.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Influx stack uninstalled |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_stack**
> Stack update_stack(stack_id, patch_stack_request)

Update an InfluxDB Stack

### Example


```python
import openapi_client
from openapi_client.models.patch_stack_request import PatchStackRequest
from openapi_client.models.stack import Stack
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
    api_instance = openapi_client.InfluxDBTemplatesApi(api_client)
    stack_id = 'stack_id_example' # str | Theidentifier of the stack.
    patch_stack_request = openapi_client.PatchStackRequest() # PatchStackRequest | Influx stack to update.

    try:
        # Update an InfluxDB Stack
        api_response = api_instance.update_stack(stack_id, patch_stack_request)
        print("The response of InfluxDBTemplatesApi->update_stack:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InfluxDBTemplatesApi->update_stack: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stack_id** | **str**| Theidentifier of the stack. | 
 **patch_stack_request** | [**PatchStackRequest**](PatchStackRequest.md)| Influx stack to update. | 

### Return type

[**Stack**](Stack.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Influx stack updated |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

