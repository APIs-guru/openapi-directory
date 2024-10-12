# ReturnaddressCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[ReturnaddressCustomBatchRequestEntry]**](ReturnaddressCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.returnaddress_custom_batch_request import ReturnaddressCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnaddressCustomBatchRequest from a JSON string
returnaddress_custom_batch_request_instance = ReturnaddressCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(ReturnaddressCustomBatchRequest.to_json())

# convert the object into a dict
returnaddress_custom_batch_request_dict = returnaddress_custom_batch_request_instance.to_dict()
# create an instance of ReturnaddressCustomBatchRequest from a dict
returnaddress_custom_batch_request_from_dict = ReturnaddressCustomBatchRequest.from_dict(returnaddress_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


