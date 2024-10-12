# PushNotificationTestSummaryListModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**summaries** | [**List[PushNotificationTestSummaryModel]**](PushNotificationTestSummaryModel.md) |  | [optional] 

## Example

```python
from openapi_client.models.push_notification_test_summary_list_model import PushNotificationTestSummaryListModel

# TODO update the JSON string below
json = "{}"
# create an instance of PushNotificationTestSummaryListModel from a JSON string
push_notification_test_summary_list_model_instance = PushNotificationTestSummaryListModel.from_json(json)
# print the JSON string representation of the object
print(PushNotificationTestSummaryListModel.to_json())

# convert the object into a dict
push_notification_test_summary_list_model_dict = push_notification_test_summary_list_model_instance.to_dict()
# create an instance of PushNotificationTestSummaryListModel from a dict
push_notification_test_summary_list_model_from_dict = PushNotificationTestSummaryListModel.from_dict(push_notification_test_summary_list_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


