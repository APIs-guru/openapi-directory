# LocalTimestamp

An object that represents the local timestamp property. It contains the format of local timestamp that needs to be used and the corresponding timezone offset information. If a value isn't specified for localTimestamp, or if null, then the local timestamp will not be ingressed with the events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | An enum that represents the format of the local timestamp property that needs to be set. | [optional] 
**time_zone_offset** | [**LocalTimestampTimeZoneOffset**](LocalTimestampTimeZoneOffset.md) |  | [optional] 

## Example

```python
from openapi_client.models.local_timestamp import LocalTimestamp

# TODO update the JSON string below
json = "{}"
# create an instance of LocalTimestamp from a JSON string
local_timestamp_instance = LocalTimestamp.from_json(json)
# print the JSON string representation of the object
print(LocalTimestamp.to_json())

# convert the object into a dict
local_timestamp_dict = local_timestamp_instance.to_dict()
# create an instance of LocalTimestamp from a dict
local_timestamp_from_dict = LocalTimestamp.from_dict(local_timestamp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


