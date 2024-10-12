# openapi_client.NodeApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**disable_node**](NodeApi.md#disable_node) | **POST** /Nodes/{nodeName}/$/Deactivate | Deactivate a Service Fabric cluster node with the specified deactivation intent.
[**enable_node**](NodeApi.md#enable_node) | **POST** /Nodes/{nodeName}/$/Activate | Activate a Service Fabric cluster node which is currently deactivated.
[**get_node_health**](NodeApi.md#get_node_health) | **GET** /Nodes/{nodeName}/$/GetHealth | Gets the health of a Service Fabric node.
[**get_node_health_using_policy**](NodeApi.md#get_node_health_using_policy) | **POST** /Nodes/{nodeName}/$/GetHealth | Gets the health of a Service Fabric node, by using the specified health policy.
[**get_node_info**](NodeApi.md#get_node_info) | **GET** /Nodes/{nodeName} | Gets the list of nodes in the Service Fabric cluster.
[**get_node_info_list**](NodeApi.md#get_node_info_list) | **GET** /Nodes | Gets the list of nodes in the Service Fabric cluster.
[**get_node_load_info**](NodeApi.md#get_node_load_info) | **GET** /Nodes/{nodeName}/$/GetLoadInformation | Gets the load information of a Service Fabric node.
[**remove_node_state**](NodeApi.md#remove_node_state) | **POST** /Nodes/{nodeName}/$/RemoveNodeState | Notifies Service Fabric that the persisted state on a node has been permanently removed or lost.
[**report_node_health**](NodeApi.md#report_node_health) | **POST** /Nodes/{nodeName}/$/ReportHealth | Sends a health report on the Service Fabric node.
[**restart_node**](NodeApi.md#restart_node) | **POST** /Nodes/{nodeName}/$/Restart | Restarts a Service Fabric cluster node.


# **disable_node**
> disable_node(api_version, node_name, deactivation_intent_description, timeout=timeout)

Deactivate a Service Fabric cluster node with the specified deactivation intent.

Deactivate a Service Fabric cluster node with the specified deactivation intent. Once the deactivation is in progress, the deactivation intent can be increased, but not decreased (for example, a node which is was deactivated with the Pause intent can be deactivated further with Restart, but not the other way around. Nodes may be reactivated using the Activate a node operation any time after they are deactivated. If the deactivation is not complete this will cancel the deactivation. A node which goes down and comes back up while deactivated will still need to be reactivated before services will be placed on that node.

### Example


```python
import openapi_client
from openapi_client.models.deactivation_intent_description import DeactivationIntentDescription
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
    api_instance = openapi_client.NodeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    deactivation_intent_description = openapi_client.DeactivationIntentDescription() # DeactivationIntentDescription | Describes the intent or reason for deactivating the node.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Deactivate a Service Fabric cluster node with the specified deactivation intent.
        api_instance.disable_node(api_version, node_name, deactivation_intent_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling NodeApi->disable_node: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **deactivation_intent_description** | [**DeactivationIntentDescription**](DeactivationIntentDescription.md)| Describes the intent or reason for deactivating the node. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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

# **enable_node**
> enable_node(api_version, node_name, timeout=timeout)

Activate a Service Fabric cluster node which is currently deactivated.

Activates a Service Fabric cluster node which is currently deactivated. Once activated, the node will again become a viable target for placing new replicas, and any deactivated replicas remaining on the node will be reactivated.

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
    api_instance = openapi_client.NodeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Activate a Service Fabric cluster node which is currently deactivated.
        api_instance.enable_node(api_version, node_name, timeout=timeout)
    except Exception as e:
        print("Exception when calling NodeApi->enable_node: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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

# **get_node_health**
> NodeHealth get_node_health(api_version, node_name, events_health_state_filter=events_health_state_filter, timeout=timeout)

Gets the health of a Service Fabric node.

Gets the health of a Service Fabric node. Use EventsHealthStateFilter to filter the collection of health events reported on the node based on the health state. If the node that you specify by name does not exist in the health store, this returns an error.

### Example


```python
import openapi_client
from openapi_client.models.node_health import NodeHealth
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
    api_instance = openapi_client.NodeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    events_health_state_filter = 0 # int | Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these value obtained using bitwise 'OR' operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  (optional) (default to 0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the health of a Service Fabric node.
        api_response = api_instance.get_node_health(api_version, node_name, events_health_state_filter=events_health_state_filter, timeout=timeout)
        print("The response of NodeApi->get_node_health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodeApi->get_node_health: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **events_health_state_filter** | **int**| Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these value obtained using bitwise &#39;OR&#39; operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  | [optional] [default to 0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**NodeHealth**](NodeHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested node health information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_node_health_using_policy**
> NodeHealth get_node_health_using_policy(api_version, node_name, events_health_state_filter=events_health_state_filter, timeout=timeout, cluster_health_policy=cluster_health_policy)

Gets the health of a Service Fabric node, by using the specified health policy.

Gets the health of a Service Fabric node. Use EventsHealthStateFilter to filter the collection of health events reported on the node based on the health state. Use ClusterHealthPolicy in the POST body to override the health policies used to evaluate the health. If the node that you specify by name does not exist in the health store, this returns an error.

### Example


```python
import openapi_client
from openapi_client.models.cluster_health_policy import ClusterHealthPolicy
from openapi_client.models.node_health import NodeHealth
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
    api_instance = openapi_client.NodeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    events_health_state_filter = 0 # int | Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these value obtained using bitwise 'OR' operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  (optional) (default to 0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    cluster_health_policy = openapi_client.ClusterHealthPolicy() # ClusterHealthPolicy | Describes the health policies used to evaluate the health of a cluster or node. If not present, the health evaluation uses the health policy from cluster manifest or the default health policy. (optional)

    try:
        # Gets the health of a Service Fabric node, by using the specified health policy.
        api_response = api_instance.get_node_health_using_policy(api_version, node_name, events_health_state_filter=events_health_state_filter, timeout=timeout, cluster_health_policy=cluster_health_policy)
        print("The response of NodeApi->get_node_health_using_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodeApi->get_node_health_using_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **events_health_state_filter** | **int**| Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these value obtained using bitwise &#39;OR&#39; operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  | [optional] [default to 0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **cluster_health_policy** | [**ClusterHealthPolicy**](ClusterHealthPolicy.md)| Describes the health policies used to evaluate the health of a cluster or node. If not present, the health evaluation uses the health policy from cluster manifest or the default health policy. | [optional] 

### Return type

[**NodeHealth**](NodeHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested node health information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_node_info**
> NodeInfo get_node_info(api_version, node_name, timeout=timeout)

Gets the list of nodes in the Service Fabric cluster.

Gets the information about a specific node in the Service Fabric Cluster.The respons include the name, status, id, health, uptime and other details about the node.

### Example


```python
import openapi_client
from openapi_client.models.node_info import NodeInfo
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
    api_instance = openapi_client.NodeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the list of nodes in the Service Fabric cluster.
        api_response = api_instance.get_node_info(api_version, node_name, timeout=timeout)
        print("The response of NodeApi->get_node_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodeApi->get_node_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**NodeInfo**](NodeInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return information about the node with the specified nodeName. |  -  |
**204** | An empty response is returned if the specified nodeName is not found. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_node_info_list**
> PagedNodeInfoList get_node_info_list(api_version, continuation_token=continuation_token, node_status_filter=node_status_filter, timeout=timeout)

Gets the list of nodes in the Service Fabric cluster.

The Nodes endpoint returns information about the nodes in the Service Fabric Cluster. The respons include the name, status, id, health, uptime and other details about the node.

### Example


```python
import openapi_client
from openapi_client.models.paged_node_info_list import PagedNodeInfoList
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
    api_instance = openapi_client.NodeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    continuation_token = 'continuation_token_example' # str | The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. (optional)
    node_status_filter = default # str | Allows filtering the nodes based on the NodeStatus. Only the nodes that are matching the specified filter value will be returned. The filter value can be one of the following.    - default - This filter value will match all of the nodes excepts the ones with with status as Unknown or Removed.   - all - This filter value will match all of the nodes.   - up - This filter value will match nodes that are Up.   - down - This filter value will match nodes that are Down.   - enabling - This filter value will match nodes that are in the process of being enabled with status as Enabling.   - disabling - This filter value will match nodes that are in the process of being disabled with status as Disabling.   - disabled - This filter value will match nodes that are Disabled.   - unknown - This filter value will match nodes whose status is Unknown. A node would be in Unknown state if Service Fabric does not have authoritative information about that node. This can happen if the system learns about a node at runtime.   - removed - This filter value will match nodes whose status is Removed. These are the nodes that are removed from the cluster using the RemoveNodeState API.  (optional) (default to default)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the list of nodes in the Service Fabric cluster.
        api_response = api_instance.get_node_info_list(api_version, continuation_token=continuation_token, node_status_filter=node_status_filter, timeout=timeout)
        print("The response of NodeApi->get_node_info_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodeApi->get_node_info_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **continuation_token** | **str**| The continuation token parameter is used to obtain next set of results. A continuation token with a non empty value is included in the response of the API when the results from the system do not fit in a single response. When this value is passed to the next API call, the API returns next set of results. If there are no further results then the continuation token does not contain a value. The value of this parameter should not be URL encoded. | [optional] 
 **node_status_filter** | **str**| Allows filtering the nodes based on the NodeStatus. Only the nodes that are matching the specified filter value will be returned. The filter value can be one of the following.    - default - This filter value will match all of the nodes excepts the ones with with status as Unknown or Removed.   - all - This filter value will match all of the nodes.   - up - This filter value will match nodes that are Up.   - down - This filter value will match nodes that are Down.   - enabling - This filter value will match nodes that are in the process of being enabled with status as Enabling.   - disabling - This filter value will match nodes that are in the process of being disabled with status as Disabling.   - disabled - This filter value will match nodes that are Disabled.   - unknown - This filter value will match nodes whose status is Unknown. A node would be in Unknown state if Service Fabric does not have authoritative information about that node. This can happen if the system learns about a node at runtime.   - removed - This filter value will match nodes whose status is Removed. These are the nodes that are removed from the cluster using the RemoveNodeState API.  | [optional] [default to default]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**PagedNodeInfoList**](PagedNodeInfoList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of nodes in the cluster. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_node_load_info**
> NodeLoadInfo get_node_load_info(api_version, node_name, timeout=timeout)

Gets the load information of a Service Fabric node.

Gets the load information of a Service Fabric node.

### Example


```python
import openapi_client
from openapi_client.models.node_load_info import NodeLoadInfo
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
    api_instance = openapi_client.NodeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the load information of a Service Fabric node.
        api_response = api_instance.get_node_load_info(api_version, node_name, timeout=timeout)
        print("The response of NodeApi->get_node_load_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling NodeApi->get_node_load_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**NodeLoadInfo**](NodeLoadInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested node load information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_node_state**
> remove_node_state(api_version, node_name, timeout=timeout)

Notifies Service Fabric that the persisted state on a node has been permanently removed or lost.

Notifies Service Fabric that the persisted state on a node has been permanently removed or lost.  This implies that it is not possible to recover the persisted state of that node. This generally happens if a hard disk has been wiped clean, or if a hard disk crashes. The node has to be down for this operation to be successful. This operation lets Service Fabric know that the replicas on that node no longer exist, and that Service Fabric should stop waiting for those replicas to come back up. Do not run this cmdlet if the state on the node has not been removed and the node can comes back up with its state intact.

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
    api_instance = openapi_client.NodeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Notifies Service Fabric that the persisted state on a node has been permanently removed or lost.
        api_instance.remove_node_state(api_version, node_name, timeout=timeout)
    except Exception as e:
        print("Exception when calling NodeApi->remove_node_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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

# **report_node_health**
> report_node_health(api_version, node_name, health_information, immediate=immediate, timeout=timeout)

Sends a health report on the Service Fabric node.

Reports health state of the specified Service Fabric node. The report must contain the information about the source of the health report and property on which it is reported. The report is sent to a Service Fabric gateway node, which forwards to the health store. The report may be accepted by the gateway, but rejected by the health store after extra validation. For example, the health store may reject the report because of an invalid parameter, like a stale sequence number. To see whether the report was applied in the health store, run GetNodeHealth and check that the report appears in the HealthEvents section. 

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
    api_instance = openapi_client.NodeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    health_information = openapi_client.HealthInformation() # HealthInformation | Describes the health information for the health report. This information needs to be present in all of the health reports sent to the health manager.
    immediate = False # bool | A flag which indicates whether the report should be sent immediately. A health report is sent to a Service Fabric gateway Application, which forwards to the health store. If Immediate is set to true, the report is sent immediately from Http Gateway to the health store, regardless of the fabric client settings that the Http Gateway Application is using. This is useful for critical reports that should be sent as soon as possible. Depending on timing and other conditions, sending the report may still fail, for example if the Http Gateway is closed or the message doesn't reach the Gateway. If Immediate is set to false, the report is sent based on the health client settings from the Http Gateway. Therefore, it will be batched according to the HealthReportSendInterval configuration. This is the recommended setting because it allows the health client to optimize health reporting messages to health store as well as health report processing. By default, reports are not sent immediately.  (optional) (default to False)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Sends a health report on the Service Fabric node.
        api_instance.report_node_health(api_version, node_name, health_information, immediate=immediate, timeout=timeout)
    except Exception as e:
        print("Exception when calling NodeApi->report_node_health: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **health_information** | [**HealthInformation**](HealthInformation.md)| Describes the health information for the health report. This information needs to be present in all of the health reports sent to the health manager. | 
 **immediate** | **bool**| A flag which indicates whether the report should be sent immediately. A health report is sent to a Service Fabric gateway Application, which forwards to the health store. If Immediate is set to true, the report is sent immediately from Http Gateway to the health store, regardless of the fabric client settings that the Http Gateway Application is using. This is useful for critical reports that should be sent as soon as possible. Depending on timing and other conditions, sending the report may still fail, for example if the Http Gateway is closed or the message doesn&#39;t reach the Gateway. If Immediate is set to false, the report is sent based on the health client settings from the Http Gateway. Therefore, it will be batched according to the HealthReportSendInterval configuration. This is the recommended setting because it allows the health client to optimize health reporting messages to health store as well as health report processing. By default, reports are not sent immediately.  | [optional] [default to False]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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

# **restart_node**
> restart_node(api_version, node_name, restart_node_description, timeout=timeout)

Restarts a Service Fabric cluster node.

Restarts a Service Fabric cluster node that is already started.

### Example


```python
import openapi_client
from openapi_client.models.restart_node_description import RestartNodeDescription
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
    api_instance = openapi_client.NodeApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    node_name = 'node_name_example' # str | The name of the node.
    restart_node_description = openapi_client.RestartNodeDescription() # RestartNodeDescription | The instance of the node to be restarted and a flag indicating the need to take dump of the fabric process.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Restarts a Service Fabric cluster node.
        api_instance.restart_node(api_version, node_name, restart_node_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling NodeApi->restart_node: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **node_name** | **str**| The name of the node. | 
 **restart_node_description** | [**RestartNodeDescription**](RestartNodeDescription.md)| The instance of the node to be restarted and a flag indicating the need to take dump of the fabric process. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

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
**200** | A successful operation will return 200 status code. A successful operation means that the restart command was received by the node and it is in the process of restarting. Check the status of the node by calling GetNode operation. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

