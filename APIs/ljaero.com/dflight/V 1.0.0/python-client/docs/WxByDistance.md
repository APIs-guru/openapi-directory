# WxByDistance

Geometry-defining arguments for point/distance requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distance** | [**Distance**](Distance.md) |  | 
**hours** | **int** |  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**longitude** | [**Longitude**](Longitude.md) |  | 
**wxtypes** | **List[str]** |  | 

## Example

```python
from openapi_client.models.wx_by_distance import WxByDistance

# TODO update the JSON string below
json = "{}"
# create an instance of WxByDistance from a JSON string
wx_by_distance_instance = WxByDistance.from_json(json)
# print the JSON string representation of the object
print(WxByDistance.to_json())

# convert the object into a dict
wx_by_distance_dict = wx_by_distance_instance.to_dict()
# create an instance of WxByDistance from a dict
wx_by_distance_from_dict = WxByDistance.from_dict(wx_by_distance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


