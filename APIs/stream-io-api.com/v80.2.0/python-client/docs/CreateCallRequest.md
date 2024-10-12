# CreateCallRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**options** | **Dict[str, object]** |  | [optional] 
**type** | **str** |  | 
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** | **Server-side only**. User ID which server acts upon | [optional] 

## Example

```python
from openapi_client.models.create_call_request import CreateCallRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCallRequest from a JSON string
create_call_request_instance = CreateCallRequest.from_json(json)
# print the JSON string representation of the object
print(CreateCallRequest.to_json())

# convert the object into a dict
create_call_request_dict = create_call_request_instance.to_dict()
# create an instance of CreateCallRequest from a dict
create_call_request_from_dict = CreateCallRequest.from_dict(create_call_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


