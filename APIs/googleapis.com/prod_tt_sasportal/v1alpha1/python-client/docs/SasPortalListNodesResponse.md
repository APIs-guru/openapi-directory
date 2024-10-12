# SasPortalListNodesResponse

Response for ListNodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A pagination token returned from a previous call to ListNodes that indicates from where listing should continue. If the field is missing or empty, it means there is no more nodes. | [optional] 
**nodes** | [**List[SasPortalNode]**](SasPortalNode.md) | The nodes that match the request. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_list_nodes_response import SasPortalListNodesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalListNodesResponse from a JSON string
sas_portal_list_nodes_response_instance = SasPortalListNodesResponse.from_json(json)
# print the JSON string representation of the object
print(SasPortalListNodesResponse.to_json())

# convert the object into a dict
sas_portal_list_nodes_response_dict = sas_portal_list_nodes_response_instance.to_dict()
# create an instance of SasPortalListNodesResponse from a dict
sas_portal_list_nodes_response_from_dict = SasPortalListNodesResponse.from_dict(sas_portal_list_nodes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


