# PhotoResponse

Response payload for a single Photo in batch operations including BatchGetPhotos and BatchUpdatePhotos.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**photo** | [**Photo**](Photo.md) |  | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.photo_response import PhotoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PhotoResponse from a JSON string
photo_response_instance = PhotoResponse.from_json(json)
# print the JSON string representation of the object
print(PhotoResponse.to_json())

# convert the object into a dict
photo_response_dict = photo_response_instance.to_dict()
# create an instance of PhotoResponse from a dict
photo_response_from_dict = PhotoResponse.from_dict(photo_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


