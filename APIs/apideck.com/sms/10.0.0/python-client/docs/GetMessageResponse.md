# GetMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Message**](Message.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_message_response import GetMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetMessageResponse from a JSON string
get_message_response_instance = GetMessageResponse.from_json(json)
# print the JSON string representation of the object
print(GetMessageResponse.to_json())

# convert the object into a dict
get_message_response_dict = get_message_response_instance.to_dict()
# create an instance of GetMessageResponse from a dict
get_message_response_from_dict = GetMessageResponse.from_dict(get_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


