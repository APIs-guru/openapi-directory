# VirtualNetworkListResponse

List of virtual networks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next list of VirtualNetwork | [optional] 
**value** | [**List[VirtualNetwork]**](VirtualNetwork.md) | Results of the VirtualNetwork list | [optional] 

## Example

```python
from openapi_client.models.virtual_network_list_response import VirtualNetworkListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualNetworkListResponse from a JSON string
virtual_network_list_response_instance = VirtualNetworkListResponse.from_json(json)
# print the JSON string representation of the object
print(VirtualNetworkListResponse.to_json())

# convert the object into a dict
virtual_network_list_response_dict = virtual_network_list_response_instance.to_dict()
# create an instance of VirtualNetworkListResponse from a dict
virtual_network_list_response_from_dict = VirtualNetworkListResponse.from_dict(virtual_network_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


