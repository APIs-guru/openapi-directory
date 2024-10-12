# PolicyResultSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_time_window** | **str** |  | [optional] [readonly] 
**confidence_interval** | **float** |  | [optional] [readonly] 
**ips_estimator_denominator** | **float** |  | [optional] [readonly] 
**ips_estimator_numerator** | **float** |  | [optional] [readonly] 
**non_zero_probability** | **float** |  | [optional] 
**snips_estimator_denominator** | **float** |  | [optional] [readonly] 
**sum_of_squares** | **float** |  | [optional] [readonly] 
**time_stamp** | **datetime** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.policy_result_summary import PolicyResultSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyResultSummary from a JSON string
policy_result_summary_instance = PolicyResultSummary.from_json(json)
# print the JSON string representation of the object
print(PolicyResultSummary.to_json())

# convert the object into a dict
policy_result_summary_dict = policy_result_summary_instance.to_dict()
# create an instance of PolicyResultSummary from a dict
policy_result_summary_from_dict = PolicyResultSummary.from_dict(policy_result_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


