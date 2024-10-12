# DatafeedsCustomBatchResponseEntry

A batch entry encoding a single non-batch datafeeds response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | The ID of the request entry this entry responds to. | [optional] 
**datafeed** | [**Datafeed**](Datafeed.md) |  | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 

## Example

```python
from openapi_client.models.datafeeds_custom_batch_response_entry import DatafeedsCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedsCustomBatchResponseEntry from a JSON string
datafeeds_custom_batch_response_entry_instance = DatafeedsCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(DatafeedsCustomBatchResponseEntry.to_json())

# convert the object into a dict
datafeeds_custom_batch_response_entry_dict = datafeeds_custom_batch_response_entry_instance.to_dict()
# create an instance of DatafeedsCustomBatchResponseEntry from a dict
datafeeds_custom_batch_response_entry_from_dict = DatafeedsCustomBatchResponseEntry.from_dict(datafeeds_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


