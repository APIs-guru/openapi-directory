# ExportSBOMResponse

The response from a call to ExportSBOM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discovery_occurrence** | **str** | The name of the discovery occurrence in the form \&quot;projects/{project_id}/occurrences/{OCCURRENCE_ID} It can be used to track the progress of the SBOM export. | [optional] 

## Example

```python
from openapi_client.models.export_sbom_response import ExportSBOMResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExportSBOMResponse from a JSON string
export_sbom_response_instance = ExportSBOMResponse.from_json(json)
# print the JSON string representation of the object
print(ExportSBOMResponse.to_json())

# convert the object into a dict
export_sbom_response_dict = export_sbom_response_instance.to_dict()
# create an instance of ExportSBOMResponse from a dict
export_sbom_response_from_dict = ExportSBOMResponse.from_dict(export_sbom_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


