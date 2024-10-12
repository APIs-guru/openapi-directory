# VehicleDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**body_type** | [**List[VehicleCandidate]**](VehicleCandidate.md) |  | [optional] 
**color** | [**List[VehicleCandidate]**](VehicleCandidate.md) |  | [optional] 
**make** | [**List[VehicleCandidate]**](VehicleCandidate.md) |  | [optional] 
**make_model** | [**List[VehicleCandidate]**](VehicleCandidate.md) |  | [optional] 
**orientation** | [**List[VehicleCandidate]**](VehicleCandidate.md) |  | [optional] 
**year** | [**List[VehicleCandidate]**](VehicleCandidate.md) |  | [optional] 

## Example

```python
from openapi_client.models.vehicle_details import VehicleDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VehicleDetails from a JSON string
vehicle_details_instance = VehicleDetails.from_json(json)
# print the JSON string representation of the object
print(VehicleDetails.to_json())

# convert the object into a dict
vehicle_details_dict = vehicle_details_instance.to_dict()
# create an instance of VehicleDetails from a dict
vehicle_details_from_dict = VehicleDetails.from_dict(vehicle_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


