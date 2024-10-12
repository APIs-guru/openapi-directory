# AppPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A short text describing the app | [optional] 
**display_name** | **str** | The display name of the app | [optional] 
**icon_asset_id** | **str** | The uuid for the icon&#39;s asset id from ACFUS | [optional] 
**icon_url** | **str** | The string representation of the URL pointing to the app&#39;s icon | [optional] 
**name** | **str** | The name of the app used in URLs | [optional] 
**release_type** | **str** | A one-word descriptive release type value that starts with a capital letter but is otherwise lowercase | [optional] 

## Example

```python
from openapi_client.models.app_patch_request import AppPatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppPatchRequest from a JSON string
app_patch_request_instance = AppPatchRequest.from_json(json)
# print the JSON string representation of the object
print(AppPatchRequest.to_json())

# convert the object into a dict
app_patch_request_dict = app_patch_request_instance.to_dict()
# create an instance of AppPatchRequest from a dict
app_patch_request_from_dict = AppPatchRequest.from_dict(app_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


