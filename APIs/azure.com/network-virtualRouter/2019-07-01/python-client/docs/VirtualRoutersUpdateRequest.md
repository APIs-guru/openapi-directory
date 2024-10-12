# VirtualRoutersUpdateRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.virtual_routers_update_request import VirtualRoutersUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualRoutersUpdateRequest from a JSON string
virtual_routers_update_request_instance = VirtualRoutersUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(VirtualRoutersUpdateRequest.to_json())

# convert the object into a dict
virtual_routers_update_request_dict = virtual_routers_update_request_instance.to_dict()
# create an instance of VirtualRoutersUpdateRequest from a dict
virtual_routers_update_request_from_dict = VirtualRoutersUpdateRequest.from_dict(virtual_routers_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


