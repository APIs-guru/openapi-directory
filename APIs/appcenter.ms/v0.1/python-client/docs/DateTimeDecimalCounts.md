# DateTimeDecimalCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **float** | Decimal count of the object. | [optional] 
**datetime** | **str** | The ISO 8601 datetime. | [optional] 

## Example

```python
from openapi_client.models.date_time_decimal_counts import DateTimeDecimalCounts

# TODO update the JSON string below
json = "{}"
# create an instance of DateTimeDecimalCounts from a JSON string
date_time_decimal_counts_instance = DateTimeDecimalCounts.from_json(json)
# print the JSON string representation of the object
print(DateTimeDecimalCounts.to_json())

# convert the object into a dict
date_time_decimal_counts_dict = date_time_decimal_counts_instance.to_dict()
# create an instance of DateTimeDecimalCounts from a dict
date_time_decimal_counts_from_dict = DateTimeDecimalCounts.from_dict(date_time_decimal_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


