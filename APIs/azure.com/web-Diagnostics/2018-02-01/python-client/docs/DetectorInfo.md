# DetectorInfo

Definition of Detector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | Support Category | [optional] [readonly] 
**description** | **str** | Short description of the detector and its purpose | [optional] [readonly] 
**sub_category** | **str** | Support Sub Category | [optional] [readonly] 
**support_topic_id** | **str** | Support Topic Id | [optional] [readonly] 

## Example

```python
from openapi_client.models.detector_info import DetectorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DetectorInfo from a JSON string
detector_info_instance = DetectorInfo.from_json(json)
# print the JSON string representation of the object
print(DetectorInfo.to_json())

# convert the object into a dict
detector_info_dict = detector_info_instance.to_dict()
# create an instance of DetectorInfo from a dict
detector_info_from_dict = DetectorInfo.from_dict(detector_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


