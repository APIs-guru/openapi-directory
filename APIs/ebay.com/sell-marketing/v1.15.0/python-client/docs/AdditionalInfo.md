# AdditionalInfo

A type that provides additional information for suggested keywords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info_type** | **str** | The type of additional information provided for the suggested keyword.&lt;br /&gt;&lt;br /&gt;&lt;strong&gt;Valid Value:&lt;/strong&gt; &lt;code&gt;KEYWORD_INSIGHTS&lt;/code&gt; For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/marketing/types/pls:AdditionalInfoEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**metrics** | [**List[AdditionalInfoData]**](AdditionalInfoData.md) | A list of additional data provided for the suggested keyword. | [optional] 

## Example

```python
from openapi_client.models.additional_info import AdditionalInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AdditionalInfo from a JSON string
additional_info_instance = AdditionalInfo.from_json(json)
# print the JSON string representation of the object
print(AdditionalInfo.to_json())

# convert the object into a dict
additional_info_dict = additional_info_instance.to_dict()
# create an instance of AdditionalInfo from a dict
additional_info_from_dict = AdditionalInfo.from_dict(additional_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


