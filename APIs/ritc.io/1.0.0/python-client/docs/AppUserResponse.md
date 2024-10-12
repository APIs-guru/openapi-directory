# AppUserResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **str** | The date the user was created | [optional] 
**description** | **str** | Description of App User | [optional] 
**id** | **str** | Id of App User | [optional] 
**modified_date** | **str** | The date the user was modified | [optional] 
**name** | **str** | Display name of App User | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_user_response import AppUserResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppUserResponse from a JSON string
app_user_response_instance = AppUserResponse.from_json(json)
# print the JSON string representation of the object
print(AppUserResponse.to_json())

# convert the object into a dict
app_user_response_dict = app_user_response_instance.to_dict()
# create an instance of AppUserResponse from a dict
app_user_response_from_dict = AppUserResponse.from_dict(app_user_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


