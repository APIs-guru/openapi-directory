# Point


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**descriptor** | **str** |  | [optional] 
**digital_set_name** | **str** |  | [optional] 
**display_digits** | **int** |  | [optional] 
**engineering_units** | **str** |  | [optional] 
**future** | **bool** |  | [optional] 
**id** | **int** |  | [optional] 
**links** | [**PointLinks**](PointLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**point_class** | **str** |  | [optional] 
**point_type** | **str** |  | [optional] 
**span** | **float** |  | [optional] 
**step** | **bool** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 
**zero** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.point import Point

# TODO update the JSON string below
json = "{}"
# create an instance of Point from a JSON string
point_instance = Point.from_json(json)
# print the JSON string representation of the object
print(Point.to_json())

# convert the object into a dict
point_dict = point_instance.to_dict()
# create an instance of Point from a dict
point_from_dict = Point.from_dict(point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


