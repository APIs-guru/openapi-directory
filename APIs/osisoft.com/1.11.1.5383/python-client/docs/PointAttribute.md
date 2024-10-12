# PointAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PointAttributeLinks**](PointAttributeLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**value** | **object** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.point_attribute import PointAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of PointAttribute from a JSON string
point_attribute_instance = PointAttribute.from_json(json)
# print the JSON string representation of the object
print(PointAttribute.to_json())

# convert the object into a dict
point_attribute_dict = point_attribute_instance.to_dict()
# create an instance of PointAttribute from a dict
point_attribute_from_dict = PointAttribute.from_dict(point_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


