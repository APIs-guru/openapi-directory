# CustomPropertyLogDiagnostics

Set or remove custom properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **List[object]** | Custom property changes. | [optional] 
**device** | [**AnalyticsGenericLogFlow200ResponseLogsInnerDevice**](AnalyticsGenericLogFlow200ResponseLogsInnerDevice.md) |  | 
**install_id** | **str** | Install ID.  | 
**timestamp** | **datetime** | Log creation timestamp.  | 
**type** | **str** | Log type.  | 

## Example

```python
from openapi_client.models.custom_property_log_diagnostics import CustomPropertyLogDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of CustomPropertyLogDiagnostics from a JSON string
custom_property_log_diagnostics_instance = CustomPropertyLogDiagnostics.from_json(json)
# print the JSON string representation of the object
print(CustomPropertyLogDiagnostics.to_json())

# convert the object into a dict
custom_property_log_diagnostics_dict = custom_property_log_diagnostics_instance.to_dict()
# create an instance of CustomPropertyLogDiagnostics from a dict
custom_property_log_diagnostics_from_dict = CustomPropertyLogDiagnostics.from_dict(custom_property_log_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


