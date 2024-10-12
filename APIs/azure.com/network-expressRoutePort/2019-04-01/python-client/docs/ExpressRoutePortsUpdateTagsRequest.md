# ExpressRoutePortsUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.express_route_ports_update_tags_request import ExpressRoutePortsUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRoutePortsUpdateTagsRequest from a JSON string
express_route_ports_update_tags_request_instance = ExpressRoutePortsUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(ExpressRoutePortsUpdateTagsRequest.to_json())

# convert the object into a dict
express_route_ports_update_tags_request_dict = express_route_ports_update_tags_request_instance.to_dict()
# create an instance of ExpressRoutePortsUpdateTagsRequest from a dict
express_route_ports_update_tags_request_from_dict = ExpressRoutePortsUpdateTagsRequest.from_dict(express_route_ports_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


