# GcRule

Rule for determining which cells to delete during garbage collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intersection** | [**Intersection**](Intersection.md) |  | [optional] 
**max_age** | **str** | Delete cells in a column older than the given age. Values must be at least one millisecond, and will be truncated to microsecond granularity. | [optional] 
**max_num_versions** | **int** | Delete all cells in a column except the most recent N. | [optional] 
**union** | [**Union**](Union.md) |  | [optional] 

## Example

```python
from openapi_client.models.gc_rule import GcRule

# TODO update the JSON string below
json = "{}"
# create an instance of GcRule from a JSON string
gc_rule_instance = GcRule.from_json(json)
# print the JSON string representation of the object
print(GcRule.to_json())

# convert the object into a dict
gc_rule_dict = gc_rule_instance.to_dict()
# create an instance of GcRule from a dict
gc_rule_from_dict = GcRule.from_dict(gc_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


