# ProviderSpecificRecoveryPointDetails

Replication provider specific recovery point details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the provider type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.provider_specific_recovery_point_details import ProviderSpecificRecoveryPointDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderSpecificRecoveryPointDetails from a JSON string
provider_specific_recovery_point_details_instance = ProviderSpecificRecoveryPointDetails.from_json(json)
# print the JSON string representation of the object
print(ProviderSpecificRecoveryPointDetails.to_json())

# convert the object into a dict
provider_specific_recovery_point_details_dict = provider_specific_recovery_point_details_instance.to_dict()
# create an instance of ProviderSpecificRecoveryPointDetails from a dict
provider_specific_recovery_point_details_from_dict = ProviderSpecificRecoveryPointDetails.from_dict(provider_specific_recovery_point_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


