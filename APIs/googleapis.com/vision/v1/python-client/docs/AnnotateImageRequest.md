# AnnotateImageRequest

Request for performing Google Cloud Vision API tasks over a user-provided image, with user-requested features, and with context information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**List[Feature]**](Feature.md) | Requested features. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**image_context** | [**ImageContext**](ImageContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.annotate_image_request import AnnotateImageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotateImageRequest from a JSON string
annotate_image_request_instance = AnnotateImageRequest.from_json(json)
# print the JSON string representation of the object
print(AnnotateImageRequest.to_json())

# convert the object into a dict
annotate_image_request_dict = annotate_image_request_instance.to_dict()
# create an instance of AnnotateImageRequest from a dict
annotate_image_request_from_dict = AnnotateImageRequest.from_dict(annotate_image_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


