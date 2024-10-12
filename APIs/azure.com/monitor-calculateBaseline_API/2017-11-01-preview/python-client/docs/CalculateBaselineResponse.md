# CalculateBaselineResponse

The response to a calculate baseline call.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**baseline** | [**List[Baseline]**](Baseline.md) | the baseline values for each sensitivity. | 
**timestamps** | **List[datetime]** | the array of timestamps of the baselines. | [optional] 
**type** | **str** | the resource type of the baseline resource. | 

## Example

```python
from openapi_client.models.calculate_baseline_response import CalculateBaselineResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CalculateBaselineResponse from a JSON string
calculate_baseline_response_instance = CalculateBaselineResponse.from_json(json)
# print the JSON string representation of the object
print(CalculateBaselineResponse.to_json())

# convert the object into a dict
calculate_baseline_response_dict = calculate_baseline_response_instance.to_dict()
# create an instance of CalculateBaselineResponse from a dict
calculate_baseline_response_from_dict = CalculateBaselineResponse.from_dict(calculate_baseline_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


