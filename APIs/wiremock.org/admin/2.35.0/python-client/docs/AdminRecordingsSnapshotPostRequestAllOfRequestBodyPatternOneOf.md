# AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf

Automatically determine matcher based on content type (the default)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_insensitive** | **bool** | If equalTo is used, match body use case-insensitive string comparison | [optional] [default to False]
**ignore_array_order** | **bool** | If equalToJson is used, ignore order of array elements | [optional] [default to True]
**ignore_extra_elements** | **bool** | If equalToJson is used, matcher ignores extra elements in objects | [optional] [default to True]
**matcher** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.admin_recordings_snapshot_post_request_all_of_request_body_pattern_one_of import AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf

# TODO update the JSON string below
json = "{}"
# create an instance of AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf from a JSON string
admin_recordings_snapshot_post_request_all_of_request_body_pattern_one_of_instance = AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf.from_json(json)
# print the JSON string representation of the object
print(AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf.to_json())

# convert the object into a dict
admin_recordings_snapshot_post_request_all_of_request_body_pattern_one_of_dict = admin_recordings_snapshot_post_request_all_of_request_body_pattern_one_of_instance.to_dict()
# create an instance of AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf from a dict
admin_recordings_snapshot_post_request_all_of_request_body_pattern_one_of_from_dict = AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf.from_dict(admin_recordings_snapshot_post_request_all_of_request_body_pattern_one_of_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


