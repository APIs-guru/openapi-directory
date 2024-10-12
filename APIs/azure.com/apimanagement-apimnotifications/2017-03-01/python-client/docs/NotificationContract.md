# NotificationContract

Notification details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NotificationContractProperties**](NotificationContractProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.notification_contract import NotificationContract

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationContract from a JSON string
notification_contract_instance = NotificationContract.from_json(json)
# print the JSON string representation of the object
print(NotificationContract.to_json())

# convert the object into a dict
notification_contract_dict = notification_contract_instance.to_dict()
# create an instance of NotificationContract from a dict
notification_contract_from_dict = NotificationContract.from_dict(notification_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


