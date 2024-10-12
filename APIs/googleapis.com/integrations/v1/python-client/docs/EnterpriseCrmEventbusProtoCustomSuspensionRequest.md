# EnterpriseCrmEventbusProtoCustomSuspensionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**post_to_queue_with_trigger_id_request** | [**GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest**](GoogleInternalCloudCrmEventbusV3PostToQueueWithTriggerIdRequest.md) |  | [optional] 
**suspension_info_event_parameter_key** | **str** | In the fired event, set the SuspensionInfo message as the value for this key. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_custom_suspension_request import EnterpriseCrmEventbusProtoCustomSuspensionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoCustomSuspensionRequest from a JSON string
enterprise_crm_eventbus_proto_custom_suspension_request_instance = EnterpriseCrmEventbusProtoCustomSuspensionRequest.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoCustomSuspensionRequest.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_custom_suspension_request_dict = enterprise_crm_eventbus_proto_custom_suspension_request_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoCustomSuspensionRequest from a dict
enterprise_crm_eventbus_proto_custom_suspension_request_from_dict = EnterpriseCrmEventbusProtoCustomSuspensionRequest.from_dict(enterprise_crm_eventbus_proto_custom_suspension_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


