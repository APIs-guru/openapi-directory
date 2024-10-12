# AvailableVersionsDiagnostics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_count** | **int** | The full number of versions across all pages. | [optional] 
**versions** | **List[str]** | List of available versions. | [optional] 

## Example

```python
from openapi_client.models.available_versions_diagnostics import AvailableVersionsDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableVersionsDiagnostics from a JSON string
available_versions_diagnostics_instance = AvailableVersionsDiagnostics.from_json(json)
# print the JSON string representation of the object
print(AvailableVersionsDiagnostics.to_json())

# convert the object into a dict
available_versions_diagnostics_dict = available_versions_diagnostics_instance.to_dict()
# create an instance of AvailableVersionsDiagnostics from a dict
available_versions_diagnostics_from_dict = AvailableVersionsDiagnostics.from_dict(available_versions_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


