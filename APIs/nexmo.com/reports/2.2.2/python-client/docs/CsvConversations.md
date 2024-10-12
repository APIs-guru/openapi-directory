# CsvConversations

Conversations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID (API key) you wish to search for. This can differ from the API key in the authorization header because some accounts can request reports for other accounts, e.g. a primary account owner wants to create a report for one of its subaccounts. | [optional] 
**application_id** | **str** | Search only for requests attached to a particular Application ID. | [optional] 
**client_ref** | **str** | Search for messages with this &#x60;client_ref&#x60;. | [optional] 
**conversation_id** | **str** | Search only for events sent to this particular Conversation. This should include the \&quot;CON-\&quot; prefix. | [optional] 
**creation_date** | **date** | Date the event was created. | [optional] 
**currency** | **str** | Currency of the price of the request. | [optional] 
**id** | **str** | Id of the related CDR. | [optional] 
**price** | **str** | Price of the request. | [optional] 
**request_id** | **str** | UUID of the request. | [optional] 
**total_price** | **str** | Total price of the request. | [optional] 
**user_id** | **str** | User id in the conversation. | [optional] 

## Example

```python
from openapi_client.models.csv_conversations import CsvConversations

# TODO update the JSON string below
json = "{}"
# create an instance of CsvConversations from a JSON string
csv_conversations_instance = CsvConversations.from_json(json)
# print the JSON string representation of the object
print(CsvConversations.to_json())

# convert the object into a dict
csv_conversations_dict = csv_conversations_instance.to_dict()
# create an instance of CsvConversations from a dict
csv_conversations_from_dict = CsvConversations.from_dict(csv_conversations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


