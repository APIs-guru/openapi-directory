# CrashDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_start_timestamp** | **datetime** | Application launch timestamp (example: 1985-04-12T23:20:50.52Z).  | [optional] 
**carrier_country** | **str** | Carrier country code (for mobile devices).  | [optional] 
**carrier_name** | **str** | Carrier name (for mobile devices).  | [optional] 
**locale** | **str** | Language code (example: en_US).  | 
**os_build** | **str** | OS build code (example: LMY47X).  | [optional] 
**rooted** | **bool** | Whether the device where the crash occurred is rooted or jailbroken  | 
**screen_size** | **str** | Screen size of the device in pixels (example: 640x480).  | 

## Example

```python
from openapi_client.models.crash_details import CrashDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CrashDetails from a JSON string
crash_details_instance = CrashDetails.from_json(json)
# print the JSON string representation of the object
print(CrashDetails.to_json())

# convert the object into a dict
crash_details_dict = crash_details_instance.to_dict()
# create an instance of CrashDetails from a dict
crash_details_from_dict = CrashDetails.from_dict(crash_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


