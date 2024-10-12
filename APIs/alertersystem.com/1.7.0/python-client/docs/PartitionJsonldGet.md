# PartitionJsonldGet

The Partition resource is a collection of siloed monitor and alert environments in the user account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**AlertLogJsonldGetContext**](AlertLogJsonldGetContext.md) |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**type** | **str** |  | [optional] [readonly] 
**alert_services** | **List[str]** | The alert services that are related to this resource. | [optional] 
**created_at** | **datetime** | When the resource instance was created. This date-time is in the UTC timezone. | [optional] [readonly] 
**data_segment_code** | **str** | User-provided string on which to segment and filter data. Max 50 characters. | [optional] 
**id** | **str** | The unique identifier of the resource instance. | [optional] [readonly] 
**monitors** | **List[str]** | The monitors that are associated with this partition. | [optional] 
**partition_name** | **str** | The name of the partition. Max 255 characters. | 
**partition_notes** | **str** | Notes about the partition. Max 10,000 characters. Formatting using Markdown is allowed. HTML will be removed. | [optional] 
**resource_owner** | **str** | The name of the person who owns this resource. | [optional] 
**team_invitations** | **List[str]** | The team invitations that are related to this resource. | [optional] 
**team_members** | **List[str]** | The team members of this resource. | [optional] 

## Example

```python
from openapi_client.models.partition_jsonld_get import PartitionJsonldGet

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionJsonldGet from a JSON string
partition_jsonld_get_instance = PartitionJsonldGet.from_json(json)
# print the JSON string representation of the object
print(PartitionJsonldGet.to_json())

# convert the object into a dict
partition_jsonld_get_dict = partition_jsonld_get_instance.to_dict()
# create an instance of PartitionJsonldGet from a dict
partition_jsonld_get_from_dict = PartitionJsonldGet.from_dict(partition_jsonld_get_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


