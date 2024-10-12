# ExpressRouteLink

ExpressRouteLink child resource definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**name** | **str** | Name of child port resource that is unique among child port resources of the parent. | [optional] 
**properties** | [**ExpressRouteLinkPropertiesFormat**](ExpressRouteLinkPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.express_route_link import ExpressRouteLink

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteLink from a JSON string
express_route_link_instance = ExpressRouteLink.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteLink.to_json())

# convert the object into a dict
express_route_link_dict = express_route_link_instance.to_dict()
# create an instance of ExpressRouteLink from a dict
express_route_link_from_dict = ExpressRouteLink.from_dict(express_route_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


