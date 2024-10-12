# AnalyzeImageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | Publicly reachable URL of an image | 

## Example

```python
from openapi_client.models.analyze_image_request import AnalyzeImageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyzeImageRequest from a JSON string
analyze_image_request_instance = AnalyzeImageRequest.from_json(json)
# print the JSON string representation of the object
print(AnalyzeImageRequest.to_json())

# convert the object into a dict
analyze_image_request_dict = analyze_image_request_instance.to_dict()
# create an instance of AnalyzeImageRequest from a dict
analyze_image_request_from_dict = AnalyzeImageRequest.from_dict(analyze_image_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


