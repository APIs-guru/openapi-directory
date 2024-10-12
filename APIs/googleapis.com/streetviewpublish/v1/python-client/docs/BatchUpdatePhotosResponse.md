# BatchUpdatePhotosResponse

Response to batch update of metadata of one or more Photos.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[PhotoResponse]**](PhotoResponse.md) | List of results for each individual Photo updated, in the same order as the request. | [optional] 

## Example

```python
from openapi_client.models.batch_update_photos_response import BatchUpdatePhotosResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdatePhotosResponse from a JSON string
batch_update_photos_response_instance = BatchUpdatePhotosResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdatePhotosResponse.to_json())

# convert the object into a dict
batch_update_photos_response_dict = batch_update_photos_response_instance.to_dict()
# create an instance of BatchUpdatePhotosResponse from a dict
batch_update_photos_response_from_dict = BatchUpdatePhotosResponse.from_dict(batch_update_photos_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


