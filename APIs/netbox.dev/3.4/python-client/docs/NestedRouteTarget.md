# NestedRouteTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** | Route target value (formatted in accordance with RFC 4360) | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_route_target import NestedRouteTarget

# TODO update the JSON string below
json = "{}"
# create an instance of NestedRouteTarget from a JSON string
nested_route_target_instance = NestedRouteTarget.from_json(json)
# print the JSON string representation of the object
print(NestedRouteTarget.to_json())

# convert the object into a dict
nested_route_target_dict = nested_route_target_instance.to_dict()
# create an instance of NestedRouteTarget from a dict
nested_route_target_from_dict = NestedRouteTarget.from_dict(nested_route_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


