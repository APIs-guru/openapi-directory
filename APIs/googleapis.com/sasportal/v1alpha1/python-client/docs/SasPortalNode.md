# SasPortalNode

The Node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The node&#39;s display name. | [optional] 
**name** | **str** | Output only. Resource name. | [optional] 
**sas_user_ids** | **List[str]** | User ids used by the devices belonging to this node. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_node import SasPortalNode

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalNode from a JSON string
sas_portal_node_instance = SasPortalNode.from_json(json)
# print the JSON string representation of the object
print(SasPortalNode.to_json())

# convert the object into a dict
sas_portal_node_dict = sas_portal_node_instance.to_dict()
# create an instance of SasPortalNode from a dict
sas_portal_node_from_dict = SasPortalNode.from_dict(sas_portal_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


