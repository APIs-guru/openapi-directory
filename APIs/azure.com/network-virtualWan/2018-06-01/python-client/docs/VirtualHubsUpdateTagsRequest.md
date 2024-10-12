# VirtualHubsUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.virtual_hubs_update_tags_request import VirtualHubsUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualHubsUpdateTagsRequest from a JSON string
virtual_hubs_update_tags_request_instance = VirtualHubsUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(VirtualHubsUpdateTagsRequest.to_json())

# convert the object into a dict
virtual_hubs_update_tags_request_dict = virtual_hubs_update_tags_request_instance.to_dict()
# create an instance of VirtualHubsUpdateTagsRequest from a dict
virtual_hubs_update_tags_request_from_dict = VirtualHubsUpdateTagsRequest.from_dict(virtual_hubs_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


