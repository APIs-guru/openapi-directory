# NotificationSetting

Model for NotificationSetting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | For optimistic concurrency control. | [optional] [readonly] 
**properties** | [**NotificationSettingProperties**](NotificationSettingProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.notification_setting import NotificationSetting

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationSetting from a JSON string
notification_setting_instance = NotificationSetting.from_json(json)
# print the JSON string representation of the object
print(NotificationSetting.to_json())

# convert the object into a dict
notification_setting_dict = notification_setting_instance.to_dict()
# create an instance of NotificationSetting from a dict
notification_setting_from_dict = NotificationSetting.from_dict(notification_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


