# DemoteMasterContext

Database instance demote primary instance context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | This is always &#x60;sql#demoteMasterContext&#x60;. | [optional] 
**master_instance_name** | **str** | The name of the instance which will act as on-premises primary instance in the replication setup. | [optional] 
**replica_configuration** | [**DemoteMasterConfiguration**](DemoteMasterConfiguration.md) |  | [optional] 
**skip_replication_setup** | **bool** | Flag to skip replication setup on the instance. | [optional] 
**verify_gtid_consistency** | **bool** | Verify the GTID consistency for demote operation. Default value: &#x60;True&#x60;. Setting this flag to &#x60;false&#x60; enables you to bypass the GTID consistency check between on-premises primary instance and Cloud SQL instance during the demotion operation but also exposes you to the risk of future replication failures. Change the value only if you know the reason for the GTID divergence and are confident that doing so will not cause any replication issues. | [optional] 

## Example

```python
from openapi_client.models.demote_master_context import DemoteMasterContext

# TODO update the JSON string below
json = "{}"
# create an instance of DemoteMasterContext from a JSON string
demote_master_context_instance = DemoteMasterContext.from_json(json)
# print the JSON string representation of the object
print(DemoteMasterContext.to_json())

# convert the object into a dict
demote_master_context_dict = demote_master_context_instance.to_dict()
# create an instance of DemoteMasterContext from a dict
demote_master_context_from_dict = DemoteMasterContext.from_dict(demote_master_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


