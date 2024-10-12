# BatchUpdatePhotosRequest

Request to update the metadata of photos. Updating the pixels of photos is not supported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_photo_requests** | [**List[UpdatePhotoRequest]**](UpdatePhotoRequest.md) | Required. List of UpdatePhotoRequests. | [optional] 

## Example

```python
from openapi_client.models.batch_update_photos_request import BatchUpdatePhotosRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdatePhotosRequest from a JSON string
batch_update_photos_request_instance = BatchUpdatePhotosRequest.from_json(json)
# print the JSON string representation of the object
print(BatchUpdatePhotosRequest.to_json())

# convert the object into a dict
batch_update_photos_request_dict = batch_update_photos_request_instance.to_dict()
# create an instance of BatchUpdatePhotosRequest from a dict
batch_update_photos_request_from_dict = BatchUpdatePhotosRequest.from_dict(batch_update_photos_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


