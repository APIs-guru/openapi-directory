# EntityAdWordsLink

JSON template for Analytics Entity Google Ads Link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_words_accounts** | [**List[AdWordsAccount]**](AdWordsAccount.md) | A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads link. It cannot be empty. | [optional] 
**entity** | [**EntityAdWordsLinkEntity**](EntityAdWordsLinkEntity.md) |  | [optional] 
**id** | **str** | Entity Google Ads link ID | [optional] 
**kind** | **str** | Resource type for entity Google Ads link. | [optional] [default to 'analytics#entityAdWordsLink']
**name** | **str** | Name of the link. This field is required when creating a Google Ads link. | [optional] 
**profile_ids** | **List[str]** | IDs of linked Views (Profiles) represented as strings. | [optional] 
**self_link** | **str** | URL link for this Google Analytics - Google Ads link. | [optional] 

## Example

```python
from openapi_client.models.entity_ad_words_link import EntityAdWordsLink

# TODO update the JSON string below
json = "{}"
# create an instance of EntityAdWordsLink from a JSON string
entity_ad_words_link_instance = EntityAdWordsLink.from_json(json)
# print the JSON string representation of the object
print(EntityAdWordsLink.to_json())

# convert the object into a dict
entity_ad_words_link_dict = entity_ad_words_link_instance.to_dict()
# create an instance of EntityAdWordsLink from a dict
entity_ad_words_link_from_dict = EntityAdWordsLink.from_dict(entity_ad_words_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


