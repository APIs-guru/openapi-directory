# BatchDeletePhotosRequest

Request to delete multiple Photos.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**photo_ids** | **List[str]** | Required. IDs of the Photos. HTTP GET requests require the following syntax for the URL query parameter: &#x60;photoIds&#x3D;&amp;photoIds&#x3D;&amp;...&#x60;. | [optional] 

## Example

```python
from openapi_client.models.batch_delete_photos_request import BatchDeletePhotosRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeletePhotosRequest from a JSON string
batch_delete_photos_request_instance = BatchDeletePhotosRequest.from_json(json)
# print the JSON string representation of the object
print(BatchDeletePhotosRequest.to_json())

# convert the object into a dict
batch_delete_photos_request_dict = batch_delete_photos_request_instance.to_dict()
# create an instance of BatchDeletePhotosRequest from a dict
batch_delete_photos_request_from_dict = BatchDeletePhotosRequest.from_dict(batch_delete_photos_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


