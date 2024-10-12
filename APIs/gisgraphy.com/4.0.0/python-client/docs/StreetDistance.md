# StreetDistance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | The ISO 3166 country code | [optional] 
**distance** | **float** | The distance between the point and the nearest point to the street in meters | [optional] 
**fully_qualified_address** | **str** | NOT USED YET | [optional] 
**gid** | **int** | Unique id of the street, it is unique between GeoNames and OpenStreetMap | [optional] 
**is_in** | **str** | Information on the city where the street is (depends on OpenStreetMap &#39;is_in&#39; field), the city in general | [optional] 
**is_in_adm** | **str** | Information of the administration division where the street is. | [optional] 
**is_in_place** | **str** | Information on the place where the street is (quater, common place). Generally a place at a lower level than city | [optional] 
**is_in_zip** | **str** | Information of the zipcode where the street / POI is (often fill for placetype street) | [optional] 
**lat** | **float** | The latitude of the middle of the street(north-south) | [optional] 
**length** | **float** | length of the street in meters | [optional] 
**lng** | **float** | The longitude of the middle of the street(east-west) | [optional] 
**name** | **str** | The name of the street | [optional] 
**one_way** | **bool** | Whether the street is a one way street or not | [optional] 
**openstreetmap_id** | **int** | OpenStreetMap unique id of the street | [optional] 
**street_type** | **str** | The type of the street (see street type list) | [optional] 

## Example

```python
from openapi_client.models.street_distance import StreetDistance

# TODO update the JSON string below
json = "{}"
# create an instance of StreetDistance from a JSON string
street_distance_instance = StreetDistance.from_json(json)
# print the JSON string representation of the object
print(StreetDistance.to_json())

# convert the object into a dict
street_distance_dict = street_distance_instance.to_dict()
# create an instance of StreetDistance from a dict
street_distance_from_dict = StreetDistance.from_dict(street_distance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


