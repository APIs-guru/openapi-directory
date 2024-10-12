# HighCardinalityJoin

High cardinality join detailed information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**left_rows** | **str** | Output only. Count of left input rows. | [optional] [readonly] 
**output_rows** | **str** | Output only. Count of the output rows. | [optional] [readonly] 
**right_rows** | **str** | Output only. Count of right input rows. | [optional] [readonly] 
**step_index** | **int** | Output only. The index of the join operator in the ExplainQueryStep lists. | [optional] [readonly] 

## Example

```python
from openapi_client.models.high_cardinality_join import HighCardinalityJoin

# TODO update the JSON string below
json = "{}"
# create an instance of HighCardinalityJoin from a JSON string
high_cardinality_join_instance = HighCardinalityJoin.from_json(json)
# print the JSON string representation of the object
print(HighCardinalityJoin.to_json())

# convert the object into a dict
high_cardinality_join_dict = high_cardinality_join_instance.to_dict()
# create an instance of HighCardinalityJoin from a dict
high_cardinality_join_from_dict = HighCardinalityJoin.from_dict(high_cardinality_join_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


