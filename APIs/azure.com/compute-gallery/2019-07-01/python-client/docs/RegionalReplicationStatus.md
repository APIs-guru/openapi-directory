# RegionalReplicationStatus

This is the regional replication status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** | The details of the replication status. | [optional] [readonly] 
**progress** | **int** | It indicates progress of the replication job. | [optional] [readonly] 
**region** | **str** | The region to which the gallery Image Version is being replicated to. | [optional] [readonly] 
**state** | **str** | This is the regional replication state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.regional_replication_status import RegionalReplicationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalReplicationStatus from a JSON string
regional_replication_status_instance = RegionalReplicationStatus.from_json(json)
# print the JSON string representation of the object
print(RegionalReplicationStatus.to_json())

# convert the object into a dict
regional_replication_status_dict = regional_replication_status_instance.to_dict()
# create an instance of RegionalReplicationStatus from a dict
regional_replication_status_from_dict = RegionalReplicationStatus.from_dict(regional_replication_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


