# AppGroupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name of the app | [optional] 
**group_id** | **str** | The unique ID (UUID) of the group that the app belongs to | 
**id** | **str** | The unique ID (UUID) of the app | 
**name** | **str** | The name of the app used in URLs | 
**os** | **str** | The OS the app will be running on | 
**platform** | **str** | The platform of the app | 
**release_type** | **str** | A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase | [optional] 

## Example

```python
from openapi_client.models.app_group_response import AppGroupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppGroupResponse from a JSON string
app_group_response_instance = AppGroupResponse.from_json(json)
# print the JSON string representation of the object
print(AppGroupResponse.to_json())

# convert the object into a dict
app_group_response_dict = app_group_response_instance.to_dict()
# create an instance of AppGroupResponse from a dict
app_group_response_from_dict = AppGroupResponse.from_dict(app_group_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


