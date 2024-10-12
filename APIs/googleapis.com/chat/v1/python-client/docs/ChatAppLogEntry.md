# ChatAppLogEntry

JSON payload of error messages. If the Cloud Logging API is enabled, these error messages are logged to [Google Cloud Logging](https://cloud.google.com/logging/docs).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment** | **str** | The deployment that caused the error. For Chat apps built in Apps Script, this is the deployment ID defined by Apps Script. | [optional] 
**deployment_function** | **str** | The unencrypted &#x60;callback_method&#x60; name that was running when the error was encountered. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.chat_app_log_entry import ChatAppLogEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ChatAppLogEntry from a JSON string
chat_app_log_entry_instance = ChatAppLogEntry.from_json(json)
# print the JSON string representation of the object
print(ChatAppLogEntry.to_json())

# convert the object into a dict
chat_app_log_entry_dict = chat_app_log_entry_instance.to_dict()
# create an instance of ChatAppLogEntry from a dict
chat_app_log_entry_from_dict = ChatAppLogEntry.from_dict(chat_app_log_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


