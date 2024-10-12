# FlowLogFormatParameters

Parameters that define the flow log format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The file type of flow log. | [optional] 
**version** | **int** | The version (revision) of the flow log. | [optional] 

## Example

```python
from openapi_client.models.flow_log_format_parameters import FlowLogFormatParameters

# TODO update the JSON string below
json = "{}"
# create an instance of FlowLogFormatParameters from a JSON string
flow_log_format_parameters_instance = FlowLogFormatParameters.from_json(json)
# print the JSON string representation of the object
print(FlowLogFormatParameters.to_json())

# convert the object into a dict
flow_log_format_parameters_dict = flow_log_format_parameters_instance.to_dict()
# create an instance of FlowLogFormatParameters from a dict
flow_log_format_parameters_from_dict = FlowLogFormatParameters.from_dict(flow_log_format_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


