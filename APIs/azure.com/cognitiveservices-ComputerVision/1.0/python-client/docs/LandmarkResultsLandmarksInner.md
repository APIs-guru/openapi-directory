# LandmarkResultsLandmarksInner

A landmark recognized in the image

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Confidence level for the landmark recognition. | [optional] 
**name** | **str** | Name of the landmark. | [optional] 

## Example

```python
from openapi_client.models.landmark_results_landmarks_inner import LandmarkResultsLandmarksInner

# TODO update the JSON string below
json = "{}"
# create an instance of LandmarkResultsLandmarksInner from a JSON string
landmark_results_landmarks_inner_instance = LandmarkResultsLandmarksInner.from_json(json)
# print the JSON string representation of the object
print(LandmarkResultsLandmarksInner.to_json())

# convert the object into a dict
landmark_results_landmarks_inner_dict = landmark_results_landmarks_inner_instance.to_dict()
# create an instance of LandmarkResultsLandmarksInner from a dict
landmark_results_landmarks_inner_from_dict = LandmarkResultsLandmarksInner.from_dict(landmark_results_landmarks_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


