# GooglePrivacyDlpV2TransformationDetailsStorageConfig

Config for storing transformation details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**table** | [**GooglePrivacyDlpV2BigQueryTable**](GooglePrivacyDlpV2BigQueryTable.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_transformation_details_storage_config import GooglePrivacyDlpV2TransformationDetailsStorageConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TransformationDetailsStorageConfig from a JSON string
google_privacy_dlp_v2_transformation_details_storage_config_instance = GooglePrivacyDlpV2TransformationDetailsStorageConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TransformationDetailsStorageConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_transformation_details_storage_config_dict = google_privacy_dlp_v2_transformation_details_storage_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TransformationDetailsStorageConfig from a dict
google_privacy_dlp_v2_transformation_details_storage_config_from_dict = GooglePrivacyDlpV2TransformationDetailsStorageConfig.from_dict(google_privacy_dlp_v2_transformation_details_storage_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


