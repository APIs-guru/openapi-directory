# ErrorLog

Error log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_launch_toffset** | **int** | Corresponds to the number of milliseconds elapsed between the time the error occurred and the app was launched.  | [optional] 
**id** | **str** | Error identifier. | 
**session_id** | **str** | Session ID.  | 
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.error_log import ErrorLog

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorLog from a JSON string
error_log_instance = ErrorLog.from_json(json)
# print the JSON string representation of the object
print(ErrorLog.to_json())

# convert the object into a dict
error_log_dict = error_log_instance.to_dict()
# create an instance of ErrorLog from a dict
error_log_from_dict = ErrorLog.from_dict(error_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


