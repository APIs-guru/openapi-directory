# ImportJob

A resource that represents the background job that imports asset frames.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_source** | **str** | Required. Reference to a source. | [optional] 
**complete_time** | **str** | Output only. The timestamp when the import job was completed. | [optional] [readonly] 
**create_time** | **str** | Output only. The timestamp when the import job was created. | [optional] [readonly] 
**display_name** | **str** | User-friendly display name. Maximum length is 63 characters. | [optional] 
**execution_report** | [**ExecutionReport**](ExecutionReport.md) |  | [optional] 
**gcs_payload** | [**GCSPayloadInfo**](GCSPayloadInfo.md) |  | [optional] 
**inline_payload** | [**InlinePayloadInfo**](InlinePayloadInfo.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels as key value pairs. | [optional] 
**name** | **str** | Output only. The full name of the import job. | [optional] [readonly] 
**state** | **str** | Output only. The state of the import job. | [optional] [readonly] 
**update_time** | **str** | Output only. The timestamp when the import job was last updated. | [optional] [readonly] 
**validation_report** | [**ValidationReport**](ValidationReport.md) |  | [optional] 

## Example

```python
from openapi_client.models.import_job import ImportJob

# TODO update the JSON string below
json = "{}"
# create an instance of ImportJob from a JSON string
import_job_instance = ImportJob.from_json(json)
# print the JSON string representation of the object
print(ImportJob.to_json())

# convert the object into a dict
import_job_dict = import_job_instance.to_dict()
# create an instance of ImportJob from a dict
import_job_from_dict = ImportJob.from_dict(import_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


