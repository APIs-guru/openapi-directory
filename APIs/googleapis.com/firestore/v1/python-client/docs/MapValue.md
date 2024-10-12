# MapValue

A map value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**Dict[str, Value]**](Value.md) | The map&#39;s fields. The map keys represent field names. Field names matching the regular expression &#x60;__.*__&#x60; are reserved. Reserved field names are forbidden except in certain documented contexts. The map keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. | [optional] 

## Example

```python
from openapi_client.models.map_value import MapValue

# TODO update the JSON string below
json = "{}"
# create an instance of MapValue from a JSON string
map_value_instance = MapValue.from_json(json)
# print the JSON string representation of the object
print(MapValue.to_json())

# convert the object into a dict
map_value_dict = map_value_instance.to_dict()
# create an instance of MapValue from a dict
map_value_from_dict = MapValue.from_dict(map_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


