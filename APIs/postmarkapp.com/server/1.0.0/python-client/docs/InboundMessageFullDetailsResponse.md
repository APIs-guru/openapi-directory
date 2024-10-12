# InboundMessageFullDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) |  | [optional] 
**blocked_reason** | **str** |  | [optional] 
**cc** | **str** |  | [optional] 
**cc_full** | [**List[EmailNameAddressPair]**](EmailNameAddressPair.md) |  | [optional] 
**var_date** | **str** |  | [optional] 
**var_from** | **str** |  | [optional] 
**from_full** | [**InboundMessageDetailFromFull**](InboundMessageDetailFromFull.md) |  | [optional] 
**from_name** | **str** |  | [optional] 
**headers** | [**List[MessageHeader]**](MessageHeader.md) |  | [optional] 
**html_body** | **str** |  | [optional] 
**mailbox_hash** | **str** |  | [optional] 
**message_id** | **str** |  | [optional] 
**original_recipient** | **str** |  | [optional] 
**reply_to** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 
**tag** | **str** |  | [optional] 
**text_body** | **str** |  | [optional] 
**to** | **str** |  | [optional] 
**to_full** | [**List[EmailNameAddressPair]**](EmailNameAddressPair.md) |  | [optional] 

## Example

```python
from openapi_client.models.inbound_message_full_details_response import InboundMessageFullDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InboundMessageFullDetailsResponse from a JSON string
inbound_message_full_details_response_instance = InboundMessageFullDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(InboundMessageFullDetailsResponse.to_json())

# convert the object into a dict
inbound_message_full_details_response_dict = inbound_message_full_details_response_instance.to_dict()
# create an instance of InboundMessageFullDetailsResponse from a dict
inbound_message_full_details_response_from_dict = InboundMessageFullDetailsResponse.from_dict(inbound_message_full_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


