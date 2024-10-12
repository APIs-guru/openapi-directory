# AzureAppPushReceiver

The Azure mobile App push notification receiver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | The email address registered for the Azure mobile app. | 
**name** | **str** | The name of the Azure mobile app push receiver. Names must be unique across all receivers within an action group. | 

## Example

```python
from openapi_client.models.azure_app_push_receiver import AzureAppPushReceiver

# TODO update the JSON string below
json = "{}"
# create an instance of AzureAppPushReceiver from a JSON string
azure_app_push_receiver_instance = AzureAppPushReceiver.from_json(json)
# print the JSON string representation of the object
print(AzureAppPushReceiver.to_json())

# convert the object into a dict
azure_app_push_receiver_dict = azure_app_push_receiver_instance.to_dict()
# create an instance of AzureAppPushReceiver from a dict
azure_app_push_receiver_from_dict = AzureAppPushReceiver.from_dict(azure_app_push_receiver_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


