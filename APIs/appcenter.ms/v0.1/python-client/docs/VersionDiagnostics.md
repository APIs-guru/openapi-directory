# VersionDiagnostics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | version count | [optional] 
**previous_count** | **int** | the count of previous time range of the version | [optional] 
**version** | **str** | version | [optional] 

## Example

```python
from openapi_client.models.version_diagnostics import VersionDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of VersionDiagnostics from a JSON string
version_diagnostics_instance = VersionDiagnostics.from_json(json)
# print the JSON string representation of the object
print(VersionDiagnostics.to_json())

# convert the object into a dict
version_diagnostics_dict = version_diagnostics_instance.to_dict()
# create an instance of VersionDiagnostics from a dict
version_diagnostics_from_dict = VersionDiagnostics.from_dict(version_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


