# ManagementPolicy

The Get Storage Account ManagementPolicies operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ManagementPolicyProperties**](ManagementPolicyProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.management_policy import ManagementPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementPolicy from a JSON string
management_policy_instance = ManagementPolicy.from_json(json)
# print the JSON string representation of the object
print(ManagementPolicy.to_json())

# convert the object into a dict
management_policy_dict = management_policy_instance.to_dict()
# create an instance of ManagementPolicy from a dict
management_policy_from_dict = ManagementPolicy.from_dict(management_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


