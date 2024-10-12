# GetPhotoSizesByID200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sizes** | [**GetPhotoSizesByID200ResponseSizes**](GetPhotoSizesByID200ResponseSizes.md) |  | [optional] 
**stat** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_photo_sizes_by_id200_response import GetPhotoSizesByID200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetPhotoSizesByID200Response from a JSON string
get_photo_sizes_by_id200_response_instance = GetPhotoSizesByID200Response.from_json(json)
# print the JSON string representation of the object
print(GetPhotoSizesByID200Response.to_json())

# convert the object into a dict
get_photo_sizes_by_id200_response_dict = get_photo_sizes_by_id200_response_instance.to_dict()
# create an instance of GetPhotoSizesByID200Response from a dict
get_photo_sizes_by_id200_response_from_dict = GetPhotoSizesByID200Response.from_dict(get_photo_sizes_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


