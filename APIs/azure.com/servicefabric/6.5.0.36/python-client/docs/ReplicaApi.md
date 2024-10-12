# openapi_client.ReplicaApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_deployed_service_replica_detail_info**](ReplicaApi.md#get_deployed_service_replica_detail_info) | **GET** /Nodes/{nodeName}/$/GetPartitions/{partitionId}/$/GetReplicas/{replicaId}/$/GetDetail | Gets the details of replica deployed on a Service Fabric node.
[**get_deployed_service_replica_detail_info_by_partition_id**](ReplicaApi.md#get_deployed_service_replica_detail_info_by_partition_id) | **GET** /Nodes/{nodeName}/$/GetPartitions/{partitionId}/$/GetReplicas | Gets the details of replica deployed on a Service Fabric node.
[**get_deployed_service_replica_info_list**](ReplicaApi.md#get_deployed_service_replica_info_list) | **GET** /Nodes/{nodeName}/$/GetApplications/{applicationId}/$/GetReplicas | Gets the list of replicas deployed on a Service Fabric node.
[**get_replica_health**](ReplicaApi.md#get_replica_health) | **GET** /Partitions/{partitionId}/$/GetReplicas/{replicaId}/$/GetHealth | Gets the health of a Service Fabric stateful service replica or stateless service instance.
[**get_replica_health_using_policy**](ReplicaApi.md#get_replica_health_using_policy) | **POST** /Partitions/{partitionId}/$/GetReplicas/{replicaId}/$/GetHealth | Gets the health of a Service Fabric stateful service replica or stateless service instance using the specified policy.
[**get_replica_info**](ReplicaApi.md#get_replica_info) | **GET** /Partitions/{partitionId}/$/GetReplicas/{replicaId} | Gets the information about a replica of a Service Fabric partition.
[**get_replica_info_list**](ReplicaApi.md#get_replica_info_list) | **GET** /Partitions/{partitionId}/$/GetReplicas | Gets the information about replicas of a Service Fabric service partition.
[**remove_replica**](ReplicaApi.md#remove_replica) | **POST** /Nodes/{nodeName}/$/GetPartitions/{partitionId}/$/GetReplicas/{replicaId}/$/Delete | Removes a service replica running on a node.
[**report_replica_health**](ReplicaApi.md#report_replica_health) | **POST** /Partitions/{partitionId}/$/GetReplicas/{replicaId}/$/ReportHealth | Sends a health report on the Service Fabric replica.
[**restart_replica**](ReplicaApi.md#restart_replica) | **POST** /Nodes/{nodeName}/$/GetPartitions/{partitionId}/$/GetReplicas/{replicaId}/$/Restart | Restarts a service replica of a persisted service running on a node.


# **get_deployed_service_replica_detail_info**
> DeployedServiceReplicaDetailInfo get_deployed_service_replica_detail_info(api_version, node_name, partition_id, replica_id, timeout=timeout)

Gets the details of replica deployed on a Service Fabric node.

Gets the details of the replica deployed on a Service Fabric node. The information includes service kind, service name, current service operation, current service operation start date time, partition ID, replica/instance ID, reported load, and other information.

### Example


```python
import openapi_client
from openapi_client.models.deployed_service_replica_detail_info import DeployedServiceReplicaDetailInfo
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
    api_instance = openapi_client.ReplicaApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    partition_id = 'partition_id_example' # str | The identity of the partition.
    replica_id = 'replica_id_example' # str | The identifier of the replica.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the details of replica deployed on a Service Fabric node.
        api_response = api_instance.get_deployed_service_replica_detail_info(api_version, node_name, partition_id, replica_id, timeout=timeout)
        print("The response of ReplicaApi->get_deployed_service_replica_detail_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicaApi->get_deployed_service_replica_detail_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **partition_id** | **str**| The identity of the partition. | 
 **replica_id** | **str**| The identifier of the replica. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**DeployedServiceReplicaDetailInfo**](DeployedServiceReplicaDetailInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the list of deployed service replica information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_deployed_service_replica_detail_info_by_partition_id**
> DeployedServiceReplicaDetailInfo get_deployed_service_replica_detail_info_by_partition_id(api_version, node_name, partition_id, timeout=timeout)

Gets the details of replica deployed on a Service Fabric node.

Gets the details of the replica deployed on a Service Fabric node. The information includes service kind, service name, current service operation, current service operation start date time, partition ID, replica/instance ID, reported load, and other information.

### Example


```python
import openapi_client
from openapi_client.models.deployed_service_replica_detail_info import DeployedServiceReplicaDetailInfo
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
    api_instance = openapi_client.ReplicaApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    partition_id = 'partition_id_example' # str | The identity of the partition.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the details of replica deployed on a Service Fabric node.
        api_response = api_instance.get_deployed_service_replica_detail_info_by_partition_id(api_version, node_name, partition_id, timeout=timeout)
        print("The response of ReplicaApi->get_deployed_service_replica_detail_info_by_partition_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicaApi->get_deployed_service_replica_detail_info_by_partition_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **partition_id** | **str**| The identity of the partition. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**DeployedServiceReplicaDetailInfo**](DeployedServiceReplicaDetailInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the list of deployed service replica information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_deployed_service_replica_info_list**
> List[DeployedServiceReplicaInfo] get_deployed_service_replica_info_list(api_version, node_name, application_id, partition_id=partition_id, service_manifest_name=service_manifest_name, timeout=timeout)

Gets the list of replicas deployed on a Service Fabric node.

Gets the list containing the information about replicas deployed on a Service Fabric node. The information include partition ID, replica ID, status of the replica, name of the service, name of the service type, and other information. Use PartitionId or ServiceManifestName query parameters to return information about the deployed replicas matching the specified values for those parameters.

### Example


```python
import openapi_client
from openapi_client.models.deployed_service_replica_info import DeployedServiceReplicaInfo
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
    api_instance = openapi_client.ReplicaApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    partition_id = 'partition_id_example' # str | The identity of the partition. (optional)
    service_manifest_name = 'service_manifest_name_example' # str | The name of a service manifest registered as part of an application type in a Service Fabric cluster. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the list of replicas deployed on a Service Fabric node.
        api_response = api_instance.get_deployed_service_replica_info_list(api_version, node_name, application_id, partition_id=partition_id, service_manifest_name=service_manifest_name, timeout=timeout)
        print("The response of ReplicaApi->get_deployed_service_replica_info_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicaApi->get_deployed_service_replica_info_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **partition_id** | **str**| The identity of the partition. | [optional] 
 **service_manifest_name** | **str**| The name of a service manifest registered as part of an application type in a Service Fabric cluster. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**List[DeployedServiceReplicaInfo]**](DeployedServiceReplicaInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the list of deployed service replica information. |  -  |
**204** | An empty response is returned if the specified applicationId is not found on the specified node. An empty response is also returned if there are no replicas matching the specified filter values for PartitionId or ServiceManifestName query parameters. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_replica_health**
> ReplicaHealth get_replica_health(api_version, partition_id, replica_id, events_health_state_filter=events_health_state_filter, timeout=timeout)

Gets the health of a Service Fabric stateful service replica or stateless service instance.

Gets the health of a Service Fabric replica. Use EventsHealthStateFilter to filter the collection of health events reported on the replica based on the health state.

### Example


```python
import openapi_client
from openapi_client.models.replica_health import ReplicaHealth
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
    api_instance = openapi_client.ReplicaApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    replica_id = 'replica_id_example' # str | The identifier of the replica.
    events_health_state_filter = 0 # int | Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag-based enumeration, so the value could be a combination of these values, obtained using the bitwise 'OR' operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535. (optional) (default to 0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the health of a Service Fabric stateful service replica or stateless service instance.
        api_response = api_instance.get_replica_health(api_version, partition_id, replica_id, events_health_state_filter=events_health_state_filter, timeout=timeout)
        print("The response of ReplicaApi->get_replica_health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicaApi->get_replica_health: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **partition_id** | **str**| The identity of the partition. | 
 **replica_id** | **str**| The identifier of the replica. | 
 **events_health_state_filter** | **int**| Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag-based enumeration, so the value could be a combination of these values, obtained using the bitwise &#39;OR&#39; operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535. | [optional] [default to 0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ReplicaHealth**](ReplicaHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested replica health. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_replica_health_using_policy**
> ReplicaHealth get_replica_health_using_policy(api_version, partition_id, replica_id, events_health_state_filter=events_health_state_filter, timeout=timeout, application_health_policy=application_health_policy)

Gets the health of a Service Fabric stateful service replica or stateless service instance using the specified policy.

Gets the health of a Service Fabric stateful service replica or stateless service instance. Use EventsHealthStateFilter to filter the collection of health events reported on the cluster based on the health state. Use ApplicationHealthPolicy to optionally override the health policies used to evaluate the health. This API only uses 'ConsiderWarningAsError' field of the ApplicationHealthPolicy. The rest of the fields are ignored while evaluating the health of the replica.

### Example


```python
import openapi_client
from openapi_client.models.application_health_policy import ApplicationHealthPolicy
from openapi_client.models.replica_health import ReplicaHealth
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
    api_instance = openapi_client.ReplicaApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    replica_id = 'replica_id_example' # str | The identifier of the replica.
    events_health_state_filter = 0 # int | Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag-based enumeration, so the value could be a combination of these values, obtained using the bitwise 'OR' operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535. (optional) (default to 0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    application_health_policy = openapi_client.ApplicationHealthPolicy() # ApplicationHealthPolicy | Describes the health policies used to evaluate the health of an application or one of its children. If not present, the health evaluation uses the health policy from application manifest or the default health policy. (optional)

    try:
        # Gets the health of a Service Fabric stateful service replica or stateless service instance using the specified policy.
        api_response = api_instance.get_replica_health_using_policy(api_version, partition_id, replica_id, events_health_state_filter=events_health_state_filter, timeout=timeout, application_health_policy=application_health_policy)
        print("The response of ReplicaApi->get_replica_health_using_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicaApi->get_replica_health_using_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **partition_id** | **str**| The identity of the partition. | 
 **replica_id** | **str**| The identifier of the replica. | 
 **events_health_state_filter** | **int**| Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag-based enumeration, so the value could be a combination of these values, obtained using the bitwise &#39;OR&#39; operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535. | [optional] [default to 0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **application_health_policy** | [**ApplicationHealthPolicy**](ApplicationHealthPolicy.md)| Describes the health policies used to evaluate the health of an application or one of its children. If not present, the health evaluation uses the health policy from application manifest or the default health policy. | [optional] 

### Return type

[**ReplicaHealth**](ReplicaHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested replica health information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_replica_info**
> ReplicaInfo get_replica_info(api_version, partition_id, replica_id, timeout=timeout)

Gets the information about a replica of a Service Fabric partition.

The response includes the ID, role, status, health, node name, uptime, and other details about the replica.

### Example


```python
import openapi_client
from openapi_client.models.replica_info import ReplicaInfo
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
    api_instance = openapi_client.ReplicaApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    replica_id = 'replica_id_example' # str | The identifier of the replica.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the information about a replica of a Service Fabric partition.
        api_response = api_instance.get_replica_info(api_version, partition_id, replica_id, timeout=timeout)
        print("The response of ReplicaApi->get_replica_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicaApi->get_replica_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **partition_id** | **str**| The identity of the partition. | 
 **replica_id** | **str**| The identifier of the replica. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ReplicaInfo**](ReplicaInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the specified replicas of the specified partition of a Service Fabric service. |  -  |
**204** | An empty response is returned if the specified replicaId is not a replica of the specified partition. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_replica_info_list**
> PagedReplicaInfoList get_replica_info_list(api_version, partition_id, continuation_token=continuation_token, timeout=timeout)

Gets the information about replicas of a Service Fabric service partition.

The GetReplicas endpoint returns information about the replicas of the specified partition. The response includes the ID, role, status, health, node name, uptime, and other details about the replica.

### Example


```python
import openapi_client
from openapi_client.models.paged_replica_info_list import PagedReplicaInfoList
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
    api_instance = openapi_client.ReplicaApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the information about replicas of a Service Fabric service partition.
        api_response = api_instance.get_replica_info_list(api_version, partition_id, continuation_token=continuation_token, timeout=timeout)
        print("The response of ReplicaApi->get_replica_info_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicaApi->get_replica_info_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **partition_id** | **str**| The identity of the partition. | 
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non-empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results, then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PagedReplicaInfoList**](PagedReplicaInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the replicas of the specified partition. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_replica**
> remove_replica(api_version, node_name, partition_id, replica_id, force_remove=force_remove, timeout=timeout)

Removes a service replica running on a node.

This API simulates a Service Fabric replica failure by removing a replica from a Service Fabric cluster. The removal closes the replica, transitions the replica to the role None, and then removes all of the state information of the replica from the cluster. This API tests the replica state removal path, and simulates the report fault permanent path through client APIs. Warning - There are no safety checks performed when this API is used. Incorrect use of this API can lead to data loss for stateful services. In addition, the forceRemove flag impacts all other replicas hosted in the same process.

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
    api_instance = openapi_client.ReplicaApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    partition_id = 'partition_id_example' # str | The identity of the partition.
    replica_id = 'replica_id_example' # str | The identifier of the replica.
    force_remove = True # bool | Remove a Service Fabric application or service forcefully without going through the graceful shutdown sequence. This parameter can be used to forcefully delete an application or service for which delete is timing out due to issues in the service code that prevents graceful close of replicas. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Removes a service replica running on a node.
        api_instance.remove_replica(api_version, node_name, partition_id, replica_id, force_remove=force_remove, timeout=timeout)
    except Exception as e:
        print("Exception when calling ReplicaApi->remove_replica: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **partition_id** | **str**| The identity of the partition. | 
 **replica_id** | **str**| The identifier of the replica. | 
 **force_remove** | **bool**| Remove a Service Fabric application or service forcefully without going through the graceful shutdown sequence. This parameter can be used to forcefully delete an application or service for which delete is timing out due to issues in the service code that prevents graceful close of replicas. | [optional] 
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
**200** | A successful operation will return 200 status code. A successful operation means that the restart command was received by the replica on the node and it is in the process of restarting. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_replica_health**
> report_replica_health(api_version, partition_id, replica_id, service_kind, health_information, immediate=immediate, timeout=timeout)

Sends a health report on the Service Fabric replica.

Reports health state of the specified Service Fabric replica. The report must contain the information about the source of the health report and property on which it is reported. The report is sent to a Service Fabric gateway Replica, which forwards to the health store. The report may be accepted by the gateway, but rejected by the health store after extra validation. For example, the health store may reject the report because of an invalid parameter, like a stale sequence number. To see whether the report was applied in the health store, run GetReplicaHealth and check that the report appears in the HealthEvents section.

### Example


```python
import openapi_client
from openapi_client.models.health_information import HealthInformation
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
    api_instance = openapi_client.ReplicaApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    replica_id = 'replica_id_example' # str | The identifier of the replica.
    service_kind = Stateful # str | The kind of service replica (Stateless or Stateful) for which the health is being reported. Following are the possible values. (default to Stateful)
    health_information = openapi_client.HealthInformation() # HealthInformation | Describes the health information for the health report. This information needs to be present in all of the health reports sent to the health manager.
    immediate = False # bool | A flag that indicates whether the report should be sent immediately. A health report is sent to a Service Fabric gateway Application, which forwards to the health store. If Immediate is set to true, the report is sent immediately from HTTP Gateway to the health store, regardless of the fabric client settings that the HTTP Gateway Application is using. This is useful for critical reports that should be sent as soon as possible. Depending on timing and other conditions, sending the report may still fail, for example if the HTTP Gateway is closed or the message doesn't reach the Gateway. If Immediate is set to false, the report is sent based on the health client settings from the HTTP Gateway. Therefore, it will be batched according to the HealthReportSendInterval configuration. This is the recommended setting because it allows the health client to optimize health reporting messages to health store as well as health report processing. By default, reports are not sent immediately. (optional) (default to False)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Sends a health report on the Service Fabric replica.
        api_instance.report_replica_health(api_version, partition_id, replica_id, service_kind, health_information, immediate=immediate, timeout=timeout)
    except Exception as e:
        print("Exception when calling ReplicaApi->report_replica_health: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **partition_id** | **str**| The identity of the partition. | 
 **replica_id** | **str**| The identifier of the replica. | 
 **service_kind** | **str**| The kind of service replica (Stateless or Stateful) for which the health is being reported. Following are the possible values. | [default to Stateful]
 **health_information** | [**HealthInformation**](HealthInformation.md)| Describes the health information for the health report. This information needs to be present in all of the health reports sent to the health manager. | 
 **immediate** | **bool**| A flag that indicates whether the report should be sent immediately. A health report is sent to a Service Fabric gateway Application, which forwards to the health store. If Immediate is set to true, the report is sent immediately from HTTP Gateway to the health store, regardless of the fabric client settings that the HTTP Gateway Application is using. This is useful for critical reports that should be sent as soon as possible. Depending on timing and other conditions, sending the report may still fail, for example if the HTTP Gateway is closed or the message doesn&#39;t reach the Gateway. If Immediate is set to false, the report is sent based on the health client settings from the HTTP Gateway. Therefore, it will be batched according to the HealthReportSendInterval configuration. This is the recommended setting because it allows the health client to optimize health reporting messages to health store as well as health report processing. By default, reports are not sent immediately. | [optional] [default to False]
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

# **restart_replica**
> restart_replica(api_version, node_name, partition_id, replica_id, timeout=timeout)

Restarts a service replica of a persisted service running on a node.

Restarts a service replica of a persisted service running on a node. Warning - There are no safety checks performed when this API is used. Incorrect use of this API can lead to availability loss for stateful services.

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
    api_instance = openapi_client.ReplicaApi(api_client)
    api_version = 6.0 # str | The version of the API. This parameter is required and its value must be '6.0'.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    partition_id = 'partition_id_example' # str | The identity of the partition.
    replica_id = 'replica_id_example' # str | The identifier of the replica.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Restarts a service replica of a persisted service running on a node.
        api_instance.restart_replica(api_version, node_name, partition_id, replica_id, timeout=timeout)
    except Exception as e:
        print("Exception when calling ReplicaApi->restart_replica: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.0&#39;.  Service Fabric REST API version is based on the runtime version in which the API was introduced or was changed. Service Fabric runtime supports more than one version of the API. This is the latest supported version of the API. If a lower API version is passed, the returned response may be different from the one documented in this specification.  Additionally the runtime accept any version that is higher than the latest supported version up to the current version of the runtime. So if the latest API version is 6.0, but if the runtime is 6.1, in order to make it easier to write the clients, the runtime will accept version 6.1 for that API. However the behavior of the API will be as per the documented 6.0 version. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **partition_id** | **str**| The identity of the partition. | 
 **replica_id** | **str**| The identifier of the replica. | 
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
**200** | A successful operation will return 200 status code. A successful operation means that the restart command was received by the replica on the node and it is in the process of restarting. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

