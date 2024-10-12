# EnterpriseTopazSidekickAssistCardProto

Wrapper proto for the Assist cards.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agenda_group_card_proto** | [**EnterpriseTopazSidekickAgendaGroupCardProto**](EnterpriseTopazSidekickAgendaGroupCardProto.md) |  | [optional] 
**card_metadata** | [**EnterpriseTopazSidekickCardMetadata**](EnterpriseTopazSidekickCardMetadata.md) |  | [optional] 
**card_type** | **str** | Card type. | [optional] 
**conflicting_meetings_card** | [**EnterpriseTopazSidekickConflictingEventsCardProto**](EnterpriseTopazSidekickConflictingEventsCardProto.md) |  | [optional] 
**document_list_card** | [**EnterpriseTopazSidekickDocumentPerCategoryList**](EnterpriseTopazSidekickDocumentPerCategoryList.md) |  | [optional] 
**documents_with_mentions** | [**EnterpriseTopazSidekickDocumentPerCategoryList**](EnterpriseTopazSidekickDocumentPerCategoryList.md) |  | [optional] 
**find_meeting_time_card** | [**EnterpriseTopazSidekickFindMeetingTimeCardProto**](EnterpriseTopazSidekickFindMeetingTimeCardProto.md) |  | [optional] 
**generic_answer_card** | [**EnterpriseTopazSidekickGenericAnswerCard**](EnterpriseTopazSidekickGenericAnswerCard.md) |  | [optional] 
**get_and_keep_ahead_card** | [**EnterpriseTopazSidekickGetAndKeepAheadCardProto**](EnterpriseTopazSidekickGetAndKeepAheadCardProto.md) |  | [optional] 
**meeting** | [**EnterpriseTopazSidekickAgendaEntry**](EnterpriseTopazSidekickAgendaEntry.md) |  | [optional] 
**meeting_notes_card** | [**EnterpriseTopazSidekickMeetingNotesCardProto**](EnterpriseTopazSidekickMeetingNotesCardProto.md) |  | [optional] 
**meeting_notes_card_request** | [**EnterpriseTopazSidekickMeetingNotesCardRequest**](EnterpriseTopazSidekickMeetingNotesCardRequest.md) |  | [optional] 
**people_disambiguation_card** | [**EnterpriseTopazSidekickPeopleDisambiguationCard**](EnterpriseTopazSidekickPeopleDisambiguationCard.md) |  | [optional] 
**people_promotion_card** | [**PeoplePromotionCard**](PeoplePromotionCard.md) |  | [optional] 
**person_answer_card** | [**EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard**](EnterpriseTopazSidekickPeopleAnswerPersonAnswerCard.md) |  | [optional] 
**person_profile_card** | [**EnterpriseTopazSidekickPersonProfileCard**](EnterpriseTopazSidekickPersonProfileCard.md) |  | [optional] 
**personalized_docs_card** | [**EnterpriseTopazSidekickPersonalizedDocsCardProto**](EnterpriseTopazSidekickPersonalizedDocsCardProto.md) |  | [optional] 
**related_people_answer_card** | [**EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard**](EnterpriseTopazSidekickPeopleAnswerRelatedPeopleAnswerCard.md) |  | [optional] 
**share_meeting_docs_card** | [**EnterpriseTopazSidekickShareMeetingDocsCardProto**](EnterpriseTopazSidekickShareMeetingDocsCardProto.md) |  | [optional] 
**shared_documents** | [**EnterpriseTopazSidekickDocumentPerCategoryList**](EnterpriseTopazSidekickDocumentPerCategoryList.md) |  | [optional] 
**suggested_query_answer_card** | [**EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard**](EnterpriseTopazSidekickAnswerSuggestedQueryAnswerCard.md) |  | [optional] 
**third_party_answer_card** | [**ThirdPartyGenericCard**](ThirdPartyGenericCard.md) |  | [optional] 
**work_in_progress_card_proto** | [**EnterpriseTopazSidekickRecentDocumentsCardProto**](EnterpriseTopazSidekickRecentDocumentsCardProto.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_assist_card_proto import EnterpriseTopazSidekickAssistCardProto

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickAssistCardProto from a JSON string
enterprise_topaz_sidekick_assist_card_proto_instance = EnterpriseTopazSidekickAssistCardProto.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickAssistCardProto.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_assist_card_proto_dict = enterprise_topaz_sidekick_assist_card_proto_instance.to_dict()
# create an instance of EnterpriseTopazSidekickAssistCardProto from a dict
enterprise_topaz_sidekick_assist_card_proto_from_dict = EnterpriseTopazSidekickAssistCardProto.from_dict(enterprise_topaz_sidekick_assist_card_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


