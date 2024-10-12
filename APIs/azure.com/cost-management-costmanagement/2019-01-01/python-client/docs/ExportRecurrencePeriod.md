# ExportRecurrencePeriod

The start and end date for recurrence schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **datetime** | The start date of recurrence. | 
**to** | **datetime** | The end date of recurrence. | [optional] 

## Example

```python
from openapi_client.models.export_recurrence_period import ExportRecurrencePeriod

# TODO update the JSON string below
json = "{}"
# create an instance of ExportRecurrencePeriod from a JSON string
export_recurrence_period_instance = ExportRecurrencePeriod.from_json(json)
# print the JSON string representation of the object
print(ExportRecurrencePeriod.to_json())

# convert the object into a dict
export_recurrence_period_dict = export_recurrence_period_instance.to_dict()
# create an instance of ExportRecurrencePeriod from a dict
export_recurrence_period_from_dict = ExportRecurrencePeriod.from_dict(export_recurrence_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


