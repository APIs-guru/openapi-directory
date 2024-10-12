# RegionalinventoryCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[RegionalinventoryCustomBatchResponseEntry]**](RegionalinventoryCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#regionalinventoryCustomBatchResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.regionalinventory_custom_batch_response import RegionalinventoryCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalinventoryCustomBatchResponse from a JSON string
regionalinventory_custom_batch_response_instance = RegionalinventoryCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(RegionalinventoryCustomBatchResponse.to_json())

# convert the object into a dict
regionalinventory_custom_batch_response_dict = regionalinventory_custom_batch_response_instance.to_dict()
# create an instance of RegionalinventoryCustomBatchResponse from a dict
regionalinventory_custom_batch_response_from_dict = RegionalinventoryCustomBatchResponse.from_dict(regionalinventory_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


