# StructStats

The data statistics of a series of STRUCT values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_stats** | [**Dict[str, DataStats]**](DataStats.md) | Map from a field name of the struct to data stats aggregated over series of all data in that field across all the structs. | [optional] 

## Example

```python
from openapi_client.models.struct_stats import StructStats

# TODO update the JSON string below
json = "{}"
# create an instance of StructStats from a JSON string
struct_stats_instance = StructStats.from_json(json)
# print the JSON string representation of the object
print(StructStats.to_json())

# convert the object into a dict
struct_stats_dict = struct_stats_instance.to_dict()
# create an instance of StructStats from a dict
struct_stats_from_dict = StructStats.from_dict(struct_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


