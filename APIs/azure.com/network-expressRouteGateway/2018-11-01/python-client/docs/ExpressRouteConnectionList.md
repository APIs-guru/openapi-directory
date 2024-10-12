# ExpressRouteConnectionList

ExpressRouteConnection list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ExpressRouteConnection]**](ExpressRouteConnection.md) | The list of ExpressRoute connections | [optional] 

## Example

```python
from openapi_client.models.express_route_connection_list import ExpressRouteConnectionList

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteConnectionList from a JSON string
express_route_connection_list_instance = ExpressRouteConnectionList.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteConnectionList.to_json())

# convert the object into a dict
express_route_connection_list_dict = express_route_connection_list_instance.to_dict()
# create an instance of ExpressRouteConnectionList from a dict
express_route_connection_list_from_dict = ExpressRouteConnectionList.from_dict(express_route_connection_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


