# AppInfoLocalizationUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppInfoLocalizationUpdateRequestDataAttributes**](AppInfoLocalizationUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_info_localization_update_request_data import AppInfoLocalizationUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoLocalizationUpdateRequestData from a JSON string
app_info_localization_update_request_data_instance = AppInfoLocalizationUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppInfoLocalizationUpdateRequestData.to_json())

# convert the object into a dict
app_info_localization_update_request_data_dict = app_info_localization_update_request_data_instance.to_dict()
# create an instance of AppInfoLocalizationUpdateRequestData from a dict
app_info_localization_update_request_data_from_dict = AppInfoLocalizationUpdateRequestData.from_dict(app_info_localization_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


