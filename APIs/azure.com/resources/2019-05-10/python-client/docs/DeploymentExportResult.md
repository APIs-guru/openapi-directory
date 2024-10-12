# DeploymentExportResult

The deployment export result. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template** | **object** | The template content. | [optional] 

## Example

```python
from openapi_client.models.deployment_export_result import DeploymentExportResult

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentExportResult from a JSON string
deployment_export_result_instance = DeploymentExportResult.from_json(json)
# print the JSON string representation of the object
print(DeploymentExportResult.to_json())

# convert the object into a dict
deployment_export_result_dict = deployment_export_result_instance.to_dict()
# create an instance of DeploymentExportResult from a dict
deployment_export_result_from_dict = DeploymentExportResult.from_dict(deployment_export_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


