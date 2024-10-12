# PushNotificationTestSummaryModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **bool** |  | [optional] 
**outgoing_message_parts** | **Dict[str, str]** |  | [optional] 
**result_parts** | **Dict[str, str]** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.push_notification_test_summary_model import PushNotificationTestSummaryModel

# TODO update the JSON string below
json = "{}"
# create an instance of PushNotificationTestSummaryModel from a JSON string
push_notification_test_summary_model_instance = PushNotificationTestSummaryModel.from_json(json)
# print the JSON string representation of the object
print(PushNotificationTestSummaryModel.to_json())

# convert the object into a dict
push_notification_test_summary_model_dict = push_notification_test_summary_model_instance.to_dict()
# create an instance of PushNotificationTestSummaryModel from a dict
push_notification_test_summary_model_from_dict = PushNotificationTestSummaryModel.from_dict(push_notification_test_summary_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


