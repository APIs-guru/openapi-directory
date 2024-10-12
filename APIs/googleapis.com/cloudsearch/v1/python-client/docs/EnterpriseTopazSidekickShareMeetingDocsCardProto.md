# EnterpriseTopazSidekickShareMeetingDocsCardProto

Share meeting docs card proto.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**document** | [**List[EnterpriseTopazSidekickCommonDocument]**](EnterpriseTopazSidekickCommonDocument.md) | Documents to share for the given meeting. | [optional] 
**event** | [**EnterpriseTopazSidekickAgendaEntry**](EnterpriseTopazSidekickAgendaEntry.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_share_meeting_docs_card_proto import EnterpriseTopazSidekickShareMeetingDocsCardProto

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickShareMeetingDocsCardProto from a JSON string
enterprise_topaz_sidekick_share_meeting_docs_card_proto_instance = EnterpriseTopazSidekickShareMeetingDocsCardProto.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickShareMeetingDocsCardProto.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_share_meeting_docs_card_proto_dict = enterprise_topaz_sidekick_share_meeting_docs_card_proto_instance.to_dict()
# create an instance of EnterpriseTopazSidekickShareMeetingDocsCardProto from a dict
enterprise_topaz_sidekick_share_meeting_docs_card_proto_from_dict = EnterpriseTopazSidekickShareMeetingDocsCardProto.from_dict(enterprise_topaz_sidekick_share_meeting_docs_card_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


