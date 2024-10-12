# ReplicationLinkProperties

Represents the properties of a database replication link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_termination_allowed** | **bool** | Legacy value indicating whether termination is allowed.  Currently always returns true. | [optional] [readonly] 
**partner_database** | **str** | The name of the partner database. | [optional] [readonly] 
**partner_location** | **str** | The Azure Region of the partner database. | [optional] [readonly] 
**partner_role** | **str** | The role of the partner database in the replication link. | [optional] [readonly] 
**partner_server** | **str** | The name of the server hosting the partner database. | [optional] [readonly] 
**percent_complete** | **int** | The percentage of seeding complete for the replication link. | [optional] [readonly] 
**replication_mode** | **str** | Replication mode of this replication link. | [optional] [readonly] 
**replication_state** | **str** | The replication state for the replication link. | [optional] [readonly] 
**role** | **str** | The role of the database in the replication link. | [optional] [readonly] 
**start_time** | **datetime** | The start time for the replication link. | [optional] [readonly] 

## Example

```python
from openapi_client.models.replication_link_properties import ReplicationLinkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationLinkProperties from a JSON string
replication_link_properties_instance = ReplicationLinkProperties.from_json(json)
# print the JSON string representation of the object
print(ReplicationLinkProperties.to_json())

# convert the object into a dict
replication_link_properties_dict = replication_link_properties_instance.to_dict()
# create an instance of ReplicationLinkProperties from a dict
replication_link_properties_from_dict = ReplicationLinkProperties.from_dict(replication_link_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


