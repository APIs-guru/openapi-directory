# ContactDeviceAdd

The contact device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chat_escalation_sound** | **str** |  | [optional] 
**device_label** | **str** |  | [optional] 
**escalation_notification_sound** | **str** |  | [optional] 
**resolved_notification_sound** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.contact_device_add import ContactDeviceAdd

# TODO update the JSON string below
json = "{}"
# create an instance of ContactDeviceAdd from a JSON string
contact_device_add_instance = ContactDeviceAdd.from_json(json)
# print the JSON string representation of the object
print(ContactDeviceAdd.to_json())

# convert the object into a dict
contact_device_add_dict = contact_device_add_instance.to_dict()
# create an instance of ContactDeviceAdd from a dict
contact_device_add_from_dict = ContactDeviceAdd.from_dict(contact_device_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


