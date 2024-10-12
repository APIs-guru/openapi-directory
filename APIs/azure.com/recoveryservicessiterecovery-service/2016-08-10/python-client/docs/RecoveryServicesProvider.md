# RecoveryServicesProvider

Provider details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RecoveryServicesProviderProperties**](RecoveryServicesProviderProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.recovery_services_provider import RecoveryServicesProvider

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryServicesProvider from a JSON string
recovery_services_provider_instance = RecoveryServicesProvider.from_json(json)
# print the JSON string representation of the object
print(RecoveryServicesProvider.to_json())

# convert the object into a dict
recovery_services_provider_dict = recovery_services_provider_instance.to_dict()
# create an instance of RecoveryServicesProvider from a dict
recovery_services_provider_from_dict = RecoveryServicesProvider.from_dict(recovery_services_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


