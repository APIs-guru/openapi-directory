# Airport

Array of all available airports or one airport matching the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airport_code** | **str** | 3-letter IATA airport code, e.g. “TXL”. | [optional] 
**city_code** | **str** | 3-letter IATA city code, e.g. “BER”. | [optional] 
**country_code** | **str** | 2-letter ISO 3166-1 country code, e.g. “DE”. | [optional] 
**location_type** | **str** |  “Airport”, “RailwayStation” or “BusStation”. | [optional] 
**names** | [**AirportNames**](AirportNames.md) |  | [optional] 
**position** | [**AirportPosition**](AirportPosition.md) |  | [optional] 
**time_zone_id** | **str** | Time zone name airport is in | [optional] 
**utc_offset** | **float** | Hour offset of airport to UTC time zone | [optional] 

## Example

```python
from openapi_client.models.airport import Airport

# TODO update the JSON string below
json = "{}"
# create an instance of Airport from a JSON string
airport_instance = Airport.from_json(json)
# print the JSON string representation of the object
print(Airport.to_json())

# convert the object into a dict
airport_dict = airport_instance.to_dict()
# create an instance of Airport from a dict
airport_from_dict = Airport.from_dict(airport_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


