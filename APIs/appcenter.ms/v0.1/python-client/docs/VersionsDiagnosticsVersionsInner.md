# VersionsDiagnosticsVersionsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | version count | [optional] 
**previous_count** | **int** | the count of previous time range of the version | [optional] 
**version** | **str** | version | [optional] 

## Example

```python
from openapi_client.models.versions_diagnostics_versions_inner import VersionsDiagnosticsVersionsInner

# TODO update the JSON string below
json = "{}"
# create an instance of VersionsDiagnosticsVersionsInner from a JSON string
versions_diagnostics_versions_inner_instance = VersionsDiagnosticsVersionsInner.from_json(json)
# print the JSON string representation of the object
print(VersionsDiagnosticsVersionsInner.to_json())

# convert the object into a dict
versions_diagnostics_versions_inner_dict = versions_diagnostics_versions_inner_instance.to_dict()
# create an instance of VersionsDiagnosticsVersionsInner from a dict
versions_diagnostics_versions_inner_from_dict = VersionsDiagnosticsVersionsInner.from_dict(versions_diagnostics_versions_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


