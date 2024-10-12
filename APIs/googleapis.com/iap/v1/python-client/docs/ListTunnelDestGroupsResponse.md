# ListTunnelDestGroupsResponse

The response from ListTunnelDestGroups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that you can send as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**tunnel_dest_groups** | [**List[TunnelDestGroup]**](TunnelDestGroup.md) | TunnelDestGroup existing in the project. | [optional] 

## Example

```python
from openapi_client.models.list_tunnel_dest_groups_response import ListTunnelDestGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTunnelDestGroupsResponse from a JSON string
list_tunnel_dest_groups_response_instance = ListTunnelDestGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTunnelDestGroupsResponse.to_json())

# convert the object into a dict
list_tunnel_dest_groups_response_dict = list_tunnel_dest_groups_response_instance.to_dict()
# create an instance of ListTunnelDestGroupsResponse from a dict
list_tunnel_dest_groups_response_from_dict = ListTunnelDestGroupsResponse.from_dict(list_tunnel_dest_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


