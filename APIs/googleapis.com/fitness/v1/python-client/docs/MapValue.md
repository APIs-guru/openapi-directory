# MapValue

Holder object for the value of an entry in a map field of a data point. A map value supports a subset of the formats that the regular Value supports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fp_val** | **float** | Floating point value. | [optional] 

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


