# GooglePrivacyDlpV2Container

Represents a container that may contain DLP findings. Examples of a container include a file, table, or database record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_path** | **str** | A string representation of the full container name. Examples: - BigQuery: &#39;Project:DataSetId.TableId&#39; - Cloud Storage: &#39;gs://Bucket/folders/filename.txt&#39; | [optional] 
**project_id** | **str** | Project where the finding was found. Can be different from the project that owns the finding. | [optional] 
**relative_path** | **str** | The rest of the path after the root. Examples: - For BigQuery table &#x60;project_id:dataset_id.table_id&#x60;, the relative path is &#x60;table_id&#x60; - For Cloud Storage file &#x60;gs://bucket/folder/filename.txt&#x60;, the relative path is &#x60;folder/filename.txt&#x60; | [optional] 
**root_path** | **str** | The root of the container. Examples: - For BigQuery table &#x60;project_id:dataset_id.table_id&#x60;, the root is &#x60;dataset_id&#x60; - For Cloud Storage file &#x60;gs://bucket/folder/filename.txt&#x60;, the root is &#x60;gs://bucket&#x60; | [optional] 
**type** | **str** | Container type, for example BigQuery or Cloud Storage. | [optional] 
**update_time** | **str** | Findings container modification timestamp, if applicable. For Cloud Storage, this field contains the last file modification timestamp. For a BigQuery table, this field contains the last_modified_time property. For Datastore, this field isn&#39;t populated. | [optional] 
**version** | **str** | Findings container version, if available (\&quot;generation\&quot; for Cloud Storage). | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_container import GooglePrivacyDlpV2Container

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Container from a JSON string
google_privacy_dlp_v2_container_instance = GooglePrivacyDlpV2Container.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Container.to_json())

# convert the object into a dict
google_privacy_dlp_v2_container_dict = google_privacy_dlp_v2_container_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Container from a dict
google_privacy_dlp_v2_container_from_dict = GooglePrivacyDlpV2Container.from_dict(google_privacy_dlp_v2_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


