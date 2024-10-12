# ComputeFlightEmissionsResponse

Output definition for the ComputeFlightEmissions response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flight_emissions** | [**List[FlightWithEmissions]**](FlightWithEmissions.md) | List of flight legs with emission estimates. | [optional] 
**model_version** | [**ModelVersion**](ModelVersion.md) |  | [optional] 

## Example

```python
from openapi_client.models.compute_flight_emissions_response import ComputeFlightEmissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeFlightEmissionsResponse from a JSON string
compute_flight_emissions_response_instance = ComputeFlightEmissionsResponse.from_json(json)
# print the JSON string representation of the object
print(ComputeFlightEmissionsResponse.to_json())

# convert the object into a dict
compute_flight_emissions_response_dict = compute_flight_emissions_response_instance.to_dict()
# create an instance of ComputeFlightEmissionsResponse from a dict
compute_flight_emissions_response_from_dict = ComputeFlightEmissionsResponse.from_dict(compute_flight_emissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


