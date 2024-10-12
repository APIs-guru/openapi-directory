# DiagnosticLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.diagnostic_log import DiagnosticLog

# TODO update the JSON string below
json = "{}"
# create an instance of DiagnosticLog from a JSON string
diagnostic_log_instance = DiagnosticLog.from_json(json)
# print the JSON string representation of the object
print(DiagnosticLog.to_json())

# convert the object into a dict
diagnostic_log_dict = diagnostic_log_instance.to_dict()
# create an instance of DiagnosticLog from a dict
diagnostic_log_from_dict = DiagnosticLog.from_dict(diagnostic_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


