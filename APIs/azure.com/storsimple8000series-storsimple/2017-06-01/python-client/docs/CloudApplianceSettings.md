# CloudApplianceSettings

The cloud appliance settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel_integrity_key** | [**AsymmetricEncryptedSecret**](AsymmetricEncryptedSecret.md) |  | [optional] 
**service_data_encryption_key** | [**AsymmetricEncryptedSecret**](AsymmetricEncryptedSecret.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_appliance_settings import CloudApplianceSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CloudApplianceSettings from a JSON string
cloud_appliance_settings_instance = CloudApplianceSettings.from_json(json)
# print the JSON string representation of the object
print(CloudApplianceSettings.to_json())

# convert the object into a dict
cloud_appliance_settings_dict = cloud_appliance_settings_instance.to_dict()
# create an instance of CloudApplianceSettings from a dict
cloud_appliance_settings_from_dict = CloudApplianceSettings.from_dict(cloud_appliance_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


