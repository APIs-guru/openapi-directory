# NegativeKeywordList

A list of negative keywords used for targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | Output only. The unique ID of the advertiser the negative keyword list belongs to. | [optional] [readonly] 
**display_name** | **str** | Required. The display name of the negative keyword list. Must be UTF-8 encoded with a maximum size of 255 bytes. | [optional] 
**name** | **str** | Output only. The resource name of the negative keyword list. | [optional] [readonly] 
**negative_keyword_list_id** | **str** | Output only. The unique ID of the negative keyword list. Assigned by the system. | [optional] [readonly] 
**targeted_line_item_count** | **str** | Output only. Number of line items that are directly targeting this negative keyword list. | [optional] [readonly] 

## Example

```python
from openapi_client.models.negative_keyword_list import NegativeKeywordList

# TODO update the JSON string below
json = "{}"
# create an instance of NegativeKeywordList from a JSON string
negative_keyword_list_instance = NegativeKeywordList.from_json(json)
# print the JSON string representation of the object
print(NegativeKeywordList.to_json())

# convert the object into a dict
negative_keyword_list_dict = negative_keyword_list_instance.to_dict()
# create an instance of NegativeKeywordList from a dict
negative_keyword_list_from_dict = NegativeKeywordList.from_dict(negative_keyword_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


