# Aggregation

Message describing an aggregation. The message includes the aggregation type, parameters, and the field on which to perform the aggregation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **object** | Object count. | [optional] 
**var_field** | **str** | The name of the field on which to aggregate. | [optional] 
**frequency** | **object** | Frequency distribution of all field values. | [optional] 
**histogram** | [**AggregationHistogram**](AggregationHistogram.md) |  | [optional] 
**sum** | **object** | Sum of field values. | [optional] 

## Example

```python
from openapi_client.models.aggregation import Aggregation

# TODO update the JSON string below
json = "{}"
# create an instance of Aggregation from a JSON string
aggregation_instance = Aggregation.from_json(json)
# print the JSON string representation of the object
print(Aggregation.to_json())

# convert the object into a dict
aggregation_dict = aggregation_instance.to_dict()
# create an instance of Aggregation from a dict
aggregation_from_dict = Aggregation.from_dict(aggregation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


