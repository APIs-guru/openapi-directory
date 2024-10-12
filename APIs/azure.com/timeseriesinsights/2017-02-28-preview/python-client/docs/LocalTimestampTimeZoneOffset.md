# LocalTimestampTimeZoneOffset

An object that represents the offset information for the local timestamp format specified. Should not be specified for LocalTimestampFormat - Embedded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_name** | **str** | The event property that will be contain the offset information to calculate the local timestamp. When the LocalTimestampFormat is Iana, the property name will contain the name of the column which contains IANA Timezone Name (eg: Americas/Los Angeles). When LocalTimestampFormat is Timespan, it contains the name of property which contains values representing the offset (eg: P1D or 1.00:00:00) | [optional] 

## Example

```python
from openapi_client.models.local_timestamp_time_zone_offset import LocalTimestampTimeZoneOffset

# TODO update the JSON string below
json = "{}"
# create an instance of LocalTimestampTimeZoneOffset from a JSON string
local_timestamp_time_zone_offset_instance = LocalTimestampTimeZoneOffset.from_json(json)
# print the JSON string representation of the object
print(LocalTimestampTimeZoneOffset.to_json())

# convert the object into a dict
local_timestamp_time_zone_offset_dict = local_timestamp_time_zone_offset_instance.to_dict()
# create an instance of LocalTimestampTimeZoneOffset from a dict
local_timestamp_time_zone_offset_from_dict = LocalTimestampTimeZoneOffset.from_dict(local_timestamp_time_zone_offset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


