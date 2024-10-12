# GetABatchOfConsumerTransactionClassificationResults200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**progress** | **float** |  | [optional] 
**results** | [**List[GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInner]**](GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInner.md) |  | [optional] 
**status** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_a_batch_of_consumer_transaction_classification_results200_response import GetABatchOfConsumerTransactionClassificationResults200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetABatchOfConsumerTransactionClassificationResults200Response from a JSON string
get_a_batch_of_consumer_transaction_classification_results200_response_instance = GetABatchOfConsumerTransactionClassificationResults200Response.from_json(json)
# print the JSON string representation of the object
print(GetABatchOfConsumerTransactionClassificationResults200Response.to_json())

# convert the object into a dict
get_a_batch_of_consumer_transaction_classification_results200_response_dict = get_a_batch_of_consumer_transaction_classification_results200_response_instance.to_dict()
# create an instance of GetABatchOfConsumerTransactionClassificationResults200Response from a dict
get_a_batch_of_consumer_transaction_classification_results200_response_from_dict = GetABatchOfConsumerTransactionClassificationResults200Response.from_dict(get_a_batch_of_consumer_transaction_classification_results200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


