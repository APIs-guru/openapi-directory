# ReturnaddressCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[ReturnaddressCustomBatchResponseEntry]**](ReturnaddressCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#returnaddressCustomBatchResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.returnaddress_custom_batch_response import ReturnaddressCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnaddressCustomBatchResponse from a JSON string
returnaddress_custom_batch_response_instance = ReturnaddressCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(ReturnaddressCustomBatchResponse.to_json())

# convert the object into a dict
returnaddress_custom_batch_response_dict = returnaddress_custom_batch_response_instance.to_dict()
# create an instance of ReturnaddressCustomBatchResponse from a dict
returnaddress_custom_batch_response_from_dict = ReturnaddressCustomBatchResponse.from_dict(returnaddress_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


