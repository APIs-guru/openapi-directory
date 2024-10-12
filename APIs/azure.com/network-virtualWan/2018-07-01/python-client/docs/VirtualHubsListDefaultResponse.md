# VirtualHubsListDefaultResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**details** | [**List[VirtualHubsListDefaultResponseDetailsInner]**](VirtualHubsListDefaultResponseDetailsInner.md) |  | [optional] 
**inner_error** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**target** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.virtual_hubs_list_default_response import VirtualHubsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualHubsListDefaultResponse from a JSON string
virtual_hubs_list_default_response_instance = VirtualHubsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(VirtualHubsListDefaultResponse.to_json())

# convert the object into a dict
virtual_hubs_list_default_response_dict = virtual_hubs_list_default_response_instance.to_dict()
# create an instance of VirtualHubsListDefaultResponse from a dict
virtual_hubs_list_default_response_from_dict = VirtualHubsListDefaultResponse.from_dict(virtual_hubs_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


