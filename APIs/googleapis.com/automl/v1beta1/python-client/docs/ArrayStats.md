# ArrayStats

The data statistics of a series of ARRAY values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member_stats** | [**DataStats**](DataStats.md) |  | [optional] 

## Example

```python
from openapi_client.models.array_stats import ArrayStats

# TODO update the JSON string below
json = "{}"
# create an instance of ArrayStats from a JSON string
array_stats_instance = ArrayStats.from_json(json)
# print the JSON string representation of the object
print(ArrayStats.to_json())

# convert the object into a dict
array_stats_dict = array_stats_instance.to_dict()
# create an instance of ArrayStats from a dict
array_stats_from_dict = ArrayStats.from_dict(array_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


