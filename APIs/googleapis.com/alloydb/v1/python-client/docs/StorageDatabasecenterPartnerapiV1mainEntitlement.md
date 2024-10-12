# StorageDatabasecenterPartnerapiV1mainEntitlement

Proto representing the access that a user has to a specific feature/service. NextId: 3.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement_state** | **str** | The current state of user&#39;s accessibility to a feature/benefit. | [optional] 
**type** | **str** | An enum that represents the type of this entitlement. | [optional] 

## Example

```python
from openapi_client.models.storage_databasecenter_partnerapi_v1main_entitlement import StorageDatabasecenterPartnerapiV1mainEntitlement

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDatabasecenterPartnerapiV1mainEntitlement from a JSON string
storage_databasecenter_partnerapi_v1main_entitlement_instance = StorageDatabasecenterPartnerapiV1mainEntitlement.from_json(json)
# print the JSON string representation of the object
print(StorageDatabasecenterPartnerapiV1mainEntitlement.to_json())

# convert the object into a dict
storage_databasecenter_partnerapi_v1main_entitlement_dict = storage_databasecenter_partnerapi_v1main_entitlement_instance.to_dict()
# create an instance of StorageDatabasecenterPartnerapiV1mainEntitlement from a dict
storage_databasecenter_partnerapi_v1main_entitlement_from_dict = StorageDatabasecenterPartnerapiV1mainEntitlement.from_dict(storage_databasecenter_partnerapi_v1main_entitlement_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


