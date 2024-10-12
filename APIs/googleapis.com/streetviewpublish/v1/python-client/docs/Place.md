# Place

Place metadata for an entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | Output only. The language_code that the name is localized with. This should be the language_code specified in the request, but may be a fallback. | [optional] [readonly] 
**name** | **str** | Output only. The name of the place, localized to the language_code. | [optional] [readonly] 
**place_id** | **str** | Place identifier, as described in https://developers.google.com/places/place-id. | [optional] 

## Example

```python
from openapi_client.models.place import Place

# TODO update the JSON string below
json = "{}"
# create an instance of Place from a JSON string
place_instance = Place.from_json(json)
# print the JSON string representation of the object
print(Place.to_json())

# convert the object into a dict
place_dict = place_instance.to_dict()
# create an instance of Place from a dict
place_from_dict = Place.from_dict(place_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


