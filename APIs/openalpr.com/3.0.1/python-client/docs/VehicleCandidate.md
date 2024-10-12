# VehicleCandidate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | confidence of value (percent) | [optional] 
**name** | **str** | name of value | [optional] 

## Example

```python
from openapi_client.models.vehicle_candidate import VehicleCandidate

# TODO update the JSON string below
json = "{}"
# create an instance of VehicleCandidate from a JSON string
vehicle_candidate_instance = VehicleCandidate.from_json(json)
# print the JSON string representation of the object
print(VehicleCandidate.to_json())

# convert the object into a dict
vehicle_candidate_dict = vehicle_candidate_instance.to_dict()
# create an instance of VehicleCandidate from a dict
vehicle_candidate_from_dict = VehicleCandidate.from_dict(vehicle_candidate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


