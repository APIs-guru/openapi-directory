# InstallConstraint

Amongst apps with InstallType set to: FORCE_INSTALLED PREINSTALLEDthis defines a set of restrictions for the app installation. At least one of the fields must be set. When multiple fields are set, then all the constraints need to be satisfied for the app to be installed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charging_constraint** | **str** | Optional. Charging constraint. | [optional] 
**device_idle_constraint** | **str** | Optional. Device idle constraint. | [optional] 
**network_type_constraint** | **str** | Optional. Network type constraint. | [optional] 

## Example

```python
from openapi_client.models.install_constraint import InstallConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of InstallConstraint from a JSON string
install_constraint_instance = InstallConstraint.from_json(json)
# print the JSON string representation of the object
print(InstallConstraint.to_json())

# convert the object into a dict
install_constraint_dict = install_constraint_instance.to_dict()
# create an instance of InstallConstraint from a dict
install_constraint_from_dict = InstallConstraint.from_dict(install_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


