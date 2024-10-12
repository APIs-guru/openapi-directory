# OutboundMessageDetail



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) |  | [optional] 
**bcc** | [**List[EmailNameAddressPair]**](EmailNameAddressPair.md) |  | [optional] 
**cc** | [**List[EmailNameAddressPair]**](EmailNameAddressPair.md) |  | [optional] 
**var_from** | **str** |  | [optional] 
**message_id** | **str** |  | [optional] 
**received_at** | **datetime** |  | [optional] 
**recipients** | **List[str]** |  | [optional] 
**status** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 
**tag** | **str** |  | [optional] 
**to** | [**List[EmailNameAddressPair]**](EmailNameAddressPair.md) |  | [optional] 
**track_links** | **str** |  | [optional] 
**track_opens** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.outbound_message_detail import OutboundMessageDetail

# TODO update the JSON string below
json = "{}"
# create an instance of OutboundMessageDetail from a JSON string
outbound_message_detail_instance = OutboundMessageDetail.from_json(json)
# print the JSON string representation of the object
print(OutboundMessageDetail.to_json())

# convert the object into a dict
outbound_message_detail_dict = outbound_message_detail_instance.to_dict()
# create an instance of OutboundMessageDetail from a dict
outbound_message_detail_from_dict = OutboundMessageDetail.from_dict(outbound_message_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


