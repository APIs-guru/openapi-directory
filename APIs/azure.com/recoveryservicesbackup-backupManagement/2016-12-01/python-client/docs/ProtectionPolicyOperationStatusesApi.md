# openapi_client.ProtectionPolicyOperationStatusesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**protection_policy_operation_statuses_get**](ProtectionPolicyOperationStatusesApi.md#protection_policy_operation_statuses_get) | **GET** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupPolicies/{policyName}/operations/{operationId} | 


# **protection_policy_operation_statuses_get**
> OperationStatus protection_policy_operation_statuses_get(api_version, vault_name, resource_group_name, subscription_id, policy_name, operation_id)



Provides the status of the asynchronous operations like backup, restore. The status can be in progress, completed or failed. You can refer to the Operation Status enum for all the possible states of an operation. Some operations create jobs. This method returns the list of jobs associated with operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.operation_status import OperationStatus
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
    api_instance = openapi_client.ProtectionPolicyOperationStatusesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    policy_name = 'policy_name_example' # str | Backup policy name whose operation's status needs to be fetched.
    operation_id = 'operation_id_example' # str | Operation ID which represents an operation whose status needs to be fetched.

    try:
        api_response = api_instance.protection_policy_operation_statuses_get(api_version, vault_name, resource_group_name, subscription_id, policy_name, operation_id)
        print("The response of ProtectionPolicyOperationStatusesApi->protection_policy_operation_statuses_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProtectionPolicyOperationStatusesApi->protection_policy_operation_statuses_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **policy_name** | **str**| Backup policy name whose operation&#39;s status needs to be fetched. | 
 **operation_id** | **str**| Operation ID which represents an operation whose status needs to be fetched. | 

### Return type

[**OperationStatus**](OperationStatus.md)

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

