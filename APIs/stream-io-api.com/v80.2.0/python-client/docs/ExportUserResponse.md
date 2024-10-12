# ExportUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**messages** | [**List[Message]**](Message.md) |  | [optional] 
**reactions** | [**List[Reaction]**](Reaction.md) |  | [optional] 
**user** | [**UserObject**](UserObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_user_response import ExportUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ExportUserResponse from a JSON string
export_user_response_instance = ExportUserResponse.from_json(json)
# print the JSON string representation of the object
print(ExportUserResponse.to_json())

# convert the object into a dict
export_user_response_dict = export_user_response_instance.to_dict()
# create an instance of ExportUserResponse from a dict
export_user_response_from_dict = ExportUserResponse.from_dict(export_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


