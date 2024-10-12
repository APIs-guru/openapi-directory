# AppLinkDataAppLinkInfoAppTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_name** | **str** | Package name for AppTarget. For example: com.google.android.gm | [optional] 
**target_uri** | [**Uri**](Uri.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_link_data_app_link_info_app_target import AppLinkDataAppLinkInfoAppTarget

# TODO update the JSON string below
json = "{}"
# create an instance of AppLinkDataAppLinkInfoAppTarget from a JSON string
app_link_data_app_link_info_app_target_instance = AppLinkDataAppLinkInfoAppTarget.from_json(json)
# print the JSON string representation of the object
print(AppLinkDataAppLinkInfoAppTarget.to_json())

# convert the object into a dict
app_link_data_app_link_info_app_target_dict = app_link_data_app_link_info_app_target_instance.to_dict()
# create an instance of AppLinkDataAppLinkInfoAppTarget from a dict
app_link_data_app_link_info_app_target_from_dict = AppLinkDataAppLinkInfoAppTarget.from_dict(app_link_data_app_link_info_app_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


