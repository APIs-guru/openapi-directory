# GetRepliesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** |  | 
**messages** | [**List[Message]**](Message.md) | List of messages | 

## Example

```python
from openapi_client.models.get_replies_response import GetRepliesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetRepliesResponse from a JSON string
get_replies_response_instance = GetRepliesResponse.from_json(json)
# print the JSON string representation of the object
print(GetRepliesResponse.to_json())

# convert the object into a dict
get_replies_response_dict = get_replies_response_instance.to_dict()
# create an instance of GetRepliesResponse from a dict
get_replies_response_from_dict = GetRepliesResponse.from_dict(get_replies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


