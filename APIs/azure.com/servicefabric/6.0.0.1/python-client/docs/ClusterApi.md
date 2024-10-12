# openapi_client.ClusterApi

All URIs are relative to *http://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_aad_metadata**](ClusterApi.md#get_aad_metadata) | **GET** /$/GetAadMetadata | Gets the Azure Active Directory metadata used for secured connection to cluster.
[**get_cluster_configuration**](ClusterApi.md#get_cluster_configuration) | **GET** /$/GetClusterConfiguration | Get the Service Fabric standalone cluster configuration.
[**get_cluster_configuration_upgrade_status**](ClusterApi.md#get_cluster_configuration_upgrade_status) | **GET** /$/GetClusterConfigurationUpgradeStatus | Get the cluster configuration upgrade status of a Service Fabric standalone cluster.
[**get_cluster_health**](ClusterApi.md#get_cluster_health) | **GET** /$/GetClusterHealth | Gets the health of a Service Fabric cluster.
[**get_cluster_health_chunk**](ClusterApi.md#get_cluster_health_chunk) | **GET** /$/GetClusterHealthChunk | Gets the health of a Service Fabric cluster using health chunks.
[**get_cluster_health_chunk_using_policy_and_advanced_filters**](ClusterApi.md#get_cluster_health_chunk_using_policy_and_advanced_filters) | **POST** /$/GetClusterHealthChunk | Gets the health of a Service Fabric cluster using health chunks.
[**get_cluster_health_using_policy**](ClusterApi.md#get_cluster_health_using_policy) | **POST** /$/GetClusterHealth | Gets the health of a Service Fabric cluster using the specified policy.
[**get_cluster_manifest**](ClusterApi.md#get_cluster_manifest) | **GET** /$/GetClusterManifest | Get the Service Fabric cluster manifest.
[**get_cluster_upgrade_progress**](ClusterApi.md#get_cluster_upgrade_progress) | **GET** /$/GetUpgradeProgress | Gets the progress of the current cluster upgrade.
[**get_provisioned_fabric_code_version_info_list**](ClusterApi.md#get_provisioned_fabric_code_version_info_list) | **GET** /$/GetProvisionedCodeVersions | Gets a list of fabric code versions that are provisioned in a Service Fabric cluster.
[**get_provisioned_fabric_config_version_info_list**](ClusterApi.md#get_provisioned_fabric_config_version_info_list) | **GET** /$/GetProvisionedConfigVersions | Gets a list of fabric config versions that are provisioned in a Service Fabric cluster.
[**provision_cluster**](ClusterApi.md#provision_cluster) | **POST** /$/Provision | Provision the code or configuration packages of a Service Fabric cluster.
[**report_cluster_health**](ClusterApi.md#report_cluster_health) | **POST** /$/ReportClusterHealth | Sends a health report on the Service Fabric cluster.
[**resume_cluster_upgrade**](ClusterApi.md#resume_cluster_upgrade) | **POST** /$/MoveToNextUpgradeDomain | Make the cluster upgrade move on to the next upgrade domain.
[**rollback_cluster_upgrade**](ClusterApi.md#rollback_cluster_upgrade) | **POST** /$/RollbackUpgrade | Rollback the upgrade of a Service Fabric cluster.
[**start_cluster_configuration_upgrade**](ClusterApi.md#start_cluster_configuration_upgrade) | **POST** /$/StartClusterConfigurationUpgrade | Start upgrading the configuration of a Service Fabric standalone cluster.
[**start_cluster_upgrade**](ClusterApi.md#start_cluster_upgrade) | **POST** /$/Upgrade | Start upgrading the code or configuration version of a Service Fabric cluster.
[**unprovision_cluster**](ClusterApi.md#unprovision_cluster) | **POST** /$/Unprovision | Unprovision the code or configuration packages of a Service Fabric cluster.
[**update_cluster_upgrade**](ClusterApi.md#update_cluster_upgrade) | **POST** /$/UpdateUpgrade | Update the upgrade parameters of a Service Fabric cluster upgrade.


# **get_aad_metadata**
> AadMetadataObject get_aad_metadata(api_version, timeout=timeout)

Gets the Azure Active Directory metadata used for secured connection to cluster.

Gets the Azure Active Directory metadata used for secured connection to cluster. This API is not supposed to be called separately. It provides information needed to set up an Azure Active Directory secured connection with a Service Fabric cluster. 

### Example


```python
import openapi_client
from openapi_client.models.aad_metadata_object import AadMetadataObject
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the Azure Active Directory metadata used for secured connection to cluster.
        api_response = api_instance.get_aad_metadata(api_version, timeout=timeout)
        print("The response of ClusterApi->get_aad_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->get_aad_metadata: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**AadMetadataObject**](AadMetadataObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the Azure Active Directory metadata. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cluster_configuration**
> ClusterConfiguration get_cluster_configuration(api_version, configuration_api_version, timeout=timeout)

Get the Service Fabric standalone cluster configuration.

Get the Service Fabric standalone cluster configuration. The cluster configuration contains properties of the cluster that include different node types on the cluster, security configurations, fault and upgrade domain topologies etc. 

### Example


```python
import openapi_client
from openapi_client.models.cluster_configuration import ClusterConfiguration
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    configuration_api_version = 'configuration_api_version_example' # str | The API version of the Standalone cluster json configuration.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Get the Service Fabric standalone cluster configuration.
        api_response = api_instance.get_cluster_configuration(api_version, configuration_api_version, timeout=timeout)
        print("The response of ClusterApi->get_cluster_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->get_cluster_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **configuration_api_version** | **str**| The API version of the Standalone cluster json configuration. | 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ClusterConfiguration**](ClusterConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested cluster configuration information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cluster_configuration_upgrade_status**
> ClusterConfigurationUpgradeStatusInfo get_cluster_configuration_upgrade_status(api_version, timeout=timeout)

Get the cluster configuration upgrade status of a Service Fabric standalone cluster.

Get the cluster configuration upgrade status of a Service Fabric standalone cluster. 

### Example


```python
import openapi_client
from openapi_client.models.cluster_configuration_upgrade_status_info import ClusterConfigurationUpgradeStatusInfo
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Get the cluster configuration upgrade status of a Service Fabric standalone cluster.
        api_response = api_instance.get_cluster_configuration_upgrade_status(api_version, timeout=timeout)
        print("The response of ClusterApi->get_cluster_configuration_upgrade_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->get_cluster_configuration_upgrade_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ClusterConfigurationUpgradeStatusInfo**](ClusterConfigurationUpgradeStatusInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested cluster configuration upgrade status. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cluster_health**
> ClusterHealth get_cluster_health(api_version, nodes_health_state_filter=nodes_health_state_filter, applications_health_state_filter=applications_health_state_filter, events_health_state_filter=events_health_state_filter, exclude_health_statistics=exclude_health_statistics, include_system_application_health_statistics=include_system_application_health_statistics, timeout=timeout)

Gets the health of a Service Fabric cluster.

Gets the health of a Service Fabric cluster. Use EventsHealthStateFilter to filter the collection of health events reported on the cluster based on the health state. Similarly, use NodesHealthStateFilter and ApplicationsHealthStateFilter to filter the collection of nodes and applications returned based on their aggregated health state. 

### Example


```python
import openapi_client
from openapi_client.models.cluster_health import ClusterHealth
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    nodes_health_state_filter = 0 # int | Allows filtering of the node health state objects returned in the result of cluster health query based on their health state. The possible values for this parameter include integer value of one of the following health states. Only nodes that match the filter are returned. All nodes are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these values obtained using bitwise 'OR' operator. For example, if the provided value is 6 then health state of nodes with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  (optional) (default to 0)
    applications_health_state_filter = 0 # int | Allows filtering of the application health state objects returned in the result of cluster health query based on their health state. The possible values for this parameter include integer value obtained from members or bitwise operations on members of HealthStateFilter enumeration. Only applications that match the filter are returned. All applications are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these values obtained using bitwise 'OR' operator. For example, if the provided value is 6 then health state of applications with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  (optional) (default to 0)
    events_health_state_filter = 0 # int | Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these value obtained using bitwise 'OR' operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  (optional) (default to 0)
    exclude_health_statistics = False # bool | Indicates whether the health statistics should be returned as part of the query result. False by default. The statistics show the number of children entities in health state Ok, Warning, and Error.  (optional) (default to False)
    include_system_application_health_statistics = False # bool | Indicates whether the health statistics should include the fabric:/System application health statistics. False by default. If IncludeSystemApplicationHealthStatistics is set to true, the health statistics include the entities that belong to the fabric:/System application. Otherwise, the query result includes health statistics only for user applications. The health statistics must be included in the query result for this parameter to be applied.  (optional) (default to False)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the health of a Service Fabric cluster.
        api_response = api_instance.get_cluster_health(api_version, nodes_health_state_filter=nodes_health_state_filter, applications_health_state_filter=applications_health_state_filter, events_health_state_filter=events_health_state_filter, exclude_health_statistics=exclude_health_statistics, include_system_application_health_statistics=include_system_application_health_statistics, timeout=timeout)
        print("The response of ClusterApi->get_cluster_health:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->get_cluster_health: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **nodes_health_state_filter** | **int**| Allows filtering of the node health state objects returned in the result of cluster health query based on their health state. The possible values for this parameter include integer value of one of the following health states. Only nodes that match the filter are returned. All nodes are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these values obtained using bitwise &#39;OR&#39; operator. For example, if the provided value is 6 then health state of nodes with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  | [optional] [default to 0]
 **applications_health_state_filter** | **int**| Allows filtering of the application health state objects returned in the result of cluster health query based on their health state. The possible values for this parameter include integer value obtained from members or bitwise operations on members of HealthStateFilter enumeration. Only applications that match the filter are returned. All applications are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these values obtained using bitwise &#39;OR&#39; operator. For example, if the provided value is 6 then health state of applications with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  | [optional] [default to 0]
 **events_health_state_filter** | **int**| Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these value obtained using bitwise &#39;OR&#39; operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  | [optional] [default to 0]
 **exclude_health_statistics** | **bool**| Indicates whether the health statistics should be returned as part of the query result. False by default. The statistics show the number of children entities in health state Ok, Warning, and Error.  | [optional] [default to False]
 **include_system_application_health_statistics** | **bool**| Indicates whether the health statistics should include the fabric:/System application health statistics. False by default. If IncludeSystemApplicationHealthStatistics is set to true, the health statistics include the entities that belong to the fabric:/System application. Otherwise, the query result includes health statistics only for user applications. The health statistics must be included in the query result for this parameter to be applied.  | [optional] [default to False]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ClusterHealth**](ClusterHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested cluster health information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cluster_health_chunk**
> ClusterHealthChunk get_cluster_health_chunk(api_version, timeout=timeout)

Gets the health of a Service Fabric cluster using health chunks.

Gets the health of a Service Fabric cluster using health chunks. Includes the aggregated health state of the cluster, but none of the cluster entities. To expand the cluster health and get the health state of all or some of the entities, use the POST URI and specify the cluster health chunk query description. 

### Example


```python
import openapi_client
from openapi_client.models.cluster_health_chunk import ClusterHealthChunk
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the health of a Service Fabric cluster using health chunks.
        api_response = api_instance.get_cluster_health_chunk(api_version, timeout=timeout)
        print("The response of ClusterApi->get_cluster_health_chunk:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->get_cluster_health_chunk: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ClusterHealthChunk**](ClusterHealthChunk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested cluster health chunk information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cluster_health_chunk_using_policy_and_advanced_filters**
> ClusterHealthChunk get_cluster_health_chunk_using_policy_and_advanced_filters(api_version, timeout=timeout, cluster_health_chunk_query_description=cluster_health_chunk_query_description)

Gets the health of a Service Fabric cluster using health chunks.

Gets the health of a Service Fabric cluster using health chunks. The health evaluation is done based on the input cluster health chunk query description. The query description allows users to specify health policies for evaluating the cluster and its children. Users can specify very flexible filters to select which cluster entities to return. The selection can be done based on the entities health state and based on the hierarchy. The query can return multi-level children of the entities based on the specified filters. For example, it can return one application with a specified name, and for this application, return only services that are in Error or Warning, and all partitions and replicas for one of these services. 

### Example


```python
import openapi_client
from openapi_client.models.cluster_health_chunk import ClusterHealthChunk
from openapi_client.models.cluster_health_chunk_query_description import ClusterHealthChunkQueryDescription
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    cluster_health_chunk_query_description = openapi_client.ClusterHealthChunkQueryDescription() # ClusterHealthChunkQueryDescription | Describes the cluster and application health policies used to evaluate the cluster health and the filters to select which cluster entities to be returned. If the cluster health policy is present, it is used to evaluate the cluster events and the cluster nodes. If not present, the health evaluation uses the cluster health policy defined in the cluster manifest or the default cluster health policy. By default, each application is evaluated using its specific application health policy, defined in the application manifest, or the default health policy, if no policy is defined in manifest. If the application health policy map is specified, and it has an entry for an application, the specified application health policy is used to evaluate the application health. Users can specify very flexible filters to select which cluster entities to include in response. The selection can be done based on the entities health state and based on the hierarchy. The query can return multi-level children of the entities based on the specified filters. For example, it can return one application with a specified name, and for this application, return only services that are in Error or Warning, and all partitions and replicas for one of these services.  (optional)

    try:
        # Gets the health of a Service Fabric cluster using health chunks.
        api_response = api_instance.get_cluster_health_chunk_using_policy_and_advanced_filters(api_version, timeout=timeout, cluster_health_chunk_query_description=cluster_health_chunk_query_description)
        print("The response of ClusterApi->get_cluster_health_chunk_using_policy_and_advanced_filters:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->get_cluster_health_chunk_using_policy_and_advanced_filters: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **cluster_health_chunk_query_description** | [**ClusterHealthChunkQueryDescription**](ClusterHealthChunkQueryDescription.md)| Describes the cluster and application health policies used to evaluate the cluster health and the filters to select which cluster entities to be returned. If the cluster health policy is present, it is used to evaluate the cluster events and the cluster nodes. If not present, the health evaluation uses the cluster health policy defined in the cluster manifest or the default cluster health policy. By default, each application is evaluated using its specific application health policy, defined in the application manifest, or the default health policy, if no policy is defined in manifest. If the application health policy map is specified, and it has an entry for an application, the specified application health policy is used to evaluate the application health. Users can specify very flexible filters to select which cluster entities to include in response. The selection can be done based on the entities health state and based on the hierarchy. The query can return multi-level children of the entities based on the specified filters. For example, it can return one application with a specified name, and for this application, return only services that are in Error or Warning, and all partitions and replicas for one of these services.  | [optional] 

### Return type

[**ClusterHealthChunk**](ClusterHealthChunk.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested cluster health chunk information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cluster_health_using_policy**
> ClusterHealth get_cluster_health_using_policy(api_version, nodes_health_state_filter=nodes_health_state_filter, applications_health_state_filter=applications_health_state_filter, events_health_state_filter=events_health_state_filter, exclude_health_statistics=exclude_health_statistics, include_system_application_health_statistics=include_system_application_health_statistics, timeout=timeout, cluster_health_policies=cluster_health_policies)

Gets the health of a Service Fabric cluster using the specified policy.

Gets the health of a Service Fabric cluster. Use EventsHealthStateFilter to filter the collection of health events reported on the cluster based on the health state. Similarly, use NodesHealthStateFilter and ApplicationsHealthStateFilter to filter the collection of nodes and applications returned based on their aggregated health state. Use ClusterHealthPolicies to override the health policies used to evaluate the health. 

### Example


```python
import openapi_client
from openapi_client.models.cluster_health import ClusterHealth
from openapi_client.models.cluster_health_policies import ClusterHealthPolicies
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    nodes_health_state_filter = 0 # int | Allows filtering of the node health state objects returned in the result of cluster health query based on their health state. The possible values for this parameter include integer value of one of the following health states. Only nodes that match the filter are returned. All nodes are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these values obtained using bitwise 'OR' operator. For example, if the provided value is 6 then health state of nodes with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  (optional) (default to 0)
    applications_health_state_filter = 0 # int | Allows filtering of the application health state objects returned in the result of cluster health query based on their health state. The possible values for this parameter include integer value obtained from members or bitwise operations on members of HealthStateFilter enumeration. Only applications that match the filter are returned. All applications are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these values obtained using bitwise 'OR' operator. For example, if the provided value is 6 then health state of applications with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  (optional) (default to 0)
    events_health_state_filter = 0 # int | Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these value obtained using bitwise 'OR' operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn't match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  (optional) (default to 0)
    exclude_health_statistics = False # bool | Indicates whether the health statistics should be returned as part of the query result. False by default. The statistics show the number of children entities in health state Ok, Warning, and Error.  (optional) (default to False)
    include_system_application_health_statistics = False # bool | Indicates whether the health statistics should include the fabric:/System application health statistics. False by default. If IncludeSystemApplicationHealthStatistics is set to true, the health statistics include the entities that belong to the fabric:/System application. Otherwise, the query result includes health statistics only for user applications. The health statistics must be included in the query result for this parameter to be applied.  (optional) (default to False)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)
    cluster_health_policies = openapi_client.ClusterHealthPolicies() # ClusterHealthPolicies | Describes the health policies used to evaluate the cluster health. If not present, the health evaluation uses the cluster health policy defined in the cluster manifest or the default cluster health policy. By default, each application is evaluated using its specific application health policy, defined in the application manifest, or the default health policy, if no policy is defined in manifest. If the application health policy map is specified, and it has an entry for an application, the specified application health policy is used to evaluate the application health.  (optional)

    try:
        # Gets the health of a Service Fabric cluster using the specified policy.
        api_response = api_instance.get_cluster_health_using_policy(api_version, nodes_health_state_filter=nodes_health_state_filter, applications_health_state_filter=applications_health_state_filter, events_health_state_filter=events_health_state_filter, exclude_health_statistics=exclude_health_statistics, include_system_application_health_statistics=include_system_application_health_statistics, timeout=timeout, cluster_health_policies=cluster_health_policies)
        print("The response of ClusterApi->get_cluster_health_using_policy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->get_cluster_health_using_policy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **nodes_health_state_filter** | **int**| Allows filtering of the node health state objects returned in the result of cluster health query based on their health state. The possible values for this parameter include integer value of one of the following health states. Only nodes that match the filter are returned. All nodes are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these values obtained using bitwise &#39;OR&#39; operator. For example, if the provided value is 6 then health state of nodes with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  | [optional] [default to 0]
 **applications_health_state_filter** | **int**| Allows filtering of the application health state objects returned in the result of cluster health query based on their health state. The possible values for this parameter include integer value obtained from members or bitwise operations on members of HealthStateFilter enumeration. Only applications that match the filter are returned. All applications are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these values obtained using bitwise &#39;OR&#39; operator. For example, if the provided value is 6 then health state of applications with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  | [optional] [default to 0]
 **events_health_state_filter** | **int**| Allows filtering the collection of HealthEvent objects returned based on health state. The possible values for this parameter include integer value of one of the following health states. Only events that match the filter are returned. All events are used to evaluate the aggregated health state. If not specified, all entries are returned. The state values are flag based enumeration, so the value could be a combination of these value obtained using bitwise &#39;OR&#39; operator. For example, If the provided value is 6 then all of the events with HealthState value of OK (2) and Warning (4) are returned.  - Default - Default value. Matches any HealthState. The value is zero. - None - Filter that doesn&#39;t match any HealthState value. Used in order to return no results on a given collection of states. The value is 1. - Ok - Filter that matches input with HealthState value Ok. The value is 2. - Warning - Filter that matches input with HealthState value Warning. The value is 4. - Error - Filter that matches input with HealthState value Error. The value is 8. - All - Filter that matches input with any HealthState value. The value is 65535.  | [optional] [default to 0]
 **exclude_health_statistics** | **bool**| Indicates whether the health statistics should be returned as part of the query result. False by default. The statistics show the number of children entities in health state Ok, Warning, and Error.  | [optional] [default to False]
 **include_system_application_health_statistics** | **bool**| Indicates whether the health statistics should include the fabric:/System application health statistics. False by default. If IncludeSystemApplicationHealthStatistics is set to true, the health statistics include the entities that belong to the fabric:/System application. Otherwise, the query result includes health statistics only for user applications. The health statistics must be included in the query result for this parameter to be applied.  | [optional] [default to False]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]
 **cluster_health_policies** | [**ClusterHealthPolicies**](ClusterHealthPolicies.md)| Describes the health policies used to evaluate the cluster health. If not present, the health evaluation uses the cluster health policy defined in the cluster manifest or the default cluster health policy. By default, each application is evaluated using its specific application health policy, defined in the application manifest, or the default health policy, if no policy is defined in manifest. If the application health policy map is specified, and it has an entry for an application, the specified application health policy is used to evaluate the application health.  | [optional] 

### Return type

[**ClusterHealth**](ClusterHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested cluster health information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cluster_manifest**
> ClusterManifest get_cluster_manifest(api_version, timeout=timeout)

Get the Service Fabric cluster manifest.

Get the Service Fabric cluster manifest. The cluster manifest contains properties of the cluster that include different node types on the cluster, security configurations, fault and upgrade domain topologies etc.  These properties are specified as part of the ClusterConfig.JSON file while deploying a stand alone cluster. However, most of the information in the cluster manifest is generated internally by service fabric during cluster deployment in other deployment scenarios (for e.g when using azuer portal).  The contents of the cluster manifest are for informational purposes only and users are not expected to take a dependency on the format of the file contents or its interpretation. 

### Example


```python
import openapi_client
from openapi_client.models.cluster_manifest import ClusterManifest
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Get the Service Fabric cluster manifest.
        api_response = api_instance.get_cluster_manifest(api_version, timeout=timeout)
        print("The response of ClusterApi->get_cluster_manifest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->get_cluster_manifest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ClusterManifest**](ClusterManifest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested cluster manifest information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_cluster_upgrade_progress**
> ClusterUpgradeProgressObject get_cluster_upgrade_progress(api_version, timeout=timeout)

Gets the progress of the current cluster upgrade.

Gets the current progress of the ongoing cluster upgrade. If no upgrade is currently in progress, gets the last state of the previous cluster upgrade.

### Example


```python
import openapi_client
from openapi_client.models.cluster_upgrade_progress_object import ClusterUpgradeProgressObject
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets the progress of the current cluster upgrade.
        api_response = api_instance.get_cluster_upgrade_progress(api_version, timeout=timeout)
        print("The response of ClusterApi->get_cluster_upgrade_progress:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->get_cluster_upgrade_progress: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**ClusterUpgradeProgressObject**](ClusterUpgradeProgressObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested cluster upgrade progress. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_provisioned_fabric_code_version_info_list**
> List[FabricCodeVersionInfo] get_provisioned_fabric_code_version_info_list(api_version, code_version=code_version, timeout=timeout)

Gets a list of fabric code versions that are provisioned in a Service Fabric cluster.

Gets a list of information about fabric code versions that are provisioned in the cluster. The parameter CodeVersion can be used to optionally filter the output to only that particular version.

### Example


```python
import openapi_client
from openapi_client.models.fabric_code_version_info import FabricCodeVersionInfo
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    code_version = 'code_version_example' # str | The product version of Service Fabric. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets a list of fabric code versions that are provisioned in a Service Fabric cluster.
        api_response = api_instance.get_provisioned_fabric_code_version_info_list(api_version, code_version=code_version, timeout=timeout)
        print("The response of ClusterApi->get_provisioned_fabric_code_version_info_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->get_provisioned_fabric_code_version_info_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **code_version** | **str**| The product version of Service Fabric. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**List[FabricCodeVersionInfo]**](FabricCodeVersionInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested provisioned code versions information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_provisioned_fabric_config_version_info_list**
> List[FabricConfigVersionInfo] get_provisioned_fabric_config_version_info_list(api_version, config_version=config_version, timeout=timeout)

Gets a list of fabric config versions that are provisioned in a Service Fabric cluster.

Gets a list of information about fabric config versions that are provisioned in the cluster. The parameter ConfigVersion can be used to optionally filter the output to only that particular version.

### Example


```python
import openapi_client
from openapi_client.models.fabric_config_version_info import FabricConfigVersionInfo
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    config_version = 'config_version_example' # str | The config version of Service Fabric. (optional)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Gets a list of fabric config versions that are provisioned in a Service Fabric cluster.
        api_response = api_instance.get_provisioned_fabric_config_version_info_list(api_version, config_version=config_version, timeout=timeout)
        print("The response of ClusterApi->get_provisioned_fabric_config_version_info_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClusterApi->get_provisioned_fabric_config_version_info_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **config_version** | **str**| The config version of Service Fabric. | [optional] 
 **timeout** | **int**| The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. | [optional] [default to 60]

### Return type

[**List[FabricConfigVersionInfo]**](FabricConfigVersionInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A successful operation will return 200 status code and the requested provisioned config versions information. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **provision_cluster**
> provision_cluster(api_version, provision_fabric_description, timeout=timeout)

Provision the code or configuration packages of a Service Fabric cluster.

Validate and provision the code or configuration packages of a Service Fabric cluster.

### Example


```python
import openapi_client
from openapi_client.models.provision_fabric_description import ProvisionFabricDescription
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    provision_fabric_description = openapi_client.ProvisionFabricDescription() # ProvisionFabricDescription | Describes the parameters for provisioning a cluster.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Provision the code or configuration packages of a Service Fabric cluster.
        api_instance.provision_cluster(api_version, provision_fabric_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling ClusterApi->provision_cluster: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **provision_fabric_description** | [**ProvisionFabricDescription**](ProvisionFabricDescription.md)| Describes the parameters for provisioning a cluster. | 
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
**200** | A successful response means that the code or configuration packages have been provisioned. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **report_cluster_health**
> report_cluster_health(api_version, health_information, immediate=immediate, timeout=timeout)

Sends a health report on the Service Fabric cluster.

Sends a health report on a Service Fabric cluster. The report must contain the information about the source of the health report and property on which it is reported. The report is sent to a Service Fabric gateway node, which forwards to the health store. The report may be accepted by the gateway, but rejected by the health store after extra validation. For example, the health store may reject the report because of an invalid parameter, like a stale sequence number. To see whether the report was applied in the health store, run GetClusterHealth and check that the report appears in the HealthEvents section. 

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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    health_information = openapi_client.HealthInformation() # HealthInformation | Describes the health information for the health report. This information needs to be present in all of the health reports sent to the health manager.
    immediate = False # bool | A flag which indicates whether the report should be sent immediately. A health report is sent to a Service Fabric gateway Application, which forwards to the health store. If Immediate is set to true, the report is sent immediately from Http Gateway to the health store, regardless of the fabric client settings that the Http Gateway Application is using. This is useful for critical reports that should be sent as soon as possible. Depending on timing and other conditions, sending the report may still fail, for example if the Http Gateway is closed or the message doesn't reach the Gateway. If Immediate is set to false, the report is sent based on the health client settings from the Http Gateway. Therefore, it will be batched according to the HealthReportSendInterval configuration. This is the recommended setting because it allows the health client to optimize health reporting messages to health store as well as health report processing. By default, reports are not sent immediately.  (optional) (default to False)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Sends a health report on the Service Fabric cluster.
        api_instance.report_cluster_health(api_version, health_information, immediate=immediate, timeout=timeout)
    except Exception as e:
        print("Exception when calling ClusterApi->report_cluster_health: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
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
**200** | A successful operation will return 200 status code when the cluster health report is accepted for processing. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resume_cluster_upgrade**
> resume_cluster_upgrade(api_version, resume_cluster_upgrade_description, timeout=timeout)

Make the cluster upgrade move on to the next upgrade domain.

Make the cluster upgrade move on to the next upgrade domain.

### Example


```python
import openapi_client
from openapi_client.models.resume_cluster_upgrade_description import ResumeClusterUpgradeDescription
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    resume_cluster_upgrade_description = openapi_client.ResumeClusterUpgradeDescription() # ResumeClusterUpgradeDescription | Describes the parameters for resuming a cluster upgrade.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Make the cluster upgrade move on to the next upgrade domain.
        api_instance.resume_cluster_upgrade(api_version, resume_cluster_upgrade_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling ClusterApi->resume_cluster_upgrade: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **resume_cluster_upgrade_description** | [**ResumeClusterUpgradeDescription**](ResumeClusterUpgradeDescription.md)| Describes the parameters for resuming a cluster upgrade. | 
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
**200** | A successful response means that the cluster upgrade has moved on to the next upgrade domain. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rollback_cluster_upgrade**
> rollback_cluster_upgrade(api_version, timeout=timeout)

Rollback the upgrade of a Service Fabric cluster.

Rollback the upgrade of a Service Fabric cluster.

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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Rollback the upgrade of a Service Fabric cluster.
        api_instance.rollback_cluster_upgrade(api_version, timeout=timeout)
    except Exception as e:
        print("Exception when calling ClusterApi->rollback_cluster_upgrade: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
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
**202** | A successful response means that the rollback of a cluster upgrade has been initiated. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_cluster_configuration_upgrade**
> start_cluster_configuration_upgrade(api_version, cluster_configuration_upgrade_description, timeout=timeout)

Start upgrading the configuration of a Service Fabric standalone cluster.

Validate the supplied configuration upgrade parameters and start upgrading the cluster configuration if the parameters are valid.

### Example


```python
import openapi_client
from openapi_client.models.cluster_configuration_upgrade_description import ClusterConfigurationUpgradeDescription
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    cluster_configuration_upgrade_description = openapi_client.ClusterConfigurationUpgradeDescription() # ClusterConfigurationUpgradeDescription | Parameters for a standalone cluster configuration upgrade.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Start upgrading the configuration of a Service Fabric standalone cluster.
        api_instance.start_cluster_configuration_upgrade(api_version, cluster_configuration_upgrade_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling ClusterApi->start_cluster_configuration_upgrade: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **cluster_configuration_upgrade_description** | [**ClusterConfigurationUpgradeDescription**](ClusterConfigurationUpgradeDescription.md)| Parameters for a standalone cluster configuration upgrade. | 
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
**202** | A successful response means that the cluster configuration upgrade has started. Use GetClusterConfigurationUpgradeStatus operation to get the status of the upgrade. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **start_cluster_upgrade**
> start_cluster_upgrade(api_version, start_cluster_upgrade_description, timeout=timeout)

Start upgrading the code or configuration version of a Service Fabric cluster.

Validate the supplied upgrade parameters and start upgrading the code or configuration version of a Service Fabric cluster if the parameters are valid.

### Example


```python
import openapi_client
from openapi_client.models.start_cluster_upgrade_description import StartClusterUpgradeDescription
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    start_cluster_upgrade_description = openapi_client.StartClusterUpgradeDescription() # StartClusterUpgradeDescription | Describes the parameters for starting a cluster upgrade.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Start upgrading the code or configuration version of a Service Fabric cluster.
        api_instance.start_cluster_upgrade(api_version, start_cluster_upgrade_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling ClusterApi->start_cluster_upgrade: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **start_cluster_upgrade_description** | [**StartClusterUpgradeDescription**](StartClusterUpgradeDescription.md)| Describes the parameters for starting a cluster upgrade. | 
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
**202** | A successful response means that the cluster code or configuration upgrade has started. Use GetUpgradeProgress operation to get the status of the upgrade. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unprovision_cluster**
> unprovision_cluster(api_version, unprovision_fabric_description, timeout=timeout)

Unprovision the code or configuration packages of a Service Fabric cluster.

Unprovision the code or configuration packages of a Service Fabric cluster.

### Example


```python
import openapi_client
from openapi_client.models.unprovision_fabric_description import UnprovisionFabricDescription
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    unprovision_fabric_description = openapi_client.UnprovisionFabricDescription() # UnprovisionFabricDescription | Describes the parameters for unprovisioning a cluster.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Unprovision the code or configuration packages of a Service Fabric cluster.
        api_instance.unprovision_cluster(api_version, unprovision_fabric_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling ClusterApi->unprovision_cluster: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **unprovision_fabric_description** | [**UnprovisionFabricDescription**](UnprovisionFabricDescription.md)| Describes the parameters for unprovisioning a cluster. | 
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
**200** | A successful response means that the code or configuration packages have been unprovisioned. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_cluster_upgrade**
> update_cluster_upgrade(api_version, update_cluster_upgrade_description, timeout=timeout)

Update the upgrade parameters of a Service Fabric cluster upgrade.

Update the upgrade parameters of a Service Fabric cluster upgrade.

### Example


```python
import openapi_client
from openapi_client.models.update_cluster_upgrade_description import UpdateClusterUpgradeDescription
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
    api_instance = openapi_client.ClusterApi(api_client)
    api_version = 6.0 # str | The version of the API. This is a required parameter and it's value must be \"6.0\". (default to 6.0)
    update_cluster_upgrade_description = openapi_client.UpdateClusterUpgradeDescription() # UpdateClusterUpgradeDescription | Parameters for updating a cluster upgrade.
    timeout = 60 # int | The server timeout for performing the operation in seconds. This specifies the time duration that the client is willing to wait for the requested operation to complete. The default value for this parameter is 60 seconds. (optional) (default to 60)

    try:
        # Update the upgrade parameters of a Service Fabric cluster upgrade.
        api_instance.update_cluster_upgrade(api_version, update_cluster_upgrade_description, timeout=timeout)
    except Exception as e:
        print("Exception when calling ClusterApi->update_cluster_upgrade: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the API. This is a required parameter and it&#39;s value must be \&quot;6.0\&quot;. | [default to 6.0]
 **update_cluster_upgrade_description** | [**UpdateClusterUpgradeDescription**](UpdateClusterUpgradeDescription.md)| Parameters for updating a cluster upgrade. | 
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
**200** | A successful operation returns 200 status code. |  -  |
**0** | The detailed error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

