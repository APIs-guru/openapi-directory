# RecoveryServicesProviderProperties

Recovery services provider properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_scenarios** | **List[str]** | The scenarios allowed on this provider. | [optional] 
**connection_status** | **str** | A value indicating whether DRA is responsive. | [optional] 
**dra_identifier** | **str** | The DRA Id. | [optional] 
**fabric_friendly_name** | **str** | The fabric friendly name. | [optional] 
**fabric_type** | **str** | Type of the site. | [optional] 
**friendly_name** | **str** | Friendly name of the DRA. | [optional] 
**health_error_details** | [**List[HealthError]**](HealthError.md) | The recovery services provider health error details. | [optional] 
**identity_details** | [**IdentityInformation**](IdentityInformation.md) |  | [optional] 
**last_heart_beat** | **datetime** | Time when last heartbeat was sent by the DRA. | [optional] 
**protected_item_count** | **int** | Number of protected VMs currently managed by the DRA. | [optional] 
**provider_version** | **str** | The provider version. | [optional] 
**provider_version_expiry_date** | **datetime** | Expiry date if the version is deprecated. | [optional] 
**provider_version_state** | **str** | DRA version status. | [optional] 
**server_version** | **str** | The fabric provider. | [optional] 

## Example

```python
from openapi_client.models.recovery_services_provider_properties import RecoveryServicesProviderProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryServicesProviderProperties from a JSON string
recovery_services_provider_properties_instance = RecoveryServicesProviderProperties.from_json(json)
# print the JSON string representation of the object
print(RecoveryServicesProviderProperties.to_json())

# convert the object into a dict
recovery_services_provider_properties_dict = recovery_services_provider_properties_instance.to_dict()
# create an instance of RecoveryServicesProviderProperties from a dict
recovery_services_provider_properties_from_dict = RecoveryServicesProviderProperties.from_dict(recovery_services_provider_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


