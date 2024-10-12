# GooglePrivacyDlpV2OutputStorageConfig

Cloud repository for storing output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_schema** | **str** | Schema used for writing the findings for Inspect jobs. This field is only used for Inspect and must be unspecified for Risk jobs. Columns are derived from the &#x60;Finding&#x60; object. If appending to an existing table, any columns from the predefined schema that are missing will be added. No columns in the existing table will be deleted. If unspecified, then all available columns will be used for a new table or an (existing) table with no schema, and no changes will be made to an existing table that has a schema. Only for use with external storage. | [optional] 
**table** | [**GooglePrivacyDlpV2BigQueryTable**](GooglePrivacyDlpV2BigQueryTable.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_output_storage_config import GooglePrivacyDlpV2OutputStorageConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2OutputStorageConfig from a JSON string
google_privacy_dlp_v2_output_storage_config_instance = GooglePrivacyDlpV2OutputStorageConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2OutputStorageConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_output_storage_config_dict = google_privacy_dlp_v2_output_storage_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2OutputStorageConfig from a dict
google_privacy_dlp_v2_output_storage_config_from_dict = GooglePrivacyDlpV2OutputStorageConfig.from_dict(google_privacy_dlp_v2_output_storage_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


