# ThreeTierWorkloadOverview

The overview of three tier workload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**three_tier_system_id** | **str** | Output only. The UUID for a three tier workload | [optional] [readonly] 

## Example

```python
from openapi_client.models.three_tier_workload_overview import ThreeTierWorkloadOverview

# TODO update the JSON string below
json = "{}"
# create an instance of ThreeTierWorkloadOverview from a JSON string
three_tier_workload_overview_instance = ThreeTierWorkloadOverview.from_json(json)
# print the JSON string representation of the object
print(ThreeTierWorkloadOverview.to_json())

# convert the object into a dict
three_tier_workload_overview_dict = three_tier_workload_overview_instance.to_dict()
# create an instance of ThreeTierWorkloadOverview from a dict
three_tier_workload_overview_from_dict = ThreeTierWorkloadOverview.from_dict(three_tier_workload_overview_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


