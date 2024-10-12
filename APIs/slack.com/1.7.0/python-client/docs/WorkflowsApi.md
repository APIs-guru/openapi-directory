# openapi_client.WorkflowsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**workflows_step_completed**](WorkflowsApi.md#workflows_step_completed) | **GET** /workflows.stepCompleted | 
[**workflows_step_failed**](WorkflowsApi.md#workflows_step_failed) | **GET** /workflows.stepFailed | 
[**workflows_update_step**](WorkflowsApi.md#workflows_update_step) | **GET** /workflows.updateStep | 


# **workflows_step_completed**
> DefaultSuccessTemplate workflows_step_completed(token, workflow_step_execute_id, outputs=outputs)



Indicate that an app's step in a workflow completed execution.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkflowsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `workflow.steps:execute`
    workflow_step_execute_id = 'workflow_step_execute_id_example' # str | Context identifier that maps to the correct workflow step execution.
    outputs = 'outputs_example' # str | Key-value object of outputs from your step. Keys of this object reflect the configured `key` properties of your [`outputs`](/reference/workflows/workflow_step#output) array from your `workflow_step` object. (optional)

    try:
        api_response = api_instance.workflows_step_completed(token, workflow_step_execute_id, outputs=outputs)
        print("The response of WorkflowsApi->workflows_step_completed:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->workflows_step_completed: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;workflow.steps:execute&#x60; | 
 **workflow_step_execute_id** | **str**| Context identifier that maps to the correct workflow step execution. | 
 **outputs** | **str**| Key-value object of outputs from your step. Keys of this object reflect the configured &#x60;key&#x60; properties of your [&#x60;outputs&#x60;](/reference/workflows/workflow_step#output) array from your &#x60;workflow_step&#x60; object. | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflows_step_failed**
> DefaultSuccessTemplate workflows_step_failed(token, workflow_step_execute_id, error)



Indicate that an app's step in a workflow failed to execute.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkflowsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `workflow.steps:execute`
    workflow_step_execute_id = 'workflow_step_execute_id_example' # str | Context identifier that maps to the correct workflow step execution.
    error = 'error_example' # str | A JSON-based object with a `message` property that should contain a human readable error message.

    try:
        api_response = api_instance.workflows_step_failed(token, workflow_step_execute_id, error)
        print("The response of WorkflowsApi->workflows_step_failed:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->workflows_step_failed: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;workflow.steps:execute&#x60; | 
 **workflow_step_execute_id** | **str**| Context identifier that maps to the correct workflow step execution. | 
 **error** | **str**| A JSON-based object with a &#x60;message&#x60; property that should contain a human readable error message. | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **workflows_update_step**
> DefaultSuccessTemplate workflows_update_step(token, workflow_step_edit_id, inputs=inputs, outputs=outputs, step_name=step_name, step_image_url=step_image_url)



Update the configuration for a workflow extension step.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.WorkflowsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `workflow.steps:execute`
    workflow_step_edit_id = 'workflow_step_edit_id_example' # str | A context identifier provided with `view_submission` payloads used to call back to `workflows.updateStep`.
    inputs = 'inputs_example' # str | A JSON key-value map of inputs required from a user during configuration. This is the data your app expects to receive when the workflow step starts. **Please note**: the embedded variable format is set and replaced by the workflow system. You cannot create custom variables that will be replaced at runtime. [Read more about variables in workflow steps here](/workflows/steps#variables). (optional)
    outputs = 'outputs_example' # str | An JSON array of output objects used during step execution. This is the data your app agrees to provide when your workflow step was executed. (optional)
    step_name = 'step_name_example' # str | An optional field that can be used to override the step name that is shown in the Workflow Builder. (optional)
    step_image_url = 'step_image_url_example' # str | An optional field that can be used to override app image that is shown in the Workflow Builder. (optional)

    try:
        api_response = api_instance.workflows_update_step(token, workflow_step_edit_id, inputs=inputs, outputs=outputs, step_name=step_name, step_image_url=step_image_url)
        print("The response of WorkflowsApi->workflows_update_step:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkflowsApi->workflows_update_step: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;workflow.steps:execute&#x60; | 
 **workflow_step_edit_id** | **str**| A context identifier provided with &#x60;view_submission&#x60; payloads used to call back to &#x60;workflows.updateStep&#x60;. | 
 **inputs** | **str**| A JSON key-value map of inputs required from a user during configuration. This is the data your app expects to receive when the workflow step starts. **Please note**: the embedded variable format is set and replaced by the workflow system. You cannot create custom variables that will be replaced at runtime. [Read more about variables in workflow steps here](/workflows/steps#variables). | [optional] 
 **outputs** | **str**| An JSON array of output objects used during step execution. This is the data your app agrees to provide when your workflow step was executed. | [optional] 
 **step_name** | **str**| An optional field that can be used to override the step name that is shown in the Workflow Builder. | [optional] 
 **step_image_url** | **str**| An optional field that can be used to override app image that is shown in the Workflow Builder. | [optional] 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

