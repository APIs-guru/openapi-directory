# UpgradeNotification

Properties of upgrade notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of upgrade notification. | [optional] [readonly] 
**timestamp** | **datetime** | Timestamp when upgrade notification occurred. | [optional] [readonly] 
**upsell_notification** | **Dict[str, str]** | Details about this upgrade notification | [optional] [readonly] 

## Example

```python
from openapi_client.models.upgrade_notification import UpgradeNotification

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeNotification from a JSON string
upgrade_notification_instance = UpgradeNotification.from_json(json)
# print the JSON string representation of the object
print(UpgradeNotification.to_json())

# convert the object into a dict
upgrade_notification_dict = upgrade_notification_instance.to_dict()
# create an instance of UpgradeNotification from a dict
upgrade_notification_from_dict = UpgradeNotification.from_dict(upgrade_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


