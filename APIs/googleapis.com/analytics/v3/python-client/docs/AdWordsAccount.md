# AdWordsAccount

JSON template for an Google Ads account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_tagging_enabled** | **bool** | True if auto-tagging is enabled on the Google Ads account. Read-only after the insert operation. | [optional] 
**customer_id** | **str** | Customer ID. This field is required when creating a Google Ads link. | [optional] 
**kind** | **str** | Resource type for Google Ads account. | [optional] [default to 'analytics#adWordsAccount']

## Example

```python
from openapi_client.models.ad_words_account import AdWordsAccount

# TODO update the JSON string below
json = "{}"
# create an instance of AdWordsAccount from a JSON string
ad_words_account_instance = AdWordsAccount.from_json(json)
# print the JSON string representation of the object
print(AdWordsAccount.to_json())

# convert the object into a dict
ad_words_account_dict = ad_words_account_instance.to_dict()
# create an instance of AdWordsAccount from a dict
ad_words_account_from_dict = AdWordsAccount.from_dict(ad_words_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


