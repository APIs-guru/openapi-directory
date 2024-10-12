# NpmPackage

NpmPackage represents an npm artifact.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time the package was created. | [optional] [readonly] 
**name** | **str** | Required. registry_location, project_id, repository_name and npm_package forms a unique package For example, \&quot;projects/test-project/locations/us-west4/repositories/test-repo/npmPackages/ npm_test:1.0.0\&quot;, where \&quot;us-west4\&quot; is the registry_location, \&quot;test-project\&quot; is the project_id, \&quot;test-repo\&quot; is the repository_name and npm_test:1.0.0\&quot; is the npm package. | [optional] 
**package_name** | **str** | Package for the artifact. | [optional] 
**tags** | **List[str]** | Tags attached to this package. | [optional] 
**update_time** | **str** | Output only. Time the package was updated. | [optional] [readonly] 
**version** | **str** | Version of this package. | [optional] 

## Example

```python
from openapi_client.models.npm_package import NpmPackage

# TODO update the JSON string below
json = "{}"
# create an instance of NpmPackage from a JSON string
npm_package_instance = NpmPackage.from_json(json)
# print the JSON string representation of the object
print(NpmPackage.to_json())

# convert the object into a dict
npm_package_dict = npm_package_instance.to_dict()
# create an instance of NpmPackage from a dict
npm_package_from_dict = NpmPackage.from_dict(npm_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


