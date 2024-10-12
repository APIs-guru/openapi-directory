# GoogleCloudApigeeV1FlowHook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continue_on_error** | **bool** | Optional. Flag that specifies whether execution should continue if the flow hook throws an exception. Set to &#x60;true&#x60; to continue execution. Set to &#x60;false&#x60; to stop execution if the flow hook throws an exception. Defaults to &#x60;true&#x60;. | [optional] 
**description** | **str** | Description of the flow hook. | [optional] 
**flow_hook_point** | **str** | Output only. Where in the API call flow the flow hook is invoked. Must be one of &#x60;PreProxyFlowHook&#x60;, &#x60;PostProxyFlowHook&#x60;, &#x60;PreTargetFlowHook&#x60;, or &#x60;PostTargetFlowHook&#x60;. | [optional] [readonly] 
**shared_flow** | **str** | Shared flow attached to this flow hook, or empty if there is none attached. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_flow_hook import GoogleCloudApigeeV1FlowHook

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1FlowHook from a JSON string
google_cloud_apigee_v1_flow_hook_instance = GoogleCloudApigeeV1FlowHook.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1FlowHook.to_json())

# convert the object into a dict
google_cloud_apigee_v1_flow_hook_dict = google_cloud_apigee_v1_flow_hook_instance.to_dict()
# create an instance of GoogleCloudApigeeV1FlowHook from a dict
google_cloud_apigee_v1_flow_hook_from_dict = GoogleCloudApigeeV1FlowHook.from_dict(google_cloud_apigee_v1_flow_hook_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


