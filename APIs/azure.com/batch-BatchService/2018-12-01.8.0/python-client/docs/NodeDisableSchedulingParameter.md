# NodeDisableSchedulingParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_disable_scheduling_option** | **str** | The default value is requeue. | [optional] 

## Example

```python
from openapi_client.models.node_disable_scheduling_parameter import NodeDisableSchedulingParameter

# TODO update the JSON string below
json = "{}"
# create an instance of NodeDisableSchedulingParameter from a JSON string
node_disable_scheduling_parameter_instance = NodeDisableSchedulingParameter.from_json(json)
# print the JSON string representation of the object
print(NodeDisableSchedulingParameter.to_json())

# convert the object into a dict
node_disable_scheduling_parameter_dict = node_disable_scheduling_parameter_instance.to_dict()
# create an instance of NodeDisableSchedulingParameter from a dict
node_disable_scheduling_parameter_from_dict = NodeDisableSchedulingParameter.from_dict(node_disable_scheduling_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


