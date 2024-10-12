# UsageLog

Controls types of device activity logs collected from the device and reported via Pub/Sub notification (https://developers.google.com/android/management/notifications).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled_log_types** | **List[str]** | Specifies which log types are enabled. Note that users will receive on-device messaging when usage logging is enabled. | [optional] 
**upload_on_cellular_allowed** | **List[str]** | Specifies which of the enabled log types can be uploaded over mobile data. By default logs are queued for upload when the device connects to WiFi. | [optional] 

## Example

```python
from openapi_client.models.usage_log import UsageLog

# TODO update the JSON string below
json = "{}"
# create an instance of UsageLog from a JSON string
usage_log_instance = UsageLog.from_json(json)
# print the JSON string representation of the object
print(UsageLog.to_json())

# convert the object into a dict
usage_log_dict = usage_log_instance.to_dict()
# create an instance of UsageLog from a dict
usage_log_from_dict = UsageLog.from_dict(usage_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


