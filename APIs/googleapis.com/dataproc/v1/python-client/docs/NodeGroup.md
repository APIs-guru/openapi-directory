# NodeGroup

Dataproc Node Group. The Dataproc NodeGroup resource is not related to the Dataproc NodeGroupAffinity resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **Dict[str, str]** | Optional. Node group labels. Label keys must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). Label values can be empty. If specified, they must consist of from 1 to 63 characters and conform to RFC 1035 (https://www.ietf.org/rfc/rfc1035.txt). The node group must have no more than 32 labelsn. | [optional] 
**name** | **str** | The Node group resource name (https://aip.dev/122). | [optional] 
**node_group_config** | [**InstanceGroupConfig**](InstanceGroupConfig.md) |  | [optional] 
**roles** | **List[str]** | Required. Node group roles. | [optional] 

## Example

```python
from openapi_client.models.node_group import NodeGroup

# TODO update the JSON string below
json = "{}"
# create an instance of NodeGroup from a JSON string
node_group_instance = NodeGroup.from_json(json)
# print the JSON string representation of the object
print(NodeGroup.to_json())

# convert the object into a dict
node_group_dict = node_group_instance.to_dict()
# create an instance of NodeGroup from a dict
node_group_from_dict = NodeGroup.from_dict(node_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


