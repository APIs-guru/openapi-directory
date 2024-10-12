# PosCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[PosCustomBatchResponseEntry]**](PosCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;content#posCustomBatchResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.pos_custom_batch_response import PosCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PosCustomBatchResponse from a JSON string
pos_custom_batch_response_instance = PosCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(PosCustomBatchResponse.to_json())

# convert the object into a dict
pos_custom_batch_response_dict = pos_custom_batch_response_instance.to_dict()
# create an instance of PosCustomBatchResponse from a dict
pos_custom_batch_response_from_dict = PosCustomBatchResponse.from_dict(pos_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


