# NatGatewaysUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.nat_gateways_update_tags_request import NatGatewaysUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of NatGatewaysUpdateTagsRequest from a JSON string
nat_gateways_update_tags_request_instance = NatGatewaysUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(NatGatewaysUpdateTagsRequest.to_json())

# convert the object into a dict
nat_gateways_update_tags_request_dict = nat_gateways_update_tags_request_instance.to_dict()
# create an instance of NatGatewaysUpdateTagsRequest from a dict
nat_gateways_update_tags_request_from_dict = NatGatewaysUpdateTagsRequest.from_dict(nat_gateways_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


