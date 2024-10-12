# AirportsAPIControllersCountryAirportListControllerAirportListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airport_list** | [**List[AirportsAPIModelsAirportList]**](AirportsAPIModelsAirportList.md) |  | [optional] 
**country** | [**AirportsAPIModelsCountry**](AirportsAPIModelsCountry.md) |  | [optional] 
**disclaimer** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**status_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.airports_api_controllers_country_airport_list_controller_airport_list_response import AirportsAPIControllersCountryAirportListControllerAirportListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AirportsAPIControllersCountryAirportListControllerAirportListResponse from a JSON string
airports_api_controllers_country_airport_list_controller_airport_list_response_instance = AirportsAPIControllersCountryAirportListControllerAirportListResponse.from_json(json)
# print the JSON string representation of the object
print(AirportsAPIControllersCountryAirportListControllerAirportListResponse.to_json())

# convert the object into a dict
airports_api_controllers_country_airport_list_controller_airport_list_response_dict = airports_api_controllers_country_airport_list_controller_airport_list_response_instance.to_dict()
# create an instance of AirportsAPIControllersCountryAirportListControllerAirportListResponse from a dict
airports_api_controllers_country_airport_list_controller_airport_list_response_from_dict = AirportsAPIControllersCountryAirportListControllerAirportListResponse.from_dict(airports_api_controllers_country_airport_list_controller_airport_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


