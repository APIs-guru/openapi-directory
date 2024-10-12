# VirtualRoutersListDefaultResponseDetailsInner

Common error details representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.virtual_routers_list_default_response_details_inner import VirtualRoutersListDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualRoutersListDefaultResponseDetailsInner from a JSON string
virtual_routers_list_default_response_details_inner_instance = VirtualRoutersListDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(VirtualRoutersListDefaultResponseDetailsInner.to_json())

# convert the object into a dict
virtual_routers_list_default_response_details_inner_dict = virtual_routers_list_default_response_details_inner_instance.to_dict()
# create an instance of VirtualRoutersListDefaultResponseDetailsInner from a dict
virtual_routers_list_default_response_details_inner_from_dict = VirtualRoutersListDefaultResponseDetailsInner.from_dict(virtual_routers_list_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


