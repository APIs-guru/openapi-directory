# AppInfoLocalizationUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppInfoLocalizationUpdateRequestData**](AppInfoLocalizationUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_info_localization_update_request import AppInfoLocalizationUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoLocalizationUpdateRequest from a JSON string
app_info_localization_update_request_instance = AppInfoLocalizationUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(AppInfoLocalizationUpdateRequest.to_json())

# convert the object into a dict
app_info_localization_update_request_dict = app_info_localization_update_request_instance.to_dict()
# create an instance of AppInfoLocalizationUpdateRequest from a dict
app_info_localization_update_request_from_dict = AppInfoLocalizationUpdateRequest.from_dict(app_info_localization_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


