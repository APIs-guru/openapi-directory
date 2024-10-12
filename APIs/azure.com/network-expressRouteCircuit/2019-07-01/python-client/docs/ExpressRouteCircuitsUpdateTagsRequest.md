# ExpressRouteCircuitsUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.express_route_circuits_update_tags_request import ExpressRouteCircuitsUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCircuitsUpdateTagsRequest from a JSON string
express_route_circuits_update_tags_request_instance = ExpressRouteCircuitsUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCircuitsUpdateTagsRequest.to_json())

# convert the object into a dict
express_route_circuits_update_tags_request_dict = express_route_circuits_update_tags_request_instance.to_dict()
# create an instance of ExpressRouteCircuitsUpdateTagsRequest from a dict
express_route_circuits_update_tags_request_from_dict = ExpressRouteCircuitsUpdateTagsRequest.from_dict(express_route_circuits_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


