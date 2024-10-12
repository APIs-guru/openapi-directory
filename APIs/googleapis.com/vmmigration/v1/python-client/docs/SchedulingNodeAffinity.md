# SchedulingNodeAffinity

Node Affinity: the configuration of desired nodes onto which this Instance could be scheduled. Based on https://cloud.google.com/compute/docs/reference/rest/v1/instances/setScheduling

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The label key of Node resource to reference. | [optional] 
**operator** | **str** | The operator to use for the node resources specified in the &#x60;values&#x60; parameter. | [optional] 
**values** | **List[str]** | Corresponds to the label values of Node resource. | [optional] 

## Example

```python
from openapi_client.models.scheduling_node_affinity import SchedulingNodeAffinity

# TODO update the JSON string below
json = "{}"
# create an instance of SchedulingNodeAffinity from a JSON string
scheduling_node_affinity_instance = SchedulingNodeAffinity.from_json(json)
# print the JSON string representation of the object
print(SchedulingNodeAffinity.to_json())

# convert the object into a dict
scheduling_node_affinity_dict = scheduling_node_affinity_instance.to_dict()
# create an instance of SchedulingNodeAffinity from a dict
scheduling_node_affinity_from_dict = SchedulingNodeAffinity.from_dict(scheduling_node_affinity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


