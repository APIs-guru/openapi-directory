# BatchGetPhotosResponse

Response to batch get of Photos.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[PhotoResponse]**](PhotoResponse.md) | List of results for each individual Photo requested, in the same order as the requests in BatchGetPhotos. | [optional] 

## Example

```python
from openapi_client.models.batch_get_photos_response import BatchGetPhotosResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetPhotosResponse from a JSON string
batch_get_photos_response_instance = BatchGetPhotosResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetPhotosResponse.to_json())

# convert the object into a dict
batch_get_photos_response_dict = batch_get_photos_response_instance.to_dict()
# create an instance of BatchGetPhotosResponse from a dict
batch_get_photos_response_from_dict = BatchGetPhotosResponse.from_dict(batch_get_photos_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


