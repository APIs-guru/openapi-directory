# EnterpriseCrmEventbusProtoNotification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buganizer_notification** | [**EnterpriseCrmEventbusProtoBuganizerNotification**](EnterpriseCrmEventbusProtoBuganizerNotification.md) |  | [optional] 
**email_address** | [**EnterpriseCrmEventbusProtoAddress**](EnterpriseCrmEventbusProtoAddress.md) |  | [optional] 
**escalator_queue** | **str** |  | [optional] 
**pubsub_topic** | **str** |  | [optional] 
**request** | [**EnterpriseCrmEventbusProtoCustomSuspensionRequest**](EnterpriseCrmEventbusProtoCustomSuspensionRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_notification import EnterpriseCrmEventbusProtoNotification

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoNotification from a JSON string
enterprise_crm_eventbus_proto_notification_instance = EnterpriseCrmEventbusProtoNotification.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoNotification.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_notification_dict = enterprise_crm_eventbus_proto_notification_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoNotification from a dict
enterprise_crm_eventbus_proto_notification_from_dict = EnterpriseCrmEventbusProtoNotification.from_dict(enterprise_crm_eventbus_proto_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


