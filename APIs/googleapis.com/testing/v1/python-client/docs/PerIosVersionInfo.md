# PerIosVersionInfo

A version-specific information of an iOS model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_capacity** | **str** | The number of online devices for an iOS version. | [optional] 
**version_id** | **str** | An iOS version. | [optional] 

## Example

```python
from openapi_client.models.per_ios_version_info import PerIosVersionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PerIosVersionInfo from a JSON string
per_ios_version_info_instance = PerIosVersionInfo.from_json(json)
# print the JSON string representation of the object
print(PerIosVersionInfo.to_json())

# convert the object into a dict
per_ios_version_info_dict = per_ios_version_info_instance.to_dict()
# create an instance of PerIosVersionInfo from a dict
per_ios_version_info_from_dict = PerIosVersionInfo.from_dict(per_ios_version_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


