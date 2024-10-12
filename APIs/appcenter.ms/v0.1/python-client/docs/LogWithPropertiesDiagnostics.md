# LogWithPropertiesDiagnostics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, str]** | Additional key/value pair parameters.  | [optional] 
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.log_with_properties_diagnostics import LogWithPropertiesDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of LogWithPropertiesDiagnostics from a JSON string
log_with_properties_diagnostics_instance = LogWithPropertiesDiagnostics.from_json(json)
# print the JSON string representation of the object
print(LogWithPropertiesDiagnostics.to_json())

# convert the object into a dict
log_with_properties_diagnostics_dict = log_with_properties_diagnostics_instance.to_dict()
# create an instance of LogWithPropertiesDiagnostics from a dict
log_with_properties_diagnostics_from_dict = LogWithPropertiesDiagnostics.from_dict(log_with_properties_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


