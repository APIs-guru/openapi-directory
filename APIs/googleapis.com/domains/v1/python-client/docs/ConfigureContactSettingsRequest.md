# ConfigureContactSettingsRequest

Request for the `ConfigureContactSettings` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_notices** | **List[str]** | The list of contact notices that the caller acknowledges. The notices needed here depend on the values specified in &#x60;contact_settings&#x60;. | [optional] 
**contact_settings** | [**ContactSettings**](ContactSettings.md) |  | [optional] 
**update_mask** | **str** | Required. The field mask describing which fields to update as a comma-separated list. For example, if only the registrant contact is being updated, the &#x60;update_mask&#x60; is &#x60;\&quot;registrant_contact\&quot;&#x60;. | [optional] 
**validate_only** | **bool** | Validate the request without actually updating the contact settings. | [optional] 

## Example

```python
from openapi_client.models.configure_contact_settings_request import ConfigureContactSettingsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigureContactSettingsRequest from a JSON string
configure_contact_settings_request_instance = ConfigureContactSettingsRequest.from_json(json)
# print the JSON string representation of the object
print(ConfigureContactSettingsRequest.to_json())

# convert the object into a dict
configure_contact_settings_request_dict = configure_contact_settings_request_instance.to_dict()
# create an instance of ConfigureContactSettingsRequest from a dict
configure_contact_settings_request_from_dict = ConfigureContactSettingsRequest.from_dict(configure_contact_settings_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


