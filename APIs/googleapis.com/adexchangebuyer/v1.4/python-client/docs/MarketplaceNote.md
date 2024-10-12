# MarketplaceNote

A proposal is associated with a bunch of notes which may optionally be associated with a deal and/or revision number.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creator_role** | **str** | The role of the person (buyer/seller) creating the note. (readonly) | [optional] 
**deal_id** | **str** | Notes can optionally be associated with a deal. (readonly, except on create) | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;adexchangebuyer#marketplaceNote\&quot;. | [optional] [default to 'adexchangebuyer#marketplaceNote']
**note** | **str** | The actual note to attach. (readonly, except on create) | [optional] 
**note_id** | **str** | The unique id for the note. (readonly) | [optional] 
**proposal_id** | **str** | The proposalId that a note is attached to. (readonly) | [optional] 
**proposal_revision_number** | **str** | If the note is associated with a proposal revision number, then store that here. (readonly, except on create) | [optional] 
**timestamp_ms** | **str** | The timestamp (ms since epoch) that this note was created. (readonly) | [optional] 

## Example

```python
from openapi_client.models.marketplace_note import MarketplaceNote

# TODO update the JSON string below
json = "{}"
# create an instance of MarketplaceNote from a JSON string
marketplace_note_instance = MarketplaceNote.from_json(json)
# print the JSON string representation of the object
print(MarketplaceNote.to_json())

# convert the object into a dict
marketplace_note_dict = marketplace_note_instance.to_dict()
# create an instance of MarketplaceNote from a dict
marketplace_note_from_dict = MarketplaceNote.from_dict(marketplace_note_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


