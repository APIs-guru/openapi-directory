# HmrcSettings

The employers' hmrc settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounting_office_ref** | **str** | The hmrc settingss&#39; accounting office ref | [optional] 
**cotax_ref** | **str** | The hmrc settingss&#39; c o t a x ref | [optional] 
**contact_email** | **str** | The hmrc settingss&#39; contact email | [optional] 
**contact_fax** | **str** | The hmrc settingss&#39; contact fax | [optional] 
**contact_first_name** | **str** | The hmrc settingss&#39; contact first name | [optional] 
**contact_last_name** | **str** | The hmrc settingss&#39; contact last name | [optional] 
**contact_telephone** | **str** | The hmrc settingss&#39; contact telephone | [optional] 
**employment_allowance_override** | **float** | The hmrc settingss&#39; employment allowance override | [optional] 
**password** | **str** | The hmrc settingss&#39; password | [optional] 
**sautr** | **str** | The hmrc settingss&#39; s a u t r | [optional] 
**sender** | **str** | The hmrc settingss&#39; sender | [optional] 
**sender_id** | **str** | The hmrc settingss&#39; sender id | [optional] 
**state_aid_sector** | **str** | The hmrc settingss&#39; state aid sector | [optional] 
**tax_office_number** | **str** | The hmrc settingss&#39; tax office number | [optional] 
**tax_office_reference** | **str** | The hmrc settingss&#39; tax office reference | [optional] 

## Example

```python
from openapi_client.models.hmrc_settings import HmrcSettings

# TODO update the JSON string below
json = "{}"
# create an instance of HmrcSettings from a JSON string
hmrc_settings_instance = HmrcSettings.from_json(json)
# print the JSON string representation of the object
print(HmrcSettings.to_json())

# convert the object into a dict
hmrc_settings_dict = hmrc_settings_instance.to_dict()
# create an instance of HmrcSettings from a dict
hmrc_settings_from_dict = HmrcSettings.from_dict(hmrc_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


