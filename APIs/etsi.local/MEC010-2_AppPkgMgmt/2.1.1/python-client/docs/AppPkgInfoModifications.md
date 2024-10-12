# AppPkgInfoModifications

'The data type represents the operational state for an application package resource'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_state** | **str** |  | 

## Example

```python
from openapi_client.models.app_pkg_info_modifications import AppPkgInfoModifications

# TODO update the JSON string below
json = "{}"
# create an instance of AppPkgInfoModifications from a JSON string
app_pkg_info_modifications_instance = AppPkgInfoModifications.from_json(json)
# print the JSON string representation of the object
print(AppPkgInfoModifications.to_json())

# convert the object into a dict
app_pkg_info_modifications_dict = app_pkg_info_modifications_instance.to_dict()
# create an instance of AppPkgInfoModifications from a dict
app_pkg_info_modifications_from_dict = AppPkgInfoModifications.from_dict(app_pkg_info_modifications_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


