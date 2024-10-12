# MetricMatrixRow

A message representing a row of a matrix of floats.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cols** | **List[float]** | The columns of the row. | [optional] 

## Example

```python
from openapi_client.models.metric_matrix_row import MetricMatrixRow

# TODO update the JSON string below
json = "{}"
# create an instance of MetricMatrixRow from a JSON string
metric_matrix_row_instance = MetricMatrixRow.from_json(json)
# print the JSON string representation of the object
print(MetricMatrixRow.to_json())

# convert the object into a dict
metric_matrix_row_dict = metric_matrix_row_instance.to_dict()
# create an instance of MetricMatrixRow from a dict
metric_matrix_row_from_dict = MetricMatrixRow.from_dict(metric_matrix_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


