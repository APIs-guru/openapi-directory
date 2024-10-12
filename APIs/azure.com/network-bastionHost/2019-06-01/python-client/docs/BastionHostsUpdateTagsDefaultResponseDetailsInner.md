# BastionHostsUpdateTagsDefaultResponseDetailsInner

Common error details representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code. | [optional] 
**message** | **str** | Error message. | [optional] 
**target** | **str** | Error target. | [optional] 

## Example

```python
from openapi_client.models.bastion_hosts_update_tags_default_response_details_inner import BastionHostsUpdateTagsDefaultResponseDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BastionHostsUpdateTagsDefaultResponseDetailsInner from a JSON string
bastion_hosts_update_tags_default_response_details_inner_instance = BastionHostsUpdateTagsDefaultResponseDetailsInner.from_json(json)
# print the JSON string representation of the object
print(BastionHostsUpdateTagsDefaultResponseDetailsInner.to_json())

# convert the object into a dict
bastion_hosts_update_tags_default_response_details_inner_dict = bastion_hosts_update_tags_default_response_details_inner_instance.to_dict()
# create an instance of BastionHostsUpdateTagsDefaultResponseDetailsInner from a dict
bastion_hosts_update_tags_default_response_details_inner_from_dict = BastionHostsUpdateTagsDefaultResponseDetailsInner.from_dict(bastion_hosts_update_tags_default_response_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


