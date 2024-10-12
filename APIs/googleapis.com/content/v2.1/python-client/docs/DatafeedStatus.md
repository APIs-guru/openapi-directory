# DatafeedStatus

The status of a datafeed, that is, the result of the last retrieval of the datafeed computed asynchronously when the feed processing is finished.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The country for which the status is reported, represented as a CLDR territory code. | [optional] 
**datafeed_id** | **str** | The ID of the feed for which the status is reported. | [optional] 
**errors** | [**List[DatafeedStatusError]**](DatafeedStatusError.md) | The list of errors occurring in the feed. | [optional] 
**feed_label** | **str** | The feed label status is reported for. | [optional] 
**items_total** | **str** | The number of items in the feed that were processed. | [optional] 
**items_valid** | **str** | The number of items in the feed that were valid. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#datafeedStatus&#x60;\&quot; | [optional] 
**language** | **str** | The two-letter ISO 639-1 language for which the status is reported. | [optional] 
**last_upload_date** | **str** | The last date at which the feed was uploaded. | [optional] 
**processing_status** | **str** | The processing status of the feed. Acceptable values are: - \&quot;&#x60;\&quot;&#x60;failure&#x60;\&quot;: The feed could not be processed or all items had errors.&#x60;\&quot; - \&quot;&#x60;in progress&#x60;\&quot;: The feed is being processed. - \&quot;&#x60;none&#x60;\&quot;: The feed has not yet been processed. For example, a feed that has never been uploaded will have this processing status. - \&quot;&#x60;success&#x60;\&quot;: The feed was processed successfully, though some items might have had errors.  | [optional] 
**warnings** | [**List[DatafeedStatusError]**](DatafeedStatusError.md) | The list of errors occurring in the feed. | [optional] 

## Example

```python
from openapi_client.models.datafeed_status import DatafeedStatus

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedStatus from a JSON string
datafeed_status_instance = DatafeedStatus.from_json(json)
# print the JSON string representation of the object
print(DatafeedStatus.to_json())

# convert the object into a dict
datafeed_status_dict = datafeed_status_instance.to_dict()
# create an instance of DatafeedStatus from a dict
datafeed_status_from_dict = DatafeedStatus.from_dict(datafeed_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


