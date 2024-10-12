# Baseline

The baseline values for a single sensitivity value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high_thresholds** | **List[float]** | The high thresholds of the baseline. | 
**low_thresholds** | **List[float]** | The low thresholds of the baseline. | 
**sensitivity** | **str** | The sensitivity of the baseline. | 

## Example

```python
from openapi_client.models.baseline import Baseline

# TODO update the JSON string below
json = "{}"
# create an instance of Baseline from a JSON string
baseline_instance = Baseline.from_json(json)
# print the JSON string representation of the object
print(Baseline.to_json())

# convert the object into a dict
baseline_dict = baseline_instance.to_dict()
# create an instance of Baseline from a dict
baseline_from_dict = Baseline.from_dict(baseline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


