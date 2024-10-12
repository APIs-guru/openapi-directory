# ExpressRouteConnectionId

The ID of the ExpressRouteConnection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the ExpressRouteConnection. | [optional] [readonly] 

## Example

```python
from openapi_client.models.express_route_connection_id import ExpressRouteConnectionId

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteConnectionId from a JSON string
express_route_connection_id_instance = ExpressRouteConnectionId.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteConnectionId.to_json())

# convert the object into a dict
express_route_connection_id_dict = express_route_connection_id_instance.to_dict()
# create an instance of ExpressRouteConnectionId from a dict
express_route_connection_id_from_dict = ExpressRouteConnectionId.from_dict(express_route_connection_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


