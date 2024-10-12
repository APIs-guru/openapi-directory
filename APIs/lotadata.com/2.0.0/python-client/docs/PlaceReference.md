# PlaceReference

Unique Location

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**type** | **str** | Type of place where Place is a physical address, LocalBusiness is any type of comercial property, AdministrativeArea is a political or colloquial area, and Virtual is out of this world | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**geo** | [**GeoPt**](GeoPt.md) |  | [optional] 
**geometry** | **object** | Shape defined per GeoJSON spec | [optional] 
**location** | [**VirtualLocation**](VirtualLocation.md) |  | [optional] 
**logo** | [**ImageMeta**](ImageMeta.md) |  | [optional] 
**name** | **str** |  | [optional] 
**tag** | [**List[FeatureReference]**](FeatureReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.place_reference import PlaceReference

# TODO update the JSON string below
json = "{}"
# create an instance of PlaceReference from a JSON string
place_reference_instance = PlaceReference.from_json(json)
# print the JSON string representation of the object
print(PlaceReference.to_json())

# convert the object into a dict
place_reference_dict = place_reference_instance.to_dict()
# create an instance of PlaceReference from a dict
place_reference_from_dict = PlaceReference.from_dict(place_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


