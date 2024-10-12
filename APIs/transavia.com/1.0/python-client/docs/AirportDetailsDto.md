# AirportDetailsDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City where the airport is located. | [optional] 
**country** | [**Country**](Country.md) |  | [optional] 
**geo_coordinates** | [**GeoCoordinates**](GeoCoordinates.md) |  | [optional] 
**id** | **str** | Unique identifier. | [optional] 
**inbound_routes** | [**Link**](Link.md) |  | [optional] 
**name** | **str** | Name of the airport. | [optional] 
**outbound_routes** | [**Link**](Link.md) |  | [optional] 

## Example

```python
from openapi_client.models.airport_details_dto import AirportDetailsDto

# TODO update the JSON string below
json = "{}"
# create an instance of AirportDetailsDto from a JSON string
airport_details_dto_instance = AirportDetailsDto.from_json(json)
# print the JSON string representation of the object
print(AirportDetailsDto.to_json())

# convert the object into a dict
airport_details_dto_dict = airport_details_dto_instance.to_dict()
# create an instance of AirportDetailsDto from a dict
airport_details_dto_from_dict = AirportDetailsDto.from_dict(airport_details_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


