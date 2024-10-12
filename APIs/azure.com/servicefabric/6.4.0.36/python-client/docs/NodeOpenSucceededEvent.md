# NodeOpenSucceededEvent

Node Opened Succeeded event.

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
from openapi_client.models.node_open_succeeded_event import NodeOpenSucceededEvent

# TODO update the JSON string below
json = "{}"
# create an instance of NodeOpenSucceededEvent from a JSON string
node_open_succeeded_event_instance = NodeOpenSucceededEvent.from_json(json)
# print the JSON string representation of the object
print(NodeOpenSucceededEvent.to_json())

# convert the object into a dict
node_open_succeeded_event_dict = node_open_succeeded_event_instance.to_dict()
# create an instance of NodeOpenSucceededEvent from a dict
node_open_succeeded_event_from_dict = NodeOpenSucceededEvent.from_dict(node_open_succeeded_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


