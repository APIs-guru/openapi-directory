# CTASettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | **str** |  | [optional] 
**button_background_color** | **str** |  | [optional] 
**button_color** | **str** |  | [optional] 
**button_label** | **str** |  | [optional] 
**button_link** | **str** |  | [optional] 
**color** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**enabled** | **bool** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cta_settings import CTASettings

# TODO update the JSON string below
json = "{}"
# create an instance of CTASettings from a JSON string
cta_settings_instance = CTASettings.from_json(json)
# print the JSON string representation of the object
print(CTASettings.to_json())

# convert the object into a dict
cta_settings_dict = cta_settings_instance.to_dict()
# create an instance of CTASettings from a dict
cta_settings_from_dict = CTASettings.from_dict(cta_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


