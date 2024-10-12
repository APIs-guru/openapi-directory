# V3Direction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction_id** | **int** | Direction of travel identifier | [optional] 
**direction_name** | **str** | Name of direction of travel | [optional] 
**route_id** | **int** | Route identifier | [optional] 
**route_type** | **int** | Transport mode identifier | [optional] 

## Example

```python
from openapi_client.models.v3_direction import V3Direction

# TODO update the JSON string below
json = "{}"
# create an instance of V3Direction from a JSON string
v3_direction_instance = V3Direction.from_json(json)
# print the JSON string representation of the object
print(V3Direction.to_json())

# convert the object into a dict
v3_direction_dict = v3_direction_instance.to_dict()
# create an instance of V3Direction from a dict
v3_direction_from_dict = V3Direction.from_dict(v3_direction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


