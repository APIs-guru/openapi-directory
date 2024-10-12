# AdminRecordingsStartPostRequestAllOfFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_auth_credentials** | [**AdminMappingsGet200ResponseMappingsInnerRequestBasicAuthCredentials**](AdminMappingsGet200ResponseMappingsInnerRequestBasicAuthCredentials.md) |  | [optional] 
**body_patterns** | **List[object]** | Request body patterns to match against in the &lt;key&gt;: { \&quot;&lt;predicate&gt;\&quot;: \&quot;&lt;value&gt;\&quot; } form | [optional] 
**cookies** | **object** | Cookie patterns to match against in the &lt;key&gt;: { \&quot;&lt;predicate&gt;\&quot;: \&quot;&lt;value&gt;\&quot; } form | [optional] 
**headers** | **object** | Header patterns to match against in the &lt;key&gt;: { \&quot;&lt;predicate&gt;\&quot;: \&quot;&lt;value&gt;\&quot; } form | [optional] 
**method** | **str** | The HTTP request method e.g. GET | [optional] 
**query_parameters** | **object** | Query parameter patterns to match against in the &lt;key&gt;: { \&quot;&lt;predicate&gt;\&quot;: \&quot;&lt;value&gt;\&quot; } form | [optional] 
**url** | **str** | The path and query to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. | [optional] 
**url_path** | **str** | The path to match exactly against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. | [optional] 
**url_path_pattern** | **str** | The path regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. | [optional] 
**url_pattern** | **str** | The path and query regex to match against. Only one of url, urlPattern, urlPath or urlPathPattern may be specified. | [optional] 

## Example

```python
from openapi_client.models.admin_recordings_start_post_request_all_of_filters import AdminRecordingsStartPostRequestAllOfFilters

# TODO update the JSON string below
json = "{}"
# create an instance of AdminRecordingsStartPostRequestAllOfFilters from a JSON string
admin_recordings_start_post_request_all_of_filters_instance = AdminRecordingsStartPostRequestAllOfFilters.from_json(json)
# print the JSON string representation of the object
print(AdminRecordingsStartPostRequestAllOfFilters.to_json())

# convert the object into a dict
admin_recordings_start_post_request_all_of_filters_dict = admin_recordings_start_post_request_all_of_filters_instance.to_dict()
# create an instance of AdminRecordingsStartPostRequestAllOfFilters from a dict
admin_recordings_start_post_request_all_of_filters_from_dict = AdminRecordingsStartPostRequestAllOfFilters.from_dict(admin_recordings_start_post_request_all_of_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


