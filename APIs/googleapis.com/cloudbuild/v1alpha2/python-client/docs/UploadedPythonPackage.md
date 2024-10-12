# UploadedPythonPackage

Artifact uploaded using the PythonPackage directive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_hashes** | [**FileHashes**](FileHashes.md) |  | [optional] 
**push_timing** | [**TimeSpan**](TimeSpan.md) |  | [optional] 
**uri** | **str** | URI of the uploaded artifact. | [optional] 

## Example

```python
from openapi_client.models.uploaded_python_package import UploadedPythonPackage

# TODO update the JSON string below
json = "{}"
# create an instance of UploadedPythonPackage from a JSON string
uploaded_python_package_instance = UploadedPythonPackage.from_json(json)
# print the JSON string representation of the object
print(UploadedPythonPackage.to_json())

# convert the object into a dict
uploaded_python_package_dict = uploaded_python_package_instance.to_dict()
# create an instance of UploadedPythonPackage from a dict
uploaded_python_package_from_dict = UploadedPythonPackage.from_dict(uploaded_python_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


