# ErrorDateTimePercentages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime** | **str** | the ISO 8601 datetime | [optional] 
**percentage** | **float** | percentage of the object | [optional] 

## Example

```python
from openapi_client.models.error_date_time_percentages import ErrorDateTimePercentages

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorDateTimePercentages from a JSON string
error_date_time_percentages_instance = ErrorDateTimePercentages.from_json(json)
# print the JSON string representation of the object
print(ErrorDateTimePercentages.to_json())

# convert the object into a dict
error_date_time_percentages_dict = error_date_time_percentages_instance.to_dict()
# create an instance of ErrorDateTimePercentages from a dict
error_date_time_percentages_from_dict = ErrorDateTimePercentages.from_dict(error_date_time_percentages_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


