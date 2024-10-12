# GooglePrivacyDlpV2ContentLocation

Precise location of the finding within a document, record, image, or metadata container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_name** | **str** | Name of the container where the finding is located. The top level name is the source file name or table name. Names of some common storage containers are formatted as follows: * BigQuery tables: &#x60;{project_id}:{dataset_id}.{table_id}&#x60; * Cloud Storage files: &#x60;gs://{bucket}/{path}&#x60; * Datastore namespace: {namespace} Nested names could be absent if the embedded object has no string identifier (for example, an image contained within a document). | [optional] 
**container_timestamp** | **str** | Finding container modification timestamp, if applicable. For Cloud Storage, this field contains the last file modification timestamp. For a BigQuery table, this field contains the last_modified_time property. For Datastore, this field isn&#39;t populated. | [optional] 
**container_version** | **str** | Finding container version, if available (\&quot;generation\&quot; for Cloud Storage). | [optional] 
**document_location** | [**GooglePrivacyDlpV2DocumentLocation**](GooglePrivacyDlpV2DocumentLocation.md) |  | [optional] 
**image_location** | [**GooglePrivacyDlpV2ImageLocation**](GooglePrivacyDlpV2ImageLocation.md) |  | [optional] 
**metadata_location** | [**GooglePrivacyDlpV2MetadataLocation**](GooglePrivacyDlpV2MetadataLocation.md) |  | [optional] 
**record_location** | [**GooglePrivacyDlpV2RecordLocation**](GooglePrivacyDlpV2RecordLocation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_content_location import GooglePrivacyDlpV2ContentLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2ContentLocation from a JSON string
google_privacy_dlp_v2_content_location_instance = GooglePrivacyDlpV2ContentLocation.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2ContentLocation.to_json())

# convert the object into a dict
google_privacy_dlp_v2_content_location_dict = google_privacy_dlp_v2_content_location_instance.to_dict()
# create an instance of GooglePrivacyDlpV2ContentLocation from a dict
google_privacy_dlp_v2_content_location_from_dict = GooglePrivacyDlpV2ContentLocation.from_dict(google_privacy_dlp_v2_content_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


