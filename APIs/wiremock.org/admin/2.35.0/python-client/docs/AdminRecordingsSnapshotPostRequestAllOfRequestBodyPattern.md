# AdminRecordingsSnapshotPostRequestAllOfRequestBodyPattern

Control the request body matcher used in generated stub mappings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_insensitive** | **bool** | Match body using case-insensitive string comparison | [optional] [default to False]
**ignore_array_order** | **bool** | Ignore order of array elements | [optional] [default to True]
**ignore_extra_elements** | **bool** | Ignore extra elements in objects | [optional] [default to True]
**matcher** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.admin_recordings_snapshot_post_request_all_of_request_body_pattern import AdminRecordingsSnapshotPostRequestAllOfRequestBodyPattern

# TODO update the JSON string below
json = "{}"
# create an instance of AdminRecordingsSnapshotPostRequestAllOfRequestBodyPattern from a JSON string
admin_recordings_snapshot_post_request_all_of_request_body_pattern_instance = AdminRecordingsSnapshotPostRequestAllOfRequestBodyPattern.from_json(json)
# print the JSON string representation of the object
print(AdminRecordingsSnapshotPostRequestAllOfRequestBodyPattern.to_json())

# convert the object into a dict
admin_recordings_snapshot_post_request_all_of_request_body_pattern_dict = admin_recordings_snapshot_post_request_all_of_request_body_pattern_instance.to_dict()
# create an instance of AdminRecordingsSnapshotPostRequestAllOfRequestBodyPattern from a dict
admin_recordings_snapshot_post_request_all_of_request_body_pattern_from_dict = AdminRecordingsSnapshotPostRequestAllOfRequestBodyPattern.from_dict(admin_recordings_snapshot_post_request_all_of_request_body_pattern_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


