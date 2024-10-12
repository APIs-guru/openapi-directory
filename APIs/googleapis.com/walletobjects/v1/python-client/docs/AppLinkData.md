# AppLinkData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**android_app_link_info** | [**AppLinkDataAppLinkInfo**](AppLinkDataAppLinkInfo.md) |  | [optional] 
**ios_app_link_info** | [**AppLinkDataAppLinkInfo**](AppLinkDataAppLinkInfo.md) |  | [optional] 
**web_app_link_info** | [**AppLinkDataAppLinkInfo**](AppLinkDataAppLinkInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_link_data import AppLinkData

# TODO update the JSON string below
json = "{}"
# create an instance of AppLinkData from a JSON string
app_link_data_instance = AppLinkData.from_json(json)
# print the JSON string representation of the object
print(AppLinkData.to_json())

# convert the object into a dict
app_link_data_dict = app_link_data_instance.to_dict()
# create an instance of AppLinkData from a dict
app_link_data_from_dict = AppLinkData.from_dict(app_link_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


