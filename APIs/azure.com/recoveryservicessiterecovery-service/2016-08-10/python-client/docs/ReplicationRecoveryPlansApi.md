# openapi_client.ReplicationRecoveryPlansApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**replication_recovery_plans_create**](ReplicationRecoveryPlansApi.md#replication_recovery_plans_create) | **PUT** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName} | Creates a recovery plan with the given details.
[**replication_recovery_plans_delete**](ReplicationRecoveryPlansApi.md#replication_recovery_plans_delete) | **DELETE** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName} | Deletes the specified recovery plan.
[**replication_recovery_plans_failover_commit**](ReplicationRecoveryPlansApi.md#replication_recovery_plans_failover_commit) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/failoverCommit | Execute commit failover of the recovery plan.
[**replication_recovery_plans_get**](ReplicationRecoveryPlansApi.md#replication_recovery_plans_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName} | Gets the requested recovery plan.
[**replication_recovery_plans_list**](ReplicationRecoveryPlansApi.md#replication_recovery_plans_list) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans | Gets the list of recovery plans.
[**replication_recovery_plans_planned_failover**](ReplicationRecoveryPlansApi.md#replication_recovery_plans_planned_failover) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/plannedFailover | Execute planned failover of the recovery plan.
[**replication_recovery_plans_reprotect**](ReplicationRecoveryPlansApi.md#replication_recovery_plans_reprotect) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/reProtect | Execute reprotect of the recovery plan.
[**replication_recovery_plans_test_failover**](ReplicationRecoveryPlansApi.md#replication_recovery_plans_test_failover) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/testFailover | Execute test failover of the recovery plan.
[**replication_recovery_plans_test_failover_cleanup**](ReplicationRecoveryPlansApi.md#replication_recovery_plans_test_failover_cleanup) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/testFailoverCleanup | Execute test failover cleanup of the recovery plan.
[**replication_recovery_plans_unplanned_failover**](ReplicationRecoveryPlansApi.md#replication_recovery_plans_unplanned_failover) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName}/unplannedFailover | Execute unplanned failover of the recovery plan.
[**replication_recovery_plans_update**](ReplicationRecoveryPlansApi.md#replication_recovery_plans_update) | **PATCH** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationRecoveryPlans/{recoveryPlanName} | Updates the given recovery plan.


# **replication_recovery_plans_create**
> RecoveryPlan replication_recovery_plans_create(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name, input)

Creates a recovery plan with the given details.

The operation to create a recovery plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.create_recovery_plan_input import CreateRecoveryPlanInput
from openapi_client.models.recovery_plan import RecoveryPlan
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReplicationRecoveryPlansApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    recovery_plan_name = 'recovery_plan_name_example' # str | Recovery plan name.
    input = openapi_client.CreateRecoveryPlanInput() # CreateRecoveryPlanInput | Recovery Plan creation input.

    try:
        # Creates a recovery plan with the given details.
        api_response = api_instance.replication_recovery_plans_create(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name, input)
        print("The response of ReplicationRecoveryPlansApi->replication_recovery_plans_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryPlansApi->replication_recovery_plans_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **recovery_plan_name** | **str**| Recovery plan name. | 
 **input** | [**CreateRecoveryPlanInput**](CreateRecoveryPlanInput.md)| Recovery Plan creation input. | 

### Return type

[**RecoveryPlan**](RecoveryPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_plans_delete**
> replication_recovery_plans_delete(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name)

Deletes the specified recovery plan.

Delete a recovery plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReplicationRecoveryPlansApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    recovery_plan_name = 'recovery_plan_name_example' # str | Recovery plan name.

    try:
        # Deletes the specified recovery plan.
        api_instance.replication_recovery_plans_delete(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryPlansApi->replication_recovery_plans_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **recovery_plan_name** | **str**| Recovery plan name. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  -  |
**204** | NoContent |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_plans_failover_commit**
> RecoveryPlan replication_recovery_plans_failover_commit(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name)

Execute commit failover of the recovery plan.

The operation to commit the fail over of a recovery plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_plan import RecoveryPlan
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReplicationRecoveryPlansApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    recovery_plan_name = 'recovery_plan_name_example' # str | Recovery plan name.

    try:
        # Execute commit failover of the recovery plan.
        api_response = api_instance.replication_recovery_plans_failover_commit(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name)
        print("The response of ReplicationRecoveryPlansApi->replication_recovery_plans_failover_commit:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryPlansApi->replication_recovery_plans_failover_commit: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **recovery_plan_name** | **str**| Recovery plan name. | 

### Return type

[**RecoveryPlan**](RecoveryPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_plans_get**
> RecoveryPlan replication_recovery_plans_get(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name)

Gets the requested recovery plan.

Gets the details of the recovery plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_plan import RecoveryPlan
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReplicationRecoveryPlansApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    recovery_plan_name = 'recovery_plan_name_example' # str | Name of the recovery plan.

    try:
        # Gets the requested recovery plan.
        api_response = api_instance.replication_recovery_plans_get(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name)
        print("The response of ReplicationRecoveryPlansApi->replication_recovery_plans_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryPlansApi->replication_recovery_plans_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **recovery_plan_name** | **str**| Name of the recovery plan. | 

### Return type

[**RecoveryPlan**](RecoveryPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_plans_list**
> RecoveryPlanCollection replication_recovery_plans_list(api_version, resource_name, resource_group_name, subscription_id)

Gets the list of recovery plans.

Lists the recovery plans in the vault.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_plan_collection import RecoveryPlanCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReplicationRecoveryPlansApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.

    try:
        # Gets the list of recovery plans.
        api_response = api_instance.replication_recovery_plans_list(api_version, resource_name, resource_group_name, subscription_id)
        print("The response of ReplicationRecoveryPlansApi->replication_recovery_plans_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryPlansApi->replication_recovery_plans_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 

### Return type

[**RecoveryPlanCollection**](RecoveryPlanCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_plans_planned_failover**
> RecoveryPlan replication_recovery_plans_planned_failover(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name, input)

Execute planned failover of the recovery plan.

The operation to start the planned failover of a recovery plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_plan import RecoveryPlan
from openapi_client.models.recovery_plan_planned_failover_input import RecoveryPlanPlannedFailoverInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReplicationRecoveryPlansApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    recovery_plan_name = 'recovery_plan_name_example' # str | Recovery plan name.
    input = openapi_client.RecoveryPlanPlannedFailoverInput() # RecoveryPlanPlannedFailoverInput | Failover input.

    try:
        # Execute planned failover of the recovery plan.
        api_response = api_instance.replication_recovery_plans_planned_failover(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name, input)
        print("The response of ReplicationRecoveryPlansApi->replication_recovery_plans_planned_failover:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryPlansApi->replication_recovery_plans_planned_failover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **recovery_plan_name** | **str**| Recovery plan name. | 
 **input** | [**RecoveryPlanPlannedFailoverInput**](RecoveryPlanPlannedFailoverInput.md)| Failover input. | 

### Return type

[**RecoveryPlan**](RecoveryPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_plans_reprotect**
> RecoveryPlan replication_recovery_plans_reprotect(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name)

Execute reprotect of the recovery plan.

The operation to reprotect(reverse replicate) a recovery plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_plan import RecoveryPlan
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReplicationRecoveryPlansApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    recovery_plan_name = 'recovery_plan_name_example' # str | Recovery plan name.

    try:
        # Execute reprotect of the recovery plan.
        api_response = api_instance.replication_recovery_plans_reprotect(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name)
        print("The response of ReplicationRecoveryPlansApi->replication_recovery_plans_reprotect:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryPlansApi->replication_recovery_plans_reprotect: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **recovery_plan_name** | **str**| Recovery plan name. | 

### Return type

[**RecoveryPlan**](RecoveryPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_plans_test_failover**
> RecoveryPlan replication_recovery_plans_test_failover(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name, input)

Execute test failover of the recovery plan.

The operation to start the test failover of a recovery plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_plan import RecoveryPlan
from openapi_client.models.recovery_plan_test_failover_input import RecoveryPlanTestFailoverInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReplicationRecoveryPlansApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    recovery_plan_name = 'recovery_plan_name_example' # str | Recovery plan name.
    input = openapi_client.RecoveryPlanTestFailoverInput() # RecoveryPlanTestFailoverInput | Failover input.

    try:
        # Execute test failover of the recovery plan.
        api_response = api_instance.replication_recovery_plans_test_failover(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name, input)
        print("The response of ReplicationRecoveryPlansApi->replication_recovery_plans_test_failover:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryPlansApi->replication_recovery_plans_test_failover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **recovery_plan_name** | **str**| Recovery plan name. | 
 **input** | [**RecoveryPlanTestFailoverInput**](RecoveryPlanTestFailoverInput.md)| Failover input. | 

### Return type

[**RecoveryPlan**](RecoveryPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_plans_test_failover_cleanup**
> RecoveryPlan replication_recovery_plans_test_failover_cleanup(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name, input)

Execute test failover cleanup of the recovery plan.

The operation to cleanup test failover of a recovery plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_plan import RecoveryPlan
from openapi_client.models.recovery_plan_test_failover_cleanup_input import RecoveryPlanTestFailoverCleanupInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReplicationRecoveryPlansApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    recovery_plan_name = 'recovery_plan_name_example' # str | Recovery plan name.
    input = openapi_client.RecoveryPlanTestFailoverCleanupInput() # RecoveryPlanTestFailoverCleanupInput | Test failover cleanup input.

    try:
        # Execute test failover cleanup of the recovery plan.
        api_response = api_instance.replication_recovery_plans_test_failover_cleanup(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name, input)
        print("The response of ReplicationRecoveryPlansApi->replication_recovery_plans_test_failover_cleanup:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryPlansApi->replication_recovery_plans_test_failover_cleanup: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **recovery_plan_name** | **str**| Recovery plan name. | 
 **input** | [**RecoveryPlanTestFailoverCleanupInput**](RecoveryPlanTestFailoverCleanupInput.md)| Test failover cleanup input. | 

### Return type

[**RecoveryPlan**](RecoveryPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_plans_unplanned_failover**
> RecoveryPlan replication_recovery_plans_unplanned_failover(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name, input)

Execute unplanned failover of the recovery plan.

The operation to start the failover of a recovery plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_plan import RecoveryPlan
from openapi_client.models.recovery_plan_unplanned_failover_input import RecoveryPlanUnplannedFailoverInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReplicationRecoveryPlansApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    recovery_plan_name = 'recovery_plan_name_example' # str | Recovery plan name.
    input = openapi_client.RecoveryPlanUnplannedFailoverInput() # RecoveryPlanUnplannedFailoverInput | Failover input.

    try:
        # Execute unplanned failover of the recovery plan.
        api_response = api_instance.replication_recovery_plans_unplanned_failover(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name, input)
        print("The response of ReplicationRecoveryPlansApi->replication_recovery_plans_unplanned_failover:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryPlansApi->replication_recovery_plans_unplanned_failover: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **recovery_plan_name** | **str**| Recovery plan name. | 
 **input** | [**RecoveryPlanUnplannedFailoverInput**](RecoveryPlanUnplannedFailoverInput.md)| Failover input. | 

### Return type

[**RecoveryPlan**](RecoveryPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replication_recovery_plans_update**
> RecoveryPlan replication_recovery_plans_update(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name, input)

Updates the given recovery plan.

The operation to update a recovery plan.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.recovery_plan import RecoveryPlan
from openapi_client.models.update_recovery_plan_input import UpdateRecoveryPlanInput
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ReplicationRecoveryPlansApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    resource_name = 'resource_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    recovery_plan_name = 'recovery_plan_name_example' # str | Recovery plan name.
    input = openapi_client.UpdateRecoveryPlanInput() # UpdateRecoveryPlanInput | Update recovery plan input

    try:
        # Updates the given recovery plan.
        api_response = api_instance.replication_recovery_plans_update(api_version, resource_name, resource_group_name, subscription_id, recovery_plan_name, input)
        print("The response of ReplicationRecoveryPlansApi->replication_recovery_plans_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ReplicationRecoveryPlansApi->replication_recovery_plans_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **resource_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **recovery_plan_name** | **str**| Recovery plan name. | 
 **input** | [**UpdateRecoveryPlanInput**](UpdateRecoveryPlanInput.md)| Update recovery plan input | 

### Return type

[**RecoveryPlan**](RecoveryPlan.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

