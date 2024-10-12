# PrepaidSettingsInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**top_up_amount** | **int** |  | [optional] 
**top_up_enabled** | **bool** |  | [optional] 
**top_up_limit** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.prepaid_settings_info import PrepaidSettingsInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PrepaidSettingsInfo from a JSON string
prepaid_settings_info_instance = PrepaidSettingsInfo.from_json(json)
# print the JSON string representation of the object
print(PrepaidSettingsInfo.to_json())

# convert the object into a dict
prepaid_settings_info_dict = prepaid_settings_info_instance.to_dict()
# create an instance of PrepaidSettingsInfo from a dict
prepaid_settings_info_from_dict = PrepaidSettingsInfo.from_dict(prepaid_settings_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


