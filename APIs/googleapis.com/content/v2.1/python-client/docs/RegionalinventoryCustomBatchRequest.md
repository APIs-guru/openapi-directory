# RegionalinventoryCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[RegionalinventoryCustomBatchRequestEntry]**](RegionalinventoryCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.regionalinventory_custom_batch_request import RegionalinventoryCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalinventoryCustomBatchRequest from a JSON string
regionalinventory_custom_batch_request_instance = RegionalinventoryCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(RegionalinventoryCustomBatchRequest.to_json())

# convert the object into a dict
regionalinventory_custom_batch_request_dict = regionalinventory_custom_batch_request_instance.to_dict()
# create an instance of RegionalinventoryCustomBatchRequest from a dict
regionalinventory_custom_batch_request_from_dict = RegionalinventoryCustomBatchRequest.from_dict(regionalinventory_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


