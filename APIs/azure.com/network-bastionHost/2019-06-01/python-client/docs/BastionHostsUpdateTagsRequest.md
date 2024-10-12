# BastionHostsUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.bastion_hosts_update_tags_request import BastionHostsUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BastionHostsUpdateTagsRequest from a JSON string
bastion_hosts_update_tags_request_instance = BastionHostsUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(BastionHostsUpdateTagsRequest.to_json())

# convert the object into a dict
bastion_hosts_update_tags_request_dict = bastion_hosts_update_tags_request_instance.to_dict()
# create an instance of BastionHostsUpdateTagsRequest from a dict
bastion_hosts_update_tags_request_from_dict = BastionHostsUpdateTagsRequest.from_dict(bastion_hosts_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


