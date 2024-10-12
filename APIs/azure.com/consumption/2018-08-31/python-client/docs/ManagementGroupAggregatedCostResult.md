# ManagementGroupAggregatedCostResult

A management group aggregated cost resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ManagementGroupAggregatedCostProperties**](ManagementGroupAggregatedCostProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.management_group_aggregated_cost_result import ManagementGroupAggregatedCostResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementGroupAggregatedCostResult from a JSON string
management_group_aggregated_cost_result_instance = ManagementGroupAggregatedCostResult.from_json(json)
# print the JSON string representation of the object
print(ManagementGroupAggregatedCostResult.to_json())

# convert the object into a dict
management_group_aggregated_cost_result_dict = management_group_aggregated_cost_result_instance.to_dict()
# create an instance of ManagementGroupAggregatedCostResult from a dict
management_group_aggregated_cost_result_from_dict = ManagementGroupAggregatedCostResult.from_dict(management_group_aggregated_cost_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


