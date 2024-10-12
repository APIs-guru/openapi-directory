# openapi_client.HyperDriveExperimentApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hyper_drive_cancel_experiment**](HyperDriveExperimentApi.md#hyper_drive_cancel_experiment) | **POST** /hyperdrive/v1.0/{armScope}/runs/{runId}/cancel | Cancel an Experiment.
[**hyper_drive_create_experiment**](HyperDriveExperimentApi.md#hyper_drive_create_experiment) | **POST** /hyperdrive/v1.0/{armScope}/runs | Create an Experiment.


# **hyper_drive_cancel_experiment**
> HyperDriveCancelExperimentResponse hyper_drive_cancel_experiment(arm_scope, run_id, run_history_host=run_history_host)

Cancel an Experiment.

Cancel a HyperDrive Experiment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hyper_drive_cancel_experiment_response import HyperDriveCancelExperimentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HyperDriveExperimentApi(api_client)
    arm_scope = 'arm_scope_example' # str | The ARM scope passed in through URL with format:              subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}.  
    run_id = 'run_id_example' # str | Hyperdrive run id to cancel.
    run_history_host = 'run_history_host_example' # str | The host for run location. (optional)

    try:
        # Cancel an Experiment.
        api_response = api_instance.hyper_drive_cancel_experiment(arm_scope, run_id, run_history_host=run_history_host)
        print("The response of HyperDriveExperimentApi->hyper_drive_cancel_experiment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HyperDriveExperimentApi->hyper_drive_cancel_experiment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **arm_scope** | **str**| The ARM scope passed in through URL with format:              subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}.   | 
 **run_id** | **str**| Hyperdrive run id to cancel. | 
 **run_history_host** | **str**| The host for run location. | [optional] 

### Return type

[**HyperDriveCancelExperimentResponse**](HyperDriveCancelExperimentResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hyper_drive_create_experiment**
> HyperDriveExperimentResponse hyper_drive_create_experiment(arm_scope, config)

Create an Experiment.

Create a HyperDrive Experiment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.hyper_drive_experiment_response import HyperDriveExperimentResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.HyperDriveExperimentApi(api_client)
    arm_scope = 'arm_scope_example' # str | The ARM scope passed in through URL with format:              subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}.  
    config = None # bytearray | The configuration file with experiment JSON content. A text file that is a JSON-serialized '#/definitions/HyperDriveCreateExperiment' object.

    try:
        # Create an Experiment.
        api_response = api_instance.hyper_drive_create_experiment(arm_scope, config)
        print("The response of HyperDriveExperimentApi->hyper_drive_create_experiment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HyperDriveExperimentApi->hyper_drive_create_experiment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **arm_scope** | **str**| The ARM scope passed in through URL with format:              subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MachineLearningServices/workspaces/{workspaceName}/experiments/{experimentName}.   | 
 **config** | **bytearray**| The configuration file with experiment JSON content. A text file that is a JSON-serialized &#39;#/definitions/HyperDriveCreateExperiment&#39; object. | 

### Return type

[**HyperDriveExperimentResponse**](HyperDriveExperimentResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

