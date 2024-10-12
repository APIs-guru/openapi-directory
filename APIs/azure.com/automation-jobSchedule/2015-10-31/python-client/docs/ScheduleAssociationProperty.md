# ScheduleAssociationProperty

The schedule property associated with the entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the name of the Schedule. | [optional] 

## Example

```python
from openapi_client.models.schedule_association_property import ScheduleAssociationProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ScheduleAssociationProperty from a JSON string
schedule_association_property_instance = ScheduleAssociationProperty.from_json(json)
# print the JSON string representation of the object
print(ScheduleAssociationProperty.to_json())

# convert the object into a dict
schedule_association_property_dict = schedule_association_property_instance.to_dict()
# create an instance of ScheduleAssociationProperty from a dict
schedule_association_property_from_dict = ScheduleAssociationProperty.from_dict(schedule_association_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


