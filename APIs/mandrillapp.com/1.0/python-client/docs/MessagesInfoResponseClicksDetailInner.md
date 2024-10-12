# MessagesInfoResponseClicksDetailInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**ts** | **int** |  | [optional] 
**ua** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.messages_info_response_clicks_detail_inner import MessagesInfoResponseClicksDetailInner

# TODO update the JSON string below
json = "{}"
# create an instance of MessagesInfoResponseClicksDetailInner from a JSON string
messages_info_response_clicks_detail_inner_instance = MessagesInfoResponseClicksDetailInner.from_json(json)
# print the JSON string representation of the object
print(MessagesInfoResponseClicksDetailInner.to_json())

# convert the object into a dict
messages_info_response_clicks_detail_inner_dict = messages_info_response_clicks_detail_inner_instance.to_dict()
# create an instance of MessagesInfoResponseClicksDetailInner from a dict
messages_info_response_clicks_detail_inner_from_dict = MessagesInfoResponseClicksDetailInner.from_dict(messages_info_response_clicks_detail_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


