# NearestAirportDto



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City where the airport is located. | [optional] 
**country** | [**Country**](Country.md) |  | [optional] 
**distance_in_km** | **int** | Distance in kilometers. | [optional] 
**geo_coordinates** | [**GeoCoordinates**](GeoCoordinates.md) |  | [optional] 
**id** | **str** | Unique identifier. | [optional] 
**name** | **str** | Name of the airport. | [optional] 
**var_self** | [**Link**](Link.md) |  | [optional] 

## Example

```python
from openapi_client.models.nearest_airport_dto import NearestAirportDto

# TODO update the JSON string below
json = "{}"
# create an instance of NearestAirportDto from a JSON string
nearest_airport_dto_instance = NearestAirportDto.from_json(json)
# print the JSON string representation of the object
print(NearestAirportDto.to_json())

# convert the object into a dict
nearest_airport_dto_dict = nearest_airport_dto_instance.to_dict()
# create an instance of NearestAirportDto from a dict
nearest_airport_dto_from_dict = NearestAirportDto.from_dict(nearest_airport_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


