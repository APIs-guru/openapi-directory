# openapi_client.AttemptApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**save_stats**](AttemptApi.md#save_stats) | **POST** /v1/attempt/save_stats | For worker to set sync stats of a running attempt.
[**save_sync_config**](AttemptApi.md#save_sync_config) | **POST** /v1/attempt/save_sync_config | For worker to save the AttemptSyncConfig for an attempt.
[**set_workflow_in_attempt**](AttemptApi.md#set_workflow_in_attempt) | **POST** /v1/attempt/set_workflow_in_attempt | For worker to register the workflow id in attempt.


# **save_stats**
> InternalOperationResult save_stats(save_stats_request_body)

For worker to set sync stats of a running attempt.

### Example


```python
import openapi_client
from openapi_client.models.internal_operation_result import InternalOperationResult
from openapi_client.models.save_stats_request_body import SaveStatsRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttemptApi(api_client)
    save_stats_request_body = openapi_client.SaveStatsRequestBody() # SaveStatsRequestBody | 

    try:
        # For worker to set sync stats of a running attempt.
        api_response = api_instance.save_stats(save_stats_request_body)
        print("The response of AttemptApi->save_stats:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttemptApi->save_stats: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **save_stats_request_body** | [**SaveStatsRequestBody**](SaveStatsRequestBody.md)|  | 

### Return type

[**InternalOperationResult**](InternalOperationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **save_sync_config**
> InternalOperationResult save_sync_config(save_attempt_sync_config_request_body)

For worker to save the AttemptSyncConfig for an attempt.

### Example


```python
import openapi_client
from openapi_client.models.internal_operation_result import InternalOperationResult
from openapi_client.models.save_attempt_sync_config_request_body import SaveAttemptSyncConfigRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttemptApi(api_client)
    save_attempt_sync_config_request_body = openapi_client.SaveAttemptSyncConfigRequestBody() # SaveAttemptSyncConfigRequestBody | 

    try:
        # For worker to save the AttemptSyncConfig for an attempt.
        api_response = api_instance.save_sync_config(save_attempt_sync_config_request_body)
        print("The response of AttemptApi->save_sync_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttemptApi->save_sync_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **save_attempt_sync_config_request_body** | [**SaveAttemptSyncConfigRequestBody**](SaveAttemptSyncConfigRequestBody.md)|  | 

### Return type

[**InternalOperationResult**](InternalOperationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_workflow_in_attempt**
> InternalOperationResult set_workflow_in_attempt(set_workflow_in_attempt_request_body)

For worker to register the workflow id in attempt.

### Example


```python
import openapi_client
from openapi_client.models.internal_operation_result import InternalOperationResult
from openapi_client.models.set_workflow_in_attempt_request_body import SetWorkflowInAttemptRequestBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://airbyte.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://airbyte.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AttemptApi(api_client)
    set_workflow_in_attempt_request_body = openapi_client.SetWorkflowInAttemptRequestBody() # SetWorkflowInAttemptRequestBody | 

    try:
        # For worker to register the workflow id in attempt.
        api_response = api_instance.set_workflow_in_attempt(set_workflow_in_attempt_request_body)
        print("The response of AttemptApi->set_workflow_in_attempt:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AttemptApi->set_workflow_in_attempt: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **set_workflow_in_attempt_request_body** | [**SetWorkflowInAttemptRequestBody**](SetWorkflowInAttemptRequestBody.md)|  | 

### Return type

[**InternalOperationResult**](InternalOperationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

