# AdminSettingsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**median** | **int** |  | [optional] 
**sigma** | **float** |  | [optional] 
**type** | **str** |  | [optional] 
**lower** | **int** |  | [optional] 
**upper** | **int** |  | [optional] 
**fixed_delay** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.admin_settings_post_request import AdminSettingsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AdminSettingsPostRequest from a JSON string
admin_settings_post_request_instance = AdminSettingsPostRequest.from_json(json)
# print the JSON string representation of the object
print(AdminSettingsPostRequest.to_json())

# convert the object into a dict
admin_settings_post_request_dict = admin_settings_post_request_instance.to_dict()
# create an instance of AdminSettingsPostRequest from a dict
admin_settings_post_request_from_dict = AdminSettingsPostRequest.from_dict(admin_settings_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


