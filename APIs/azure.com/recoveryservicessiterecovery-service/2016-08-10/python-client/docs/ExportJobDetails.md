# ExportJobDetails

This class represents details for export jobs workflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blob_uri** | **str** | BlobUri of the exported jobs. | [optional] 
**sas_token** | **str** | The sas token to access blob. | [optional] 

## Example

```python
from openapi_client.models.export_job_details import ExportJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ExportJobDetails from a JSON string
export_job_details_instance = ExportJobDetails.from_json(json)
# print the JSON string representation of the object
print(ExportJobDetails.to_json())

# convert the object into a dict
export_job_details_dict = export_job_details_instance.to_dict()
# create an instance of ExportJobDetails from a dict
export_job_details_from_dict = ExportJobDetails.from_dict(export_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


