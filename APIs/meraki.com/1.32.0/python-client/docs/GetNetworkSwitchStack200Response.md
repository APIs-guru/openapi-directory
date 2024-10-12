# GetNetworkSwitchStack200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Switch stacks id | [optional] 
**name** | **str** | Switch stacks name | [optional] 
**serials** | **List[str]** | Serials of the switches in the switch stack | [optional] 

## Example

```python
from openapi_client.models.get_network_switch_stack200_response import GetNetworkSwitchStack200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSwitchStack200Response from a JSON string
get_network_switch_stack200_response_instance = GetNetworkSwitchStack200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSwitchStack200Response.to_json())

# convert the object into a dict
get_network_switch_stack200_response_dict = get_network_switch_stack200_response_instance.to_dict()
# create an instance of GetNetworkSwitchStack200Response from a dict
get_network_switch_stack200_response_from_dict = GetNetworkSwitchStack200Response.from_dict(get_network_switch_stack200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


