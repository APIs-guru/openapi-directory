# ImmutabilityPolicy

The ImmutabilityPolicy property of a blob container, including Id, resource name, resource type, Etag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ImmutabilityPolicyProperty**](ImmutabilityPolicyProperty.md) |  | 
**etag** | **str** | Resource Etag. | [optional] [readonly] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.immutability_policy import ImmutabilityPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ImmutabilityPolicy from a JSON string
immutability_policy_instance = ImmutabilityPolicy.from_json(json)
# print the JSON string representation of the object
print(ImmutabilityPolicy.to_json())

# convert the object into a dict
immutability_policy_dict = immutability_policy_instance.to_dict()
# create an instance of ImmutabilityPolicy from a dict
immutability_policy_from_dict = ImmutabilityPolicy.from_dict(immutability_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


