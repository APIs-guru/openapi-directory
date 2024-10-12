# AdditionalInfoData

A type that defines the data produced for additional information about suggested keywords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metric_key** | **str** | The metric used to provide additional information for the suggested keyword.&lt;br /&gt;&lt;br /&gt;&lt;strong&gt;Valid Values:&lt;/strong&gt; &lt;ul&gt;&lt;li&gt;&lt;code&gt;ACTIVE_SELLER_COUNT&lt;/code&gt;&lt;/li&gt;&lt;li&gt;&lt;code&gt;SEARCH_VOLUME&lt;/code&gt;&lt;/li&gt;&lt;/ul&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:MetricEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **str** | The data provided for the specified metric.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span style&#x3D;\&quot;color:#004680\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt;&lt;/span&gt; All metric data is compiled for the marketplace associated with the specified campaign ID.&lt;/span&gt; | [optional] 

## Example

```python
from openapi_client.models.additional_info_data import AdditionalInfoData

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalInfoData from a JSON string
additional_info_data_instance = AdditionalInfoData.from_json(json)
# print the JSON string representation of the object
print(AdditionalInfoData.to_json())

# convert the object into a dict
additional_info_data_dict = additional_info_data_instance.to_dict()
# create an instance of AdditionalInfoData from a dict
additional_info_data_from_dict = AdditionalInfoData.from_dict(additional_info_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


