# AddNetworkSwitchStackRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serial** | **str** | The serial of the switch to be added | 

## Example

```python
from openapi_client.models.add_network_switch_stack_request import AddNetworkSwitchStackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddNetworkSwitchStackRequest from a JSON string
add_network_switch_stack_request_instance = AddNetworkSwitchStackRequest.from_json(json)
# print the JSON string representation of the object
print(AddNetworkSwitchStackRequest.to_json())

# convert the object into a dict
add_network_switch_stack_request_dict = add_network_switch_stack_request_instance.to_dict()
# create an instance of AddNetworkSwitchStackRequest from a dict
add_network_switch_stack_request_from_dict = AddNetworkSwitchStackRequest.from_dict(add_network_switch_stack_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


