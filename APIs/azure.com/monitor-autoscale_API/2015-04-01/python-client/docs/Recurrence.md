# Recurrence

The repeating times at which this profile begins. This element is not used if the FixedDate element is used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | **str** | the recurrence frequency. How often the schedule profile should take effect. This value must be Week, meaning each week will have the same set of profiles. For example, to set a daily schedule, set **schedule** to every day of the week. The frequency property specifies that the schedule is repeated weekly. | 
**schedule** | [**RecurrentSchedule**](RecurrentSchedule.md) |  | 

## Example

```python
from openapi_client.models.recurrence import Recurrence

# TODO update the JSON string below
json = "{}"
# create an instance of Recurrence from a JSON string
recurrence_instance = Recurrence.from_json(json)
# print the JSON string representation of the object
print(Recurrence.to_json())

# convert the object into a dict
recurrence_dict = recurrence_instance.to_dict()
# create an instance of Recurrence from a dict
recurrence_from_dict = Recurrence.from_dict(recurrence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


