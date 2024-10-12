# AggregateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket** | [**List[AggregateBucket]**](AggregateBucket.md) | A list of buckets containing the aggregated data. | [optional] 

## Example

```python
from openapi_client.models.aggregate_response import AggregateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AggregateResponse from a JSON string
aggregate_response_instance = AggregateResponse.from_json(json)
# print the JSON string representation of the object
print(AggregateResponse.to_json())

# convert the object into a dict
aggregate_response_dict = aggregate_response_instance.to_dict()
# create an instance of AggregateResponse from a dict
aggregate_response_from_dict = AggregateResponse.from_dict(aggregate_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


