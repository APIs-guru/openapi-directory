# PerAndroidVersionInfo

A version-specific information of an Android model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_capacity** | **str** | The number of online devices for an Android version. | [optional] 
**direct_access_version_info** | [**DirectAccessVersionInfo**](DirectAccessVersionInfo.md) |  | [optional] 
**interactive_device_availability_estimate** | **str** | Output only. The estimated wait time for a single interactive device session using Direct Access. | [optional] [readonly] 
**version_id** | **str** | An Android version. | [optional] 

## Example

```python
from openapi_client.models.per_android_version_info import PerAndroidVersionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PerAndroidVersionInfo from a JSON string
per_android_version_info_instance = PerAndroidVersionInfo.from_json(json)
# print the JSON string representation of the object
print(PerAndroidVersionInfo.to_json())

# convert the object into a dict
per_android_version_info_dict = per_android_version_info_instance.to_dict()
# create an instance of PerAndroidVersionInfo from a dict
per_android_version_info_from_dict = PerAndroidVersionInfo.from_dict(per_android_version_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


