# VehicleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registration_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.vehicle_request import VehicleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VehicleRequest from a JSON string
vehicle_request_instance = VehicleRequest.from_json(json)
# print the JSON string representation of the object
print(VehicleRequest.to_json())

# convert the object into a dict
vehicle_request_dict = vehicle_request_instance.to_dict()
# create an instance of VehicleRequest from a dict
vehicle_request_from_dict = VehicleRequest.from_dict(vehicle_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


