# GooglePrivacyDlpV2Deidentify

Create a de-identified copy of the requested table or files. A TransformationDetail will be created for each transformation. If any rows in BigQuery are skipped during de-identification (transformation errors or row size exceeds BigQuery insert API limits) they are placed in the failure output table. If the original row exceeds the BigQuery insert API limit it will be truncated when written to the failure output table. The failure output table can be set in the action.deidentify.output.big_query_output.deidentified_failure_output_table field, if no table is set, a table will be automatically created in the same project and dataset as the original table. Compatible with: Inspect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_storage_output** | **str** | Required. User settable Cloud Storage bucket and folders to store de-identified files. This field must be set for cloud storage deidentification. The output Cloud Storage bucket must be different from the input bucket. De-identified files will overwrite files in the output path. Form of: gs://bucket/folder/ or gs://bucket | [optional] 
**file_types_to_transform** | **List[str]** | List of user-specified file type groups to transform. If specified, only the files with these filetypes will be transformed. If empty, all supported files will be transformed. Supported types may be automatically added over time. If a file type is set in this field that isn&#39;t supported by the Deidentify action then the job will fail and will not be successfully created/started. Currently the only filetypes supported are: IMAGES, TEXT_FILES, CSV, TSV. | [optional] 
**transformation_config** | [**GooglePrivacyDlpV2TransformationConfig**](GooglePrivacyDlpV2TransformationConfig.md) |  | [optional] 
**transformation_details_storage_config** | [**GooglePrivacyDlpV2TransformationDetailsStorageConfig**](GooglePrivacyDlpV2TransformationDetailsStorageConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_deidentify import GooglePrivacyDlpV2Deidentify

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Deidentify from a JSON string
google_privacy_dlp_v2_deidentify_instance = GooglePrivacyDlpV2Deidentify.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Deidentify.to_json())

# convert the object into a dict
google_privacy_dlp_v2_deidentify_dict = google_privacy_dlp_v2_deidentify_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Deidentify from a dict
google_privacy_dlp_v2_deidentify_from_dict = GooglePrivacyDlpV2Deidentify.from_dict(google_privacy_dlp_v2_deidentify_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


