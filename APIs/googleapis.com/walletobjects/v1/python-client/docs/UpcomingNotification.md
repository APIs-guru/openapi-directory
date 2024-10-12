# UpcomingNotification

Indicates that the issuer would like Google Wallet to send an upcoming card validity notification 1 day before card becomes valid/usable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_notification** | **bool** | Indicates if the object needs to have upcoming notification enabled. | [optional] 

## Example

```python
from openapi_client.models.upcoming_notification import UpcomingNotification

# TODO update the JSON string below
json = "{}"
# create an instance of UpcomingNotification from a JSON string
upcoming_notification_instance = UpcomingNotification.from_json(json)
# print the JSON string representation of the object
print(UpcomingNotification.to_json())

# convert the object into a dict
upcoming_notification_dict = upcoming_notification_instance.to_dict()
# create an instance of UpcomingNotification from a dict
upcoming_notification_from_dict = UpcomingNotification.from_dict(upcoming_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


