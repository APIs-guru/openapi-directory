# CsmSlotEntity

Deployment slot parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preserve_vnet** | **bool** | &lt;code&gt;true&lt;/code&gt; to preserve Virtual Network to the slot during swap; otherwise, &lt;code&gt;false&lt;/code&gt;. | 
**target_slot** | **str** | Destination deployment slot during swap operation. | 

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


