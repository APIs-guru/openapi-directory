# DatafeedstatusesCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[DatafeedstatusesCustomBatchRequestEntry]**](DatafeedstatusesCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.datafeedstatuses_custom_batch_request import DatafeedstatusesCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedstatusesCustomBatchRequest from a JSON string
datafeedstatuses_custom_batch_request_instance = DatafeedstatusesCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(DatafeedstatusesCustomBatchRequest.to_json())

# convert the object into a dict
datafeedstatuses_custom_batch_request_dict = datafeedstatuses_custom_batch_request_instance.to_dict()
# create an instance of DatafeedstatusesCustomBatchRequest from a dict
datafeedstatuses_custom_batch_request_from_dict = DatafeedstatusesCustomBatchRequest.from_dict(datafeedstatuses_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


