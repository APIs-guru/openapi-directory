# RepairNodeGroupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_names** | **List[str]** | Required. Name of instances to be repaired. These instances must belong to specified node pool. | [optional] 
**repair_action** | **str** | Required. Repair action to take on specified resources of the node pool. | [optional] 
**request_id** | **str** | Optional. A unique ID used to identify the request. If the server receives two RepairNodeGroupRequest with the same ID, the second request is ignored and the first google.longrunning.Operation created and stored in the backend is returned.Recommendation: Set this value to a UUID (https://en.wikipedia.org/wiki/Universally_unique_identifier).The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40 characters. | [optional] 

## Example

```python
from openapi_client.models.repair_node_group_request import RepairNodeGroupRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RepairNodeGroupRequest from a JSON string
repair_node_group_request_instance = RepairNodeGroupRequest.from_json(json)
# print the JSON string representation of the object
print(RepairNodeGroupRequest.to_json())

# convert the object into a dict
repair_node_group_request_dict = repair_node_group_request_instance.to_dict()
# create an instance of RepairNodeGroupRequest from a dict
repair_node_group_request_from_dict = RepairNodeGroupRequest.from_dict(repair_node_group_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


