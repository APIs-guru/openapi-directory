# AutoInstallConstraint

The auto-install constraint. Defines a set of restrictions for installation. At least one of the fields must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charging_state_constraint** | **str** | Charging state constraint. | [optional] 
**device_idle_state_constraint** | **str** | Device idle state constraint. | [optional] 
**network_type_constraint** | **str** | Network type constraint. | [optional] 

## Example

```python
from openapi_client.models.auto_install_constraint import AutoInstallConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of AutoInstallConstraint from a JSON string
auto_install_constraint_instance = AutoInstallConstraint.from_json(json)
# print the JSON string representation of the object
print(AutoInstallConstraint.to_json())

# convert the object into a dict
auto_install_constraint_dict = auto_install_constraint_instance.to_dict()
# create an instance of AutoInstallConstraint from a dict
auto_install_constraint_from_dict = AutoInstallConstraint.from_dict(auto_install_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


