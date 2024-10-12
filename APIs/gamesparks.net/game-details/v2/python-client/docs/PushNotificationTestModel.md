# PushNotificationTestModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_json** | **str** |  | [optional] 
**message_id** | **str** |  | [optional] 
**push_id** | **str** |  | [optional] 
**subtitle** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.push_notification_test_model import PushNotificationTestModel

# TODO update the JSON string below
json = "{}"
# create an instance of PushNotificationTestModel from a JSON string
push_notification_test_model_instance = PushNotificationTestModel.from_json(json)
# print the JSON string representation of the object
print(PushNotificationTestModel.to_json())

# convert the object into a dict
push_notification_test_model_dict = push_notification_test_model_instance.to_dict()
# create an instance of PushNotificationTestModel from a dict
push_notification_test_model_from_dict = PushNotificationTestModel.from_dict(push_notification_test_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


