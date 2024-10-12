# BastionHostsUpdateTagsDefaultResponse

Common error representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**details** | [**List[BastionHostsUpdateTagsDefaultResponseDetailsInner]**](BastionHostsUpdateTagsDefaultResponseDetailsInner.md) | Error details. | [optional] 
**inner_error** | **str** | Inner error message. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.bastion_hosts_update_tags_default_response import BastionHostsUpdateTagsDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BastionHostsUpdateTagsDefaultResponse from a JSON string
bastion_hosts_update_tags_default_response_instance = BastionHostsUpdateTagsDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(BastionHostsUpdateTagsDefaultResponse.to_json())

# convert the object into a dict
bastion_hosts_update_tags_default_response_dict = bastion_hosts_update_tags_default_response_instance.to_dict()
# create an instance of BastionHostsUpdateTagsDefaultResponse from a dict
bastion_hosts_update_tags_default_response_from_dict = BastionHostsUpdateTagsDefaultResponse.from_dict(bastion_hosts_update_tags_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


