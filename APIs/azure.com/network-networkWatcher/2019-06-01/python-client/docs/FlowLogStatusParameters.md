# FlowLogStatusParameters

Parameters that define a resource to query flow log and traffic analytics (optional) status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_resource_id** | **str** | The target resource where getting the flow log and traffic analytics (optional) status. | 

## Example

```python
from openapi_client.models.flow_log_status_parameters import FlowLogStatusParameters

# TODO update the JSON string below
json = "{}"
# create an instance of FlowLogStatusParameters from a JSON string
flow_log_status_parameters_instance = FlowLogStatusParameters.from_json(json)
# print the JSON string representation of the object
print(FlowLogStatusParameters.to_json())

# convert the object into a dict
flow_log_status_parameters_dict = flow_log_status_parameters_instance.to_dict()
# create an instance of FlowLogStatusParameters from a dict
flow_log_status_parameters_from_dict = FlowLogStatusParameters.from_dict(flow_log_status_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


