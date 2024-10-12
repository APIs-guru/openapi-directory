# AggregationThresholdPolicy

Represents privacy policy associated with \"aggregation threshold\" method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**privacy_unit_columns** | **List[str]** | Optional. The privacy unit column(s) associated with this policy. For now, only one column per data source object (table, view) is allowed as a privacy unit column. Representing as a repeated field in metadata for extensibility to multiple columns in future. Duplicates and Repeated struct fields are not allowed. For nested fields, use dot notation (\&quot;outer.inner\&quot;) | [optional] 
**threshold** | **str** | Optional. The threshold for the \&quot;aggregation threshold\&quot; policy. | [optional] 

## Example

```python
from openapi_client.models.aggregation_threshold_policy import AggregationThresholdPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of AggregationThresholdPolicy from a JSON string
aggregation_threshold_policy_instance = AggregationThresholdPolicy.from_json(json)
# print the JSON string representation of the object
print(AggregationThresholdPolicy.to_json())

# convert the object into a dict
aggregation_threshold_policy_dict = aggregation_threshold_policy_instance.to_dict()
# create an instance of AggregationThresholdPolicy from a dict
aggregation_threshold_policy_from_dict = AggregationThresholdPolicy.from_dict(aggregation_threshold_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


