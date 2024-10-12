# GenericLogDiagnostics

Generic log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**event_id** | **str** | Event ID.  | [optional] 
**event_name** | **str** | Event name.  | [optional] 
**install_id** | **str** | Install ID.  | 
**message_id** | **str** | Message ID.  | [optional] 
**properties** | **Dict[str, str]** | event specific properties.  | [optional] 
**session_id** | **str** | Session ID.  | [optional] 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.generic_log_diagnostics import GenericLogDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of GenericLogDiagnostics from a JSON string
generic_log_diagnostics_instance = GenericLogDiagnostics.from_json(json)
# print the JSON string representation of the object
print(GenericLogDiagnostics.to_json())

# convert the object into a dict
generic_log_diagnostics_dict = generic_log_diagnostics_instance.to_dict()
# create an instance of GenericLogDiagnostics from a dict
generic_log_diagnostics_from_dict = GenericLogDiagnostics.from_dict(generic_log_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


