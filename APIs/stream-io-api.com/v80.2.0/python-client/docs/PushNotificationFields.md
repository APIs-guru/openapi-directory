# PushNotificationFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apn** | [**APNConfigFields**](APNConfigFields.md) |  | 
**firebase** | [**FirebaseConfigFields**](FirebaseConfigFields.md) |  | 
**huawei** | [**HuaweiConfigFields**](HuaweiConfigFields.md) |  | 
**offline_only** | **bool** |  | 
**providers** | [**List[PushProvider]**](PushProvider.md) |  | [optional] 
**version** | **str** |  | 
**xiaomi** | [**XiaomiConfigFields**](XiaomiConfigFields.md) |  | 

## Example

```python
from openapi_client.models.push_notification_fields import PushNotificationFields

# TODO update the JSON string below
json = "{}"
# create an instance of PushNotificationFields from a JSON string
push_notification_fields_instance = PushNotificationFields.from_json(json)
# print the JSON string representation of the object
print(PushNotificationFields.to_json())

# convert the object into a dict
push_notification_fields_dict = push_notification_fields_instance.to_dict()
# create an instance of PushNotificationFields from a dict
push_notification_fields_from_dict = PushNotificationFields.from_dict(push_notification_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


