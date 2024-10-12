# PythonPackage

Python package to upload to Artifact Registry upon successful completion of all build steps. A package can encapsulate multiple objects to be uploaded to a single repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**paths** | **List[str]** | Path globs used to match files in the build&#39;s workspace. For Python/ Twine, this is usually &#x60;dist/*&#x60;, and sometimes additionally an &#x60;.asc&#x60; file. | [optional] 
**repository** | **str** | Artifact Registry repository, in the form \&quot;https://$REGION-python.pkg.dev/$PROJECT/$REPOSITORY\&quot; Files in the workspace matching any path pattern will be uploaded to Artifact Registry with this location as a prefix. | [optional] 

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


