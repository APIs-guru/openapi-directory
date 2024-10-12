# TypesBatchResponse

Response of a single operation on a batch of time series types. Exactly one of \"get\", \"put\" or \"delete\" will be set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | [**List[TsiErrorBody]**](TsiErrorBody.md) | List of error objects corresponding by position to the \&quot;delete\&quot; array in the request - null when the operation is successful. | [optional] [readonly] 
**get** | [**List[TimeSeriesTypeOrError]**](TimeSeriesTypeOrError.md) | List of types or error objects corresponding by position to the \&quot;get\&quot; array in the request. Type object is set when operation is successful and error object is set when operation is unsuccessful. | [optional] [readonly] 
**put** | [**List[TimeSeriesTypeOrError]**](TimeSeriesTypeOrError.md) | List of types or error objects corresponding by position to the \&quot;put\&quot; array in the request. Type object is set when operation is successful and error object is set when operation is unsuccessful. | [optional] [readonly] 

## Example

```python
from openapi_client.models.types_batch_response import TypesBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TypesBatchResponse from a JSON string
types_batch_response_instance = TypesBatchResponse.from_json(json)
# print the JSON string representation of the object
print(TypesBatchResponse.to_json())

# convert the object into a dict
types_batch_response_dict = types_batch_response_instance.to_dict()
# create an instance of TypesBatchResponse from a dict
types_batch_response_from_dict = TypesBatchResponse.from_dict(types_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


