# AppInfoLocalizationCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppInfoLocalizationCreateRequestDataAttributes**](AppInfoLocalizationCreateRequestDataAttributes.md) |  | 
**relationships** | [**AppInfoLocalizationCreateRequestDataRelationships**](AppInfoLocalizationCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_info_localization_create_request_data import AppInfoLocalizationCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoLocalizationCreateRequestData from a JSON string
app_info_localization_create_request_data_instance = AppInfoLocalizationCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppInfoLocalizationCreateRequestData.to_json())

# convert the object into a dict
app_info_localization_create_request_data_dict = app_info_localization_create_request_data_instance.to_dict()
# create an instance of AppInfoLocalizationCreateRequestData from a dict
app_info_localization_create_request_data_from_dict = AppInfoLocalizationCreateRequestData.from_dict(app_info_localization_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


