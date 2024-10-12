# ContentAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**album_name** | **str** |  | [optional] 
**artist_name** | **str** |  | [optional] 
**artwork** | [**ContentAttributesArtwork**](ContentAttributesArtwork.md) |  | [optional] 
**composer_name** | **str** |  | [optional] 
**duration_in_millis** | **int** |  | [optional] 
**genre_names** | **List[str]** |  | [optional] 
**name** | **str** |  | [optional] 
**track_number** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.content_attributes import ContentAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ContentAttributes from a JSON string
content_attributes_instance = ContentAttributes.from_json(json)
# print the JSON string representation of the object
print(ContentAttributes.to_json())

# convert the object into a dict
content_attributes_dict = content_attributes_instance.to_dict()
# create an instance of ContentAttributes from a dict
content_attributes_from_dict = ContentAttributes.from_dict(content_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


