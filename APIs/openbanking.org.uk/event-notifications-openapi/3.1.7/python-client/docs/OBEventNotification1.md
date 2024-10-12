# OBEventNotification1

The resource-update event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aud** | **str** | Audience. | 
**events** | [**OBEvent1**](OBEvent1.md) |  | 
**iat** | **int** | Issued At.  | 
**iss** | **str** | Issuer. | 
**jti** | **str** | JWT ID. | 
**sub** | **str** | Subject | 
**toe** | **int** | Time of Event. | 
**txn** | **str** | Transaction Identifier. | 

## Example

```python
from openapi_client.models.ob_event_notification1 import OBEventNotification1

# TODO update the JSON string below
json = "{}"
# create an instance of OBEventNotification1 from a JSON string
ob_event_notification1_instance = OBEventNotification1.from_json(json)
# print the JSON string representation of the object
print(OBEventNotification1.to_json())

# convert the object into a dict
ob_event_notification1_dict = ob_event_notification1_instance.to_dict()
# create an instance of OBEventNotification1 from a dict
ob_event_notification1_from_dict = OBEventNotification1.from_dict(ob_event_notification1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


