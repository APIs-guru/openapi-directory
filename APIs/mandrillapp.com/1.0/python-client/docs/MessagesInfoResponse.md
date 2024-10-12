# MessagesInfoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**clicks** | **int** |  | [optional] 
**clicks_detail** | [**List[MessagesInfoResponseClicksDetailInner]**](MessagesInfoResponseClicksDetailInner.md) |  | [optional] 
**email** | **str** |  | [optional] 
**metadata** | [**MessagesInfoResponseMetadata**](MessagesInfoResponseMetadata.md) |  | [optional] 
**opens** | **int** |  | [optional] 
**opens_detail** | [**List[MessagesInfoResponseOpensDetailInner]**](MessagesInfoResponseOpensDetailInner.md) |  | [optional] 
**sender** | **str** |  | [optional] 
**smtp_events** | [**List[MessagesInfoResponseSmtpEventsInner]**](MessagesInfoResponseSmtpEventsInner.md) |  | [optional] 
**state** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**template** | **str** |  | [optional] 
**ts** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.messages_info_response import MessagesInfoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesInfoResponse from a JSON string
messages_info_response_instance = MessagesInfoResponse.from_json(json)
# print the JSON string representation of the object
print(MessagesInfoResponse.to_json())

# convert the object into a dict
messages_info_response_dict = messages_info_response_instance.to_dict()
# create an instance of MessagesInfoResponse from a dict
messages_info_response_from_dict = MessagesInfoResponse.from_dict(messages_info_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


