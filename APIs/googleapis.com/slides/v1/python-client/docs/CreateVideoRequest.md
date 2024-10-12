# CreateVideoRequest

Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**element_properties** | [**PageElementProperties**](PageElementProperties.md) |  | [optional] 
**id** | **str** | The video source&#39;s unique identifier for this video. e.g. For YouTube video https://www.youtube.com/watch?v&#x3D;7U3axjORYZ0, the ID is 7U3axjORYZ0. For a Google Drive video https://drive.google.com/file/d/1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q the ID is 1xCgQLFTJi5_Xl8DgW_lcUYq5e-q6Hi5Q. To access a Google Drive video file, you might need to add a resource key to the HTTP header for a subset of old files. For more information, see [Access link-shared files using resource keys](https://developers.google.com/drive/api/v3/resource-keys). | [optional] 
**object_id** | **str** | A user-supplied object ID. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex &#x60;[a-zA-Z0-9_]&#x60;); remaining characters may include those as well as a hyphen or colon (matches regex &#x60;[a-zA-Z0-9_-:]&#x60;). The length of the ID must not be less than 5 or greater than 50. If you don&#39;t specify an ID, a unique one is generated. | [optional] 
**source** | **str** | The video source. | [optional] 

## Example

```python
from openapi_client.models.create_video_request import CreateVideoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateVideoRequest from a JSON string
create_video_request_instance = CreateVideoRequest.from_json(json)
# print the JSON string representation of the object
print(CreateVideoRequest.to_json())

# convert the object into a dict
create_video_request_dict = create_video_request_instance.to_dict()
# create an instance of CreateVideoRequest from a dict
create_video_request_from_dict = CreateVideoRequest.from_dict(create_video_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


