# AppRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A short text describing the app | [optional] 
**display_name** | **str** | The descriptive name of the app. This can contain any characters | 
**name** | **str** | The name of the app used in URLs | [optional] 
**os** | **str** | The OS the app will be running on | 
**platform** | **str** | The platform of the app | 
**release_type** | **str** | A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase | [optional] 

## Example

```python
from openapi_client.models.app_request import AppRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppRequest from a JSON string
app_request_instance = AppRequest.from_json(json)
# print the JSON string representation of the object
print(AppRequest.to_json())

# convert the object into a dict
app_request_dict = app_request_instance.to_dict()
# create an instance of AppRequest from a dict
app_request_from_dict = AppRequest.from_dict(app_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


