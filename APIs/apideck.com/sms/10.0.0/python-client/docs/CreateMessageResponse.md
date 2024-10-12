# CreateMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UnifiedId**](UnifiedId.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.create_message_response import CreateMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateMessageResponse from a JSON string
create_message_response_instance = CreateMessageResponse.from_json(json)
# print the JSON string representation of the object
print(CreateMessageResponse.to_json())

# convert the object into a dict
create_message_response_dict = create_message_response_instance.to_dict()
# create an instance of CreateMessageResponse from a dict
create_message_response_from_dict = CreateMessageResponse.from_dict(create_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


