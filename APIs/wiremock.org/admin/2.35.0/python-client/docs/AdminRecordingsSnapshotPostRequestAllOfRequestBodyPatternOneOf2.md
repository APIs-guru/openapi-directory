# AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf2

Always match request bodies using equalToJson

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_array_order** | **bool** | Ignore order of array elements | [optional] [default to True]
**ignore_extra_elements** | **bool** | Ignore extra elements in objects | [optional] [default to True]
**matcher** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.admin_recordings_snapshot_post_request_all_of_request_body_pattern_one_of2 import AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf2

# TODO update the JSON string below
json = "{}"
# create an instance of AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf2 from a JSON string
admin_recordings_snapshot_post_request_all_of_request_body_pattern_one_of2_instance = AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf2.from_json(json)
# print the JSON string representation of the object
print(AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf2.to_json())

# convert the object into a dict
admin_recordings_snapshot_post_request_all_of_request_body_pattern_one_of2_dict = admin_recordings_snapshot_post_request_all_of_request_body_pattern_one_of2_instance.to_dict()
# create an instance of AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf2 from a dict
admin_recordings_snapshot_post_request_all_of_request_body_pattern_one_of2_from_dict = AdminRecordingsSnapshotPostRequestAllOfRequestBodyPatternOneOf2.from_dict(admin_recordings_snapshot_post_request_all_of_request_body_pattern_one_of2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


