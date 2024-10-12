# ApiKeyNotifications


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | A list of email addresses designated by you to receive notifications about this key. | 
**enabled** | **bool** | Indicates whether email notifications are enabled. | 

## Example

```python
from openapi_client.models.api_key_notifications import ApiKeyNotifications

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyNotifications from a JSON string
api_key_notifications_instance = ApiKeyNotifications.from_json(json)
# print the JSON string representation of the object
print(ApiKeyNotifications.to_json())

# convert the object into a dict
api_key_notifications_dict = api_key_notifications_instance.to_dict()
# create an instance of ApiKeyNotifications from a dict
api_key_notifications_from_dict = ApiKeyNotifications.from_dict(api_key_notifications_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


