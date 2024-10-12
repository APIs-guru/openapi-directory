# GetPhotoSizesByID200ResponseSizes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canblog** | **float** |  | [optional] 
**candownload** | **float** |  | [optional] 
**canprint** | **float** |  | [optional] 
**sizes** | [**List[Size]**](Size.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_photo_sizes_by_id200_response_sizes import GetPhotoSizesByID200ResponseSizes

# TODO update the JSON string below
json = "{}"
# create an instance of GetPhotoSizesByID200ResponseSizes from a JSON string
get_photo_sizes_by_id200_response_sizes_instance = GetPhotoSizesByID200ResponseSizes.from_json(json)
# print the JSON string representation of the object
print(GetPhotoSizesByID200ResponseSizes.to_json())

# convert the object into a dict
get_photo_sizes_by_id200_response_sizes_dict = get_photo_sizes_by_id200_response_sizes_instance.to_dict()
# create an instance of GetPhotoSizesByID200ResponseSizes from a dict
get_photo_sizes_by_id200_response_sizes_from_dict = GetPhotoSizesByID200ResponseSizes.from_dict(get_photo_sizes_by_id200_response_sizes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


