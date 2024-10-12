# ReturnaddressCustomBatchResponseEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | The ID of the request entry to which this entry responds. | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#returnaddressCustomBatchResponseEntry&#x60;\&quot; | [optional] 
**return_address** | [**ReturnAddress**](ReturnAddress.md) |  | [optional] 

## Example

```python
from openapi_client.models.returnaddress_custom_batch_response_entry import ReturnaddressCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnaddressCustomBatchResponseEntry from a JSON string
returnaddress_custom_batch_response_entry_instance = ReturnaddressCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(ReturnaddressCustomBatchResponseEntry.to_json())

# convert the object into a dict
returnaddress_custom_batch_response_entry_dict = returnaddress_custom_batch_response_entry_instance.to_dict()
# create an instance of ReturnaddressCustomBatchResponseEntry from a dict
returnaddress_custom_batch_response_entry_from_dict = ReturnaddressCustomBatchResponseEntry.from_dict(returnaddress_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


