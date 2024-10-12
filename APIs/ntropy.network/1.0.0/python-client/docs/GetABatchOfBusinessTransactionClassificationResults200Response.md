# GetABatchOfBusinessTransactionClassificationResults200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**progress** | **float** |  | [optional] 
**results** | [**List[GetABatchOfBusinessTransactionClassificationResults200ResponseResultsInner]**](GetABatchOfBusinessTransactionClassificationResults200ResponseResultsInner.md) |  | [optional] 
**status** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.get_a_batch_of_business_transaction_classification_results200_response import GetABatchOfBusinessTransactionClassificationResults200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetABatchOfBusinessTransactionClassificationResults200Response from a JSON string
get_a_batch_of_business_transaction_classification_results200_response_instance = GetABatchOfBusinessTransactionClassificationResults200Response.from_json(json)
# print the JSON string representation of the object
print(GetABatchOfBusinessTransactionClassificationResults200Response.to_json())

# convert the object into a dict
get_a_batch_of_business_transaction_classification_results200_response_dict = get_a_batch_of_business_transaction_classification_results200_response_instance.to_dict()
# create an instance of GetABatchOfBusinessTransactionClassificationResults200Response from a dict
get_a_batch_of_business_transaction_classification_results200_response_from_dict = GetABatchOfBusinessTransactionClassificationResults200Response.from_dict(get_a_batch_of_business_transaction_classification_results200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


