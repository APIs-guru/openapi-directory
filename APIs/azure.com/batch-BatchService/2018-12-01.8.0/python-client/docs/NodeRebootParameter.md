# NodeRebootParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_reboot_option** | **str** | The default value is requeue. | [optional] 

## Example

```python
from openapi_client.models.node_reboot_parameter import NodeRebootParameter

# TODO update the JSON string below
json = "{}"
# create an instance of NodeRebootParameter from a JSON string
node_reboot_parameter_instance = NodeRebootParameter.from_json(json)
# print the JSON string representation of the object
print(NodeRebootParameter.to_json())

# convert the object into a dict
node_reboot_parameter_dict = node_reboot_parameter_instance.to_dict()
# create an instance of NodeRebootParameter from a dict
node_reboot_parameter_from_dict = NodeRebootParameter.from_dict(node_reboot_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


