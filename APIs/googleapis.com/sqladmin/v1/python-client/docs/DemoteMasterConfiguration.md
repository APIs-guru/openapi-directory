# DemoteMasterConfiguration

Read-replica configuration for connecting to the on-premises primary instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | This is always &#x60;sql#demoteMasterConfiguration&#x60;. | [optional] 
**mysql_replica_configuration** | [**DemoteMasterMySqlReplicaConfiguration**](DemoteMasterMySqlReplicaConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.demote_master_configuration import DemoteMasterConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of DemoteMasterConfiguration from a JSON string
demote_master_configuration_instance = DemoteMasterConfiguration.from_json(json)
# print the JSON string representation of the object
print(DemoteMasterConfiguration.to_json())

# convert the object into a dict
demote_master_configuration_dict = demote_master_configuration_instance.to_dict()
# create an instance of DemoteMasterConfiguration from a dict
demote_master_configuration_from_dict = DemoteMasterConfiguration.from_dict(demote_master_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


