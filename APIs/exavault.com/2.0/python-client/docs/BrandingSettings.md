# BrandingSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** |  | [optional] 
**custom_email** | **str** |  | [optional] 
**logo** | **str** |  | [optional] 
**logo_ext** | **str** |  | [optional] 
**theme** | **str** |  | [optional] 
**verified_domain** | **str** |  | [optional] 
**verified_domain_id** | **str** |  | [optional] 
**verified_domain_valid** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.branding_settings import BrandingSettings

# TODO update the JSON string below
json = "{}"
# create an instance of BrandingSettings from a JSON string
branding_settings_instance = BrandingSettings.from_json(json)
# print the JSON string representation of the object
print(BrandingSettings.to_json())

# convert the object into a dict
branding_settings_dict = branding_settings_instance.to_dict()
# create an instance of BrandingSettings from a dict
branding_settings_from_dict = BrandingSettings.from_dict(branding_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


