# MessagesInfoResponseOpensDetailInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**ts** | **int** |  | [optional] 
**ua** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.messages_info_response_opens_detail_inner import MessagesInfoResponseOpensDetailInner

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesInfoResponseOpensDetailInner from a JSON string
messages_info_response_opens_detail_inner_instance = MessagesInfoResponseOpensDetailInner.from_json(json)
# print the JSON string representation of the object
print(MessagesInfoResponseOpensDetailInner.to_json())

# convert the object into a dict
messages_info_response_opens_detail_inner_dict = messages_info_response_opens_detail_inner_instance.to_dict()
# create an instance of MessagesInfoResponseOpensDetailInner from a dict
messages_info_response_opens_detail_inner_from_dict = MessagesInfoResponseOpensDetailInner.from_dict(messages_info_response_opens_detail_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


