# LiaAboutPageSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The status of the verification process for the About page. Acceptable values are: - \&quot;&#x60;active&#x60;\&quot; - \&quot;&#x60;inactive&#x60;\&quot; - \&quot;&#x60;pending&#x60;\&quot;  | [optional] 
**url** | **str** | The URL for the About page. | [optional] 

## Example

```python
from openapi_client.models.lia_about_page_settings import LiaAboutPageSettings

# TODO update the JSON string below
json = "{}"
# create an instance of LiaAboutPageSettings from a JSON string
lia_about_page_settings_instance = LiaAboutPageSettings.from_json(json)
# print the JSON string representation of the object
print(LiaAboutPageSettings.to_json())

# convert the object into a dict
lia_about_page_settings_dict = lia_about_page_settings_instance.to_dict()
# create an instance of LiaAboutPageSettings from a dict
lia_about_page_settings_from_dict = LiaAboutPageSettings.from_dict(lia_about_page_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


