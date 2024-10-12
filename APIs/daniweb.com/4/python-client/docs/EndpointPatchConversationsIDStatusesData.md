# EndpointPatchConversationsIDStatusesData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived_status** | **bool** |  | [optional] 
**conversation** | [**Conversation**](Conversation.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_patch_conversations_id_statuses_data import EndpointPatchConversationsIDStatusesData

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPatchConversationsIDStatusesData from a JSON string
endpoint_patch_conversations_id_statuses_data_instance = EndpointPatchConversationsIDStatusesData.from_json(json)
# print the JSON string representation of the object
print(EndpointPatchConversationsIDStatusesData.to_json())

# convert the object into a dict
endpoint_patch_conversations_id_statuses_data_dict = endpoint_patch_conversations_id_statuses_data_instance.to_dict()
# create an instance of EndpointPatchConversationsIDStatusesData from a dict
endpoint_patch_conversations_id_statuses_data_from_dict = EndpointPatchConversationsIDStatusesData.from_dict(endpoint_patch_conversations_id_statuses_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


