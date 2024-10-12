# openapi_client.OperationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**operation_validate**](OperationApi.md#operation_validate) | **POST** /Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupValidateOperation | 


# **operation_validate**
> ValidateOperationsResponse operation_validate(api_version, vault_name, resource_group_name, subscription_id, parameters)



Validate operation for specified backed up item. This is a synchronous operation.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.validate_operation_request import ValidateOperationRequest
from openapi_client.models.validate_operations_response import ValidateOperationsResponse
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
    api_instance = openapi_client.OperationApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    vault_name = 'vault_name_example' # str | The name of the recovery services vault.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group where the recovery services vault is present.
    subscription_id = 'subscription_id_example' # str | The subscription Id.
    parameters = openapi_client.ValidateOperationRequest() # ValidateOperationRequest | resource validate operation request

    try:
        api_response = api_instance.operation_validate(api_version, vault_name, resource_group_name, subscription_id, parameters)
        print("The response of OperationApi->operation_validate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OperationApi->operation_validate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **vault_name** | **str**| The name of the recovery services vault. | 
 **resource_group_name** | **str**| The name of the resource group where the recovery services vault is present. | 
 **subscription_id** | **str**| The subscription Id. | 
 **parameters** | [**ValidateOperationRequest**](ValidateOperationRequest.md)| resource validate operation request | 

### Return type

[**ValidateOperationsResponse**](ValidateOperationsResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

