# AirportsAPIControllersCountryListControllerCountryListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | [**List[AirportsAPIModelsCountry]**](AirportsAPIModelsCountry.md) |  | [optional] 
**disclaimer** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**status_code** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.airports_api_controllers_country_list_controller_country_list_response import AirportsAPIControllersCountryListControllerCountryListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AirportsAPIControllersCountryListControllerCountryListResponse from a JSON string
airports_api_controllers_country_list_controller_country_list_response_instance = AirportsAPIControllersCountryListControllerCountryListResponse.from_json(json)
# print the JSON string representation of the object
print(AirportsAPIControllersCountryListControllerCountryListResponse.to_json())

# convert the object into a dict
airports_api_controllers_country_list_controller_country_list_response_dict = airports_api_controllers_country_list_controller_country_list_response_instance.to_dict()
# create an instance of AirportsAPIControllersCountryListControllerCountryListResponse from a dict
airports_api_controllers_country_list_controller_country_list_response_from_dict = AirportsAPIControllersCountryListControllerCountryListResponse.from_dict(airports_api_controllers_country_list_controller_country_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


