# SingleBaseline

The baseline values for a single sensitivity value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high_thresholds** | **List[float]** | The high thresholds of the baseline. | 
**low_thresholds** | **List[float]** | The low thresholds of the baseline. | 
**sensitivity** | **str** | the sensitivity of the baseline. | 

## Example

```python
from openapi_client.models.single_baseline import SingleBaseline

# TODO update the JSON string below
json = "{}"
# create an instance of SingleBaseline from a JSON string
single_baseline_instance = SingleBaseline.from_json(json)
# print the JSON string representation of the object
print(SingleBaseline.to_json())

# convert the object into a dict
single_baseline_dict = single_baseline_instance.to_dict()
# create an instance of SingleBaseline from a dict
single_baseline_from_dict = SingleBaseline.from_dict(single_baseline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


