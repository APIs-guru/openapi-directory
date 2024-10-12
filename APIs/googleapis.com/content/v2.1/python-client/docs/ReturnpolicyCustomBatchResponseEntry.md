# ReturnpolicyCustomBatchResponseEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | The ID of the request entry to which this entry responds. | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#returnpolicyCustomBatchResponseEntry&#x60;\&quot; | [optional] 
**return_policy** | [**ReturnPolicy**](ReturnPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.returnpolicy_custom_batch_response_entry import ReturnpolicyCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnpolicyCustomBatchResponseEntry from a JSON string
returnpolicy_custom_batch_response_entry_instance = ReturnpolicyCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(ReturnpolicyCustomBatchResponseEntry.to_json())

# convert the object into a dict
returnpolicy_custom_batch_response_entry_dict = returnpolicy_custom_batch_response_entry_instance.to_dict()
# create an instance of ReturnpolicyCustomBatchResponseEntry from a dict
returnpolicy_custom_batch_response_entry_from_dict = ReturnpolicyCustomBatchResponseEntry.from_dict(returnpolicy_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


