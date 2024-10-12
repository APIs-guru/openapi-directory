# DatafeedsCustomBatchRequestEntry

A batch entry encoding a single non-batch datafeeds request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**datafeed** | [**Datafeed**](Datafeed.md) |  | [optional] 
**datafeed_id** | **str** | The ID of the data feed to get, delete or fetch. | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 
**method** | **str** | The method of the batch entry. Acceptable values are: - \&quot;&#x60;delete&#x60;\&quot; - \&quot;&#x60;fetchNow&#x60;\&quot; - \&quot;&#x60;get&#x60;\&quot; - \&quot;&#x60;insert&#x60;\&quot; - \&quot;&#x60;update&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.datafeeds_custom_batch_request_entry import DatafeedsCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedsCustomBatchRequestEntry from a JSON string
datafeeds_custom_batch_request_entry_instance = DatafeedsCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(DatafeedsCustomBatchRequestEntry.to_json())

# convert the object into a dict
datafeeds_custom_batch_request_entry_dict = datafeeds_custom_batch_request_entry_instance.to_dict()
# create an instance of DatafeedsCustomBatchRequestEntry from a dict
datafeeds_custom_batch_request_entry_from_dict = DatafeedsCustomBatchRequestEntry.from_dict(datafeeds_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


