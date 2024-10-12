# PythonPackage

PythonPackage represents a python artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time the package was created. | [optional] [readonly] 
**name** | **str** | Required. registry_location, project_id, repository_name and python_package forms a unique package name:&#x60;projects//locations//repository//pythonPackages/&#x60;. For example, \&quot;projects/test-project/locations/us-west4/repositories/test-repo/pythonPackages/ python_package:1.0.0\&quot;, where \&quot;us-west4\&quot; is the registry_location, \&quot;test-project\&quot; is the project_id, \&quot;test-repo\&quot; is the repository_name and python_package:1.0.0\&quot; is the python package. | [optional] 
**package_name** | **str** | Package for the artifact. | [optional] 
**update_time** | **str** | Output only. Time the package was updated. | [optional] [readonly] 
**uri** | **str** | Required. URL to access the package. Example: us-west4-python.pkg.dev/test-project/test-repo/python_package/file-name-1.0.0.tar.gz | [optional] 
**version** | **str** | Version of this package. | [optional] 

## Example

```python
from openapi_client.models.python_package import PythonPackage

# TODO update the JSON string below
json = "{}"
# create an instance of PythonPackage from a JSON string
python_package_instance = PythonPackage.from_json(json)
# print the JSON string representation of the object
print(PythonPackage.to_json())

# convert the object into a dict
python_package_dict = python_package_instance.to_dict()
# create an instance of PythonPackage from a dict
python_package_from_dict = PythonPackage.from_dict(python_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


