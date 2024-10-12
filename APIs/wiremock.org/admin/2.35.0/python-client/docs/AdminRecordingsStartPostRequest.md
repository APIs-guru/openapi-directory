# AdminRecordingsStartPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capture_headers** | [**Dict[str, AdminRecordingsSnapshotPostRequestAllOfCaptureHeadersValue]**](AdminRecordingsSnapshotPostRequestAllOfCaptureHeadersValue.md) | Headers from the request to include in the generated stub mappings, mapped to parameter objects. The only parameter available is \&quot;caseInsensitive\&quot;, which defaults to false | [optional] 
**extract_body_criteria** | [**AdminRecordingsSnapshotPostRequestAllOfExtractBodyCriteria**](AdminRecordingsSnapshotPostRequestAllOfExtractBodyCriteria.md) |  | [optional] 
**persist** | **bool** | Whether to save stub mappings to the file system or just return them | [optional] [default to True]
**repeats_as_scenarios** | **bool** | When true, duplicate requests will be added to a Scenario. When false, duplicates are discarded | [optional] [default to True]
**request_body_pattern** | [**AdminRecordingsSnapshotPostRequestAllOfRequestBodyPattern**](AdminRecordingsSnapshotPostRequestAllOfRequestBodyPattern.md) |  | [optional] 
**transformer_parameters** | **object** | List of names of stub mappings transformers to apply to generated stubs | [optional] 
**transformers** | **List[str]** | Parameters to pass to stub mapping transformers | [optional] 
**filters** | [**AdminRecordingsStartPostRequestAllOfFilters**](AdminRecordingsStartPostRequestAllOfFilters.md) |  | [optional] 
**target_base_url** | **str** | Target URL when using the record and playback API | [optional] 

## Example

```python
from openapi_client.models.admin_recordings_start_post_request import AdminRecordingsStartPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AdminRecordingsStartPostRequest from a JSON string
admin_recordings_start_post_request_instance = AdminRecordingsStartPostRequest.from_json(json)
# print the JSON string representation of the object
print(AdminRecordingsStartPostRequest.to_json())

# convert the object into a dict
admin_recordings_start_post_request_dict = admin_recordings_start_post_request_instance.to_dict()
# create an instance of AdminRecordingsStartPostRequest from a dict
admin_recordings_start_post_request_from_dict = AdminRecordingsStartPostRequest.from_dict(admin_recordings_start_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


