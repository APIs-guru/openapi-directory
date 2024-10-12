# MultipleActivationKey

MAK key details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | MAK key specific properties. | [optional] 
**location** | **str** | The geo-location where the resource lives | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.multiple_activation_key import MultipleActivationKey

# TODO update the JSON string below
json = "{}"
# create an instance of MultipleActivationKey from a JSON string
multiple_activation_key_instance = MultipleActivationKey.from_json(json)
# print the JSON string representation of the object
print(MultipleActivationKey.to_json())

# convert the object into a dict
multiple_activation_key_dict = multiple_activation_key_instance.to_dict()
# create an instance of MultipleActivationKey from a dict
multiple_activation_key_from_dict = MultipleActivationKey.from_dict(multiple_activation_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


