# ActivateApplicationPackageParameters

Parameters for an ApplicationOperations.ActivateApplicationPackage request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The format of the application package binary file. | 

## Example

```python
from openapi_client.models.activate_application_package_parameters import ActivateApplicationPackageParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ActivateApplicationPackageParameters from a JSON string
activate_application_package_parameters_instance = ActivateApplicationPackageParameters.from_json(json)
# print the JSON string representation of the object
print(ActivateApplicationPackageParameters.to_json())

# convert the object into a dict
activate_application_package_parameters_dict = activate_application_package_parameters_instance.to_dict()
# create an instance of ActivateApplicationPackageParameters from a dict
activate_application_package_parameters_from_dict = ActivateApplicationPackageParameters.from_dict(activate_application_package_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


