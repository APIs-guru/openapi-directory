# Day

Day of the week.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **int** | Date of the month | [optional] 
**is_last** | **bool** | Whether Date is last date of month | [optional] 

## Example

```python
from openapi_client.models.day import Day

# TODO update the JSON string below
json = "{}"
# create an instance of Day from a JSON string
day_instance = Day.from_json(json)
# print the JSON string representation of the object
print(Day.to_json())

# convert the object into a dict
day_dict = day_instance.to_dict()
# create an instance of Day from a dict
day_from_dict = Day.from_dict(day_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


