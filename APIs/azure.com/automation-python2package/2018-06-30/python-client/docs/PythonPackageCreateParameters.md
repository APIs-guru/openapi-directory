# PythonPackageCreateParameters

The parameters supplied to the create or update module operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PythonPackageCreateProperties**](PythonPackageCreateProperties.md) |  | 
**tags** | **Dict[str, str]** | Gets or sets the tags attached to the resource. | [optional] 

## Example

```python
from openapi_client.models.python_package_create_parameters import PythonPackageCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PythonPackageCreateParameters from a JSON string
python_package_create_parameters_instance = PythonPackageCreateParameters.from_json(json)
# print the JSON string representation of the object
print(PythonPackageCreateParameters.to_json())

# convert the object into a dict
python_package_create_parameters_dict = python_package_create_parameters_instance.to_dict()
# create an instance of PythonPackageCreateParameters from a dict
python_package_create_parameters_from_dict = PythonPackageCreateParameters.from_dict(python_package_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


