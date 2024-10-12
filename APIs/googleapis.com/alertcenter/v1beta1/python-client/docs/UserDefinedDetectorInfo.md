# UserDefinedDetectorInfo

Detector defined by administrators.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name of the detector. | [optional] 
**resource_name** | **str** | Resource name that uniquely identifies the detector. | [optional] 

## Example

```python
from openapi_client.models.user_defined_detector_info import UserDefinedDetectorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserDefinedDetectorInfo from a JSON string
user_defined_detector_info_instance = UserDefinedDetectorInfo.from_json(json)
# print the JSON string representation of the object
print(UserDefinedDetectorInfo.to_json())

# convert the object into a dict
user_defined_detector_info_dict = user_defined_detector_info_instance.to_dict()
# create an instance of UserDefinedDetectorInfo from a dict
user_defined_detector_info_from_dict = UserDefinedDetectorInfo.from_dict(user_defined_detector_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


