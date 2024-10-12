# AggregateAssetsValuesResponse

A response to a request to aggregated assets values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**List[AggregationResult]**](AggregationResult.md) | The aggregation results. | [optional] 

## Example

```python
from openapi_client.models.aggregate_assets_values_response import AggregateAssetsValuesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AggregateAssetsValuesResponse from a JSON string
aggregate_assets_values_response_instance = AggregateAssetsValuesResponse.from_json(json)
# print the JSON string representation of the object
print(AggregateAssetsValuesResponse.to_json())

# convert the object into a dict
aggregate_assets_values_response_dict = aggregate_assets_values_response_instance.to_dict()
# create an instance of AggregateAssetsValuesResponse from a dict
aggregate_assets_values_response_from_dict = AggregateAssetsValuesResponse.from_dict(aggregate_assets_values_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


