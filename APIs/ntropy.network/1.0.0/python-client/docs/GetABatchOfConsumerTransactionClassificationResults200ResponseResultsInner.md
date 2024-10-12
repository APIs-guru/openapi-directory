# GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact** | [**GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInnerContact**](GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInnerContact.md) |  | [optional] 
**labels** | **List[str]** |  | [optional] 
**location** | [**GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInnerLocation**](GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInnerLocation.md) |  | [optional] 
**logo** | **str** |  | [optional] 
**merchant** | **str** |  | [optional] 
**person** | **str** |  | [optional] 
**rating** | [**GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInnerRating**](GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInnerRating.md) |  | [optional] 
**transaction_id** | **str** |  | [optional] 
**website** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_a_batch_of_consumer_transaction_classification_results200_response_results_inner import GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInner from a JSON string
get_a_batch_of_consumer_transaction_classification_results200_response_results_inner_instance = GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInner.from_json(json)
# print the JSON string representation of the object
print(GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInner.to_json())

# convert the object into a dict
get_a_batch_of_consumer_transaction_classification_results200_response_results_inner_dict = get_a_batch_of_consumer_transaction_classification_results200_response_results_inner_instance.to_dict()
# create an instance of GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInner from a dict
get_a_batch_of_consumer_transaction_classification_results200_response_results_inner_from_dict = GetABatchOfConsumerTransactionClassificationResults200ResponseResultsInner.from_dict(get_a_batch_of_consumer_transaction_classification_results200_response_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


