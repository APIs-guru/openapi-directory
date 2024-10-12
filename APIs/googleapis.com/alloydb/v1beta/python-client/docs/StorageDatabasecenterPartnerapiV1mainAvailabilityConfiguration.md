# StorageDatabasecenterPartnerapiV1mainAvailabilityConfiguration

Configuration for availability of database instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**availability_type** | **str** | Availability type. Potential values: * &#x60;ZONAL&#x60;: The instance serves data from only one zone. Outages in that zone affect data accessibility. * &#x60;REGIONAL&#x60;: The instance can serve data from more than one zone in a region (it is highly available). | [optional] 
**external_replica_configured** | **bool** |  | [optional] 
**promotable_replica_configured** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.storage_databasecenter_partnerapi_v1main_availability_configuration import StorageDatabasecenterPartnerapiV1mainAvailabilityConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDatabasecenterPartnerapiV1mainAvailabilityConfiguration from a JSON string
storage_databasecenter_partnerapi_v1main_availability_configuration_instance = StorageDatabasecenterPartnerapiV1mainAvailabilityConfiguration.from_json(json)
# print the JSON string representation of the object
print(StorageDatabasecenterPartnerapiV1mainAvailabilityConfiguration.to_json())

# convert the object into a dict
storage_databasecenter_partnerapi_v1main_availability_configuration_dict = storage_databasecenter_partnerapi_v1main_availability_configuration_instance.to_dict()
# create an instance of StorageDatabasecenterPartnerapiV1mainAvailabilityConfiguration from a dict
storage_databasecenter_partnerapi_v1main_availability_configuration_from_dict = StorageDatabasecenterPartnerapiV1mainAvailabilityConfiguration.from_dict(storage_databasecenter_partnerapi_v1main_availability_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


