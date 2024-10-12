# Breakdown

Preview: A breakdown is an aggregation applied to the measures over a specified column. A breakdown can result in multiple series across a category for the provided measure. This is a preview feature and may be subject to change before final release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_function** | [**AggregationFunction**](AggregationFunction.md) |  | [optional] 
**column** | **str** | Required. The name of the column in the dataset containing the breakdown values. | [optional] 
**limit** | **int** | Required. A limit to the number of breakdowns. If set to zero then all possible breakdowns are applied. The list of breakdowns is dependent on the value of the sort_order field. | [optional] 
**sort_order** | **str** | Required. The sort order is applied to the values of the breakdown column. | [optional] 

## Example

```python
from openapi_client.models.breakdown import Breakdown

# TODO update the JSON string below
json = "{}"
# create an instance of Breakdown from a JSON string
breakdown_instance = Breakdown.from_json(json)
# print the JSON string representation of the object
print(Breakdown.to_json())

# convert the object into a dict
breakdown_dict = breakdown_instance.to_dict()
# create an instance of Breakdown from a dict
breakdown_from_dict = Breakdown.from_dict(breakdown_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


