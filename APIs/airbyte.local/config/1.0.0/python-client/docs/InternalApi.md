# openapi_client.InternalApi

All URIs are relative to *http://airbyte.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_or_update_state_0**](InternalApi.md#create_or_update_state_0) | **POST** /v1/state/create_or_update | Create or update the state for a connection.
[**get_attempt_normalization_statuses_for_job_0**](InternalApi.md#get_attempt_normalization_statuses_for_job_0) | **POST** /v1/jobs/get_normalization_status | Get normalization status to determine if we can bypass normalization phase
[**save_stats_0**](InternalApi.md#save_stats_0) | **POST** /v1/attempt/save_stats | For worker to set sync stats of a running attempt.
[**save_sync_config_0**](InternalApi.md#save_sync_config_0) | **POST** /v1/attempt/save_sync_config | For worker to save the AttemptSyncConfig for an attempt.
[**set_workflow_in_attempt_0**](InternalApi.md#set_workflow_in_attempt_0) | **POST** /v1/attempt/set_workflow_in_attempt | For worker to register the workflow id in attempt.
[**write_discover_catalog_result_0**](InternalApi.md#write_discover_catalog_result_0) | **POST** /v1/sources/write_discover_catalog_result | Should only called from worker, to write result from discover activity back to DB.


# **create_or_update_state_0**
> ConnectionState create_or_update_state_0(connection_state_create_or_update)

Create or update the state for a connection.

### Example


```python
import openapi_client
from openapi_client.models.connection_state import ConnectionState
from openapi_client.models.connection_state_create_or_update import ConnectionStateCreateOrUpdate
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
    api_instance = openapi_client.InternalApi(api_client)
    connection_state_create_or_update = openapi_client.ConnectionStateCreateOrUpdate() # ConnectionStateCreateOrUpdate | 

    try:
        # Create or update the state for a connection.
        api_response = api_instance.create_or_update_state_0(connection_state_create_or_update)
        print("The response of InternalApi->create_or_update_state_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalApi->create_or_update_state_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **connection_state_create_or_update** | [**ConnectionStateCreateOrUpdate**](ConnectionStateCreateOrUpdate.md)|  | 

### Return type

[**ConnectionState**](ConnectionState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**404** | Object with given id was not found. |  -  |
**422** | Input failed validation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_attempt_normalization_statuses_for_job_0**
> AttemptNormalizationStatusReadList get_attempt_normalization_statuses_for_job_0(job_id_request_body=job_id_request_body)

Get normalization status to determine if we can bypass normalization phase

### Example


```python
import openapi_client
from openapi_client.models.attempt_normalization_status_read_list import AttemptNormalizationStatusReadList
from openapi_client.models.job_id_request_body import JobIdRequestBody
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
    api_instance = openapi_client.InternalApi(api_client)
    job_id_request_body = openapi_client.JobIdRequestBody() # JobIdRequestBody |  (optional)

    try:
        # Get normalization status to determine if we can bypass normalization phase
        api_response = api_instance.get_attempt_normalization_statuses_for_job_0(job_id_request_body=job_id_request_body)
        print("The response of InternalApi->get_attempt_normalization_statuses_for_job_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalApi->get_attempt_normalization_statuses_for_job_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_id_request_body** | [**JobIdRequestBody**](JobIdRequestBody.md)|  | [optional] 

### Return type

[**AttemptNormalizationStatusReadList**](AttemptNormalizationStatusReadList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **save_stats_0**
> InternalOperationResult save_stats_0(save_stats_request_body)

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
    api_instance = openapi_client.InternalApi(api_client)
    save_stats_request_body = openapi_client.SaveStatsRequestBody() # SaveStatsRequestBody | 

    try:
        # For worker to set sync stats of a running attempt.
        api_response = api_instance.save_stats_0(save_stats_request_body)
        print("The response of InternalApi->save_stats_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalApi->save_stats_0: %s\n" % e)
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

# **save_sync_config_0**
> InternalOperationResult save_sync_config_0(save_attempt_sync_config_request_body)

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
    api_instance = openapi_client.InternalApi(api_client)
    save_attempt_sync_config_request_body = openapi_client.SaveAttemptSyncConfigRequestBody() # SaveAttemptSyncConfigRequestBody | 

    try:
        # For worker to save the AttemptSyncConfig for an attempt.
        api_response = api_instance.save_sync_config_0(save_attempt_sync_config_request_body)
        print("The response of InternalApi->save_sync_config_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalApi->save_sync_config_0: %s\n" % e)
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

# **set_workflow_in_attempt_0**
> InternalOperationResult set_workflow_in_attempt_0(set_workflow_in_attempt_request_body)

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
    api_instance = openapi_client.InternalApi(api_client)
    set_workflow_in_attempt_request_body = openapi_client.SetWorkflowInAttemptRequestBody() # SetWorkflowInAttemptRequestBody | 

    try:
        # For worker to register the workflow id in attempt.
        api_response = api_instance.set_workflow_in_attempt_0(set_workflow_in_attempt_request_body)
        print("The response of InternalApi->set_workflow_in_attempt_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalApi->set_workflow_in_attempt_0: %s\n" % e)
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

# **write_discover_catalog_result_0**
> DiscoverCatalogResult write_discover_catalog_result_0(source_discover_schema_write_request_body)

Should only called from worker, to write result from discover activity back to DB.

### Example


```python
import openapi_client
from openapi_client.models.discover_catalog_result import DiscoverCatalogResult
from openapi_client.models.source_discover_schema_write_request_body import SourceDiscoverSchemaWriteRequestBody
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
    api_instance = openapi_client.InternalApi(api_client)
    source_discover_schema_write_request_body = openapi_client.SourceDiscoverSchemaWriteRequestBody() # SourceDiscoverSchemaWriteRequestBody | 

    try:
        # Should only called from worker, to write result from discover activity back to DB.
        api_response = api_instance.write_discover_catalog_result_0(source_discover_schema_write_request_body)
        print("The response of InternalApi->write_discover_catalog_result_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InternalApi->write_discover_catalog_result_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source_discover_schema_write_request_body** | [**SourceDiscoverSchemaWriteRequestBody**](SourceDiscoverSchemaWriteRequestBody.md)|  | 

### Return type

[**DiscoverCatalogResult**](DiscoverCatalogResult.md)

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

