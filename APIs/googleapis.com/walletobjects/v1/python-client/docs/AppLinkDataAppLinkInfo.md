# AppLinkDataAppLinkInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_logo_image** | [**Image**](Image.md) |  | [optional] 
**app_target** | [**AppLinkDataAppLinkInfoAppTarget**](AppLinkDataAppLinkInfoAppTarget.md) |  | [optional] 
**description** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**title** | [**LocalizedString**](LocalizedString.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_link_data_app_link_info import AppLinkDataAppLinkInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppLinkDataAppLinkInfo from a JSON string
app_link_data_app_link_info_instance = AppLinkDataAppLinkInfo.from_json(json)
# print the JSON string representation of the object
print(AppLinkDataAppLinkInfo.to_json())

# convert the object into a dict
app_link_data_app_link_info_dict = app_link_data_app_link_info_instance.to_dict()
# create an instance of AppLinkDataAppLinkInfo from a dict
app_link_data_app_link_info_from_dict = AppLinkDataAppLinkInfo.from_dict(app_link_data_app_link_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


