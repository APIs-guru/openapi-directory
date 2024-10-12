# VirtualRoutersListDefaultResponse

Common error representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**details** | [**List[VirtualRoutersListDefaultResponseDetailsInner]**](VirtualRoutersListDefaultResponseDetailsInner.md) | Error details. | [optional] 
**inner_error** | **str** | Inner error message. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.virtual_routers_list_default_response import VirtualRoutersListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualRoutersListDefaultResponse from a JSON string
virtual_routers_list_default_response_instance = VirtualRoutersListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(VirtualRoutersListDefaultResponse.to_json())

# convert the object into a dict
virtual_routers_list_default_response_dict = virtual_routers_list_default_response_instance.to_dict()
# create an instance of VirtualRoutersListDefaultResponse from a dict
virtual_routers_list_default_response_from_dict = VirtualRoutersListDefaultResponse.from_dict(virtual_routers_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


