# MaintenanceModeTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | Routing keys that maintenance mode state covers. An empty list indicates global maintenance mode | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.maintenance_mode_target import MaintenanceModeTarget

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenanceModeTarget from a JSON string
maintenance_mode_target_instance = MaintenanceModeTarget.from_json(json)
# print the JSON string representation of the object
print(MaintenanceModeTarget.to_json())

# convert the object into a dict
maintenance_mode_target_dict = maintenance_mode_target_instance.to_dict()
# create an instance of MaintenanceModeTarget from a dict
maintenance_mode_target_from_dict = MaintenanceModeTarget.from_dict(maintenance_mode_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


