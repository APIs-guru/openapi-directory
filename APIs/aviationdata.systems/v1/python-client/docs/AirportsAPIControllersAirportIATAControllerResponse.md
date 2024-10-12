# AirportsAPIControllersAirportIATAControllerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airport_list** | [**List[AirportsAPIModelsAirport]**](AirportsAPIModelsAirport.md) |  | [optional] 
**disclaimer** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**status_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.airports_api_controllers_airport_iata_controller_response import AirportsAPIControllersAirportIATAControllerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AirportsAPIControllersAirportIATAControllerResponse from a JSON string
airports_api_controllers_airport_iata_controller_response_instance = AirportsAPIControllersAirportIATAControllerResponse.from_json(json)
# print the JSON string representation of the object
print(AirportsAPIControllersAirportIATAControllerResponse.to_json())

# convert the object into a dict
airports_api_controllers_airport_iata_controller_response_dict = airports_api_controllers_airport_iata_controller_response_instance.to_dict()
# create an instance of AirportsAPIControllersAirportIATAControllerResponse from a dict
airports_api_controllers_airport_iata_controller_response_from_dict = AirportsAPIControllersAirportIATAControllerResponse.from_dict(airports_api_controllers_airport_iata_controller_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


