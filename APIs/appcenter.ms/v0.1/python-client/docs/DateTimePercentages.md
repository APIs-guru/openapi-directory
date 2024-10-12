# DateTimePercentages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **str** | The ISO 8601 datetime. | [optional] 
**percentage** | **float** | Percentage of the object. | [optional] 

## Example

```python
from openapi_client.models.date_time_percentages import DateTimePercentages

# TODO update the JSON string below
json = "{}"
# create an instance of DateTimePercentages from a JSON string
date_time_percentages_instance = DateTimePercentages.from_json(json)
# print the JSON string representation of the object
print(DateTimePercentages.to_json())

# convert the object into a dict
date_time_percentages_dict = date_time_percentages_instance.to_dict()
# create an instance of DateTimePercentages from a dict
date_time_percentages_from_dict = DateTimePercentages.from_dict(date_time_percentages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


