# SegmentCostEstimate

Workload cost estimates for a single time segment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**commitment_cost_estimates** | [**List[CommitmentCostEstimate]**](CommitmentCostEstimate.md) | Estimated costs for each commitment. | [optional] 
**segment_start_time** | [**EstimationTimePoint**](EstimationTimePoint.md) |  | [optional] 
**segment_total_cost_estimate** | [**CostEstimate**](CostEstimate.md) |  | [optional] 
**workload_cost_estimates** | [**List[WorkloadCostEstimate]**](WorkloadCostEstimate.md) | Estimated costs for each workload. | [optional] 

## Example

```python
from openapi_client.models.segment_cost_estimate import SegmentCostEstimate

# TODO update the JSON string below
json = "{}"
# create an instance of SegmentCostEstimate from a JSON string
segment_cost_estimate_instance = SegmentCostEstimate.from_json(json)
# print the JSON string representation of the object
print(SegmentCostEstimate.to_json())

# convert the object into a dict
segment_cost_estimate_dict = segment_cost_estimate_instance.to_dict()
# create an instance of SegmentCostEstimate from a dict
segment_cost_estimate_from_dict = SegmentCostEstimate.from_dict(segment_cost_estimate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


