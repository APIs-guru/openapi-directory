# SlotConfigNamesResource

Slot Config names azure resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.slot_config_names_resource import SlotConfigNamesResource

# TODO update the JSON string below
json = "{}"
# create an instance of SlotConfigNamesResource from a JSON string
slot_config_names_resource_instance = SlotConfigNamesResource.from_json(json)
# print the JSON string representation of the object
print(SlotConfigNamesResource.to_json())

# convert the object into a dict
slot_config_names_resource_dict = slot_config_names_resource_instance.to_dict()
# create an instance of SlotConfigNamesResource from a dict
slot_config_names_resource_from_dict = SlotConfigNamesResource.from_dict(slot_config_names_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


