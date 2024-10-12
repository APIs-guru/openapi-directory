# SasPortalMoveNodeRequest

Request for MoveNode.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | **str** | Required. The name of the new parent resource node or customer to reparent the node under. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_move_node_request import SasPortalMoveNodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalMoveNodeRequest from a JSON string
sas_portal_move_node_request_instance = SasPortalMoveNodeRequest.from_json(json)
# print the JSON string representation of the object
print(SasPortalMoveNodeRequest.to_json())

# convert the object into a dict
sas_portal_move_node_request_dict = sas_portal_move_node_request_instance.to_dict()
# create an instance of SasPortalMoveNodeRequest from a dict
sas_portal_move_node_request_from_dict = SasPortalMoveNodeRequest.from_dict(sas_portal_move_node_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


