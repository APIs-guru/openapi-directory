# GoogleCloudApigeeV1FlowHookConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continue_on_error** | **bool** | Flag that specifies whether the flow should abort after an error in the flow hook. Defaults to &#x60;true&#x60; (continue on error). | [optional] 
**name** | **str** | Name of the flow hook in the following format: &#x60;organizations/{org}/environments/{env}/flowhooks/{point}&#x60;. Valid &#x60;point&#x60; values include: &#x60;PreProxyFlowHook&#x60;, &#x60;PostProxyFlowHook&#x60;, &#x60;PreTargetFlowHook&#x60;, and &#x60;PostTargetFlowHook&#x60; | [optional] 
**shared_flow_name** | **str** | Name of the shared flow to invoke in the following format: &#x60;organizations/{org}/sharedflows/{sharedflow}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_flow_hook_config import GoogleCloudApigeeV1FlowHookConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1FlowHookConfig from a JSON string
google_cloud_apigee_v1_flow_hook_config_instance = GoogleCloudApigeeV1FlowHookConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1FlowHookConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_flow_hook_config_dict = google_cloud_apigee_v1_flow_hook_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1FlowHookConfig from a dict
google_cloud_apigee_v1_flow_hook_config_from_dict = GoogleCloudApigeeV1FlowHookConfig.from_dict(google_cloud_apigee_v1_flow_hook_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


