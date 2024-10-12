# DimensionalityReductionMetrics

Model evaluation metrics for dimensionality reduction models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_explained_variance_ratio** | **float** | Total percentage of variance explained by the selected principal components. | [optional] 

## Example

```python
from openapi_client.models.dimensionality_reduction_metrics import DimensionalityReductionMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionalityReductionMetrics from a JSON string
dimensionality_reduction_metrics_instance = DimensionalityReductionMetrics.from_json(json)
# print the JSON string representation of the object
print(DimensionalityReductionMetrics.to_json())

# convert the object into a dict
dimensionality_reduction_metrics_dict = dimensionality_reduction_metrics_instance.to_dict()
# create an instance of DimensionalityReductionMetrics from a dict
dimensionality_reduction_metrics_from_dict = DimensionalityReductionMetrics.from_dict(dimensionality_reduction_metrics_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


