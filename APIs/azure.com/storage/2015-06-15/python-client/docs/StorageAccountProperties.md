# StorageAccountProperties

Properties of the storage account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_type** | **str** | The type of the storage account. | [optional] 
**creation_time** | **datetime** | The creation date and time of the storage account in UTC. | [optional] 
**custom_domain** | [**CustomDomain**](CustomDomain.md) |  | [optional] 
**last_geo_failover_time** | **datetime** | The timestamp of the most recent instance of a failover to the secondary location. Only the most recent timestamp is retained. This element is not returned if there has never been a failover instance. Only available if the accountType is Standard_GRS or Standard_RAGRS. | [optional] 
**primary_endpoints** | [**Endpoints**](Endpoints.md) |  | [optional] 
**primary_location** | **str** | The location of the primary data center for the storage account. | [optional] 
**provisioning_state** | **str** | The status of the storage account at the time the operation was called. | [optional] 
**secondary_endpoints** | [**Endpoints**](Endpoints.md) |  | [optional] 
**secondary_location** | **str** | The location of the geo-replicated secondary for the storage account. Only available if the accountType is Standard_GRS or Standard_RAGRS. | [optional] 
**status_of_primary** | **str** | The status indicating whether the primary location of the storage account is available or unavailable. | [optional] 
**status_of_secondary** | **str** | The status indicating whether the secondary location of the storage account is available or unavailable. Only available if the SKU name is Standard_GRS or Standard_RAGRS. | [optional] 

## Example

```python
from openapi_client.models.storage_account_properties import StorageAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageAccountProperties from a JSON string
storage_account_properties_instance = StorageAccountProperties.from_json(json)
# print the JSON string representation of the object
print(StorageAccountProperties.to_json())

# convert the object into a dict
storage_account_properties_dict = storage_account_properties_instance.to_dict()
# create an instance of StorageAccountProperties from a dict
storage_account_properties_from_dict = StorageAccountProperties.from_dict(storage_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


