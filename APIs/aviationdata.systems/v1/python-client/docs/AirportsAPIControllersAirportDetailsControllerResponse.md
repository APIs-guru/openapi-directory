# AirportsAPIControllersAirportDetailsControllerResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airport_list** | [**List[AirportsAPIModelsAirport]**](AirportsAPIModelsAirport.md) |  | [optional] 
**disclaimer** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**status_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.airports_api_controllers_airport_details_controller_response import AirportsAPIControllersAirportDetailsControllerResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AirportsAPIControllersAirportDetailsControllerResponse from a JSON string
airports_api_controllers_airport_details_controller_response_instance = AirportsAPIControllersAirportDetailsControllerResponse.from_json(json)
# print the JSON string representation of the object
print(AirportsAPIControllersAirportDetailsControllerResponse.to_json())

# convert the object into a dict
airports_api_controllers_airport_details_controller_response_dict = airports_api_controllers_airport_details_controller_response_instance.to_dict()
# create an instance of AirportsAPIControllersAirportDetailsControllerResponse from a dict
airports_api_controllers_airport_details_controller_response_from_dict = AirportsAPIControllersAirportDetailsControllerResponse.from_dict(airports_api_controllers_airport_details_controller_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


