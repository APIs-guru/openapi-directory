# ImdbID


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**shinobi_id** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.imdb_id import ImdbID

# TODO update the JSON string below
json = "{}"
# create an instance of ImdbID from a JSON string
imdb_id_instance = ImdbID.from_json(json)
# print the JSON string representation of the object
print(ImdbID.to_json())

# convert the object into a dict
imdb_id_dict = imdb_id_instance.to_dict()
# create an instance of ImdbID from a dict
imdb_id_from_dict = ImdbID.from_dict(imdb_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


