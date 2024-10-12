# LeadFormSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capture_form_enabled** | **bool** |  | [optional] 
**first_name_field_enabled** | **bool** |  | [optional] 
**first_name_field_required** | **bool** |  | [optional] 
**integration_enabled** | **bool** |  | [optional] 
**last_name_field_enabled** | **bool** |  | [optional] 
**last_name_field_required** | **bool** |  | [optional] 
**telephone_field_enabled** | **bool** |  | [optional] 
**telephone_field_required** | **bool** |  | [optional] 
**work_email_validation** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.lead_form_settings import LeadFormSettings

# TODO update the JSON string below
json = "{}"
# create an instance of LeadFormSettings from a JSON string
lead_form_settings_instance = LeadFormSettings.from_json(json)
# print the JSON string representation of the object
print(LeadFormSettings.to_json())

# convert the object into a dict
lead_form_settings_dict = lead_form_settings_instance.to_dict()
# create an instance of LeadFormSettings from a dict
lead_form_settings_from_dict = LeadFormSettings.from_dict(lead_form_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


