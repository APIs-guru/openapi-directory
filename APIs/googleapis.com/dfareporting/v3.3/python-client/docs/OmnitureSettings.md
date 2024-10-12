# OmnitureSettings

Omniture Integration Settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**omniture_cost_data_enabled** | **bool** | Whether placement cost data will be sent to Omniture. This property can be enabled only if omnitureIntegrationEnabled is true. | [optional] 
**omniture_integration_enabled** | **bool** | Whether Omniture integration is enabled. This property can be enabled only when the \&quot;Advanced Ad Serving\&quot; account setting is enabled. | [optional] 

## Example

```python
from openapi_client.models.omniture_settings import OmnitureSettings

# TODO update the JSON string below
json = "{}"
# create an instance of OmnitureSettings from a JSON string
omniture_settings_instance = OmnitureSettings.from_json(json)
# print the JSON string representation of the object
print(OmnitureSettings.to_json())

# convert the object into a dict
omniture_settings_dict = omniture_settings_instance.to_dict()
# create an instance of OmnitureSettings from a dict
omniture_settings_from_dict = OmnitureSettings.from_dict(omniture_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


