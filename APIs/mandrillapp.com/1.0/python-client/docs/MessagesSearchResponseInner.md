# MessagesSearchResponseInner


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
**state** | **str** |  | [optional] 
**subject** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**template** | **str** |  | [optional] 
**ts** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.messages_search_response_inner import MessagesSearchResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesSearchResponseInner from a JSON string
messages_search_response_inner_instance = MessagesSearchResponseInner.from_json(json)
# print the JSON string representation of the object
print(MessagesSearchResponseInner.to_json())

# convert the object into a dict
messages_search_response_inner_dict = messages_search_response_inner_instance.to_dict()
# create an instance of MessagesSearchResponseInner from a dict
messages_search_response_inner_from_dict = MessagesSearchResponseInner.from_dict(messages_search_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


