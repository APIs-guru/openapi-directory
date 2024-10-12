# MaintenanceExclusionOptions

Represents the Maintenance exclusion option.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scope** | **str** | Scope specifies the upgrade scope which upgrades are blocked by the exclusion. | [optional] 

## Example

```python
from openapi_client.models.maintenance_exclusion_options import MaintenanceExclusionOptions

# TODO update the JSON string below
json = "{}"
# create an instance of MaintenanceExclusionOptions from a JSON string
maintenance_exclusion_options_instance = MaintenanceExclusionOptions.from_json(json)
# print the JSON string representation of the object
print(MaintenanceExclusionOptions.to_json())

# convert the object into a dict
maintenance_exclusion_options_dict = maintenance_exclusion_options_instance.to_dict()
# create an instance of MaintenanceExclusionOptions from a dict
maintenance_exclusion_options_from_dict = MaintenanceExclusionOptions.from_dict(maintenance_exclusion_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


