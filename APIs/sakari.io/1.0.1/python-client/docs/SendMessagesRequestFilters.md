# SendMessagesRequestFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **List[object]** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.send_messages_request_filters import SendMessagesRequestFilters

# TODO update the JSON string below
json = "{}"
# create an instance of SendMessagesRequestFilters from a JSON string
send_messages_request_filters_instance = SendMessagesRequestFilters.from_json(json)
# print the JSON string representation of the object
print(SendMessagesRequestFilters.to_json())

# convert the object into a dict
send_messages_request_filters_dict = send_messages_request_filters_instance.to_dict()
# create an instance of SendMessagesRequestFilters from a dict
send_messages_request_filters_from_dict = SendMessagesRequestFilters.from_dict(send_messages_request_filters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


