# CreateCallResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agora_app_id** | **str** |  | [optional] 
**agora_uid** | **int** |  | [optional] 
**call** | [**Call**](Call.md) |  | [optional] 
**duration** | **str** | Duration of the request in human-readable format | 
**token** | **str** |  | 

## Example

```python
from openapi_client.models.create_call_response import CreateCallResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCallResponse from a JSON string
create_call_response_instance = CreateCallResponse.from_json(json)
# print the JSON string representation of the object
print(CreateCallResponse.to_json())

# convert the object into a dict
create_call_response_dict = create_call_response_instance.to_dict()
# create an instance of CreateCallResponse from a dict
create_call_response_from_dict = CreateCallResponse.from_dict(create_call_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


