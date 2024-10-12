# ContainerGroupDiagnostics

Container group diagnostic information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_analytics** | [**LogAnalytics**](LogAnalytics.md) |  | [optional] 

## Example

```python
from openapi_client.models.container_group_diagnostics import ContainerGroupDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerGroupDiagnostics from a JSON string
container_group_diagnostics_instance = ContainerGroupDiagnostics.from_json(json)
# print the JSON string representation of the object
print(ContainerGroupDiagnostics.to_json())

# convert the object into a dict
container_group_diagnostics_dict = container_group_diagnostics_instance.to_dict()
# create an instance of ContainerGroupDiagnostics from a dict
container_group_diagnostics_from_dict = ContainerGroupDiagnostics.from_dict(container_group_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


