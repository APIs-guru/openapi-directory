# openapi_client.FaultsApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_operation**](FaultsApi.md#cancel_operation) | **POST** /Faults/$/Cancel | Cancels a user-induced fault operation.
[**get_data_loss_progress**](FaultsApi.md#get_data_loss_progress) | **GET** /Faults/Services/{serviceId}/$/GetPartitions/{partitionId}/$/GetDataLossProgress | Gets the progress of a partition data loss operation started using the StartDataLoss API.
[**get_fault_operation_list**](FaultsApi.md#get_fault_operation_list) | **GET** /Faults/ | Gets a list of user-induced fault operations filtered by provided input.
[**get_node_transition_progress**](FaultsApi.md#get_node_transition_progress) | **GET** /Faults/Nodes/{nodeName}/$/GetTransitionProgress | Gets the progress of an operation started using StartNodeTransition.
[**get_partition_restart_progress**](FaultsApi.md#get_partition_restart_progress) | **GET** /Faults/Services/{serviceId}/$/GetPartitions/{partitionId}/$/GetRestartProgress | Gets the progress of a PartitionRestart operation started using StartPartitionRestart.
[**get_quorum_loss_progress**](FaultsApi.md#get_quorum_loss_progress) | **GET** /Faults/Services/{serviceId}/$/GetPartitions/{partitionId}/$/GetQuorumLossProgress | Gets the progress of a quorum loss operation on a partition started using the StartQuorumLoss API.
[**start_data_loss**](FaultsApi.md#start_data_loss) | **POST** /Faults/Services/{serviceId}/$/GetPartitions/{partitionId}/$/StartDataLoss | This API will induce data loss for the specified partition. It will trigger a call to the OnDataLossAsync API of the partition.
[**start_node_transition**](FaultsApi.md#start_node_transition) | **POST** /Faults/Nodes/{nodeName}/$/StartTransition/ | Starts or stops a cluster node.
[**start_partition_restart**](FaultsApi.md#start_partition_restart) | **POST** /Faults/Services/{serviceId}/$/GetPartitions/{partitionId}/$/StartRestart | This API will restart some or all replicas or instances of the specified partition.
[**start_quorum_loss**](FaultsApi.md#start_quorum_loss) | **POST** /Faults/Services/{serviceId}/$/GetPartitions/{partitionId}/$/StartQuorumLoss | Induces quorum loss for a given stateful service partition.


# **cancel_operation**
> cancel_operation(api_version, operation_id, force, timeout=timeout)

Cancels a user-induced fault operation.

The following is a list of APIs that start fault operations that may be cancelled using CancelOperation - - StartDataLoss - StartQuorumLoss - StartPartitionRestart - StartNodeTransition  If force is false, then the specified user-induced operation will be gracefully stopped and cleaned up.  If force is true, the command will be aborted, and some internal state may be left behind.  Specifying force as true should be used with care.  Calling this API with force set to true is not allowed until this API has already been called on the same test command with force set to false first, or unless the test command already has an OperationState of OperationState.RollingBack. Clarification: OperationState.RollingBack means that the system will/is be cleaning up internal system state caused by executing the command.  It will not restore data if the test command was to cause data loss.  For example, if you call StartDataLoss then call this API, the system will only clean up internal state from running the command. It will not restore the target partition's data, if the command progressed far enough to cause data loss.  Important note:  if this API is invoked with force==true, internal state may be left behind.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaultsApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    operation_id = 'operation_id_example' # str | A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
    force = False # bool | Indicates whether to gracefully rollback and clean up internal system state modified by executing the user-induced operation. (default to False)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Cancels a user-induced fault operation.
        api_instance.cancel_operation(api_version, operation_id, force, timeout=timeout)
    except Exception as e:
        print("Exception when calling FaultsApi->cancel_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **operation_id** | **str**| A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API | 
 **force** | **bool**| Indicates whether to gracefully rollback and clean up internal system state modified by executing the user-induced operation. | [default to False]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**200** | A successful operation will return 200 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_data_loss_progress**
> PartitionDataLossProgress get_data_loss_progress(api_version, service_id, partition_id, operation_id, timeout=timeout)

Gets the progress of a partition data loss operation started using the StartDataLoss API.

Gets the progress of a data loss operation started with StartDataLoss, using the OperationId.

### Example


```python
import openapi_client
from openapi_client.models.partition_data_loss_progress import PartitionDataLossProgress
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaultsApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    partition_id = 'partition_id_example' # str | The identity of the partition.
    operation_id = 'operation_id_example' # str | A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the progress of a partition data loss operation started using the StartDataLoss API.
        api_response = api_instance.get_data_loss_progress(api_version, service_id, partition_id, operation_id, timeout=timeout)
        print("The response of FaultsApi->get_data_loss_progress:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FaultsApi->get_data_loss_progress: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **partition_id** | **str**| The identity of the partition. | 
 **operation_id** | **str**| A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PartitionDataLossProgress**](PartitionDataLossProgress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the progress of the partition data loss operation. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_fault_operation_list**
> List[OperationStatus] get_fault_operation_list(api_version, type_filter, state_filter, timeout=timeout)

Gets a list of user-induced fault operations filtered by provided input.

Gets the a list of user-induced fault operations filtered by provided input.

### Example


```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaultsApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    type_filter = 65535 # int | Used to filter on OperationType for user-induced operations. 65535 - select all 1     - select PartitionDataLoss. 2     - select PartitionQuorumLoss. 4     - select PartitionRestart. 8     - select NodeTransition. (default to 65535)
    state_filter = 65535 # int | Used to filter on OperationState's for user-induced operations. 65535 - select All 1     - select Running 2     - select RollingBack 8     - select Completed 16    - select Faulted 32    - select Cancelled 64    - select ForceCancelled (default to 65535)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets a list of user-induced fault operations filtered by provided input.
        api_response = api_instance.get_fault_operation_list(api_version, type_filter, state_filter, timeout=timeout)
        print("The response of FaultsApi->get_fault_operation_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FaultsApi->get_fault_operation_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **type_filter** | **int**| Used to filter on OperationType for user-induced operations. 65535 - select all 1     - select PartitionDataLoss. 2     - select PartitionQuorumLoss. 4     - select PartitionRestart. 8     - select NodeTransition. | [default to 65535]
 **state_filter** | **int**| Used to filter on OperationState&#39;s for user-induced operations. 65535 - select All 1     - select Running 2     - select RollingBack 8     - select Completed 16    - select Faulted 32    - select Cancelled 64    - select ForceCancelled | [default to 65535]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**List[OperationStatus]**](OperationStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_node_transition_progress**
> NodeTransitionProgress get_node_transition_progress(api_version, node_name, operation_id, timeout=timeout)

Gets the progress of an operation started using StartNodeTransition.

Gets the progress of an operation started with StartNodeTransition using the provided OperationId.

### Example


```python
import openapi_client
from openapi_client.models.node_transition_progress import NodeTransitionProgress
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaultsApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    operation_id = 'operation_id_example' # str | A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the progress of an operation started using StartNodeTransition.
        api_response = api_instance.get_node_transition_progress(api_version, node_name, operation_id, timeout=timeout)
        print("The response of FaultsApi->get_node_transition_progress:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FaultsApi->get_node_transition_progress: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **operation_id** | **str**| A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**NodeTransitionProgress**](NodeTransitionProgress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the progress of a node transition operation. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_partition_restart_progress**
> PartitionRestartProgress get_partition_restart_progress(api_version, service_id, partition_id, operation_id, timeout=timeout)

Gets the progress of a PartitionRestart operation started using StartPartitionRestart.

Gets the progress of a PartitionRestart started with StartPartitionRestart using the provided OperationId.

### Example


```python
import openapi_client
from openapi_client.models.partition_restart_progress import PartitionRestartProgress
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaultsApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    partition_id = 'partition_id_example' # str | The identity of the partition.
    operation_id = 'operation_id_example' # str | A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the progress of a PartitionRestart operation started using StartPartitionRestart.
        api_response = api_instance.get_partition_restart_progress(api_version, service_id, partition_id, operation_id, timeout=timeout)
        print("The response of FaultsApi->get_partition_restart_progress:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FaultsApi->get_partition_restart_progress: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **partition_id** | **str**| The identity of the partition. | 
 **operation_id** | **str**| A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PartitionRestartProgress**](PartitionRestartProgress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the progress of a partition restart operation. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_quorum_loss_progress**
> PartitionQuorumLossProgress get_quorum_loss_progress(api_version, service_id, partition_id, operation_id, timeout=timeout)

Gets the progress of a quorum loss operation on a partition started using the StartQuorumLoss API.

Gets the progress of a quorum loss operation started with StartQuorumLoss, using the provided OperationId.

### Example


```python
import openapi_client
from openapi_client.models.partition_quorum_loss_progress import PartitionQuorumLossProgress
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaultsApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    partition_id = 'partition_id_example' # str | The identity of the partition.
    operation_id = 'operation_id_example' # str | A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the progress of a quorum loss operation on a partition started using the StartQuorumLoss API.
        api_response = api_instance.get_quorum_loss_progress(api_version, service_id, partition_id, operation_id, timeout=timeout)
        print("The response of FaultsApi->get_quorum_loss_progress:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FaultsApi->get_quorum_loss_progress: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **partition_id** | **str**| The identity of the partition. | 
 **operation_id** | **str**| A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PartitionQuorumLossProgress**](PartitionQuorumLossProgress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the progress of a partition quorum loss operation. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_data_loss**
> start_data_loss(api_version, service_id, partition_id, operation_id, data_loss_mode, timeout=timeout)

This API will induce data loss for the specified partition. It will trigger a call to the OnDataLossAsync API of the partition.

This API will induce data loss for the specified partition. It will trigger a call to the OnDataLoss API of the partition. Actual data loss will depend on the specified DataLossMode PartialDataLoss - Only a quorum of replicas are removed and OnDataLoss is triggered for the partition but actual data loss depends on the presence of in-flight replication. FullDataLoss - All replicas are removed hence all data is lost and OnDataLoss is triggered.  This API should only be called with a stateful service as the target.  Calling this API with a system service as the target is not advised.  Note:  Once this API has been called, it cannot be reversed. Calling CancelOperation will only stop execution and clean up internal system state. It will not restore data if the command has progressed far enough to cause data loss.  Call the GetDataLossProgress API with the same OperationId to return information on the operation started with this API.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaultsApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    partition_id = 'partition_id_example' # str | The identity of the partition.
    operation_id = 'operation_id_example' # str | A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
    data_loss_mode = 'data_loss_mode_example' # str | This enum is passed to the StartDataLoss API to indicate what type of data loss to induce.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # This API will induce data loss for the specified partition. It will trigger a call to the OnDataLossAsync API of the partition.
        api_instance.start_data_loss(api_version, service_id, partition_id, operation_id, data_loss_mode, timeout=timeout)
    except Exception as e:
        print("Exception when calling FaultsApi->start_data_loss: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **partition_id** | **str**| The identity of the partition. | 
 **operation_id** | **str**| A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API | 
 **data_loss_mode** | **str**| This enum is passed to the StartDataLoss API to indicate what type of data loss to induce. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**202** | A 202 status code indicates the operation was accepted.  Call the GetDataLossProgress API to get the progress. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_node_transition**
> start_node_transition(api_version, node_name, operation_id, node_transition_type, node_instance_id, stop_duration_in_seconds, timeout=timeout)

Starts or stops a cluster node.

Starts or stops a cluster node.  A cluster node is a process, not the OS instance itself.  To start a node, pass in \"Start\" for the NodeTransitionType parameter. To stop a node, pass in \"Stop\" for the NodeTransitionType parameter.  This API starts the operation - when the API returns the node may not have finished transitioning yet. Call GetNodeTransitionProgress with the same OperationId to get the progress of the operation.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaultsApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    operation_id = 'operation_id_example' # str | A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
    node_transition_type = 'node_transition_type_example' # str | Indicates the type of transition to perform.  NodeTransitionType.Start will start a stopped node.  NodeTransitionType.Stop will stop a node that is up.
    node_instance_id = 'node_instance_id_example' # str | The node instance ID of the target node.  This can be determined through GetNodeInfo API.
    stop_duration_in_seconds = 56 # int | The duration, in seconds, to keep the node stopped.  The minimum value is 600, the maximum is 14400.  After this time expires, the node will automatically come back up.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Starts or stops a cluster node.
        api_instance.start_node_transition(api_version, node_name, operation_id, node_transition_type, node_instance_id, stop_duration_in_seconds, timeout=timeout)
    except Exception as e:
        print("Exception when calling FaultsApi->start_node_transition: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **operation_id** | **str**| A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API | 
 **node_transition_type** | **str**| Indicates the type of transition to perform.  NodeTransitionType.Start will start a stopped node.  NodeTransitionType.Stop will stop a node that is up. | 
 **node_instance_id** | **str**| The node instance ID of the target node.  This can be determined through GetNodeInfo API. | 
 **stop_duration_in_seconds** | **int**| The duration, in seconds, to keep the node stopped.  The minimum value is 600, the maximum is 14400.  After this time expires, the node will automatically come back up. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**202** | A 202 status code indicates the operation was accepted.  Call the GetNodeTransitionProgress API to get the progress. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_partition_restart**
> start_partition_restart(api_version, service_id, partition_id, operation_id, restart_partition_mode, timeout=timeout)

This API will restart some or all replicas or instances of the specified partition.

This API is useful for testing failover.  If used to target a stateless service partition, RestartPartitionMode must be AllReplicasOrInstances.  Call the GetPartitionRestartProgress API using the same OperationId to get the progress.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaultsApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    partition_id = 'partition_id_example' # str | The identity of the partition.
    operation_id = 'operation_id_example' # str | A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
    restart_partition_mode = 'restart_partition_mode_example' # str | Describe which partitions to restart.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # This API will restart some or all replicas or instances of the specified partition.
        api_instance.start_partition_restart(api_version, service_id, partition_id, operation_id, restart_partition_mode, timeout=timeout)
    except Exception as e:
        print("Exception when calling FaultsApi->start_partition_restart: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **partition_id** | **str**| The identity of the partition. | 
 **operation_id** | **str**| A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API | 
 **restart_partition_mode** | **str**| Describe which partitions to restart. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**202** | A 202 status code indicates the operation was accepted.  Call the GetPartitionRestartProgress API to get the progress. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_quorum_loss**
> start_quorum_loss(api_version, service_id, partition_id, operation_id, quorum_loss_mode, quorum_loss_duration, timeout=timeout)

Induces quorum loss for a given stateful service partition.

Induces quorum loss for a given stateful service partition.  This API is useful for a temporary quorum loss situation on your service.  Call the GetQuorumLossProgress API with the same OperationId to return information on the operation started with this API.  This can only be called on stateful persisted (HasPersistedState==true) services.  Do not use this API on stateless services or stateful in-memory only services.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FaultsApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    service_id = 'service_id_example' # str | The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    partition_id = 'partition_id_example' # str | The identity of the partition.
    operation_id = 'operation_id_example' # str | A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API
    quorum_loss_mode = 'quorum_loss_mode_example' # str | This enum is passed to the StartQuorumLoss API to indicate what type of quorum loss to induce.
    quorum_loss_duration = 56 # int | The amount of time for which the partition will be kept in quorum loss.  This must be specified in seconds.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Induces quorum loss for a given stateful service partition.
        api_instance.start_quorum_loss(api_version, service_id, partition_id, operation_id, quorum_loss_mode, quorum_loss_duration, timeout=timeout)
    except Exception as e:
        print("Exception when calling FaultsApi->start_quorum_loss: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **service_id** | **str**| The identity of the service. This is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **partition_id** | **str**| The identity of the partition. | 
 **operation_id** | **str**| A GUID that identifies a call of this API.  This is passed into the corresponding GetProgress API | 
 **quorum_loss_mode** | **str**| This enum is passed to the StartQuorumLoss API to indicate what type of quorum loss to induce. | 
 **quorum_loss_duration** | **int**| The amount of time for which the partition will be kept in quorum loss.  This must be specified in seconds. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**202** | A 202 status code indicates the operation was accepted.  Call the GetQuorumLossProgress API to get the progress. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

