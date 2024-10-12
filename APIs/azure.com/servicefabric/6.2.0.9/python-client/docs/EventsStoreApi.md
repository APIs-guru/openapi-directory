# openapi_client.EventsStoreApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_application_event_list**](EventsStoreApi.md#get_application_event_list) | **GET** /EventsStore/Applications/{applicationId}/$/Events | Gets an Application-related events.
[**get_applications_event_list**](EventsStoreApi.md#get_applications_event_list) | **GET** /EventsStore/Applications/Events | Gets all Applications-related events.
[**get_cluster_event_list**](EventsStoreApi.md#get_cluster_event_list) | **GET** /EventsStore/Cluster/Events | Gets all Cluster-related events.
[**get_containers_event_list**](EventsStoreApi.md#get_containers_event_list) | **GET** /EventsStore/Containers/Events | Gets all Containers-related events.
[**get_correlated_event_list**](EventsStoreApi.md#get_correlated_event_list) | **GET** /EventsStore/CorrelatedEvents/{eventInstanceId}/$/Events | Gets all correlated events for a given event.
[**get_node_event_list**](EventsStoreApi.md#get_node_event_list) | **GET** /EventsStore/Nodes/{nodeName}/$/Events | Gets a Node-related events.
[**get_nodes_event_list**](EventsStoreApi.md#get_nodes_event_list) | **GET** /EventsStore/Nodes/Events | Gets all Nodes-related Events.
[**get_partition_event_list**](EventsStoreApi.md#get_partition_event_list) | **GET** /EventsStore/Partitions/{partitionId}/$/Events | Gets a Partition-related events.
[**get_partition_replica_event_list**](EventsStoreApi.md#get_partition_replica_event_list) | **GET** /EventsStore/Partitions/{partitionId}/$/Replicas/{replicaId}/$/Events | Gets a Partition Replica-related events.
[**get_partition_replicas_event_list**](EventsStoreApi.md#get_partition_replicas_event_list) | **GET** /EventsStore/Partitions/{partitionId}/$/Replicas/Events | Gets all Replicas-related events for a Partition.
[**get_partitions_event_list**](EventsStoreApi.md#get_partitions_event_list) | **GET** /EventsStore/Partitions/Events | Gets all Partitions-related events.
[**get_service_event_list**](EventsStoreApi.md#get_service_event_list) | **GET** /EventsStore/Services/{serviceId}/$/Events | Gets a Service-related events.
[**get_services_event_list**](EventsStoreApi.md#get_services_event_list) | **GET** /EventsStore/Services/Events | Gets all Services-related events.


# **get_application_event_list**
> List[ApplicationEvent] get_application_event_list(api_version, application_id, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)

Gets an Application-related events.

The response is list of ApplicationEvent objects.

### Example


```python
import openapi_client
from openapi_client.models.application_event import ApplicationEvent
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
    api_instance = openapi_client.EventsStoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    application_id = 'application_id_example' # str | The identity of the application. This is typically the full name of the application without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the application name is \"fabric:/myapp/app1\", the application identity would be \"myapp~app1\" in 6.0+ and \"myapp/app1\" in previous versions.
    start_time_utc = 'start_time_utc_example' # str | The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    end_time_utc = 'end_time_utc_example' # str | The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    events_types_filter = 'events_types_filter_example' # str | This is a comma separated string specifying the types of FabricEvents that should only be included in the response. (optional)
    exclude_analysis_events = True # bool | This param disables the retrieval of AnalysisEvents if true is passed. (optional)
    skip_correlation_lookup = True # bool | This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. (optional)

    try:
        # Gets an Application-related events.
        api_response = api_instance.get_application_event_list(api_version, application_id, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)
        print("The response of EventsStoreApi->get_application_event_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsStoreApi->get_application_event_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **application_id** | **str**| The identity of the application. This is typically the full name of the application without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the application name is \&quot;fabric:/myapp/app1\&quot;, the application identity would be \&quot;myapp~app1\&quot; in 6.0+ and \&quot;myapp/app1\&quot; in previous versions. | 
 **start_time_utc** | **str**| The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **end_time_utc** | **str**| The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **events_types_filter** | **str**| This is a comma separated string specifying the types of FabricEvents that should only be included in the response. | [optional] 
 **exclude_analysis_events** | **bool**| This param disables the retrieval of AnalysisEvents if true is passed. | [optional] 
 **skip_correlation_lookup** | **bool**| This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. | [optional] 

### Return type

[**List[ApplicationEvent]**](ApplicationEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events objects with base type ApplicationEvent. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_applications_event_list**
> List[ApplicationEvent] get_applications_event_list(api_version, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)

Gets all Applications-related events.

The response is list of ApplicationEvent objects.

### Example


```python
import openapi_client
from openapi_client.models.application_event import ApplicationEvent
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
    api_instance = openapi_client.EventsStoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    start_time_utc = 'start_time_utc_example' # str | The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    end_time_utc = 'end_time_utc_example' # str | The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    events_types_filter = 'events_types_filter_example' # str | This is a comma separated string specifying the types of FabricEvents that should only be included in the response. (optional)
    exclude_analysis_events = True # bool | This param disables the retrieval of AnalysisEvents if true is passed. (optional)
    skip_correlation_lookup = True # bool | This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. (optional)

    try:
        # Gets all Applications-related events.
        api_response = api_instance.get_applications_event_list(api_version, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)
        print("The response of EventsStoreApi->get_applications_event_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsStoreApi->get_applications_event_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **start_time_utc** | **str**| The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **end_time_utc** | **str**| The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **events_types_filter** | **str**| This is a comma separated string specifying the types of FabricEvents that should only be included in the response. | [optional] 
 **exclude_analysis_events** | **bool**| This param disables the retrieval of AnalysisEvents if true is passed. | [optional] 
 **skip_correlation_lookup** | **bool**| This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. | [optional] 

### Return type

[**List[ApplicationEvent]**](ApplicationEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events objects with base type ApplicationEvent. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cluster_event_list**
> List[ClusterEvent] get_cluster_event_list(api_version, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)

Gets all Cluster-related events.

The response is list of ClusterEvent objects.

### Example


```python
import openapi_client
from openapi_client.models.cluster_event import ClusterEvent
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
    api_instance = openapi_client.EventsStoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    start_time_utc = 'start_time_utc_example' # str | The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    end_time_utc = 'end_time_utc_example' # str | The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    events_types_filter = 'events_types_filter_example' # str | This is a comma separated string specifying the types of FabricEvents that should only be included in the response. (optional)
    exclude_analysis_events = True # bool | This param disables the retrieval of AnalysisEvents if true is passed. (optional)
    skip_correlation_lookup = True # bool | This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. (optional)

    try:
        # Gets all Cluster-related events.
        api_response = api_instance.get_cluster_event_list(api_version, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)
        print("The response of EventsStoreApi->get_cluster_event_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsStoreApi->get_cluster_event_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **start_time_utc** | **str**| The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **end_time_utc** | **str**| The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **events_types_filter** | **str**| This is a comma separated string specifying the types of FabricEvents that should only be included in the response. | [optional] 
 **exclude_analysis_events** | **bool**| This param disables the retrieval of AnalysisEvents if true is passed. | [optional] 
 **skip_correlation_lookup** | **bool**| This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. | [optional] 

### Return type

[**List[ClusterEvent]**](ClusterEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events objects with base type ClusterEvent. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_containers_event_list**
> List[ContainerInstanceEvent] get_containers_event_list(api_version, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)

Gets all Containers-related events.

The response is list of ContainerInstanceEvent objects.

### Example


```python
import openapi_client
from openapi_client.models.container_instance_event import ContainerInstanceEvent
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
    api_instance = openapi_client.EventsStoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    start_time_utc = 'start_time_utc_example' # str | The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    end_time_utc = 'end_time_utc_example' # str | The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    events_types_filter = 'events_types_filter_example' # str | This is a comma separated string specifying the types of FabricEvents that should only be included in the response. (optional)
    exclude_analysis_events = True # bool | This param disables the retrieval of AnalysisEvents if true is passed. (optional)
    skip_correlation_lookup = True # bool | This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. (optional)

    try:
        # Gets all Containers-related events.
        api_response = api_instance.get_containers_event_list(api_version, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)
        print("The response of EventsStoreApi->get_containers_event_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsStoreApi->get_containers_event_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **start_time_utc** | **str**| The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **end_time_utc** | **str**| The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **events_types_filter** | **str**| This is a comma separated string specifying the types of FabricEvents that should only be included in the response. | [optional] 
 **exclude_analysis_events** | **bool**| This param disables the retrieval of AnalysisEvents if true is passed. | [optional] 
 **skip_correlation_lookup** | **bool**| This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. | [optional] 

### Return type

[**List[ContainerInstanceEvent]**](ContainerInstanceEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events objects with base type ContainerInstanceEvent. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_correlated_event_list**
> List[FabricEvent] get_correlated_event_list(api_version, event_instance_id, timeout=timeout)

Gets all correlated events for a given event.

The response is list of FabricEvents.

### Example


```python
import openapi_client
from openapi_client.models.fabric_event import FabricEvent
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
    api_instance = openapi_client.EventsStoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    event_instance_id = 'event_instance_id_example' # str | The EventInstanceId.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets all correlated events for a given event.
        api_response = api_instance.get_correlated_event_list(api_version, event_instance_id, timeout=timeout)
        print("The response of EventsStoreApi->get_correlated_event_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsStoreApi->get_correlated_event_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **event_instance_id** | **str**| The EventInstanceId. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**List[FabricEvent]**](FabricEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events objects with base type FabricEvent. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_node_event_list**
> List[NodeEvent] get_node_event_list(api_version, node_name, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)

Gets a Node-related events.

The response is list of NodeEvent objects.

### Example


```python
import openapi_client
from openapi_client.models.node_event import NodeEvent
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
    api_instance = openapi_client.EventsStoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    node_name = 'node_name_example' # str | The name of the node.
    start_time_utc = 'start_time_utc_example' # str | The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    end_time_utc = 'end_time_utc_example' # str | The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    events_types_filter = 'events_types_filter_example' # str | This is a comma separated string specifying the types of FabricEvents that should only be included in the response. (optional)
    exclude_analysis_events = True # bool | This param disables the retrieval of AnalysisEvents if true is passed. (optional)
    skip_correlation_lookup = True # bool | This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. (optional)

    try:
        # Gets a Node-related events.
        api_response = api_instance.get_node_event_list(api_version, node_name, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)
        print("The response of EventsStoreApi->get_node_event_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsStoreApi->get_node_event_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **node_name** | **str**| The name of the node. | 
 **start_time_utc** | **str**| The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **end_time_utc** | **str**| The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **events_types_filter** | **str**| This is a comma separated string specifying the types of FabricEvents that should only be included in the response. | [optional] 
 **exclude_analysis_events** | **bool**| This param disables the retrieval of AnalysisEvents if true is passed. | [optional] 
 **skip_correlation_lookup** | **bool**| This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. | [optional] 

### Return type

[**List[NodeEvent]**](NodeEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events objects with base type NodeEvent. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_nodes_event_list**
> List[NodeEvent] get_nodes_event_list(api_version, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)

Gets all Nodes-related Events.

The response is list of NodeEvent objects.

### Example


```python
import openapi_client
from openapi_client.models.node_event import NodeEvent
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
    api_instance = openapi_client.EventsStoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    start_time_utc = 'start_time_utc_example' # str | The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    end_time_utc = 'end_time_utc_example' # str | The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    events_types_filter = 'events_types_filter_example' # str | This is a comma separated string specifying the types of FabricEvents that should only be included in the response. (optional)
    exclude_analysis_events = True # bool | This param disables the retrieval of AnalysisEvents if true is passed. (optional)
    skip_correlation_lookup = True # bool | This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. (optional)

    try:
        # Gets all Nodes-related Events.
        api_response = api_instance.get_nodes_event_list(api_version, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)
        print("The response of EventsStoreApi->get_nodes_event_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsStoreApi->get_nodes_event_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **start_time_utc** | **str**| The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **end_time_utc** | **str**| The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **events_types_filter** | **str**| This is a comma separated string specifying the types of FabricEvents that should only be included in the response. | [optional] 
 **exclude_analysis_events** | **bool**| This param disables the retrieval of AnalysisEvents if true is passed. | [optional] 
 **skip_correlation_lookup** | **bool**| This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. | [optional] 

### Return type

[**List[NodeEvent]**](NodeEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events objects with base type NodeEvent. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_partition_event_list**
> List[PartitionEvent] get_partition_event_list(api_version, partition_id, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)

Gets a Partition-related events.

The response is list of PartitionEvent objects.

### Example


```python
import openapi_client
from openapi_client.models.partition_event import PartitionEvent
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
    api_instance = openapi_client.EventsStoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    start_time_utc = 'start_time_utc_example' # str | The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    end_time_utc = 'end_time_utc_example' # str | The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    events_types_filter = 'events_types_filter_example' # str | This is a comma separated string specifying the types of FabricEvents that should only be included in the response. (optional)
    exclude_analysis_events = True # bool | This param disables the retrieval of AnalysisEvents if true is passed. (optional)
    skip_correlation_lookup = True # bool | This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. (optional)

    try:
        # Gets a Partition-related events.
        api_response = api_instance.get_partition_event_list(api_version, partition_id, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)
        print("The response of EventsStoreApi->get_partition_event_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsStoreApi->get_partition_event_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **partition_id** | **str**| The identity of the partition. | 
 **start_time_utc** | **str**| The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **end_time_utc** | **str**| The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **events_types_filter** | **str**| This is a comma separated string specifying the types of FabricEvents that should only be included in the response. | [optional] 
 **exclude_analysis_events** | **bool**| This param disables the retrieval of AnalysisEvents if true is passed. | [optional] 
 **skip_correlation_lookup** | **bool**| This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. | [optional] 

### Return type

[**List[PartitionEvent]**](PartitionEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events objects with base type PartitionEvent. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_partition_replica_event_list**
> List[ReplicaEvent] get_partition_replica_event_list(api_version, partition_id, replica_id, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)

Gets a Partition Replica-related events.

The response is list of ReplicaEvent objects.

### Example


```python
import openapi_client
from openapi_client.models.replica_event import ReplicaEvent
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
    api_instance = openapi_client.EventsStoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    replica_id = 'replica_id_example' # str | The identifier of the replica.
    start_time_utc = 'start_time_utc_example' # str | The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    end_time_utc = 'end_time_utc_example' # str | The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    events_types_filter = 'events_types_filter_example' # str | This is a comma separated string specifying the types of FabricEvents that should only be included in the response. (optional)
    exclude_analysis_events = True # bool | This param disables the retrieval of AnalysisEvents if true is passed. (optional)
    skip_correlation_lookup = True # bool | This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. (optional)

    try:
        # Gets a Partition Replica-related events.
        api_response = api_instance.get_partition_replica_event_list(api_version, partition_id, replica_id, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)
        print("The response of EventsStoreApi->get_partition_replica_event_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsStoreApi->get_partition_replica_event_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **partition_id** | **str**| The identity of the partition. | 
 **replica_id** | **str**| The identifier of the replica. | 
 **start_time_utc** | **str**| The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **end_time_utc** | **str**| The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **events_types_filter** | **str**| This is a comma separated string specifying the types of FabricEvents that should only be included in the response. | [optional] 
 **exclude_analysis_events** | **bool**| This param disables the retrieval of AnalysisEvents if true is passed. | [optional] 
 **skip_correlation_lookup** | **bool**| This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. | [optional] 

### Return type

[**List[ReplicaEvent]**](ReplicaEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events objects with base type ReplicaEvent. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_partition_replicas_event_list**
> List[ReplicaEvent] get_partition_replicas_event_list(api_version, partition_id, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)

Gets all Replicas-related events for a Partition.

The response is list of ReplicaEvent objects.

### Example


```python
import openapi_client
from openapi_client.models.replica_event import ReplicaEvent
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
    api_instance = openapi_client.EventsStoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    partition_id = 'partition_id_example' # str | The identity of the partition.
    start_time_utc = 'start_time_utc_example' # str | The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    end_time_utc = 'end_time_utc_example' # str | The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    events_types_filter = 'events_types_filter_example' # str | This is a comma separated string specifying the types of FabricEvents that should only be included in the response. (optional)
    exclude_analysis_events = True # bool | This param disables the retrieval of AnalysisEvents if true is passed. (optional)
    skip_correlation_lookup = True # bool | This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. (optional)

    try:
        # Gets all Replicas-related events for a Partition.
        api_response = api_instance.get_partition_replicas_event_list(api_version, partition_id, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)
        print("The response of EventsStoreApi->get_partition_replicas_event_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsStoreApi->get_partition_replicas_event_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **partition_id** | **str**| The identity of the partition. | 
 **start_time_utc** | **str**| The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **end_time_utc** | **str**| The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **events_types_filter** | **str**| This is a comma separated string specifying the types of FabricEvents that should only be included in the response. | [optional] 
 **exclude_analysis_events** | **bool**| This param disables the retrieval of AnalysisEvents if true is passed. | [optional] 
 **skip_correlation_lookup** | **bool**| This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. | [optional] 

### Return type

[**List[ReplicaEvent]**](ReplicaEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events objects with base type ReplicaEvent. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_partitions_event_list**
> List[PartitionEvent] get_partitions_event_list(api_version, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)

Gets all Partitions-related events.

The response is list of PartitionEvent objects.

### Example


```python
import openapi_client
from openapi_client.models.partition_event import PartitionEvent
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
    api_instance = openapi_client.EventsStoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    start_time_utc = 'start_time_utc_example' # str | The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    end_time_utc = 'end_time_utc_example' # str | The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    events_types_filter = 'events_types_filter_example' # str | This is a comma separated string specifying the types of FabricEvents that should only be included in the response. (optional)
    exclude_analysis_events = True # bool | This param disables the retrieval of AnalysisEvents if true is passed. (optional)
    skip_correlation_lookup = True # bool | This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. (optional)

    try:
        # Gets all Partitions-related events.
        api_response = api_instance.get_partitions_event_list(api_version, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)
        print("The response of EventsStoreApi->get_partitions_event_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsStoreApi->get_partitions_event_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **start_time_utc** | **str**| The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **end_time_utc** | **str**| The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **events_types_filter** | **str**| This is a comma separated string specifying the types of FabricEvents that should only be included in the response. | [optional] 
 **exclude_analysis_events** | **bool**| This param disables the retrieval of AnalysisEvents if true is passed. | [optional] 
 **skip_correlation_lookup** | **bool**| This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. | [optional] 

### Return type

[**List[PartitionEvent]**](PartitionEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events objects with base type PartitionEvent. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_service_event_list**
> List[ServiceEvent] get_service_event_list(api_version, service_id, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)

Gets a Service-related events.

The response is list of ServiceEvent objects.

### Example


```python
import openapi_client
from openapi_client.models.service_event import ServiceEvent
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
    api_instance = openapi_client.EventsStoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    service_id = 'service_id_example' # str | The identity of the service. This is typically the full name of the service without the 'fabric:' URI scheme. Starting from version 6.0, hierarchical names are delimited with the \"~\" character. For example, if the service name is \"fabric:/myapp/app1/svc1\", the service identity would be \"myapp~app1~svc1\" in 6.0+ and \"myapp/app1/svc1\" in previous versions.
    start_time_utc = 'start_time_utc_example' # str | The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    end_time_utc = 'end_time_utc_example' # str | The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    events_types_filter = 'events_types_filter_example' # str | This is a comma separated string specifying the types of FabricEvents that should only be included in the response. (optional)
    exclude_analysis_events = True # bool | This param disables the retrieval of AnalysisEvents if true is passed. (optional)
    skip_correlation_lookup = True # bool | This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. (optional)

    try:
        # Gets a Service-related events.
        api_response = api_instance.get_service_event_list(api_version, service_id, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)
        print("The response of EventsStoreApi->get_service_event_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsStoreApi->get_service_event_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **service_id** | **str**| The identity of the service. This is typically the full name of the service without the &#39;fabric:&#39; URI scheme. Starting from version 6.0, hierarchical names are delimited with the \&quot;~\&quot; character. For example, if the service name is \&quot;fabric:/myapp/app1/svc1\&quot;, the service identity would be \&quot;myapp~app1~svc1\&quot; in 6.0+ and \&quot;myapp/app1/svc1\&quot; in previous versions. | 
 **start_time_utc** | **str**| The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **end_time_utc** | **str**| The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **events_types_filter** | **str**| This is a comma separated string specifying the types of FabricEvents that should only be included in the response. | [optional] 
 **exclude_analysis_events** | **bool**| This param disables the retrieval of AnalysisEvents if true is passed. | [optional] 
 **skip_correlation_lookup** | **bool**| This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. | [optional] 

### Return type

[**List[ServiceEvent]**](ServiceEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events objects with base type ServiceEvent. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_services_event_list**
> List[ServiceEvent] get_services_event_list(api_version, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)

Gets all Services-related events.

The response is list of ServiceEvent objects.

### Example


```python
import openapi_client
from openapi_client.models.service_event import ServiceEvent
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
    api_instance = openapi_client.EventsStoreApi(api_client)
    api_version = 6.2-preview # str | The version of the API. This parameter is required and its value must be '6.2-preview'. (default to 6.2-preview)
    start_time_utc = 'start_time_utc_example' # str | The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    end_time_utc = 'end_time_utc_example' # str | The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    events_types_filter = 'events_types_filter_example' # str | This is a comma separated string specifying the types of FabricEvents that should only be included in the response. (optional)
    exclude_analysis_events = True # bool | This param disables the retrieval of AnalysisEvents if true is passed. (optional)
    skip_correlation_lookup = True # bool | This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. (optional)

    try:
        # Gets all Services-related events.
        api_response = api_instance.get_services_event_list(api_version, start_time_utc, end_time_utc, timeout=timeout, events_types_filter=events_types_filter, exclude_analysis_events=exclude_analysis_events, skip_correlation_lookup=skip_correlation_lookup)
        print("The response of EventsStoreApi->get_services_event_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EventsStoreApi->get_services_event_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This parameter is required and its value must be &#39;6.2-preview&#39;. | [default to 6.2-preview]
 **start_time_utc** | **str**| The start time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **end_time_utc** | **str**| The end time of a lookup query in ISO UTC yyyy-MM-ddTHH:mm:ssZ. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This timeout specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **events_types_filter** | **str**| This is a comma separated string specifying the types of FabricEvents that should only be included in the response. | [optional] 
 **exclude_analysis_events** | **bool**| This param disables the retrieval of AnalysisEvents if true is passed. | [optional] 
 **skip_correlation_lookup** | **bool**| This param disables the search of CorrelatedEvents information if true is passed. otherwise the CorrelationEvents get processed and HasCorrelatedEvents field in every FabricEvent gets populated. | [optional] 

### Return type

[**List[ServiceEvent]**](ServiceEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of events objects with base type ServiceEvent. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

