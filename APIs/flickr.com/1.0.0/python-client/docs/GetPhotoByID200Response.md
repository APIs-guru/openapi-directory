# GetPhotoByID200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**photo** | [**Photo**](Photo.md) |  | [optional] 
**stat** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_photo_by_id200_response import GetPhotoByID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPhotoByID200Response from a JSON string
get_photo_by_id200_response_instance = GetPhotoByID200Response.from_json(json)
# print the JSON string representation of the object
print(GetPhotoByID200Response.to_json())

# convert the object into a dict
get_photo_by_id200_response_dict = get_photo_by_id200_response_instance.to_dict()
# create an instance of GetPhotoByID200Response from a dict
get_photo_by_id200_response_from_dict = GetPhotoByID200Response.from_dict(get_photo_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


