# DetectionsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detections** | **List[List[DetectionsResourceInner]]** | A detections contains detection results of several text | [optional] 

## Example

```python
from openapi_client.models.detections_list_response import DetectionsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DetectionsListResponse from a JSON string
detections_list_response_instance = DetectionsListResponse.from_json(json)
# print the JSON string representation of the object
print(DetectionsListResponse.to_json())

# convert the object into a dict
detections_list_response_dict = detections_list_response_instance.to_dict()
# create an instance of DetectionsListResponse from a dict
detections_list_response_from_dict = DetectionsListResponse.from_dict(detections_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


