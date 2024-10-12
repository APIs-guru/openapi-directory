# ReturnpolicyCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[ReturnpolicyCustomBatchRequestEntry]**](ReturnpolicyCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.returnpolicy_custom_batch_request import ReturnpolicyCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnpolicyCustomBatchRequest from a JSON string
returnpolicy_custom_batch_request_instance = ReturnpolicyCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(ReturnpolicyCustomBatchRequest.to_json())

# convert the object into a dict
returnpolicy_custom_batch_request_dict = returnpolicy_custom_batch_request_instance.to_dict()
# create an instance of ReturnpolicyCustomBatchRequest from a dict
returnpolicy_custom_batch_request_from_dict = ReturnpolicyCustomBatchRequest.from_dict(returnpolicy_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


