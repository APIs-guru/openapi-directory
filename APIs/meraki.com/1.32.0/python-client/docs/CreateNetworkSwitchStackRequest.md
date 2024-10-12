# CreateNetworkSwitchStackRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the new stack | 
**serials** | **List[str]** | An array of switch serials to be added into the new stack | 

## Example

```python
from openapi_client.models.create_network_switch_stack_request import CreateNetworkSwitchStackRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkSwitchStackRequest from a JSON string
create_network_switch_stack_request_instance = CreateNetworkSwitchStackRequest.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkSwitchStackRequest.to_json())

# convert the object into a dict
create_network_switch_stack_request_dict = create_network_switch_stack_request_instance.to_dict()
# create an instance of CreateNetworkSwitchStackRequest from a dict
create_network_switch_stack_request_from_dict = CreateNetworkSwitchStackRequest.from_dict(create_network_switch_stack_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


