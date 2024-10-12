# NotificationContractProperties

Notification Contract properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the Notification. | [optional] 
**recipients** | [**RecipientsContractProperties**](RecipientsContractProperties.md) |  | [optional] 
**title** | **str** | Title of the Notification. | 

## Example

```python
from openapi_client.models.notification_contract_properties import NotificationContractProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationContractProperties from a JSON string
notification_contract_properties_instance = NotificationContractProperties.from_json(json)
# print the JSON string representation of the object
print(NotificationContractProperties.to_json())

# convert the object into a dict
notification_contract_properties_dict = notification_contract_properties_instance.to_dict()
# create an instance of NotificationContractProperties from a dict
notification_contract_properties_from_dict = NotificationContractProperties.from_dict(notification_contract_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


