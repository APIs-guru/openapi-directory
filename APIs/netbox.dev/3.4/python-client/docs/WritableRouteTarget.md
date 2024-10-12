# WritableRouteTarget


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
**tenant** | **int** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_route_target import WritableRouteTarget

# TODO update the JSON string below
json = "{}"
# create an instance of WritableRouteTarget from a JSON string
writable_route_target_instance = WritableRouteTarget.from_json(json)
# print the JSON string representation of the object
print(WritableRouteTarget.to_json())

# convert the object into a dict
writable_route_target_dict = writable_route_target_instance.to_dict()
# create an instance of WritableRouteTarget from a dict
writable_route_target_from_dict = WritableRouteTarget.from_dict(writable_route_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


