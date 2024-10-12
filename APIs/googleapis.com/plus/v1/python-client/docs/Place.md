# Place


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**PlaceAddress**](PlaceAddress.md) |  | [optional] 
**display_name** | **str** | The display name of the place. | [optional] 
**id** | **str** | The id of the place. | [optional] 
**kind** | **str** | Identifies this resource as a place. Value: \&quot;plus#place\&quot;. | [optional] [default to 'plus#place']
**position** | [**PlacePosition**](PlacePosition.md) |  | [optional] 

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


