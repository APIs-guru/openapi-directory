# EnterpriseTopazSidekickGetAndKeepAheadCardProto

Get and keep ahead card

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**declined_events** | [**EnterpriseTopazSidekickGetAndKeepAheadCardProtoDeclinedEvents**](EnterpriseTopazSidekickGetAndKeepAheadCardProtoDeclinedEvents.md) |  | [optional] 
**mentioned_documents** | [**EnterpriseTopazSidekickDocumentPerCategoryList**](EnterpriseTopazSidekickDocumentPerCategoryList.md) |  | [optional] 
**shared_documents** | [**EnterpriseTopazSidekickDocumentPerCategoryList**](EnterpriseTopazSidekickDocumentPerCategoryList.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_topaz_sidekick_get_and_keep_ahead_card_proto import EnterpriseTopazSidekickGetAndKeepAheadCardProto

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseTopazSidekickGetAndKeepAheadCardProto from a JSON string
enterprise_topaz_sidekick_get_and_keep_ahead_card_proto_instance = EnterpriseTopazSidekickGetAndKeepAheadCardProto.from_json(json)
# print the JSON string representation of the object
print(EnterpriseTopazSidekickGetAndKeepAheadCardProto.to_json())

# convert the object into a dict
enterprise_topaz_sidekick_get_and_keep_ahead_card_proto_dict = enterprise_topaz_sidekick_get_and_keep_ahead_card_proto_instance.to_dict()
# create an instance of EnterpriseTopazSidekickGetAndKeepAheadCardProto from a dict
enterprise_topaz_sidekick_get_and_keep_ahead_card_proto_from_dict = EnterpriseTopazSidekickGetAndKeepAheadCardProto.from_dict(enterprise_topaz_sidekick_get_and_keep_ahead_card_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


