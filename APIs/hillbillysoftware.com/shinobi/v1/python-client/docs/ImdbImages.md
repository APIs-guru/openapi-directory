# ImdbImages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backdrops** | **List[str]** |  | [optional] 
**posters** | **List[str]** |  | [optional] 
**type** | **str** |  | [optional] 
**imdb_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.imdb_images import ImdbImages

# TODO update the JSON string below
json = "{}"
# create an instance of ImdbImages from a JSON string
imdb_images_instance = ImdbImages.from_json(json)
# print the JSON string representation of the object
print(ImdbImages.to_json())

# convert the object into a dict
imdb_images_dict = imdb_images_instance.to_dict()
# create an instance of ImdbImages from a dict
imdb_images_from_dict = ImdbImages.from_dict(imdb_images_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


