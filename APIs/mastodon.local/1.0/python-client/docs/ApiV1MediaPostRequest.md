# ApiV1MediaPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A plain-text description of the media, for accessibility purposes. | [optional] 
**file** | **bytearray** | The file to be attached, using multipart form data. | 
**focus** | **str** | Two floating points (x,y), comma-delimited, ranging from -1.0 to 1.0 (see “Focal points” below) | [optional] 
**thumbnail** | **bytearray** | The custom thumbnail of the media to be attached, using multipart form data. | [optional] 

## Example

```python
from openapi_client.models.api_v1_media_post_request import ApiV1MediaPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1MediaPostRequest from a JSON string
api_v1_media_post_request_instance = ApiV1MediaPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1MediaPostRequest.to_json())

# convert the object into a dict
api_v1_media_post_request_dict = api_v1_media_post_request_instance.to_dict()
# create an instance of ApiV1MediaPostRequest from a dict
api_v1_media_post_request_from_dict = ApiV1MediaPostRequest.from_dict(api_v1_media_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


