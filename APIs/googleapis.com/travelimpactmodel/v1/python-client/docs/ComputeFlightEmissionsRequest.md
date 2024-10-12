# ComputeFlightEmissionsRequest

Input definition for the ComputeFlightEmissions request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flights** | [**List[Flight]**](Flight.md) | Required. Direct flights to return emission estimates for. | [optional] 

## Example

```python
from openapi_client.models.compute_flight_emissions_request import ComputeFlightEmissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeFlightEmissionsRequest from a JSON string
compute_flight_emissions_request_instance = ComputeFlightEmissionsRequest.from_json(json)
# print the JSON string representation of the object
print(ComputeFlightEmissionsRequest.to_json())

# convert the object into a dict
compute_flight_emissions_request_dict = compute_flight_emissions_request_instance.to_dict()
# create an instance of ComputeFlightEmissionsRequest from a dict
compute_flight_emissions_request_from_dict = ComputeFlightEmissionsRequest.from_dict(compute_flight_emissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


