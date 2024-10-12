# CsmCopySlotEntity

Copy deployment slot parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**site_config** | [**WebAppsList200ResponseValueInnerPropertiesSiteConfig**](WebAppsList200ResponseValueInnerPropertiesSiteConfig.md) |  | 
**target_slot** | **str** | Destination deployment slot during copy operation. | 

## Example

```python
from openapi_client.models.csm_copy_slot_entity import CsmCopySlotEntity

# TODO update the JSON string below
json = "{}"
# create an instance of CsmCopySlotEntity from a JSON string
csm_copy_slot_entity_instance = CsmCopySlotEntity.from_json(json)
# print the JSON string representation of the object
print(CsmCopySlotEntity.to_json())

# convert the object into a dict
csm_copy_slot_entity_dict = csm_copy_slot_entity_instance.to_dict()
# create an instance of CsmCopySlotEntity from a dict
csm_copy_slot_entity_from_dict = CsmCopySlotEntity.from_dict(csm_copy_slot_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


