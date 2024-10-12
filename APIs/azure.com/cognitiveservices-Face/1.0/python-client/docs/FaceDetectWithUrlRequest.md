# FaceDetectWithUrlRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | Publicly reachable URL of an image | 

## Example

```python
from openapi_client.models.face_detect_with_url_request import FaceDetectWithUrlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FaceDetectWithUrlRequest from a JSON string
face_detect_with_url_request_instance = FaceDetectWithUrlRequest.from_json(json)
# print the JSON string representation of the object
print(FaceDetectWithUrlRequest.to_json())

# convert the object into a dict
face_detect_with_url_request_dict = face_detect_with_url_request_instance.to_dict()
# create an instance of FaceDetectWithUrlRequest from a dict
face_detect_with_url_request_from_dict = FaceDetectWithUrlRequest.from_dict(face_detect_with_url_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


