# PhotoTags


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | [**List[Tag]**](Tag.md) |  | [optional] 

## Example

```python
from openapi_client.models.photo_tags import PhotoTags

# TODO update the JSON string below
json = "{}"
# create an instance of PhotoTags from a JSON string
photo_tags_instance = PhotoTags.from_json(json)
# print the JSON string representation of the object
print(PhotoTags.to_json())

# convert the object into a dict
photo_tags_dict = photo_tags_instance.to_dict()
# create an instance of PhotoTags from a dict
photo_tags_from_dict = PhotoTags.from_dict(photo_tags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


