# BreakdownValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_field** | **str** |  | [optional] 
**negative_impact** | **int** |  | [optional] 
**total_watch_time** | **int** |  | [optional] 
**value** | **float** |  | [optional] 
**views** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.breakdown_value import BreakdownValue

# TODO update the JSON string below
json = "{}"
# create an instance of BreakdownValue from a JSON string
breakdown_value_instance = BreakdownValue.from_json(json)
# print the JSON string representation of the object
print(BreakdownValue.to_json())

# convert the object into a dict
breakdown_value_dict = breakdown_value_instance.to_dict()
# create an instance of BreakdownValue from a dict
breakdown_value_from_dict = BreakdownValue.from_dict(breakdown_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


