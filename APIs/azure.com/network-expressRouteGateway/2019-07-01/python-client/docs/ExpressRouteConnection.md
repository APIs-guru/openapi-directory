# ExpressRouteConnection

ExpressRouteConnection resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the resource. | 
**properties** | [**ExpressRouteConnectionProperties**](ExpressRouteConnectionProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 

## Example

```python
from openapi_client.models.express_route_connection import ExpressRouteConnection

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteConnection from a JSON string
express_route_connection_instance = ExpressRouteConnection.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteConnection.to_json())

# convert the object into a dict
express_route_connection_dict = express_route_connection_instance.to_dict()
# create an instance of ExpressRouteConnection from a dict
express_route_connection_from_dict = ExpressRouteConnection.from_dict(express_route_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


