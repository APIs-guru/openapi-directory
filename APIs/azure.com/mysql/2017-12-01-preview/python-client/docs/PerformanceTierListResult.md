# PerformanceTierListResult

A list of performance tiers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[PerformanceTierProperties]**](PerformanceTierProperties.md) | The list of performance tiers | [optional] 

## Example

```python
from openapi_client.models.performance_tier_list_result import PerformanceTierListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PerformanceTierListResult from a JSON string
performance_tier_list_result_instance = PerformanceTierListResult.from_json(json)
# print the JSON string representation of the object
print(PerformanceTierListResult.to_json())

# convert the object into a dict
performance_tier_list_result_dict = performance_tier_list_result_instance.to_dict()
# create an instance of PerformanceTierListResult from a dict
performance_tier_list_result_from_dict = PerformanceTierListResult.from_dict(performance_tier_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


