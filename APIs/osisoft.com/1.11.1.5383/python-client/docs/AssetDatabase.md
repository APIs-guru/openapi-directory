# AssetDatabase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**extended_properties** | [**Dict[str, Value]**](Value.md) |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**AssetDatabaseLinks**](AssetDatabaseLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.asset_database import AssetDatabase

# TODO update the JSON string below
json = "{}"
# create an instance of AssetDatabase from a JSON string
asset_database_instance = AssetDatabase.from_json(json)
# print the JSON string representation of the object
print(AssetDatabase.to_json())

# convert the object into a dict
asset_database_dict = asset_database_instance.to_dict()
# create an instance of AssetDatabase from a dict
asset_database_from_dict = AssetDatabase.from_dict(asset_database_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


