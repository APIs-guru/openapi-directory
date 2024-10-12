# FrequencyCap

Message contains details about publisher-set frequency caps of the delivery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_impressions** | **int** | The maximum number of impressions that can be served to a user within the specified time period. | [optional] 
**time_unit_type** | **str** | The time unit. Along with num_time_units defines the amount of time over which impressions per user are counted and capped. | [optional] 
**time_units_count** | **int** | The amount of time, in the units specified by time_unit_type. Defines the amount of time over which impressions per user are counted and capped. | [optional] 

## Example

```python
from openapi_client.models.frequency_cap import FrequencyCap

# TODO update the JSON string below
json = "{}"
# create an instance of FrequencyCap from a JSON string
frequency_cap_instance = FrequencyCap.from_json(json)
# print the JSON string representation of the object
print(FrequencyCap.to_json())

# convert the object into a dict
frequency_cap_dict = frequency_cap_instance.to_dict()
# create an instance of FrequencyCap from a dict
frequency_cap_from_dict = FrequencyCap.from_dict(frequency_cap_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


