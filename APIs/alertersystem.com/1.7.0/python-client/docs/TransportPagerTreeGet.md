# TransportPagerTreeGet

The TransportPagerTree resource is a collection of transports that carry dispatched alerts to the external Pager Tree service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**pager_tree_access_token** | **str** | The access token for the Pager Tree service. Stored in encrypted format. | 
**pager_tree_account_user_id** | **str** | The account user ID for the Pager Tree service. (Must supply either team ID, router ID or account user ID.) | [optional] 
**pager_tree_router_id** | **str** | The router ID for the Pager Tree service. (Must supply either team ID, router ID or account user ID.) | [optional] 
**pager_tree_team_id** | **str** | The team ID for the Pager Tree service. (Must supply either team ID, router ID or account user ID.) | [optional] 
**pager_tree_urgency** | **str** | The urgency for the Pager Tree service. | 
**partition** | **str** | The partition that contains this resource instance. The resource cannot be moved to another partition. | 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**transport_name** | **str** | The name of the transport. | 

## Example

```python
from openapi_client.models.transport_pager_tree_get import TransportPagerTreeGet

# TODO update the JSON string below
json = "{}"
# create an instance of TransportPagerTreeGet from a JSON string
transport_pager_tree_get_instance = TransportPagerTreeGet.from_json(json)
# print the JSON string representation of the object
print(TransportPagerTreeGet.to_json())

# convert the object into a dict
transport_pager_tree_get_dict = transport_pager_tree_get_instance.to_dict()
# create an instance of TransportPagerTreeGet from a dict
transport_pager_tree_get_from_dict = TransportPagerTreeGet.from_dict(transport_pager_tree_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


