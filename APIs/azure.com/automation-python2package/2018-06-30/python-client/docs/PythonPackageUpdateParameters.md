# PythonPackageUpdateParameters

The parameters supplied to the update module operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Gets or sets the tags attached to the resource. | [optional] 

## Example

```python
from openapi_client.models.python_package_update_parameters import PythonPackageUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PythonPackageUpdateParameters from a JSON string
python_package_update_parameters_instance = PythonPackageUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(PythonPackageUpdateParameters.to_json())

# convert the object into a dict
python_package_update_parameters_dict = python_package_update_parameters_instance.to_dict()
# create an instance of PythonPackageUpdateParameters from a dict
python_package_update_parameters_from_dict = PythonPackageUpdateParameters.from_dict(python_package_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


