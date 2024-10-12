# V3DirectionWithDescription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction_id** | **int** | Direction of travel identifier | [optional] 
**direction_name** | **str** | Name of direction of travel | [optional] 
**route_direction_description** | **str** |  | [optional] 
**route_id** | **int** | Route identifier | [optional] 
**route_type** | **int** | Transport mode identifier | [optional] 

## Example

```python
from openapi_client.models.v3_direction_with_description import V3DirectionWithDescription

# TODO update the JSON string below
json = "{}"
# create an instance of V3DirectionWithDescription from a JSON string
v3_direction_with_description_instance = V3DirectionWithDescription.from_json(json)
# print the JSON string representation of the object
print(V3DirectionWithDescription.to_json())

# convert the object into a dict
v3_direction_with_description_dict = v3_direction_with_description_instance.to_dict()
# create an instance of V3DirectionWithDescription from a dict
v3_direction_with_description_from_dict = V3DirectionWithDescription.from_dict(v3_direction_with_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


