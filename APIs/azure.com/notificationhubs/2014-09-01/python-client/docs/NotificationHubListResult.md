# NotificationHubListResult

The response of the List NotificationHub operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets link to the next set of results. Not empty if Value contains incomplete list of NotificationHub | [optional] 
**value** | [**List[NotificationHubResource]**](NotificationHubResource.md) | Gets or sets result of the List NotificationHub operation. | [optional] 

## Example

```python
from openapi_client.models.notification_hub_list_result import NotificationHubListResult

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationHubListResult from a JSON string
notification_hub_list_result_instance = NotificationHubListResult.from_json(json)
# print the JSON string representation of the object
print(NotificationHubListResult.to_json())

# convert the object into a dict
notification_hub_list_result_dict = notification_hub_list_result_instance.to_dict()
# create an instance of NotificationHubListResult from a dict
notification_hub_list_result_from_dict = NotificationHubListResult.from_dict(notification_hub_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


