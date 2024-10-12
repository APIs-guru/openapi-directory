# PredefinedDetectorInfo

Detector provided by Google.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detector_name** | **str** | Name that uniquely identifies the detector. | [optional] 

## Example

```python
from openapi_client.models.predefined_detector_info import PredefinedDetectorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PredefinedDetectorInfo from a JSON string
predefined_detector_info_instance = PredefinedDetectorInfo.from_json(json)
# print the JSON string representation of the object
print(PredefinedDetectorInfo.to_json())

# convert the object into a dict
predefined_detector_info_dict = predefined_detector_info_instance.to_dict()
# create an instance of PredefinedDetectorInfo from a dict
predefined_detector_info_from_dict = PredefinedDetectorInfo.from_dict(predefined_detector_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


