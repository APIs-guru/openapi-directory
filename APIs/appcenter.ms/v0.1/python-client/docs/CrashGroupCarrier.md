# CrashGroupCarrier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_name** | **str** | Carrier name. | [optional] 
**crash_count** | **int** | Crash count of carrier. | [optional] 

## Example

```python
from openapi_client.models.crash_group_carrier import CrashGroupCarrier

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupCarrier from a JSON string
crash_group_carrier_instance = CrashGroupCarrier.from_json(json)
# print the JSON string representation of the object
print(CrashGroupCarrier.to_json())

# convert the object into a dict
crash_group_carrier_dict = crash_group_carrier_instance.to_dict()
# create an instance of CrashGroupCarrier from a dict
crash_group_carrier_from_dict = CrashGroupCarrier.from_dict(crash_group_carrier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


