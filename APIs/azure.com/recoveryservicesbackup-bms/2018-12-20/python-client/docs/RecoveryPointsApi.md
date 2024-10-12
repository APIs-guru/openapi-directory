# openapi_client.RecoveryPointsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recovery_points_get_access_token**](RecoveryPointsApi.md#recovery_points_get_access_token) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointId}/accessToken | Returns the Access token for communication between BMS and Protection service


# **recovery_points_get_access_token**
> CrrAccessTokenResource recovery_points_get_access_token(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, recovery_point_id)

Returns the Access token for communication between BMS and Protection service

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.crr_access_token_resource import CrrAccessTokenResource
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
    api_instance = openapi_client.RecoveryPointsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    fabric_name = 'fabric_name_example' # str | Fabric name associated with the container.
    container_name = 'container_name_example' # str | Name of the container.
    protected_item_name = 'protected_item_name_example' # str | Name of the Protected Item.
    recovery_point_id = 'recovery_point_id_example' # str | Recovery Point Id

    try:
        # Returns the Access token for communication between BMS and Protection service
        api_response = api_instance.recovery_points_get_access_token(api_version, vault_name, resource_group_name, subscription_id, fabric_name, container_name, protected_item_name, recovery_point_id)
        print("The response of RecoveryPointsApi->recovery_points_get_access_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecoveryPointsApi->recovery_points_get_access_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **fabric_name** | **str**| Fabric name associated with the container. | 
 **container_name** | **str**| Name of the container. | 
 **protected_item_name** | **str**| Name of the Protected Item. | 
 **recovery_point_id** | **str**| Recovery Point Id | 

### Return type

[**CrrAccessTokenResource**](CrrAccessTokenResource.md)

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

