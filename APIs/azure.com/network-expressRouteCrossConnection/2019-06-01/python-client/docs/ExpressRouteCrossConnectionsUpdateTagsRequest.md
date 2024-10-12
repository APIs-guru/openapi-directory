# ExpressRouteCrossConnectionsUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.express_route_cross_connections_update_tags_request import ExpressRouteCrossConnectionsUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCrossConnectionsUpdateTagsRequest from a JSON string
express_route_cross_connections_update_tags_request_instance = ExpressRouteCrossConnectionsUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCrossConnectionsUpdateTagsRequest.to_json())

# convert the object into a dict
express_route_cross_connections_update_tags_request_dict = express_route_cross_connections_update_tags_request_instance.to_dict()
# create an instance of ExpressRouteCrossConnectionsUpdateTagsRequest from a dict
express_route_cross_connections_update_tags_request_from_dict = ExpressRouteCrossConnectionsUpdateTagsRequest.from_dict(express_route_cross_connections_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


