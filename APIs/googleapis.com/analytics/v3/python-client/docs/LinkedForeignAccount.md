# LinkedForeignAccount

JSON template for an Analytics Remarketing Audience Foreign Link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID to which this linked foreign account belongs. | [optional] 
**eligible_for_search** | **bool** | Boolean indicating whether this is eligible for search. | [optional] [readonly] 
**id** | **str** | Entity ad account link ID. | [optional] 
**internal_web_property_id** | **str** | Internal ID for the web property to which this linked foreign account belongs. | [optional] [readonly] 
**kind** | **str** | Resource type for linked foreign account. | [optional] [default to 'analytics#linkedForeignAccount']
**linked_account_id** | **str** | The foreign account ID. For example the an Google Ads &#x60;linkedAccountId&#x60; has the following format XXX-XXX-XXXX. | [optional] 
**remarketing_audience_id** | **str** | Remarketing audience ID to which this linked foreign account belongs. | [optional] 
**status** | **str** | The status of this foreign account link. | [optional] 
**type** | **str** | The type of the foreign account. For example, &#x60;ADWORDS_LINKS&#x60;, &#x60;DBM_LINKS&#x60;, &#x60;MCC_LINKS&#x60; or &#x60;OPTIMIZE&#x60;. | [optional] 
**web_property_id** | **str** | Web property ID of the form UA-XXXXX-YY to which this linked foreign account belongs. | [optional] 

## Example

```python
from openapi_client.models.linked_foreign_account import LinkedForeignAccount

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedForeignAccount from a JSON string
linked_foreign_account_instance = LinkedForeignAccount.from_json(json)
# print the JSON string representation of the object
print(LinkedForeignAccount.to_json())

# convert the object into a dict
linked_foreign_account_dict = linked_foreign_account_instance.to_dict()
# create an instance of LinkedForeignAccount from a dict
linked_foreign_account_from_dict = LinkedForeignAccount.from_dict(linked_foreign_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


