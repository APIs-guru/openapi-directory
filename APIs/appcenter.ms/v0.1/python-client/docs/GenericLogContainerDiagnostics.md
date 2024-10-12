# GenericLogContainerDiagnostics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exceeded_max_limit** | **bool** | indicates if the number of available logs are more than the max allowed return limit(100). | [optional] 
**last_received_log_timestamp** | **datetime** | the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call. | [optional] 
**logs** | [**List[ErrorsListSessionLogs200ResponseLogsInner]**](ErrorsListSessionLogs200ResponseLogsInner.md) | the list of logs | 

## Example

```python
from openapi_client.models.generic_log_container_diagnostics import GenericLogContainerDiagnostics

# TODO update the JSON string below
json = "{}"
# create an instance of GenericLogContainerDiagnostics from a JSON string
generic_log_container_diagnostics_instance = GenericLogContainerDiagnostics.from_json(json)
# print the JSON string representation of the object
print(GenericLogContainerDiagnostics.to_json())

# convert the object into a dict
generic_log_container_diagnostics_dict = generic_log_container_diagnostics_instance.to_dict()
# create an instance of GenericLogContainerDiagnostics from a dict
generic_log_container_diagnostics_from_dict = GenericLogContainerDiagnostics.from_dict(generic_log_container_diagnostics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


