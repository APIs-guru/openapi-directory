# PythonPackageCreateProperties

The parameters supplied to the create or update module properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_link** | [**ContentLink**](ContentLink.md) |  | 

## Example

```python
from openapi_client.models.python_package_create_properties import PythonPackageCreateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PythonPackageCreateProperties from a JSON string
python_package_create_properties_instance = PythonPackageCreateProperties.from_json(json)
# print the JSON string representation of the object
print(PythonPackageCreateProperties.to_json())

# convert the object into a dict
python_package_create_properties_dict = python_package_create_properties_instance.to_dict()
# create an instance of PythonPackageCreateProperties from a dict
python_package_create_properties_from_dict = PythonPackageCreateProperties.from_dict(python_package_create_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


