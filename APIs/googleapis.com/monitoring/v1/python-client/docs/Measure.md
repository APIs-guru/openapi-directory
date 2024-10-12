# Measure

A chart measure. Measures represent a measured property in your chart data such as rainfall in inches, number of units sold, revenue gained, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_function** | [**AggregationFunction**](AggregationFunction.md) |  | [optional] 
**column** | **str** | Required. The column name within in the dataset used for the measure. | [optional] 

## Example

```python
from openapi_client.models.measure import Measure

# TODO update the JSON string below
json = "{}"
# create an instance of Measure from a JSON string
measure_instance = Measure.from_json(json)
# print the JSON string representation of the object
print(Measure.to_json())

# convert the object into a dict
measure_dict = measure_instance.to_dict()
# create an instance of Measure from a dict
measure_from_dict = Measure.from_dict(measure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


