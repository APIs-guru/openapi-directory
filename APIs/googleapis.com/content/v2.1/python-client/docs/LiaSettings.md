# LiaSettings

Local Inventory ads (LIA) settings. All methods except listposdataproviders require the admin role.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The ID of the account to which these LIA settings belong. Ignored upon update, always present in get request responses. | [optional] 
**country_settings** | [**List[LiaCountrySettings]**](LiaCountrySettings.md) | The LIA settings for each country. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#liaSettings&#x60;\&quot; | [optional] 

## Example

```python
from openapi_client.models.lia_settings import LiaSettings

# TODO update the JSON string below
json = "{}"
# create an instance of LiaSettings from a JSON string
lia_settings_instance = LiaSettings.from_json(json)
# print the JSON string representation of the object
print(LiaSettings.to_json())

# convert the object into a dict
lia_settings_dict = lia_settings_instance.to_dict()
# create an instance of LiaSettings from a dict
lia_settings_from_dict = LiaSettings.from_dict(lia_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


