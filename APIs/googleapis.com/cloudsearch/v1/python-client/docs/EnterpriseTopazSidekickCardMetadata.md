# EnterpriseTopazSidekickCardMetadata

Card metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**card_category** | **str** | Declares a preference for how this card should be packed in MSCR. All cards in a response must correspond to a single category. As a result, cards may be dropped from the response if this field is set. Any card that does not match the category of the card with the highest priority in the response will be dropped. | [optional] 
**card_id** | **str** | An ID to identify the card and match actions to it. Be thoughtful of new card IDs since actions will be associated to that ID. E.g., if two card IDs collide, the system will think that the actions have been applied to the same card. Similarly, if EAS can return multiple cards of the same type (e.g., Meetings), ensure that the card_id identifies a given instance of the card so that, e.g., dismissals only affect the dismissed card as opposed to affecting all meeting cards. | [optional] 
**chronology** | **str** | Chronology. | [optional] 
**debug_info** | **str** | Debug info (only reported if request&#39;s debug_level &gt; 0). | [optional] 
**nlp_metadata** | [**EnterpriseTopazSidekickNlpMetadata**](EnterpriseTopazSidekickNlpMetadata.md) |  | [optional] 
**ranking_params** | [**EnterpriseTopazSidekickRankingParams**](EnterpriseTopazSidekickRankingParams.md) |  | [optional] 
**render_mode** | **str** | Render mode. | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_card_metadata import EnterpriseTopazSidekickCardMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickCardMetadata from a JSON string
enterprise_topaz_sidekick_card_metadata_instance = EnterpriseTopazSidekickCardMetadata.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickCardMetadata.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_card_metadata_dict = enterprise_topaz_sidekick_card_metadata_instance.to_dict()
# create an instance of EnterpriseTopazSidekickCardMetadata from a dict
enterprise_topaz_sidekick_card_metadata_from_dict = EnterpriseTopazSidekickCardMetadata.from_dict(enterprise_topaz_sidekick_card_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


