# OutboundMessageDetailsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments** | [**List[Attachment]**](Attachment.md) |  | [optional] 
**bcc** | [**List[EmailNameAddressPair]**](EmailNameAddressPair.md) |  | [optional] 
**body** | **str** |  | [optional] 
**cc** | [**List[EmailNameAddressPair]**](EmailNameAddressPair.md) |  | [optional] 
**var_from** | **str** |  | [optional] 
**html_body** | **str** |  | [optional] 
**message_events** | [**List[MessageEventDetails]**](MessageEventDetails.md) |  | [optional] 
**message_id** | **str** |  | [optional] 
**received_at** | **datetime** |  | [optional] 
**recipients** | **List[str]** |  | [optional] 
**status** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 
**tag** | **str** |  | [optional] 
**text_body** | **str** |  | [optional] 
**to** | [**List[EmailNameAddressPair]**](EmailNameAddressPair.md) |  | [optional] 
**track_links** | **str** |  | [optional] 
**track_opens** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.outbound_message_details_response import OutboundMessageDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OutboundMessageDetailsResponse from a JSON string
outbound_message_details_response_instance = OutboundMessageDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(OutboundMessageDetailsResponse.to_json())

# convert the object into a dict
outbound_message_details_response_dict = outbound_message_details_response_instance.to_dict()
# create an instance of OutboundMessageDetailsResponse from a dict
outbound_message_details_response_from_dict = OutboundMessageDetailsResponse.from_dict(outbound_message_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


