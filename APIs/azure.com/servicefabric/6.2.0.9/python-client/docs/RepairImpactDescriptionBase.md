# RepairImpactDescriptionBase

Describes the expected impact of executing a repair task.  This type supports the Service Fabric platform; it is not meant to be used directly from your code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | [**RepairImpactKind**](RepairImpactKind.md) |  | 

## Example

```python
from openapi_client.models.repair_impact_description_base import RepairImpactDescriptionBase

# TODO update the JSON string below
json = "{}"
# create an instance of RepairImpactDescriptionBase from a JSON string
repair_impact_description_base_instance = RepairImpactDescriptionBase.from_json(json)
# print the JSON string representation of the object
print(RepairImpactDescriptionBase.to_json())

# convert the object into a dict
repair_impact_description_base_dict = repair_impact_description_base_instance.to_dict()
# create an instance of RepairImpactDescriptionBase from a dict
repair_impact_description_base_from_dict = RepairImpactDescriptionBase.from_dict(repair_impact_description_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


