# TunnelDestGroup

A TunnelDestGroup.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cidrs** | **List[str]** | Unordered list. List of CIDRs that this group applies to. | [optional] 
**fqdns** | **List[str]** | Unordered list. List of FQDNs that this group applies to. | [optional] 
**name** | **str** | Required. Immutable. Identifier for the TunnelDestGroup. Must be unique within the project and contain only lower case letters (a-z) and dashes (-). | [optional] 

## Example

```python
from openapi_client.models.tunnel_dest_group import TunnelDestGroup

# TODO update the JSON string below
json = "{}"
# create an instance of TunnelDestGroup from a JSON string
tunnel_dest_group_instance = TunnelDestGroup.from_json(json)
# print the JSON string representation of the object
print(TunnelDestGroup.to_json())

# convert the object into a dict
tunnel_dest_group_dict = tunnel_dest_group_instance.to_dict()
# create an instance of TunnelDestGroup from a dict
tunnel_dest_group_from_dict = TunnelDestGroup.from_dict(tunnel_dest_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


