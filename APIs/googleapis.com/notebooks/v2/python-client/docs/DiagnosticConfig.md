# DiagnosticConfig

Defines flags that are used to run the diagnostic tool

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_copy_home_files_flag** | **bool** | Optional. Enables flag to copy all &#x60;/home/jupyter&#x60; folder contents | [optional] 
**enable_packet_capture_flag** | **bool** | Optional. Enables flag to capture packets from the instance for 30 seconds | [optional] 
**enable_repair_flag** | **bool** | Optional. Enables flag to repair service for instance | [optional] 
**gcs_bucket** | **str** | Required. User Cloud Storage bucket location (REQUIRED). Must be formatted with path prefix (&#x60;gs://$GCS_BUCKET&#x60;). Permissions: User Managed Notebooks: - storage.buckets.writer: Must be given to the project&#39;s service account attached to VM. Google Managed Notebooks: - storage.buckets.writer: Must be given to the project&#39;s service account or user credentials attached to VM depending on authentication mode. Cloud Storage bucket Log file will be written to &#x60;gs://$GCS_BUCKET/$RELATIVE_PATH/$VM_DATE_$TIME.tar.gz&#x60; | [optional] 
**relative_path** | **str** | Optional. Defines the relative storage path in the Cloud Storage bucket where the diagnostic logs will be written: Default path will be the root directory of the Cloud Storage bucket (&#x60;gs://$GCS_BUCKET/$DATE_$TIME.tar.gz&#x60;) Example of full path where Log file will be written: &#x60;gs://$GCS_BUCKET/$RELATIVE_PATH/&#x60; | [optional] 

## Example

```python
from openapi_client.models.diagnostic_config import DiagnosticConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticConfig from a JSON string
diagnostic_config_instance = DiagnosticConfig.from_json(json)
# print the JSON string representation of the object
print(DiagnosticConfig.to_json())

# convert the object into a dict
diagnostic_config_dict = diagnostic_config_instance.to_dict()
# create an instance of DiagnosticConfig from a dict
diagnostic_config_from_dict = DiagnosticConfig.from_dict(diagnostic_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


