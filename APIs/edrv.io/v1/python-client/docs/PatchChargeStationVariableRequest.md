# PatchChargeStationVariableRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** |  | [optional] 
**variable** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.patch_charge_station_variable_request import PatchChargeStationVariableRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PatchChargeStationVariableRequest from a JSON string
patch_charge_station_variable_request_instance = PatchChargeStationVariableRequest.from_json(json)
# print the JSON string representation of the object
print(PatchChargeStationVariableRequest.to_json())

# convert the object into a dict
patch_charge_station_variable_request_dict = patch_charge_station_variable_request_instance.to_dict()
# create an instance of PatchChargeStationVariableRequest from a dict
patch_charge_station_variable_request_from_dict = PatchChargeStationVariableRequest.from_dict(patch_charge_station_variable_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


