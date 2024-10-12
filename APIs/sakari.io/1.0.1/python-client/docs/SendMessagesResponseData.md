# SendMessagesResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimated_price** | **float** |  | [optional] 
**invalid** | [**List[Contact]**](Contact.md) |  | [optional] 
**job_id** | **str** |  | [optional] 
**messages** | [**List[Message]**](Message.md) |  | [optional] 
**requested** | **int** |  | [optional] 
**valid** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.send_messages_response_data import SendMessagesResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessagesResponseData from a JSON string
send_messages_response_data_instance = SendMessagesResponseData.from_json(json)
# print the JSON string representation of the object
print(SendMessagesResponseData.to_json())

# convert the object into a dict
send_messages_response_data_dict = send_messages_response_data_instance.to_dict()
# create an instance of SendMessagesResponseData from a dict
send_messages_response_data_from_dict = SendMessagesResponseData.from_dict(send_messages_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


