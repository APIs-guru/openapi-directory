# GooglePrivacyDlpV2PartitionId

Datastore partition ID. A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**namespace_id** | **str** | If not empty, the ID of the namespace to which the entities belong. | [optional] 
**project_id** | **str** | The ID of the project to which the entities belong. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_partition_id import GooglePrivacyDlpV2PartitionId

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2PartitionId from a JSON string
google_privacy_dlp_v2_partition_id_instance = GooglePrivacyDlpV2PartitionId.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2PartitionId.to_json())

# convert the object into a dict
google_privacy_dlp_v2_partition_id_dict = google_privacy_dlp_v2_partition_id_instance.to_dict()
# create an instance of GooglePrivacyDlpV2PartitionId from a dict
google_privacy_dlp_v2_partition_id_from_dict = GooglePrivacyDlpV2PartitionId.from_dict(google_privacy_dlp_v2_partition_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


