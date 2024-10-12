# AutoProvisioningSettingsListDefaultResponse

Error response structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**AutoProvisioningSettingsListDefaultResponseError**](AutoProvisioningSettingsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.auto_provisioning_settings_list_default_response import AutoProvisioningSettingsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AutoProvisioningSettingsListDefaultResponse from a JSON string
auto_provisioning_settings_list_default_response_instance = AutoProvisioningSettingsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(AutoProvisioningSettingsListDefaultResponse.to_json())

# convert the object into a dict
auto_provisioning_settings_list_default_response_dict = auto_provisioning_settings_list_default_response_instance.to_dict()
# create an instance of AutoProvisioningSettingsListDefaultResponse from a dict
auto_provisioning_settings_list_default_response_from_dict = AutoProvisioningSettingsListDefaultResponse.from_dict(auto_provisioning_settings_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


