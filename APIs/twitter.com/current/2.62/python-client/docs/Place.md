# Place


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contained_within** | **List[str]** |  | [optional] 
**country** | **str** | The full name of the county in which this place exists. | [optional] 
**country_code** | **str** | A two-letter ISO 3166-1 alpha-2 country code. | [optional] 
**full_name** | **str** | The full name of this place. | 
**geo** | [**Geo**](Geo.md) |  | [optional] 
**id** | **str** | The identifier for this place. | 
**name** | **str** | The human readable name of this place. | [optional] 
**place_type** | [**PlaceType**](PlaceType.md) |  | [optional] 

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


