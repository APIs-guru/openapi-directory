# PkgManager


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Package manager name. | 
**repositories** | **List[object]** | A list of package repositories (i.e. maven-central, or npm) that defaults to the canonical package registry for the given package manager. | [optional] 

## Example

```python
from openapi_client.models.pkg_manager import PkgManager

# TODO update the JSON string below
json = "{}"
# create an instance of PkgManager from a JSON string
pkg_manager_instance = PkgManager.from_json(json)
# print the JSON string representation of the object
print(PkgManager.to_json())

# convert the object into a dict
pkg_manager_dict = pkg_manager_instance.to_dict()
# create an instance of PkgManager from a dict
pkg_manager_from_dict = PkgManager.from_dict(pkg_manager_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


