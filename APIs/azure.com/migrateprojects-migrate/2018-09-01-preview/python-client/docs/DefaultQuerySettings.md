# DefaultQuerySettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_count** | **bool** |  | [optional] 
**enable_expand** | **bool** |  | [optional] 
**enable_filter** | **bool** |  | [optional] 
**enable_order_by** | **bool** |  | [optional] 
**enable_select** | **bool** |  | [optional] 
**max_top** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.default_query_settings import DefaultQuerySettings

# TODO update the JSON string below
json = "{}"
# create an instance of DefaultQuerySettings from a JSON string
default_query_settings_instance = DefaultQuerySettings.from_json(json)
# print the JSON string representation of the object
print(DefaultQuerySettings.to_json())

# convert the object into a dict
default_query_settings_dict = default_query_settings_instance.to_dict()
# create an instance of DefaultQuerySettings from a dict
default_query_settings_from_dict = DefaultQuerySettings.from_dict(default_query_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


