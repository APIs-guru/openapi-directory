# TimestampRange

Message representing a period of time between two timestamps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | End of the period. | [optional] 
**start_time** | **str** | Begin of the period. | [optional] 

## Example

```python
from openapi_client.models.timestamp_range import TimestampRange

# TODO update the JSON string below
json = "{}"
# create an instance of TimestampRange from a JSON string
timestamp_range_instance = TimestampRange.from_json(json)
# print the JSON string representation of the object
print(TimestampRange.to_json())

# convert the object into a dict
timestamp_range_dict = timestamp_range_instance.to_dict()
# create an instance of TimestampRange from a dict
timestamp_range_from_dict = TimestampRange.from_dict(timestamp_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


