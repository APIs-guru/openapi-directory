# RecoveryServicesProviderCollection

Collection of providers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The value of next link. | [optional] 
**value** | [**List[RecoveryServicesProvider]**](RecoveryServicesProvider.md) | The Servers details. | [optional] 

## Example

```python
from openapi_client.models.recovery_services_provider_collection import RecoveryServicesProviderCollection

# TODO update the JSON string below
json = "{}"
# create an instance of RecoveryServicesProviderCollection from a JSON string
recovery_services_provider_collection_instance = RecoveryServicesProviderCollection.from_json(json)
# print the JSON string representation of the object
print(RecoveryServicesProviderCollection.to_json())

# convert the object into a dict
recovery_services_provider_collection_dict = recovery_services_provider_collection_instance.to_dict()
# create an instance of RecoveryServicesProviderCollection from a dict
recovery_services_provider_collection_from_dict = RecoveryServicesProviderCollection.from_dict(recovery_services_provider_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


