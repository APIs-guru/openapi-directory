# AdminRecordingsSnapshotPostRequestAllOfExtractBodyCriteria

Criteria for extracting response bodies to a separate file instead of including it in the stub mapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binary_size_threshold** | **str** | Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. \&quot;56 Mb\&quot;. Default unit is bytes. | [optional] [default to '0']
**text_size_threshold** | **str** | Size threshold for extracting binary response bodies. Supports humanized size strings, e.g. \&quot;56 Mb\&quot;. Default unit is bytes. | [optional] [default to '0']

## Example

```python
from openapi_client.models.admin_recordings_snapshot_post_request_all_of_extract_body_criteria import AdminRecordingsSnapshotPostRequestAllOfExtractBodyCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of AdminRecordingsSnapshotPostRequestAllOfExtractBodyCriteria from a JSON string
admin_recordings_snapshot_post_request_all_of_extract_body_criteria_instance = AdminRecordingsSnapshotPostRequestAllOfExtractBodyCriteria.from_json(json)
# print the JSON string representation of the object
print(AdminRecordingsSnapshotPostRequestAllOfExtractBodyCriteria.to_json())

# convert the object into a dict
admin_recordings_snapshot_post_request_all_of_extract_body_criteria_dict = admin_recordings_snapshot_post_request_all_of_extract_body_criteria_instance.to_dict()
# create an instance of AdminRecordingsSnapshotPostRequestAllOfExtractBodyCriteria from a dict
admin_recordings_snapshot_post_request_all_of_extract_body_criteria_from_dict = AdminRecordingsSnapshotPostRequestAllOfExtractBodyCriteria.from_dict(admin_recordings_snapshot_post_request_all_of_extract_body_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


