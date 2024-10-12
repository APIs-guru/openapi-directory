# DatafeedstatusesCustomBatchResponseEntry

A batch entry encoding a single non-batch datafeedstatuses response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | The ID of the request entry this entry responds to. | [optional] 
**datafeed_status** | [**DatafeedStatus**](DatafeedStatus.md) |  | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 

## Example

```python
from openapi_client.models.datafeedstatuses_custom_batch_response_entry import DatafeedstatusesCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedstatusesCustomBatchResponseEntry from a JSON string
datafeedstatuses_custom_batch_response_entry_instance = DatafeedstatusesCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(DatafeedstatusesCustomBatchResponseEntry.to_json())

# convert the object into a dict
datafeedstatuses_custom_batch_response_entry_dict = datafeedstatuses_custom_batch_response_entry_instance.to_dict()
# create an instance of DatafeedstatusesCustomBatchResponseEntry from a dict
datafeedstatuses_custom_batch_response_entry_from_dict = DatafeedstatusesCustomBatchResponseEntry.from_dict(datafeedstatuses_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


