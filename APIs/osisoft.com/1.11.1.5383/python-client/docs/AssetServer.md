# AssetServer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**extended_properties** | [**Dict[str, Value]**](Value.md) |  | [optional] 
**id** | **str** |  | [optional] 
**is_connected** | **bool** |  | [optional] 
**links** | [**AssetServerLinks**](AssetServerLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**server_time** | **datetime** |  | [optional] 
**server_version** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.asset_server import AssetServer

# TODO update the JSON string below
json = "{}"
# create an instance of AssetServer from a JSON string
asset_server_instance = AssetServer.from_json(json)
# print the JSON string representation of the object
print(AssetServer.to_json())

# convert the object into a dict
asset_server_dict = asset_server_instance.to_dict()
# create an instance of AssetServer from a dict
asset_server_from_dict = AssetServer.from_dict(asset_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


