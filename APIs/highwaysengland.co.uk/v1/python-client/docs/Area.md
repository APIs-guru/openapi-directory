# Area


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | 
**id** | **str** |  | [optional] 
**name** | **str** |  | 
**x_latitude** | **str** |  | 
**x_longitude** | **str** |  | 
**y_latitude** | **str** |  | 
**y_longitude** | **str** |  | 

## Example

```python
from openapi_client.models.area import Area

# TODO update the JSON string below
json = "{}"
# create an instance of Area from a JSON string
area_instance = Area.from_json(json)
# print the JSON string representation of the object
print(Area.to_json())

# convert the object into a dict
area_dict = area_instance.to_dict()
# create an instance of Area from a dict
area_from_dict = Area.from_dict(area_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


