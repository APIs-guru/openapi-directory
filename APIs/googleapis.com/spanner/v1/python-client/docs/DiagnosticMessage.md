# DiagnosticMessage

A message representing the key visualizer diagnostic messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**metric** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**metric_specific** | **bool** | Whether this message is specific only for the current metric. By default Diagnostics are shown for all metrics, regardless which metric is the currently selected metric in the UI. However occasionally a metric will generate so many messages that the resulting visual clutter becomes overwhelming. In this case setting this to true, will show the diagnostic messages for that metric only if it is the currently selected metric. | [optional] 
**severity** | **str** | The severity of the diagnostic message. | [optional] 
**short_message** | [**LocalizedString**](LocalizedString.md) |  | [optional] 

## Example

```python
from openapi_client.models.diagnostic_message import DiagnosticMessage

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticMessage from a JSON string
diagnostic_message_instance = DiagnosticMessage.from_json(json)
# print the JSON string representation of the object
print(DiagnosticMessage.to_json())

# convert the object into a dict
diagnostic_message_dict = diagnostic_message_instance.to_dict()
# create an instance of DiagnosticMessage from a dict
diagnostic_message_from_dict = DiagnosticMessage.from_dict(diagnostic_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


