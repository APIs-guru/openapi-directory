# AppInfoLocalizationAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**privacy_policy_text** | **str** |  | [optional] 
**privacy_policy_url** | **str** |  | [optional] 
**subtitle** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_info_localization_attributes import AppInfoLocalizationAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppInfoLocalizationAttributes from a JSON string
app_info_localization_attributes_instance = AppInfoLocalizationAttributes.from_json(json)
# print the JSON string representation of the object
print(AppInfoLocalizationAttributes.to_json())

# convert the object into a dict
app_info_localization_attributes_dict = app_info_localization_attributes_instance.to_dict()
# create an instance of AppInfoLocalizationAttributes from a dict
app_info_localization_attributes_from_dict = AppInfoLocalizationAttributes.from_dict(app_info_localization_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


