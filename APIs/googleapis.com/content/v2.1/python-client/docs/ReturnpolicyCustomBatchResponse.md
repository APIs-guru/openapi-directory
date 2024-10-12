# ReturnpolicyCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[ReturnpolicyCustomBatchResponseEntry]**](ReturnpolicyCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#returnpolicyCustomBatchResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.returnpolicy_custom_batch_response import ReturnpolicyCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnpolicyCustomBatchResponse from a JSON string
returnpolicy_custom_batch_response_instance = ReturnpolicyCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(ReturnpolicyCustomBatchResponse.to_json())

# convert the object into a dict
returnpolicy_custom_batch_response_dict = returnpolicy_custom_batch_response_instance.to_dict()
# create an instance of ReturnpolicyCustomBatchResponse from a dict
returnpolicy_custom_batch_response_from_dict = ReturnpolicyCustomBatchResponse.from_dict(returnpolicy_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


