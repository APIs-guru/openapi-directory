# MetricMatrix

A message representing a matrix of floats.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rows** | [**List[MetricMatrixRow]**](MetricMatrixRow.md) | The rows of the matrix. | [optional] 

## Example

```python
from openapi_client.models.metric_matrix import MetricMatrix

# TODO update the JSON string below
json = "{}"
# create an instance of MetricMatrix from a JSON string
metric_matrix_instance = MetricMatrix.from_json(json)
# print the JSON string representation of the object
print(MetricMatrix.to_json())

# convert the object into a dict
metric_matrix_dict = metric_matrix_instance.to_dict()
# create an instance of MetricMatrix from a dict
metric_matrix_from_dict = MetricMatrix.from_dict(metric_matrix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


