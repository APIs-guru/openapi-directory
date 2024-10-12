# ResourceGroup

Resource group information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the resource group. | [optional] [readonly] 
**location** | **str** | The location of the resource group. It cannot be changed after the resource group has been created. It must be one of the supported Azure locations. | 
**managed_by** | **str** | The ID of the resource that manages this resource group. | [optional] 
**name** | **str** | The name of the resource group. | [optional] 
**properties** | [**ResourceGroupProperties**](ResourceGroupProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags attached to the resource group. | [optional] 

## Example

```python
from openapi_client.models.resource_group import ResourceGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceGroup from a JSON string
resource_group_instance = ResourceGroup.from_json(json)
# print the JSON string representation of the object
print(ResourceGroup.to_json())

# convert the object into a dict
resource_group_dict = resource_group_instance.to_dict()
# create an instance of ResourceGroup from a dict
resource_group_from_dict = ResourceGroup.from_dict(resource_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


