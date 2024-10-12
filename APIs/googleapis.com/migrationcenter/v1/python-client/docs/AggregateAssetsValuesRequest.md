# AggregateAssetsValuesRequest

A request to aggregate one or more values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregations** | [**List[Aggregation]**](Aggregation.md) | Array of aggregations to perform. Up to 25 aggregations can be defined. | [optional] 
**filter** | **str** | The aggregation will be performed on assets that match the provided filter. | [optional] 

## Example

```python
from openapi_client.models.aggregate_assets_values_request import AggregateAssetsValuesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AggregateAssetsValuesRequest from a JSON string
aggregate_assets_values_request_instance = AggregateAssetsValuesRequest.from_json(json)
# print the JSON string representation of the object
print(AggregateAssetsValuesRequest.to_json())

# convert the object into a dict
aggregate_assets_values_request_dict = aggregate_assets_values_request_instance.to_dict()
# create an instance of AggregateAssetsValuesRequest from a dict
aggregate_assets_values_request_from_dict = AggregateAssetsValuesRequest.from_dict(aggregate_assets_values_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


