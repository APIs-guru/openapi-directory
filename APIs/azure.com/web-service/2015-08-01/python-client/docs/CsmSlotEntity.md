# CsmSlotEntity

Class containing deployment slot parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preserve_vnet** | **bool** | Get or set the flag indicating it should preserve VNet to the slot during swap | [optional] 
**target_slot** | **str** | Set the destination deployment slot during swap operation | [optional] 

## Example

```python
from openapi_client.models.csm_slot_entity import CsmSlotEntity

# TODO update the JSON string below
json = "{}"
# create an instance of CsmSlotEntity from a JSON string
csm_slot_entity_instance = CsmSlotEntity.from_json(json)
# print the JSON string representation of the object
print(CsmSlotEntity.to_json())

# convert the object into a dict
csm_slot_entity_dict = csm_slot_entity_instance.to_dict()
# create an instance of CsmSlotEntity from a dict
csm_slot_entity_from_dict = CsmSlotEntity.from_dict(csm_slot_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


