# ResourceGroupPatchable

Resource group information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_by** | **str** | The ID of the resource that manages this resource group. | [optional] 
**name** | **str** | The name of the resource group. | [optional] 
**properties** | [**ResourceGroupProperties**](ResourceGroupProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags attached to the resource group. | [optional] 

## Example

```python
from openapi_client.models.resource_group_patchable import ResourceGroupPatchable

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceGroupPatchable from a JSON string
resource_group_patchable_instance = ResourceGroupPatchable.from_json(json)
# print the JSON string representation of the object
print(ResourceGroupPatchable.to_json())

# convert the object into a dict
resource_group_patchable_dict = resource_group_patchable_instance.to_dict()
# create an instance of ResourceGroupPatchable from a dict
resource_group_patchable_from_dict = ResourceGroupPatchable.from_dict(resource_group_patchable_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


