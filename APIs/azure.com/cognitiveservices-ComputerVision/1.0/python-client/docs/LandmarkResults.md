# LandmarkResults

List of landmarks recognized in the image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**landmarks** | [**List[LandmarkResultsLandmarksInner]**](LandmarkResultsLandmarksInner.md) |  | [optional] 
**metadata** | [**ImageMetadata**](ImageMetadata.md) |  | [optional] 
**request_id** | **str** | Id of the REST API request. | [optional] 

## Example

```python
from openapi_client.models.landmark_results import LandmarkResults

# TODO update the JSON string below
json = "{}"
# create an instance of LandmarkResults from a JSON string
landmark_results_instance = LandmarkResults.from_json(json)
# print the JSON string representation of the object
print(LandmarkResults.to_json())

# convert the object into a dict
landmark_results_dict = landmark_results_instance.to_dict()
# create an instance of LandmarkResults from a dict
landmark_results_from_dict = LandmarkResults.from_dict(landmark_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


