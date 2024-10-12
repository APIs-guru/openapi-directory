# AuxiliaryNodeGroup

Node group identification and configuration information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_group** | [**NodeGroup**](NodeGroup.md) |  | [optional] 
**node_group_id** | **str** | Optional. A node group ID. Generated if not specified.The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of from 3 to 33 characters. | [optional] 

## Example

```python
from openapi_client.models.auxiliary_node_group import AuxiliaryNodeGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AuxiliaryNodeGroup from a JSON string
auxiliary_node_group_instance = AuxiliaryNodeGroup.from_json(json)
# print the JSON string representation of the object
print(AuxiliaryNodeGroup.to_json())

# convert the object into a dict
auxiliary_node_group_dict = auxiliary_node_group_instance.to_dict()
# create an instance of AuxiliaryNodeGroup from a dict
auxiliary_node_group_from_dict = AuxiliaryNodeGroup.from_dict(auxiliary_node_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


