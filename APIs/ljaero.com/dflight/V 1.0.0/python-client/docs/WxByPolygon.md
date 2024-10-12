# WxByPolygon

Geometry-defining arguments for polygon requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours** | **int** |  | 
**poly** | **object** |  | 
**wxtypes** | **List[str]** |  | 

## Example

```python
from openapi_client.models.wx_by_polygon import WxByPolygon

# TODO update the JSON string below
json = "{}"
# create an instance of WxByPolygon from a JSON string
wx_by_polygon_instance = WxByPolygon.from_json(json)
# print the JSON string representation of the object
print(WxByPolygon.to_json())

# convert the object into a dict
wx_by_polygon_dict = wx_by_polygon_instance.to_dict()
# create an instance of WxByPolygon from a dict
wx_by_polygon_from_dict = WxByPolygon.from_dict(wx_by_polygon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


