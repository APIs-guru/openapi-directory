# GoogleCloudApigeeV1ListTraceConfigOverridesResponse

Response for ListTraceConfigOverrides.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token value that can be passed as &#x60;page_token&#x60; to retrieve the next page of content. | [optional] 
**trace_config_overrides** | [**List[GoogleCloudApigeeV1TraceConfigOverride]**](GoogleCloudApigeeV1TraceConfigOverride.md) | List all trace configuration overrides in an environment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_trace_config_overrides_response import GoogleCloudApigeeV1ListTraceConfigOverridesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListTraceConfigOverridesResponse from a JSON string
google_cloud_apigee_v1_list_trace_config_overrides_response_instance = GoogleCloudApigeeV1ListTraceConfigOverridesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListTraceConfigOverridesResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_trace_config_overrides_response_dict = google_cloud_apigee_v1_list_trace_config_overrides_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListTraceConfigOverridesResponse from a dict
google_cloud_apigee_v1_list_trace_config_overrides_response_from_dict = GoogleCloudApigeeV1ListTraceConfigOverridesResponse.from_dict(google_cloud_apigee_v1_list_trace_config_overrides_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


