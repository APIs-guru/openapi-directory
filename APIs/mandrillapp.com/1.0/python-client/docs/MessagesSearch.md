# MessagesSearch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_keys** | **List[str]** |  | [optional] 
**date_from** | **str** |  | [optional] 
**date_to** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**limit** | **int** |  | [optional] 
**query** | **str** |  | [optional] 
**senders** | **List[str]** |  | [optional] 
**tags** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.messages_search import MessagesSearch

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesSearch from a JSON string
messages_search_instance = MessagesSearch.from_json(json)
# print the JSON string representation of the object
print(MessagesSearch.to_json())

# convert the object into a dict
messages_search_dict = messages_search_instance.to_dict()
# create an instance of MessagesSearch from a dict
messages_search_from_dict = MessagesSearch.from_dict(messages_search_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


