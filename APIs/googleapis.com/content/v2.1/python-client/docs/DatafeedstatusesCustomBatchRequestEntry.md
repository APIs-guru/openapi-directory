# DatafeedstatusesCustomBatchRequestEntry

A batch entry encoding a single non-batch datafeedstatuses request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**country** | **str** | Deprecated. Use &#x60;feedLabel&#x60; instead. The country to get the datafeed status for. If this parameter is provided, then &#x60;language&#x60; must also be provided. Note that for multi-target datafeeds this parameter is required. | [optional] 
**datafeed_id** | **str** | The ID of the data feed to get. | [optional] 
**feed_label** | **str** | The feed label to get the datafeed status for. If this parameter is provided, then &#x60;language&#x60; must also be provided. Note that for multi-target datafeeds this parameter is required. | [optional] 
**language** | **str** | The language to get the datafeed status for. If this parameter is provided then &#x60;country&#x60; must also be provided. Note that for multi-target datafeeds this parameter is required. | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 
**method** | **str** | The method of the batch entry. Acceptable values are: - \&quot;&#x60;get&#x60;\&quot;  | [optional] 

## Example

```python
from openapi_client.models.datafeedstatuses_custom_batch_request_entry import DatafeedstatusesCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedstatusesCustomBatchRequestEntry from a JSON string
datafeedstatuses_custom_batch_request_entry_instance = DatafeedstatusesCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(DatafeedstatusesCustomBatchRequestEntry.to_json())

# convert the object into a dict
datafeedstatuses_custom_batch_request_entry_dict = datafeedstatuses_custom_batch_request_entry_instance.to_dict()
# create an instance of DatafeedstatusesCustomBatchRequestEntry from a dict
datafeedstatuses_custom_batch_request_entry_from_dict = DatafeedstatusesCustomBatchRequestEntry.from_dict(datafeedstatuses_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


