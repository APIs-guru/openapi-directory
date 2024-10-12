# AppInfoLocalizationUpdateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**privacy_policy_text** | **str** |  | [optional] 
**privacy_policy_url** | **str** |  | [optional] 
**subtitle** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_info_localization_update_request_data_attributes import AppInfoLocalizationUpdateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoLocalizationUpdateRequestDataAttributes from a JSON string
app_info_localization_update_request_data_attributes_instance = AppInfoLocalizationUpdateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(AppInfoLocalizationUpdateRequestDataAttributes.to_json())

# convert the object into a dict
app_info_localization_update_request_data_attributes_dict = app_info_localization_update_request_data_attributes_instance.to_dict()
# create an instance of AppInfoLocalizationUpdateRequestDataAttributes from a dict
app_info_localization_update_request_data_attributes_from_dict = AppInfoLocalizationUpdateRequestDataAttributes.from_dict(app_info_localization_update_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


