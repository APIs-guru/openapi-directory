# MaintenanceModeState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_instances** | [**List[ActiveMaintenanceMode]**](ActiveMaintenanceMode.md) |  | [optional] 
**company_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.maintenance_mode_state import MaintenanceModeState

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenanceModeState from a JSON string
maintenance_mode_state_instance = MaintenanceModeState.from_json(json)
# print the JSON string representation of the object
print(MaintenanceModeState.to_json())

# convert the object into a dict
maintenance_mode_state_dict = maintenance_mode_state_instance.to_dict()
# create an instance of MaintenanceModeState from a dict
maintenance_mode_state_from_dict = MaintenanceModeState.from_dict(maintenance_mode_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


