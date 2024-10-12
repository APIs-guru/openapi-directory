# WxByRoute

Geometry-defining arguments for along-route requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours** | **int** |  | 
**route** | **object** |  | 
**wxtypes** | **List[str]** |  | 

## Example

```python
from openapi_client.models.wx_by_route import WxByRoute

# TODO update the JSON string below
json = "{}"
# create an instance of WxByRoute from a JSON string
wx_by_route_instance = WxByRoute.from_json(json)
# print the JSON string representation of the object
print(WxByRoute.to_json())

# convert the object into a dict
wx_by_route_dict = wx_by_route_instance.to_dict()
# create an instance of WxByRoute from a dict
wx_by_route_from_dict = WxByRoute.from_dict(wx_by_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


