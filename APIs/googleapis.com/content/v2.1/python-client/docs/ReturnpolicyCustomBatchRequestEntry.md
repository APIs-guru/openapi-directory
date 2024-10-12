# ReturnpolicyCustomBatchRequestEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**merchant_id** | **str** | The Merchant Center account ID. | [optional] 
**method** | **str** | Method of the batch request entry. Acceptable values are: - \&quot;&#x60;delete&#x60;\&quot; - \&quot;&#x60;get&#x60;\&quot; - \&quot;&#x60;insert&#x60;\&quot;  | [optional] 
**return_policy** | [**ReturnPolicy**](ReturnPolicy.md) |  | [optional] 
**return_policy_id** | **str** | The return policy ID. This should be set only if the method is &#x60;delete&#x60; or &#x60;get&#x60;. | [optional] 

## Example

```python
from openapi_client.models.returnpolicy_custom_batch_request_entry import ReturnpolicyCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnpolicyCustomBatchRequestEntry from a JSON string
returnpolicy_custom_batch_request_entry_instance = ReturnpolicyCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(ReturnpolicyCustomBatchRequestEntry.to_json())

# convert the object into a dict
returnpolicy_custom_batch_request_entry_dict = returnpolicy_custom_batch_request_entry_instance.to_dict()
# create an instance of ReturnpolicyCustomBatchRequestEntry from a dict
returnpolicy_custom_batch_request_entry_from_dict = ReturnpolicyCustomBatchRequestEntry.from_dict(returnpolicy_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


