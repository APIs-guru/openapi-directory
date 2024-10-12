# RemoveNetworkSwitchStackRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serial** | **str** | The serial of the switch to be removed | 

## Example

```python
from openapi_client.models.remove_network_switch_stack_request import RemoveNetworkSwitchStackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveNetworkSwitchStackRequest from a JSON string
remove_network_switch_stack_request_instance = RemoveNetworkSwitchStackRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveNetworkSwitchStackRequest.to_json())

# convert the object into a dict
remove_network_switch_stack_request_dict = remove_network_switch_stack_request_instance.to_dict()
# create an instance of RemoveNetworkSwitchStackRequest from a dict
remove_network_switch_stack_request_from_dict = RemoveNetworkSwitchStackRequest.from_dict(remove_network_switch_stack_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


