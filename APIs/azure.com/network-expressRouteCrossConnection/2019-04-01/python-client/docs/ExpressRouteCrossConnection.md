# ExpressRouteCrossConnection

ExpressRouteCrossConnection resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**ExpressRouteCrossConnectionProperties**](ExpressRouteCrossConnectionProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.express_route_cross_connection import ExpressRouteCrossConnection

# TODO update the JSON string below
json = "{}"
# create an instance of ExpressRouteCrossConnection from a JSON string
express_route_cross_connection_instance = ExpressRouteCrossConnection.from_json(json)
# print the JSON string representation of the object
print(ExpressRouteCrossConnection.to_json())

# convert the object into a dict
express_route_cross_connection_dict = express_route_cross_connection_instance.to_dict()
# create an instance of ExpressRouteCrossConnection from a dict
express_route_cross_connection_from_dict = ExpressRouteCrossConnection.from_dict(express_route_cross_connection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


