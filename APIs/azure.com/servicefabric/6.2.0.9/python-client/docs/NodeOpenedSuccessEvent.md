# NodeOpenedSuccessEvent

Node Opened Success event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fault_domain** | **str** | Fault domain of Node. | 
**hostname** | **str** | Name of Host. | 
**ip_address_or_fqdn** | **str** | IP address or FQDN. | 
**is_seed_node** | **bool** | Indicates if it is seed node. | 
**node_id** | **str** | Id of Node. | 
**node_instance** | **int** | Id of Node instance. | 
**node_version** | **str** | Version of Node. | 
**upgrade_domain** | **str** | Upgrade domain of Node. | 

## Example

```python
from openapi_client.models.node_opened_success_event import NodeOpenedSuccessEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NodeOpenedSuccessEvent from a JSON string
node_opened_success_event_instance = NodeOpenedSuccessEvent.from_json(json)
# print the JSON string representation of the object
print(NodeOpenedSuccessEvent.to_json())

# convert the object into a dict
node_opened_success_event_dict = node_opened_success_event_instance.to_dict()
# create an instance of NodeOpenedSuccessEvent from a dict
node_opened_success_event_from_dict = NodeOpenedSuccessEvent.from_dict(node_opened_success_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


