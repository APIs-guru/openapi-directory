# RouteTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** | Route target value (formatted in accordance with RFC 4360) | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**tenant** | [**NestedTenant**](NestedTenant.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.route_target import RouteTarget

# TODO update the JSON string below
json = "{}"
# create an instance of RouteTarget from a JSON string
route_target_instance = RouteTarget.from_json(json)
# print the JSON string representation of the object
print(RouteTarget.to_json())

# convert the object into a dict
route_target_dict = route_target_instance.to_dict()
# create an instance of RouteTarget from a dict
route_target_from_dict = RouteTarget.from_dict(route_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


