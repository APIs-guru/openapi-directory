# LinkedVpcNetwork

An existing VPC network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_export_ranges** | **List[str]** | Optional. IP ranges encompassing the subnets to be excluded from peering. | [optional] 
**uri** | **str** | Required. The URI of the VPC network resource. | [optional] 

## Example

```python
from openapi_client.models.linked_vpc_network import LinkedVpcNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedVpcNetwork from a JSON string
linked_vpc_network_instance = LinkedVpcNetwork.from_json(json)
# print the JSON string representation of the object
print(LinkedVpcNetwork.to_json())

# convert the object into a dict
linked_vpc_network_dict = linked_vpc_network_instance.to_dict()
# create an instance of LinkedVpcNetwork from a dict
linked_vpc_network_from_dict = LinkedVpcNetwork.from_dict(linked_vpc_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


