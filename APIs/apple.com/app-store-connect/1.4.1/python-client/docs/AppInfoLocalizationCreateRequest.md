# AppInfoLocalizationCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppInfoLocalizationCreateRequestData**](AppInfoLocalizationCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_info_localization_create_request import AppInfoLocalizationCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoLocalizationCreateRequest from a JSON string
app_info_localization_create_request_instance = AppInfoLocalizationCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AppInfoLocalizationCreateRequest.to_json())

# convert the object into a dict
app_info_localization_create_request_dict = app_info_localization_create_request_instance.to_dict()
# create an instance of AppInfoLocalizationCreateRequest from a dict
app_info_localization_create_request_from_dict = AppInfoLocalizationCreateRequest.from_dict(app_info_localization_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


