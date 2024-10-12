# RepairTargetDescriptionBase

Describes the entities targeted by a repair action.  This type supports the Service Fabric platform; it is not meant to be used directly from your code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**RepairTargetKind**](RepairTargetKind.md) |  | 

## Example

```python
from openapi_client.models.repair_target_description_base import RepairTargetDescriptionBase

# TODO update the JSON string below
json = "{}"
# create an instance of RepairTargetDescriptionBase from a JSON string
repair_target_description_base_instance = RepairTargetDescriptionBase.from_json(json)
# print the JSON string representation of the object
print(RepairTargetDescriptionBase.to_json())

# convert the object into a dict
repair_target_description_base_dict = repair_target_description_base_instance.to_dict()
# create an instance of RepairTargetDescriptionBase from a dict
repair_target_description_base_from_dict = RepairTargetDescriptionBase.from_dict(repair_target_description_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


