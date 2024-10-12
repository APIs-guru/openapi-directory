# VersionsDiagnostics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total** | **int** | the total count of versions | [optional] 
**versions** | [**List[VersionsDiagnosticsVersionsInner]**](VersionsDiagnosticsVersionsInner.md) | list of version count | [optional] 

## Example

```python
from openapi_client.models.versions_diagnostics import VersionsDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of VersionsDiagnostics from a JSON string
versions_diagnostics_instance = VersionsDiagnostics.from_json(json)
# print the JSON string representation of the object
print(VersionsDiagnostics.to_json())

# convert the object into a dict
versions_diagnostics_dict = versions_diagnostics_instance.to_dict()
# create an instance of VersionsDiagnostics from a dict
versions_diagnostics_from_dict = VersionsDiagnostics.from_dict(versions_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


