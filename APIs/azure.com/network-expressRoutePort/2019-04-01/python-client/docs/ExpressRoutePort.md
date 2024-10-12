# ExpressRoutePort

ExpressRoutePort resource definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**ExpressRoutePortPropertiesFormat**](ExpressRoutePortPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.express_route_port import ExpressRoutePort

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRoutePort from a JSON string
express_route_port_instance = ExpressRoutePort.from_json(json)
# print the JSON string representation of the object
print(ExpressRoutePort.to_json())

# convert the object into a dict
express_route_port_dict = express_route_port_instance.to_dict()
# create an instance of ExpressRoutePort from a dict
express_route_port_from_dict = ExpressRoutePort.from_dict(express_route_port_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


