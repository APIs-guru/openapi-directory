# TransportPagerTreeJsonldPost

The TransportPagerTree resource is a collection of transports that carry dispatched alerts to the external Pager Tree service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**pager_tree_access_token** | **str** | The access token for the Pager Tree service. Stored in encrypted format. | 
**pager_tree_account_user_id** | **str** | The account user ID for the Pager Tree service. (Must supply either team ID, router ID or account user ID.) | [optional] 
**pager_tree_router_id** | **str** | The router ID for the Pager Tree service. (Must supply either team ID, router ID or account user ID.) | [optional] 
**pager_tree_team_id** | **str** | The team ID for the Pager Tree service. (Must supply either team ID, router ID or account user ID.) | [optional] 
**pager_tree_urgency** | **str** | The urgency for the Pager Tree service. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_pager_tree_jsonld_post import TransportPagerTreeJsonldPost

# TODO update the JSON string below
json = "{}"
# create an instance of TransportPagerTreeJsonldPost from a JSON string
transport_pager_tree_jsonld_post_instance = TransportPagerTreeJsonldPost.from_json(json)
# print the JSON string representation of the object
print(TransportPagerTreeJsonldPost.to_json())

# convert the object into a dict
transport_pager_tree_jsonld_post_dict = transport_pager_tree_jsonld_post_instance.to_dict()
# create an instance of TransportPagerTreeJsonldPost from a dict
transport_pager_tree_jsonld_post_from_dict = TransportPagerTreeJsonldPost.from_dict(transport_pager_tree_jsonld_post_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


