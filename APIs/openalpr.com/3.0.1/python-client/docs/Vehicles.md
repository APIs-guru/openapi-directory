# Vehicles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**VehicleDetails**](VehicleDetails.md) |  | [optional] 
**height** | **int** |  | [optional] 
**width** | **int** |  | [optional] 
**x** | **int** |  | [optional] 
**y** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.vehicles import Vehicles

# TODO update the JSON string below
json = "{}"
# create an instance of Vehicles from a JSON string
vehicles_instance = Vehicles.from_json(json)
# print the JSON string representation of the object
print(Vehicles.to_json())

# convert the object into a dict
vehicles_dict = vehicles_instance.to_dict()
# create an instance of Vehicles from a dict
vehicles_from_dict = Vehicles.from_dict(vehicles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


