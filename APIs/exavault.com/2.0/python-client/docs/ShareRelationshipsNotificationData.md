# ShareRelationshipsNotificationData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | ID of the notification.  | [optional] 
**type** | **str** | Type is notification.  | [optional] 

## Example

```python
from openapi_client.models.share_relationships_notification_data import ShareRelationshipsNotificationData

# TODO update the JSON string below
json = "{}"
# create an instance of ShareRelationshipsNotificationData from a JSON string
share_relationships_notification_data_instance = ShareRelationshipsNotificationData.from_json(json)
# print the JSON string representation of the object
print(ShareRelationshipsNotificationData.to_json())

# convert the object into a dict
share_relationships_notification_data_dict = share_relationships_notification_data_instance.to_dict()
# create an instance of ShareRelationshipsNotificationData from a dict
share_relationships_notification_data_from_dict = ShareRelationshipsNotificationData.from_dict(share_relationships_notification_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


