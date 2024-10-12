# TypesBatchRequest

Request to perform a single operation on a batch of time series types. Exactly one of \"get\", \"put\" or \"delete\" must be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | [**TypesRequestBatchGetOrDelete**](TypesRequestBatchGetOrDelete.md) |  | [optional] 
**get** | [**TypesRequestBatchGetOrDelete**](TypesRequestBatchGetOrDelete.md) |  | [optional] 
**put** | [**List[TimeSeriesType]**](TimeSeriesType.md) | Definition of what time series types to update or create. | [optional] 

## Example

```python
from openapi_client.models.types_batch_request import TypesBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TypesBatchRequest from a JSON string
types_batch_request_instance = TypesBatchRequest.from_json(json)
# print the JSON string representation of the object
print(TypesBatchRequest.to_json())

# convert the object into a dict
types_batch_request_dict = types_batch_request_instance.to_dict()
# create an instance of TypesBatchRequest from a dict
types_batch_request_from_dict = TypesBatchRequest.from_dict(types_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


