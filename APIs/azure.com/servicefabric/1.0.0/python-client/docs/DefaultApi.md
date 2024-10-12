# openapi_client.DefaultApi

All URIs are relative to *https://azure.local:19080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**application_healths_get**](DefaultApi.md#application_healths_get) | **GET** /Applications/{applicationName}/$/GetHealth | 
[**application_healths_send**](DefaultApi.md#application_healths_send) | **POST** /Applications/{applicationName}/$/ReportHealth | 
[**application_manifests_get**](DefaultApi.md#application_manifests_get) | **GET** /ApplicationTypes/{applicationTypeName}/$/GetApplicationManifest | 
[**application_types_get**](DefaultApi.md#application_types_get) | **GET** /ApplicationTypes/{applicationTypeName} | 
[**application_types_list**](DefaultApi.md#application_types_list) | **GET** /ApplicationTypes | 
[**application_types_register**](DefaultApi.md#application_types_register) | **POST** /ApplicationTypes/$/Provision | 
[**application_types_unregister**](DefaultApi.md#application_types_unregister) | **POST** /ApplicationTypes/{applicationTypeName}/$/Unprovision | 
[**application_upgrade_rollbacks_start**](DefaultApi.md#application_upgrade_rollbacks_start) | **POST** /Applications/{applicationName}/$/RollbackUpgrade | 
[**application_upgrades_get**](DefaultApi.md#application_upgrades_get) | **GET** /Applications/{applicationName}/$/GetUpgradeProgress | 
[**application_upgrades_resume**](DefaultApi.md#application_upgrades_resume) | **POST** /Applications/{applicationName}/$/MoveNextUpgradeDomain | 
[**application_upgrades_start**](DefaultApi.md#application_upgrades_start) | **POST** /Applications/{applicationName}/$/Upgrade | 
[**application_upgrades_update**](DefaultApi.md#application_upgrades_update) | **POST** /Applications/{applicationName}/$/UpdateUpgrade | 
[**applications_create**](DefaultApi.md#applications_create) | **POST** /Applications/$/Create | 
[**applications_get**](DefaultApi.md#applications_get) | **GET** /Applications/{applicationName} | 
[**applications_list**](DefaultApi.md#applications_list) | **GET** /Applications | 
[**applications_remove**](DefaultApi.md#applications_remove) | **POST** /Applications/{applicationName}/$/Delete | 
[**cluster_healths_get**](DefaultApi.md#cluster_healths_get) | **GET** /$/GetClusterHealth | 
[**cluster_healths_send**](DefaultApi.md#cluster_healths_send) | **POST** /$/ReportClusterHealth | 
[**cluster_load_informations_get**](DefaultApi.md#cluster_load_informations_get) | **GET** /$/GetLoadInformation | 
[**cluster_manifests_get**](DefaultApi.md#cluster_manifests_get) | **GET** /$/GetClusterManifest | 
[**cluster_packages_register**](DefaultApi.md#cluster_packages_register) | **POST** /$/Provision | 
[**cluster_packages_unregister**](DefaultApi.md#cluster_packages_unregister) | **POST** /$/Unprovision | 
[**cluster_upgrades_resume**](DefaultApi.md#cluster_upgrades_resume) | **POST** /$/MoveToNextUpgradeDomain | 
[**cluster_upgrades_rollback**](DefaultApi.md#cluster_upgrades_rollback) | **POST** /$/RollbackUpgrade | 
[**cluster_upgrades_start**](DefaultApi.md#cluster_upgrades_start) | **POST** /$/Upgrade | 
[**cluster_upgrades_update**](DefaultApi.md#cluster_upgrades_update) | **POST** /$/UpdateUpgrade | 
[**deployed_application_healths_get**](DefaultApi.md#deployed_application_healths_get) | **GET** /Nodes/{nodeName}/$/GetApplications/{applicationName}/$/GetHealth | 
[**deployed_application_healths_send**](DefaultApi.md#deployed_application_healths_send) | **POST** /Nodes/{nodeName}/$/GetApplications/{applicationName}/$/ReportHealth | 
[**deployed_applications_get**](DefaultApi.md#deployed_applications_get) | **GET** /Nodes/{nodeName}/$/GetApplications/{applicationName} | 
[**deployed_applications_list**](DefaultApi.md#deployed_applications_list) | **GET** /Nodes/{nodeName}/$/GetApplications | 
[**deployed_code_packages_get**](DefaultApi.md#deployed_code_packages_get) | **GET** /Nodes/{nodeName}/$/GetApplications/{applicationName}/$/GetCodePackages | 
[**deployed_replica_details_get**](DefaultApi.md#deployed_replica_details_get) | **GET** /Nodes/{nodeName}/$/GetPartitions/{partitionName}/$/GetReplicas/{replicaId}/$/GetDetail | 
[**deployed_replicas_get**](DefaultApi.md#deployed_replicas_get) | **GET** /Nodes/{nodeName}/$/GetApplications/{applicationName}/$/GetReplicas | 
[**deployed_service_package_healths_get**](DefaultApi.md#deployed_service_package_healths_get) | **GET** /Nodes/{nodeName}/$/GetApplications/{applicationName}/$/GetServicePackages/{servicePackageName}/$/GetHealth | 
[**deployed_service_package_healths_send**](DefaultApi.md#deployed_service_package_healths_send) | **POST** /Nodes/{nodeName}/$/GetApplications/{applicationName}/$/GetServicePackages/{serviceManifestName}/$/ReportHealth | 
[**deployed_service_packages_get**](DefaultApi.md#deployed_service_packages_get) | **GET** /Nodes/{nodeName}/$/GetApplications/{applicationName}/$/GetServicePackages | 
[**deployed_service_types_get**](DefaultApi.md#deployed_service_types_get) | **GET** /Nodes/{nodeName}/$/GetApplications/{applicationName}/$/GetServiceTypes | 
[**node_healths_get**](DefaultApi.md#node_healths_get) | **GET** /Nodes/{nodeName}/$/GetHealth | 
[**node_healths_send**](DefaultApi.md#node_healths_send) | **POST** /Nodes/{nodeName}/$/ReportHealth | 
[**node_load_informations_get**](DefaultApi.md#node_load_informations_get) | **GET** /Nodes/{nodeName}/$/GetLoadInformation | 
[**node_states_remove**](DefaultApi.md#node_states_remove) | **POST** /Nodes/{nodeName}/$/RemoveNodeState | 
[**nodes_disable**](DefaultApi.md#nodes_disable) | **POST** /Nodes/{nodeName}/$/Deactivate | 
[**nodes_enable**](DefaultApi.md#nodes_enable) | **POST** /Nodes/{nodeName}/$/Activate | 
[**nodes_get**](DefaultApi.md#nodes_get) | **GET** /Nodes/{nodeName} | 
[**nodes_list**](DefaultApi.md#nodes_list) | **GET** /Nodes | 
[**partition_healths_get**](DefaultApi.md#partition_healths_get) | **GET** /Partitions/{partitionId}/$/GetHealth | 
[**partition_healths_send**](DefaultApi.md#partition_healths_send) | **POST** /Partitions/{partitionId}/$/ReportHealth | 
[**partition_lists_repair**](DefaultApi.md#partition_lists_repair) | **POST** /Services/{serviceName}/$/GetPartitions/$/Recover | 
[**partition_load_informations_get**](DefaultApi.md#partition_load_informations_get) | **GET** /Partitions/{partitionId}/$/GetLoadInformation | 
[**partition_loads_reset**](DefaultApi.md#partition_loads_reset) | **POST** /Partitions/{partitionId}/$/ResetLoad | 
[**partitions_get**](DefaultApi.md#partitions_get) | **GET** /Services/{serviceName}/$/GetPartitions/{partitionId} | 
[**partitions_list**](DefaultApi.md#partitions_list) | **GET** /Services/{serviceName}/$/GetPartitions | 
[**partitions_repair**](DefaultApi.md#partitions_repair) | **POST** /Partitions/{partitionId}/$/Recover | 
[**replica_healths_get**](DefaultApi.md#replica_healths_get) | **GET** /Partitions/{partitionId}/$/GetReplicas/{replicaId}/$/GetHealth | 
[**replica_healths_send**](DefaultApi.md#replica_healths_send) | **POST** /Partitions/{partitionId}/$/GetReplicas/{replicaId}/$/ReportHealth | 
[**replica_load_informations_get**](DefaultApi.md#replica_load_informations_get) | **GET** /Partitions/{partitionId}/$/GetReplicas/{replicaId}/$/GetLoadInformation | 
[**replicas_get**](DefaultApi.md#replicas_get) | **GET** /Partitions/{partitionId}/$/GetReplicas/{replicaId} | 
[**replicas_list**](DefaultApi.md#replicas_list) | **GET** /Partitions/{partitionId}/$/GetReplicas | 
[**service_descriptions_get**](DefaultApi.md#service_descriptions_get) | **GET** /Services/{serviceName}/$/GetDescription | 
[**service_from_templates_create**](DefaultApi.md#service_from_templates_create) | **POST** /Applications/{applicationName}/$/GetServices/$/CreateFromTemplate | 
[**service_group_descriptions_get**](DefaultApi.md#service_group_descriptions_get) | **GET** /Applications/{applicationName}/$/GetServices/{serviceName}/$/GetServiceGroupDescription | 
[**service_group_from_templates_create**](DefaultApi.md#service_group_from_templates_create) | **POST** /Applications/{applicationName}/$/GetServiceGroups/$/CreateServiceGroupFromTemplate | 
[**service_group_members_get**](DefaultApi.md#service_group_members_get) | **GET** /Applications/{applicationName}/$/GetServices/{serviceName}/$/GetServiceGroupMembers | 
[**service_groups_create**](DefaultApi.md#service_groups_create) | **POST** /Applications/{applicationName}/$/GetServices/$/CreateServiceGroup | 
[**service_groups_remove**](DefaultApi.md#service_groups_remove) | **POST** /Applications/{applicationName}/$/GetServiceGroups/{serviceName}/$/Delete | 
[**service_groups_update**](DefaultApi.md#service_groups_update) | **POST** /Applications/{applicationName}/$/GetServices/{serviceName}/$/UpdateServiceGroup | 
[**service_healths_get**](DefaultApi.md#service_healths_get) | **GET** /Services/{serviceName}/$/GetHealth | 
[**service_healths_send**](DefaultApi.md#service_healths_send) | **POST** /Services/{serviceName}/$/ReportHealth | 
[**service_manifests_get**](DefaultApi.md#service_manifests_get) | **GET** /ApplicationTypes/{applicationTypeName}/$/GetServiceManifest | 
[**service_types_get**](DefaultApi.md#service_types_get) | **GET** /ApplicationTypes/{applicationTypeName}/$/GetServiceTypes | 
[**services_create**](DefaultApi.md#services_create) | **POST** /Applications/{applicationName}/$/GetServices/$/Create | 
[**services_get**](DefaultApi.md#services_get) | **GET** /Applications/{applicationName}/$/GetServices/{serviceName} | 
[**services_list**](DefaultApi.md#services_list) | **GET** /Applications/{applicationName}/$/GetServices | 
[**services_remove**](DefaultApi.md#services_remove) | **POST** /Services/{serviceName}/$/Delete | 
[**services_resolve**](DefaultApi.md#services_resolve) | **GET** /Services/{serviceName}/$/ResolvePartition | 
[**services_update**](DefaultApi.md#services_update) | **POST** /Services/{serviceName}/$/Update | 
[**upgrade_progresses_get**](DefaultApi.md#upgrade_progresses_get) | **GET** /$/GetUpgradeProgress | 


# **application_healths_get**
> ApplicationHealth application_healths_get(application_name, api_version, events_health_state_filter=events_health_state_filter, deployed_applications_health_state_filter=deployed_applications_health_state_filter, timeout=timeout)



Get application healths

### Example


```python
import openapi_client
from openapi_client.models.application_health import ApplicationHealth
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    events_health_state_filter = 'events_health_state_filter_example' # str | The filter of the events health state (optional)
    deployed_applications_health_state_filter = 'deployed_applications_health_state_filter_example' # str | The filter of the deployed application health state (optional)
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.application_healths_get(application_name, api_version, events_health_state_filter=events_health_state_filter, deployed_applications_health_state_filter=deployed_applications_health_state_filter, timeout=timeout)
        print("The response of DefaultApi->application_healths_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->application_healths_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **events_health_state_filter** | **str**| The filter of the events health state | [optional] 
 **deployed_applications_health_state_filter** | **str**| The filter of the deployed application health state | [optional] 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ApplicationHealth**](ApplicationHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_healths_send**
> str application_healths_send(application_name, api_version, application_health_report, timeout=timeout)



Send application health

### Example


```python
import openapi_client
from openapi_client.models.application_health_report import ApplicationHealthReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    application_health_report = openapi_client.ApplicationHealthReport() # ApplicationHealthReport | The report of the application health
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.application_healths_send(application_name, api_version, application_health_report, timeout=timeout)
        print("The response of DefaultApi->application_healths_send:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->application_healths_send: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **application_health_report** | [**ApplicationHealthReport**](ApplicationHealthReport.md)| The report of the application health | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_manifests_get**
> ApplicationManifest application_manifests_get(application_type_name, application_type_version, api_version, timeout=timeout)



Get application manifests

### Example


```python
import openapi_client
from openapi_client.models.application_manifest import ApplicationManifest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_type_name = 'application_type_name_example' # str | The name of the application type
    application_type_version = 'application_type_version_example' # str | The version of the application type
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.application_manifests_get(application_type_name, application_type_version, api_version, timeout=timeout)
        print("The response of DefaultApi->application_manifests_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->application_manifests_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_type_name** | **str**| The name of the application type | 
 **application_type_version** | **str**| The version of the application type | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ApplicationManifest**](ApplicationManifest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application manifest |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_types_get**
> List[ApplicationType] application_types_get(application_type_name, api_version, timeout=timeout)



Get application types

### Example


```python
import openapi_client
from openapi_client.models.application_type import ApplicationType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_type_name = 'application_type_name_example' # str | The name of the application type
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.application_types_get(application_type_name, api_version, timeout=timeout)
        print("The response of DefaultApi->application_types_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->application_types_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_type_name** | **str**| The name of the application type | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**List[ApplicationType]**](ApplicationType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application type |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_types_list**
> List[ApplicationType] application_types_list(api_version, timeout=timeout)



List application types

### Example


```python
import openapi_client
from openapi_client.models.application_type import ApplicationType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.application_types_list(api_version, timeout=timeout)
        print("The response of DefaultApi->application_types_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->application_types_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**List[ApplicationType]**](ApplicationType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application type |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_types_register**
> str application_types_register(api_version, register_application_type, timeout=timeout)



Register application types

### Example


```python
import openapi_client
from openapi_client.models.register_application_type import RegisterApplicationType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    register_application_type = openapi_client.RegisterApplicationType() # RegisterApplicationType | The type of the register application
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.application_types_register(api_version, register_application_type, timeout=timeout)
        print("The response of DefaultApi->application_types_register:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->application_types_register: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **register_application_type** | [**RegisterApplicationType**](RegisterApplicationType.md)| The type of the register application | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application type |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_types_unregister**
> str application_types_unregister(application_type_name, api_version, unregister_application_type, timeout=timeout)



Unregister application types

### Example


```python
import openapi_client
from openapi_client.models.unregister_application_type import UnregisterApplicationType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_type_name = 'application_type_name_example' # str | The name of the application type
    api_version = 'api_version_example' # str | The version of the api
    unregister_application_type = openapi_client.UnregisterApplicationType() # UnregisterApplicationType | The type of the unregister application
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.application_types_unregister(application_type_name, api_version, unregister_application_type, timeout=timeout)
        print("The response of DefaultApi->application_types_unregister:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->application_types_unregister: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_type_name** | **str**| The name of the application type | 
 **api_version** | **str**| The version of the api | 
 **unregister_application_type** | [**UnregisterApplicationType**](UnregisterApplicationType.md)| The type of the unregister application | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application type |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_upgrade_rollbacks_start**
> str application_upgrade_rollbacks_start(application_name, api_version, timeout=timeout)



Start application upgrade rollbacks

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.application_upgrade_rollbacks_start(application_name, api_version, timeout=timeout)
        print("The response of DefaultApi->application_upgrade_rollbacks_start:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->application_upgrade_rollbacks_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application upgrade rollback |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_upgrades_get**
> ApplicationUpgrade application_upgrades_get(application_name, api_version, timeout=timeout)



Get application upgrades

### Example


```python
import openapi_client
from openapi_client.models.application_upgrade import ApplicationUpgrade
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.application_upgrades_get(application_name, api_version, timeout=timeout)
        print("The response of DefaultApi->application_upgrades_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->application_upgrades_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ApplicationUpgrade**](ApplicationUpgrade.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application upgrade |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_upgrades_resume**
> str application_upgrades_resume(application_name, api_version, resume_application_upgrade, timeout=timeout)



Resume application upgrades

### Example


```python
import openapi_client
from openapi_client.models.resume_application_upgrade import ResumeApplicationUpgrade
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    resume_application_upgrade = openapi_client.ResumeApplicationUpgrade() # ResumeApplicationUpgrade | The upgrade of the resume application
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.application_upgrades_resume(application_name, api_version, resume_application_upgrade, timeout=timeout)
        print("The response of DefaultApi->application_upgrades_resume:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->application_upgrades_resume: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **resume_application_upgrade** | [**ResumeApplicationUpgrade**](ResumeApplicationUpgrade.md)| The upgrade of the resume application | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The resume application upgrade |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_upgrades_start**
> str application_upgrades_start(application_name, api_version, start_application_upgrade, timeout=timeout)



Start application upgrades

### Example


```python
import openapi_client
from openapi_client.models.start_application_upgrade import StartApplicationUpgrade
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    start_application_upgrade = openapi_client.StartApplicationUpgrade() # StartApplicationUpgrade | The description of the start application upgrade
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.application_upgrades_start(application_name, api_version, start_application_upgrade, timeout=timeout)
        print("The response of DefaultApi->application_upgrades_start:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->application_upgrades_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **start_application_upgrade** | [**StartApplicationUpgrade**](StartApplicationUpgrade.md)| The description of the start application upgrade | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The start application upgrade |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **application_upgrades_update**
> str application_upgrades_update(application_name, api_version, update_application_upgrade, timeout=timeout)



Update application upgrades

### Example


```python
import openapi_client
from openapi_client.models.update_application_upgrade import UpdateApplicationUpgrade
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    update_application_upgrade = openapi_client.UpdateApplicationUpgrade() # UpdateApplicationUpgrade | The description of the update application upgrade
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.application_upgrades_update(application_name, api_version, update_application_upgrade, timeout=timeout)
        print("The response of DefaultApi->application_upgrades_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->application_upgrades_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **update_application_upgrade** | [**UpdateApplicationUpgrade**](UpdateApplicationUpgrade.md)| The description of the update application upgrade | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The update application upgrade |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applications_create**
> str applications_create(api_version, application_description, timeout=timeout)



Create applications

### Example


```python
import openapi_client
from openapi_client.models.application_description import ApplicationDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    application_description = openapi_client.ApplicationDescription() # ApplicationDescription | The description of the application
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.applications_create(api_version, application_description, timeout=timeout)
        print("The response of DefaultApi->applications_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->applications_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **application_description** | [**ApplicationDescription**](ApplicationDescription.md)| The description of the application | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application description |  -  |
**201** | The application description |  -  |
**202** | The application description |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applications_get**
> Application applications_get(application_name, api_version, timeout=timeout)



Get applications

### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.applications_get(application_name, api_version, timeout=timeout)
        print("The response of DefaultApi->applications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->applications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**Application**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applications_list**
> ApplicationList applications_list(api_version, timeout=timeout, continuation_token=continuation_token)



List applications

### Example


```python
import openapi_client
from openapi_client.models.application_list import ApplicationList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)
    continuation_token = 'continuation_token_example' # str | The token of the continuation (optional)

    try:
        api_response = api_instance.applications_list(api_version, timeout=timeout, continuation_token=continuation_token)
        print("The response of DefaultApi->applications_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->applications_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 
 **continuation_token** | **str**| The token of the continuation | [optional] 

### Return type

[**ApplicationList**](ApplicationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The application list |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **applications_remove**
> str applications_remove(application_name, api_version, force_remove=force_remove, timeout=timeout)



Remove applications

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    force_remove = True # bool | The force remove flag to skip services check (optional)
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.applications_remove(application_name, api_version, force_remove=force_remove, timeout=timeout)
        print("The response of DefaultApi->applications_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->applications_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **force_remove** | **bool**| The force remove flag to skip services check | [optional] 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cluster_healths_get**
> ClusterHealth cluster_healths_get(api_version, events_health_state_filter=events_health_state_filter, nodes_health_state_filter=nodes_health_state_filter, applications_health_state_filter=applications_health_state_filter, timeout=timeout)



Get cluster healths

### Example


```python
import openapi_client
from openapi_client.models.cluster_health import ClusterHealth
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    events_health_state_filter = 'events_health_state_filter_example' # str | The filter of the events health state (optional)
    nodes_health_state_filter = 'nodes_health_state_filter_example' # str | The filter of the nodes health state (optional)
    applications_health_state_filter = 'applications_health_state_filter_example' # str | The filter of the applications health state (optional)
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.cluster_healths_get(api_version, events_health_state_filter=events_health_state_filter, nodes_health_state_filter=nodes_health_state_filter, applications_health_state_filter=applications_health_state_filter, timeout=timeout)
        print("The response of DefaultApi->cluster_healths_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cluster_healths_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **events_health_state_filter** | **str**| The filter of the events health state | [optional] 
 **nodes_health_state_filter** | **str**| The filter of the nodes health state | [optional] 
 **applications_health_state_filter** | **str**| The filter of the applications health state | [optional] 
 **timeout** | **int**| The timeout in seconds | [optional] 

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
**200** | The cluster health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cluster_healths_send**
> str cluster_healths_send(api_version, cluster_health_report, timeout=timeout)



Report cluster healths

### Example


```python
import openapi_client
from openapi_client.models.cluster_health_report import ClusterHealthReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    cluster_health_report = openapi_client.ClusterHealthReport() # ClusterHealthReport | The report of the cluster health
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.cluster_healths_send(api_version, cluster_health_report, timeout=timeout)
        print("The response of DefaultApi->cluster_healths_send:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cluster_healths_send: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **cluster_health_report** | [**ClusterHealthReport**](ClusterHealthReport.md)| The report of the cluster health | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cluster health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cluster_load_informations_get**
> ClusterLoadInformation cluster_load_informations_get(api_version, timeout=timeout)



Get cluster load informations

### Example


```python
import openapi_client
from openapi_client.models.cluster_load_information import ClusterLoadInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.cluster_load_informations_get(api_version, timeout=timeout)
        print("The response of DefaultApi->cluster_load_informations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cluster_load_informations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ClusterLoadInformation**](ClusterLoadInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The load information |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cluster_manifests_get**
> str cluster_manifests_get(api_version, timeout=timeout)



Get cluster manifests

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.cluster_manifests_get(api_version, timeout=timeout)
        print("The response of DefaultApi->cluster_manifests_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cluster_manifests_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cluster manifest |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cluster_packages_register**
> str cluster_packages_register(api_version, register_cluster_package, timeout=timeout)



Register cluster packages

### Example


```python
import openapi_client
from openapi_client.models.register_cluster_package import RegisterClusterPackage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    register_cluster_package = openapi_client.RegisterClusterPackage() # RegisterClusterPackage | The package of the register cluster
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.cluster_packages_register(api_version, register_cluster_package, timeout=timeout)
        print("The response of DefaultApi->cluster_packages_register:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cluster_packages_register: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **register_cluster_package** | [**RegisterClusterPackage**](RegisterClusterPackage.md)| The package of the register cluster | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cluster upgrade |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cluster_packages_unregister**
> str cluster_packages_unregister(api_version, unregister_cluster_package, timeout=timeout)



Unregister cluster packages

### Example


```python
import openapi_client
from openapi_client.models.unregister_cluster_package import UnregisterClusterPackage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    unregister_cluster_package = openapi_client.UnregisterClusterPackage() # UnregisterClusterPackage | The package of the unregister cluster
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.cluster_packages_unregister(api_version, unregister_cluster_package, timeout=timeout)
        print("The response of DefaultApi->cluster_packages_unregister:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cluster_packages_unregister: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **unregister_cluster_package** | [**UnregisterClusterPackage**](UnregisterClusterPackage.md)| The package of the unregister cluster | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cluster upgrade |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cluster_upgrades_resume**
> str cluster_upgrades_resume(api_version, resume_cluster_upgrade, timeout=timeout)



Resume cluster upgrades

### Example


```python
import openapi_client
from openapi_client.models.resume_cluster_upgrade import ResumeClusterUpgrade
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    resume_cluster_upgrade = openapi_client.ResumeClusterUpgrade() # ResumeClusterUpgrade | The upgrade of the cluster
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.cluster_upgrades_resume(api_version, resume_cluster_upgrade, timeout=timeout)
        print("The response of DefaultApi->cluster_upgrades_resume:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cluster_upgrades_resume: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **resume_cluster_upgrade** | [**ResumeClusterUpgrade**](ResumeClusterUpgrade.md)| The upgrade of the cluster | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cluster upgrade |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cluster_upgrades_rollback**
> str cluster_upgrades_rollback(api_version, timeout=timeout)



Rollback cluster upgrades

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.cluster_upgrades_rollback(api_version, timeout=timeout)
        print("The response of DefaultApi->cluster_upgrades_rollback:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cluster_upgrades_rollback: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cluster upgrade |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cluster_upgrades_start**
> str cluster_upgrades_start(api_version, start_cluster_upgrade, timeout=timeout)



Start cluster upgrades

### Example


```python
import openapi_client
from openapi_client.models.start_cluster_upgrade import StartClusterUpgrade
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    start_cluster_upgrade = openapi_client.StartClusterUpgrade() # StartClusterUpgrade | The description of the start cluster upgrade
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.cluster_upgrades_start(api_version, start_cluster_upgrade, timeout=timeout)
        print("The response of DefaultApi->cluster_upgrades_start:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cluster_upgrades_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **start_cluster_upgrade** | [**StartClusterUpgrade**](StartClusterUpgrade.md)| The description of the start cluster upgrade | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cluster upgrade |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cluster_upgrades_update**
> str cluster_upgrades_update(api_version, update_cluster_upgrade, timeout=timeout)



Update cluster upgrades

### Example


```python
import openapi_client
from openapi_client.models.update_cluster_upgrade import UpdateClusterUpgrade
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    update_cluster_upgrade = openapi_client.UpdateClusterUpgrade() # UpdateClusterUpgrade | The description of the update cluster upgrade
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.cluster_upgrades_update(api_version, update_cluster_upgrade, timeout=timeout)
        print("The response of DefaultApi->cluster_upgrades_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->cluster_upgrades_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **update_cluster_upgrade** | [**UpdateClusterUpgrade**](UpdateClusterUpgrade.md)| The description of the update cluster upgrade | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The cluster upgrade |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployed_application_healths_get**
> DeployedApplicationHealth deployed_application_healths_get(node_name, application_name, api_version, events_health_state_filter=events_health_state_filter, deployed_service_packages_health_state_filter=deployed_service_packages_health_state_filter, timeout=timeout)



Get deployed application healths

### Example


```python
import openapi_client
from openapi_client.models.deployed_application_health import DeployedApplicationHealth
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    events_health_state_filter = 'events_health_state_filter_example' # str | The filter of the events health state (optional)
    deployed_service_packages_health_state_filter = 'deployed_service_packages_health_state_filter_example' # str | The filter of the deployed service packages health state (optional)
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.deployed_application_healths_get(node_name, application_name, api_version, events_health_state_filter=events_health_state_filter, deployed_service_packages_health_state_filter=deployed_service_packages_health_state_filter, timeout=timeout)
        print("The response of DefaultApi->deployed_application_healths_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->deployed_application_healths_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **events_health_state_filter** | **str**| The filter of the events health state | [optional] 
 **deployed_service_packages_health_state_filter** | **str**| The filter of the deployed service packages health state | [optional] 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**DeployedApplicationHealth**](DeployedApplicationHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deployed application health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployed_application_healths_send**
> str deployed_application_healths_send(node_name, application_name, api_version, deployed_application_health_report, timeout=timeout)



Send deployed application health

### Example


```python
import openapi_client
from openapi_client.models.deployed_application_health_report import DeployedApplicationHealthReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    deployed_application_health_report = openapi_client.DeployedApplicationHealthReport() # DeployedApplicationHealthReport | The report of the deployed application health
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.deployed_application_healths_send(node_name, application_name, api_version, deployed_application_health_report, timeout=timeout)
        print("The response of DefaultApi->deployed_application_healths_send:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->deployed_application_healths_send: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **deployed_application_health_report** | [**DeployedApplicationHealthReport**](DeployedApplicationHealthReport.md)| The report of the deployed application health | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deployed application health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployed_applications_get**
> DeployedApplication deployed_applications_get(node_name, application_name, api_version, timeout=timeout)



Get deployed applications

### Example


```python
import openapi_client
from openapi_client.models.deployed_application import DeployedApplication
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.deployed_applications_get(node_name, application_name, api_version, timeout=timeout)
        print("The response of DefaultApi->deployed_applications_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->deployed_applications_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**DeployedApplication**](DeployedApplication.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deployed application |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployed_applications_list**
> List[DeployedApplication] deployed_applications_list(node_name, api_version, timeout=timeout)



List deployed applications

### Example


```python
import openapi_client
from openapi_client.models.deployed_application import DeployedApplication
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.deployed_applications_list(node_name, api_version, timeout=timeout)
        print("The response of DefaultApi->deployed_applications_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->deployed_applications_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**List[DeployedApplication]**](DeployedApplication.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deployed application list |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployed_code_packages_get**
> List[DeployedCodePackage] deployed_code_packages_get(node_name, application_name, api_version, timeout=timeout)



Get deployed code packages

### Example


```python
import openapi_client
from openapi_client.models.deployed_code_package import DeployedCodePackage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.deployed_code_packages_get(node_name, application_name, api_version, timeout=timeout)
        print("The response of DefaultApi->deployed_code_packages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->deployed_code_packages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**List[DeployedCodePackage]**](DeployedCodePackage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deployed code package |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployed_replica_details_get**
> DeployedReplicaDetail deployed_replica_details_get(node_name, partition_name, replica_id, api_version, timeout=timeout)



Get deployed replica details

### Example


```python
import openapi_client
from openapi_client.models.deployed_replica_detail import DeployedReplicaDetail
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    partition_name = 'partition_name_example' # str | The name of the partition
    replica_id = 'replica_id_example' # str | The id of the replica
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.deployed_replica_details_get(node_name, partition_name, replica_id, api_version, timeout=timeout)
        print("The response of DefaultApi->deployed_replica_details_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->deployed_replica_details_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **partition_name** | **str**| The name of the partition | 
 **replica_id** | **str**| The id of the replica | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**DeployedReplicaDetail**](DeployedReplicaDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deployed replica detail |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployed_replicas_get**
> List[DeployedReplica] deployed_replicas_get(node_name, application_name, api_version, timeout=timeout)



Get deployed replicas

### Example


```python
import openapi_client
from openapi_client.models.deployed_replica import DeployedReplica
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.deployed_replicas_get(node_name, application_name, api_version, timeout=timeout)
        print("The response of DefaultApi->deployed_replicas_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->deployed_replicas_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**List[DeployedReplica]**](DeployedReplica.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deployed replica |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployed_service_package_healths_get**
> DeployedServicePackageHealth deployed_service_package_healths_get(node_name, application_name, service_package_name, api_version, events_health_state_filter=events_health_state_filter, timeout=timeout)



Get deployed service package healths

### Example


```python
import openapi_client
from openapi_client.models.deployed_service_package_health import DeployedServicePackageHealth
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    application_name = 'application_name_example' # str | The name of the application
    service_package_name = 'service_package_name_example' # str | The name of the service package
    api_version = 'api_version_example' # str | The version of the api
    events_health_state_filter = 'events_health_state_filter_example' # str | The filter of the events health state (optional)
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.deployed_service_package_healths_get(node_name, application_name, service_package_name, api_version, events_health_state_filter=events_health_state_filter, timeout=timeout)
        print("The response of DefaultApi->deployed_service_package_healths_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->deployed_service_package_healths_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **application_name** | **str**| The name of the application | 
 **service_package_name** | **str**| The name of the service package | 
 **api_version** | **str**| The version of the api | 
 **events_health_state_filter** | **str**| The filter of the events health state | [optional] 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**DeployedServicePackageHealth**](DeployedServicePackageHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deployed service package health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployed_service_package_healths_send**
> str deployed_service_package_healths_send(node_name, application_name, service_manifest_name, api_version, deployed_service_package_health_report, timeout=timeout)



Send deployed service package health

### Example


```python
import openapi_client
from openapi_client.models.deployed_service_health_report import DeployedServiceHealthReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    application_name = 'application_name_example' # str | The name of the application
    service_manifest_name = 'service_manifest_name_example' # str | The name of the service manifest
    api_version = 'api_version_example' # str | The version of the api
    deployed_service_package_health_report = openapi_client.DeployedServiceHealthReport() # DeployedServiceHealthReport | The report of the deployed service package health
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.deployed_service_package_healths_send(node_name, application_name, service_manifest_name, api_version, deployed_service_package_health_report, timeout=timeout)
        print("The response of DefaultApi->deployed_service_package_healths_send:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->deployed_service_package_healths_send: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **application_name** | **str**| The name of the application | 
 **service_manifest_name** | **str**| The name of the service manifest | 
 **api_version** | **str**| The version of the api | 
 **deployed_service_package_health_report** | [**DeployedServiceHealthReport**](DeployedServiceHealthReport.md)| The report of the deployed service package health | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deployed service package health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployed_service_packages_get**
> List[DeployedServicePackage] deployed_service_packages_get(node_name, application_name, api_version, timeout=timeout)



Get deployed service packages

### Example


```python
import openapi_client
from openapi_client.models.deployed_service_package import DeployedServicePackage
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.deployed_service_packages_get(node_name, application_name, api_version, timeout=timeout)
        print("The response of DefaultApi->deployed_service_packages_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->deployed_service_packages_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**List[DeployedServicePackage]**](DeployedServicePackage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deployed service package |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deployed_service_types_get**
> List[DeployedServiceType] deployed_service_types_get(node_name, application_name, api_version, timeout=timeout)



Get deployed service types

### Example


```python
import openapi_client
from openapi_client.models.deployed_service_type import DeployedServiceType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.deployed_service_types_get(node_name, application_name, api_version, timeout=timeout)
        print("The response of DefaultApi->deployed_service_types_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->deployed_service_types_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**List[DeployedServiceType]**](DeployedServiceType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deployed service type |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_healths_get**
> NodeHealth node_healths_get(node_name, api_version, events_health_state_filter=events_health_state_filter, timeout=timeout)



Get node healths

### Example


```python
import openapi_client
from openapi_client.models.node_health import NodeHealth
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    api_version = 'api_version_example' # str | The version of the api
    events_health_state_filter = 'events_health_state_filter_example' # str | The filter of the events health state (optional)
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.node_healths_get(node_name, api_version, events_health_state_filter=events_health_state_filter, timeout=timeout)
        print("The response of DefaultApi->node_healths_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->node_healths_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **api_version** | **str**| The version of the api | 
 **events_health_state_filter** | **str**| The filter of the events health state | [optional] 
 **timeout** | **int**| The timeout in seconds | [optional] 

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
**200** | The node health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_healths_send**
> str node_healths_send(node_name, api_version, node_health_report, timeout=timeout)



Send node health

### Example


```python
import openapi_client
from openapi_client.models.node_health_report import NodeHealthReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    api_version = 'api_version_example' # str | The version of the api
    node_health_report = openapi_client.NodeHealthReport() # NodeHealthReport | The report of the node health
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.node_healths_send(node_name, api_version, node_health_report, timeout=timeout)
        print("The response of DefaultApi->node_healths_send:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->node_healths_send: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **api_version** | **str**| The version of the api | 
 **node_health_report** | [**NodeHealthReport**](NodeHealthReport.md)| The report of the node health | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The node health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_load_informations_get**
> NodeLoadInformation node_load_informations_get(node_name, api_version, timeout=timeout)



Get node load informations

### Example


```python
import openapi_client
from openapi_client.models.node_load_information import NodeLoadInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.node_load_informations_get(node_name, api_version, timeout=timeout)
        print("The response of DefaultApi->node_load_informations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->node_load_informations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**NodeLoadInformation**](NodeLoadInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The node load information |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **node_states_remove**
> str node_states_remove(node_name, api_version, timeout=timeout)



Remove node states

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.node_states_remove(node_name, api_version, timeout=timeout)
        print("The response of DefaultApi->node_states_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->node_states_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The node state |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **nodes_disable**
> str nodes_disable(node_name, api_version, disable_node, timeout=timeout)



Disable nodes

### Example


```python
import openapi_client
from openapi_client.models.disable_node import DisableNode
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    api_version = 'api_version_example' # str | The version of the api
    disable_node = openapi_client.DisableNode() # DisableNode | The node
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.nodes_disable(node_name, api_version, disable_node, timeout=timeout)
        print("The response of DefaultApi->nodes_disable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->nodes_disable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **api_version** | **str**| The version of the api | 
 **disable_node** | [**DisableNode**](DisableNode.md)| The node | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The node |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **nodes_enable**
> str nodes_enable(node_name, api_version, timeout=timeout)



Enable nodes

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.nodes_enable(node_name, api_version, timeout=timeout)
        print("The response of DefaultApi->nodes_enable:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->nodes_enable: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The node |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **nodes_get**
> Node nodes_get(node_name, api_version, timeout=timeout)



Get nodes

### Example


```python
import openapi_client
from openapi_client.models.node import Node
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    node_name = 'node_name_example' # str | The name of the node
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.nodes_get(node_name, api_version, timeout=timeout)
        print("The response of DefaultApi->nodes_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->nodes_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **node_name** | **str**| The name of the node | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**Node**](Node.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The node |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **nodes_list**
> NodeList nodes_list(api_version, timeout=timeout, continuation_token=continuation_token)



List nodes

### Example


```python
import openapi_client
from openapi_client.models.node_list import NodeList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)
    continuation_token = 'continuation_token_example' # str | The token of the continuation (optional)

    try:
        api_response = api_instance.nodes_list(api_version, timeout=timeout, continuation_token=continuation_token)
        print("The response of DefaultApi->nodes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->nodes_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 
 **continuation_token** | **str**| The token of the continuation | [optional] 

### Return type

[**NodeList**](NodeList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The node list |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partition_healths_get**
> PartitionHealth partition_healths_get(partition_id, api_version, events_health_state_filter=events_health_state_filter, replicas_health_state_filter=replicas_health_state_filter, timeout=timeout)



Get partition healths

### Example


```python
import openapi_client
from openapi_client.models.partition_health import PartitionHealth
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    partition_id = 'partition_id_example' # str | The id of the partition
    api_version = 'api_version_example' # str | The version of the api
    events_health_state_filter = 'events_health_state_filter_example' # str | The filter of the events health state (optional)
    replicas_health_state_filter = 'replicas_health_state_filter_example' # str | The filter of the replicas health state (optional)
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.partition_healths_get(partition_id, api_version, events_health_state_filter=events_health_state_filter, replicas_health_state_filter=replicas_health_state_filter, timeout=timeout)
        print("The response of DefaultApi->partition_healths_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->partition_healths_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The id of the partition | 
 **api_version** | **str**| The version of the api | 
 **events_health_state_filter** | **str**| The filter of the events health state | [optional] 
 **replicas_health_state_filter** | **str**| The filter of the replicas health state | [optional] 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**PartitionHealth**](PartitionHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The partition health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partition_healths_send**
> str partition_healths_send(partition_id, api_version, partition_health_report, timeout=timeout)



Send partition health

### Example


```python
import openapi_client
from openapi_client.models.partition_health_report import PartitionHealthReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    partition_id = 'partition_id_example' # str | The id of the partition
    api_version = 'api_version_example' # str | The version of the api
    partition_health_report = openapi_client.PartitionHealthReport() # PartitionHealthReport | The report of the partition health
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.partition_healths_send(partition_id, api_version, partition_health_report, timeout=timeout)
        print("The response of DefaultApi->partition_healths_send:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->partition_healths_send: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The id of the partition | 
 **api_version** | **str**| The version of the api | 
 **partition_health_report** | [**PartitionHealthReport**](PartitionHealthReport.md)| The report of the partition health | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The partition health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partition_lists_repair**
> str partition_lists_repair(service_name, api_version, timeout=timeout)



Repair partition lists

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    service_name = 'service_name_example' # str | The name of the service
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.partition_lists_repair(service_name, api_version, timeout=timeout)
        print("The response of DefaultApi->partition_lists_repair:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->partition_lists_repair: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The repair partition |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partition_load_informations_get**
> PartitionLoadInformation partition_load_informations_get(partition_id, api_version, timeout=timeout)



Get partition load informations

### Example


```python
import openapi_client
from openapi_client.models.partition_load_information import PartitionLoadInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    partition_id = 'partition_id_example' # str | The id of the partition
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.partition_load_informations_get(partition_id, api_version, timeout=timeout)
        print("The response of DefaultApi->partition_load_informations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->partition_load_informations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The id of the partition | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**PartitionLoadInformation**](PartitionLoadInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The partition load information |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partition_loads_reset**
> str partition_loads_reset(partition_id, api_version, timeout=timeout)



Reset partition loads

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    partition_id = 'partition_id_example' # str | The id of the partition
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.partition_loads_reset(partition_id, api_version, timeout=timeout)
        print("The response of DefaultApi->partition_loads_reset:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->partition_loads_reset: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The id of the partition | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The reset partition load |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partitions_get**
> Partition partitions_get(service_name, partition_id, api_version, timeout=timeout)



Get partitions

### Example


```python
import openapi_client
from openapi_client.models.partition import Partition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    service_name = 'service_name_example' # str | The name of the service
    partition_id = 'partition_id_example' # str | The id of the partition
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.partitions_get(service_name, partition_id, api_version, timeout=timeout)
        print("The response of DefaultApi->partitions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->partitions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service | 
 **partition_id** | **str**| The id of the partition | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**Partition**](Partition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The partitions |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partitions_list**
> PartitionList partitions_list(service_name, api_version, timeout=timeout)



List partitions

### Example


```python
import openapi_client
from openapi_client.models.partition_list import PartitionList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    service_name = 'service_name_example' # str | The name of the service
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.partitions_list(service_name, api_version, timeout=timeout)
        print("The response of DefaultApi->partitions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->partitions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**PartitionList**](PartitionList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The partitions |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **partitions_repair**
> str partitions_repair(partition_id, api_version, timeout=timeout)



Repair partitions

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    partition_id = 'partition_id_example' # str | The id of the partition
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.partitions_repair(partition_id, api_version, timeout=timeout)
        print("The response of DefaultApi->partitions_repair:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->partitions_repair: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The id of the partition | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The repair partition |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replica_healths_get**
> ReplicaHealth replica_healths_get(partition_id, replica_id, api_version, events_health_state_filter=events_health_state_filter, timeout=timeout)



Get replica healths

### Example


```python
import openapi_client
from openapi_client.models.replica_health import ReplicaHealth
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    partition_id = 'partition_id_example' # str | The id of the partition
    replica_id = 'replica_id_example' # str | The id of the replica
    api_version = 'api_version_example' # str | The version of the api
    events_health_state_filter = 'events_health_state_filter_example' # str | The filter of the events health state (optional)
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.replica_healths_get(partition_id, replica_id, api_version, events_health_state_filter=events_health_state_filter, timeout=timeout)
        print("The response of DefaultApi->replica_healths_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->replica_healths_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The id of the partition | 
 **replica_id** | **str**| The id of the replica | 
 **api_version** | **str**| The version of the api | 
 **events_health_state_filter** | **str**| The filter of the events health state | [optional] 
 **timeout** | **int**| The timeout in seconds | [optional] 

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
**200** | The replica health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replica_healths_send**
> str replica_healths_send(partition_id, replica_id, api_version, replica_health_report, timeout=timeout)



Send replica healths

### Example


```python
import openapi_client
from openapi_client.models.replica_health_report import ReplicaHealthReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    partition_id = 'partition_id_example' # str | The id of the partition
    replica_id = 'replica_id_example' # str | The id of the replica
    api_version = 'api_version_example' # str | The version of the api
    replica_health_report = openapi_client.ReplicaHealthReport() # ReplicaHealthReport | The report of the replica health
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.replica_healths_send(partition_id, replica_id, api_version, replica_health_report, timeout=timeout)
        print("The response of DefaultApi->replica_healths_send:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->replica_healths_send: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The id of the partition | 
 **replica_id** | **str**| The id of the replica | 
 **api_version** | **str**| The version of the api | 
 **replica_health_report** | [**ReplicaHealthReport**](ReplicaHealthReport.md)| The report of the replica health | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The replica health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replica_load_informations_get**
> ReplicaLoadInformation replica_load_informations_get(partition_id, replica_id, api_version, timeout=timeout)



Get replica load informations

### Example


```python
import openapi_client
from openapi_client.models.replica_load_information import ReplicaLoadInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    partition_id = 'partition_id_example' # str | The id of the partition
    replica_id = 'replica_id_example' # str | The id of the replica
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.replica_load_informations_get(partition_id, replica_id, api_version, timeout=timeout)
        print("The response of DefaultApi->replica_load_informations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->replica_load_informations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The id of the partition | 
 **replica_id** | **str**| The id of the replica | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ReplicaLoadInformation**](ReplicaLoadInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The replica load information |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replicas_get**
> Replica replicas_get(partition_id, replica_id, api_version, timeout=timeout)



Get replicas

### Example


```python
import openapi_client
from openapi_client.models.replica import Replica
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    partition_id = 'partition_id_example' # str | The id of the partition
    replica_id = 'replica_id_example' # str | The id of the replica
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.replicas_get(partition_id, replica_id, api_version, timeout=timeout)
        print("The response of DefaultApi->replicas_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->replicas_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The id of the partition | 
 **replica_id** | **str**| The id of the replica | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**Replica**](Replica.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The replica |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replicas_list**
> ReplicaList replicas_list(partition_id, api_version, timeout=timeout)



List replicas

### Example


```python
import openapi_client
from openapi_client.models.replica_list import ReplicaList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    partition_id = 'partition_id_example' # str | The id of the partition
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.replicas_list(partition_id, api_version, timeout=timeout)
        print("The response of DefaultApi->replicas_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->replicas_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **partition_id** | **str**| The id of the partition | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ReplicaList**](ReplicaList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The replica list |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_descriptions_get**
> ServiceDescription service_descriptions_get(service_name, api_version, timeout=timeout)



Get service descriptions

### Example


```python
import openapi_client
from openapi_client.models.service_description import ServiceDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    service_name = 'service_name_example' # str | The name of the service
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.service_descriptions_get(service_name, api_version, timeout=timeout)
        print("The response of DefaultApi->service_descriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->service_descriptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ServiceDescription**](ServiceDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service description |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_from_templates_create**
> str service_from_templates_create(application_name, api_version, service_description_template, timeout=timeout)



Create service from templates

### Example


```python
import openapi_client
from openapi_client.models.service_description_template import ServiceDescriptionTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    service_description_template = openapi_client.ServiceDescriptionTemplate() # ServiceDescriptionTemplate | The template of the service description
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.service_from_templates_create(application_name, api_version, service_description_template, timeout=timeout)
        print("The response of DefaultApi->service_from_templates_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->service_from_templates_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **service_description_template** | [**ServiceDescriptionTemplate**](ServiceDescriptionTemplate.md)| The template of the service description | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service description template |  -  |
**201** | The service description template |  -  |
**202** | The service description template |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_group_descriptions_get**
> ServiceGroupDescription service_group_descriptions_get(application_name, service_name, api_version, timeout=timeout)



Get service group descriptions

### Example


```python
import openapi_client
from openapi_client.models.service_group_description import ServiceGroupDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    service_name = 'service_name_example' # str | The name of the service
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.service_group_descriptions_get(application_name, service_name, api_version, timeout=timeout)
        print("The response of DefaultApi->service_group_descriptions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->service_group_descriptions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **service_name** | **str**| The name of the service | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ServiceGroupDescription**](ServiceGroupDescription.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service group description |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_group_from_templates_create**
> str service_group_from_templates_create(application_name, api_version, service_description_template, timeout=timeout)



Create service group from templates

### Example


```python
import openapi_client
from openapi_client.models.service_description_template import ServiceDescriptionTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    service_description_template = openapi_client.ServiceDescriptionTemplate() # ServiceDescriptionTemplate | The template of the service description
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.service_group_from_templates_create(application_name, api_version, service_description_template, timeout=timeout)
        print("The response of DefaultApi->service_group_from_templates_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->service_group_from_templates_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **service_description_template** | [**ServiceDescriptionTemplate**](ServiceDescriptionTemplate.md)| The template of the service description | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service group description template |  -  |
**201** | The service group description template |  -  |
**202** | The service group description template |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_group_members_get**
> ServiceGroupMember service_group_members_get(application_name, service_name, api_version, timeout=timeout)



Get service group members

### Example


```python
import openapi_client
from openapi_client.models.service_group_member import ServiceGroupMember
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    service_name = 'service_name_example' # str | The name of the service
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.service_group_members_get(application_name, service_name, api_version, timeout=timeout)
        print("The response of DefaultApi->service_group_members_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->service_group_members_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **service_name** | **str**| The name of the service | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ServiceGroupMember**](ServiceGroupMember.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service group description |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_groups_create**
> str service_groups_create(application_name, api_version, create_service_group_description, timeout=timeout)



Create service groups

### Example


```python
import openapi_client
from openapi_client.models.create_service_group_description import CreateServiceGroupDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the service group
    api_version = 'api_version_example' # str | The version of the api
    create_service_group_description = openapi_client.CreateServiceGroupDescription() # CreateServiceGroupDescription | The description of the service group
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.service_groups_create(application_name, api_version, create_service_group_description, timeout=timeout)
        print("The response of DefaultApi->service_groups_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->service_groups_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the service group | 
 **api_version** | **str**| The version of the api | 
 **create_service_group_description** | [**CreateServiceGroupDescription**](CreateServiceGroupDescription.md)| The description of the service group | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service description |  -  |
**201** | The service description |  -  |
**202** | The service description |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_groups_remove**
> str service_groups_remove(application_name, service_name, api_version, timeout=timeout)



Remove service groups

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    service_name = 'service_name_example' # str | The name of the service
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.service_groups_remove(application_name, service_name, api_version, timeout=timeout)
        print("The response of DefaultApi->service_groups_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->service_groups_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **service_name** | **str**| The name of the service | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_groups_update**
> str service_groups_update(application_name, service_name, api_version, update_service_group_description, timeout=timeout)



Update service groups

### Example


```python
import openapi_client
from openapi_client.models.update_service_group_description import UpdateServiceGroupDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    service_name = 'service_name_example' # str | The name of the service
    api_version = 'api_version_example' # str | The version of the api
    update_service_group_description = openapi_client.UpdateServiceGroupDescription() # UpdateServiceGroupDescription | The description of the service group update
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.service_groups_update(application_name, service_name, api_version, update_service_group_description, timeout=timeout)
        print("The response of DefaultApi->service_groups_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->service_groups_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **service_name** | **str**| The name of the service | 
 **api_version** | **str**| The version of the api | 
 **update_service_group_description** | [**UpdateServiceGroupDescription**](UpdateServiceGroupDescription.md)| The description of the service group update | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service group update description |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_healths_get**
> ServiceHealth service_healths_get(service_name, api_version, timeout=timeout)



Get service healths

### Example


```python
import openapi_client
from openapi_client.models.service_health import ServiceHealth
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    service_name = 'service_name_example' # str | The name of the service
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.service_healths_get(service_name, api_version, timeout=timeout)
        print("The response of DefaultApi->service_healths_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->service_healths_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ServiceHealth**](ServiceHealth.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_healths_send**
> str service_healths_send(service_name, api_version, service_health_report, timeout=timeout)



Send service healths

### Example


```python
import openapi_client
from openapi_client.models.service_health_report import ServiceHealthReport
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    service_name = 'service_name_example' # str | The name of the service
    api_version = 'api_version_example' # str | The version of the api
    service_health_report = openapi_client.ServiceHealthReport() # ServiceHealthReport | The report of the service health
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.service_healths_send(service_name, api_version, service_health_report, timeout=timeout)
        print("The response of DefaultApi->service_healths_send:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->service_healths_send: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service | 
 **api_version** | **str**| The version of the api | 
 **service_health_report** | [**ServiceHealthReport**](ServiceHealthReport.md)| The report of the service health | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service health |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_manifests_get**
> ServiceManifest service_manifests_get(application_type_name, application_type_version, service_manifest_name, api_version, timeout=timeout)



Get service manifests

### Example


```python
import openapi_client
from openapi_client.models.service_manifest import ServiceManifest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_type_name = 'application_type_name_example' # str | The name of the application type
    application_type_version = 'application_type_version_example' # str | The version of the application type
    service_manifest_name = 'service_manifest_name_example' # str | The name of the service manifest
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.service_manifests_get(application_type_name, application_type_version, service_manifest_name, api_version, timeout=timeout)
        print("The response of DefaultApi->service_manifests_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->service_manifests_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_type_name** | **str**| The name of the application type | 
 **application_type_version** | **str**| The version of the application type | 
 **service_manifest_name** | **str**| The name of the service manifest | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ServiceManifest**](ServiceManifest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service manifest |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_types_get**
> List[ServiceType] service_types_get(application_type_name, application_type_version, api_version, timeout=timeout)



Get service types

### Example


```python
import openapi_client
from openapi_client.models.service_type import ServiceType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_type_name = 'application_type_name_example' # str | The name of the application type
    application_type_version = 'application_type_version_example' # str | The version of the application type
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.service_types_get(application_type_name, application_type_version, api_version, timeout=timeout)
        print("The response of DefaultApi->service_types_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->service_types_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_type_name** | **str**| The name of the application type | 
 **application_type_version** | **str**| The version of the application type | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**List[ServiceType]**](ServiceType.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service type |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_create**
> str services_create(application_name, api_version, create_service_description, timeout=timeout)



Create services

### Example


```python
import openapi_client
from openapi_client.models.create_service_description import CreateServiceDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    create_service_description = openapi_client.CreateServiceDescription() # CreateServiceDescription | The description of the service
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.services_create(application_name, api_version, create_service_description, timeout=timeout)
        print("The response of DefaultApi->services_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->services_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **create_service_description** | [**CreateServiceDescription**](CreateServiceDescription.md)| The description of the service | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service description |  -  |
**201** | The service description |  -  |
**202** | The service description |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_get**
> Service services_get(application_name, service_name, api_version, timeout=timeout)



Get services

### Example


```python
import openapi_client
from openapi_client.models.service import Service
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    service_name = 'service_name_example' # str | The name of the service
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.services_get(application_name, service_name, api_version, timeout=timeout)
        print("The response of DefaultApi->services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **service_name** | **str**| The name of the service | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**Service**](Service.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_list**
> ServiceList services_list(application_name, api_version, timeout=timeout)



List services

### Example


```python
import openapi_client
from openapi_client.models.service_list import ServiceList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    application_name = 'application_name_example' # str | The name of the application
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.services_list(application_name, api_version, timeout=timeout)
        print("The response of DefaultApi->services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **application_name** | **str**| The name of the application | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ServiceList**](ServiceList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service list |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_remove**
> str services_remove(service_name, api_version, timeout=timeout)



Remove services

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    service_name = 'service_name_example' # str | The name of the service
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.services_remove(service_name, api_version, timeout=timeout)
        print("The response of DefaultApi->services_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->services_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service | 
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_resolve**
> ResolvedServicePartition services_resolve(service_name, api_version, partition_key_type=partition_key_type, partition_key_value=partition_key_value, previous_rsp_version=previous_rsp_version, timeout=timeout)



Resolve services

### Example


```python
import openapi_client
from openapi_client.models.resolved_service_partition import ResolvedServicePartition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    service_name = 'service_name_example' # str | The name of the service
    api_version = 'api_version_example' # str | The version of the api
    partition_key_type = 56 # int | The type of the partition key (optional)
    partition_key_value = 'partition_key_value_example' # str | The value of the partition key (optional)
    previous_rsp_version = 'previous_rsp_version_example' # str | The version of the previous rsp (optional)
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.services_resolve(service_name, api_version, partition_key_type=partition_key_type, partition_key_value=partition_key_value, previous_rsp_version=previous_rsp_version, timeout=timeout)
        print("The response of DefaultApi->services_resolve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->services_resolve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service | 
 **api_version** | **str**| The version of the api | 
 **partition_key_type** | **int**| The type of the partition key | [optional] 
 **partition_key_value** | **str**| The value of the partition key | [optional] 
 **previous_rsp_version** | **str**| The version of the previous rsp | [optional] 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ResolvedServicePartition**](ResolvedServicePartition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The partition |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **services_update**
> str services_update(service_name, api_version, update_service_description, timeout=timeout)



Update services

### Example


```python
import openapi_client
from openapi_client.models.update_service_description import UpdateServiceDescription
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    service_name = 'service_name_example' # str | The name of the service
    api_version = 'api_version_example' # str | The version of the api
    update_service_description = openapi_client.UpdateServiceDescription() # UpdateServiceDescription | The description of the service update
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.services_update(service_name, api_version, update_service_description, timeout=timeout)
        print("The response of DefaultApi->services_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->services_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **service_name** | **str**| The name of the service | 
 **api_version** | **str**| The version of the api | 
 **update_service_description** | [**UpdateServiceDescription**](UpdateServiceDescription.md)| The description of the service update | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The service update description |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upgrade_progresses_get**
> ClusterUpgradeProgress upgrade_progresses_get(api_version, timeout=timeout)



Get upgrade progresses

### Example


```python
import openapi_client
from openapi_client.models.cluster_upgrade_progress import ClusterUpgradeProgress
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local:19080
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local:19080"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    api_version = 'api_version_example' # str | The version of the api
    timeout = 56 # int | The timeout in seconds (optional)

    try:
        api_response = api_instance.upgrade_progresses_get(api_version, timeout=timeout)
        print("The response of DefaultApi->upgrade_progresses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->upgrade_progresses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The version of the api | 
 **timeout** | **int**| The timeout in seconds | [optional] 

### Return type

[**ClusterUpgradeProgress**](ClusterUpgradeProgress.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The upgrade progress |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

