# PartitionId

A partition ID identifies a grouping of entities. The grouping is always by project and namespace, however the namespace ID may be empty. A partition ID contains several dimensions: project ID and namespace ID. Partition dimensions: - May be `\"\"`. - Must be valid UTF-8 bytes. - Must have values that match regex `[A-Za-z\\d\\.\\-_]{1,100}` If the value of any dimension matches regex `__.*__`, the partition is reserved/read-only. A reserved/read-only partition ID is forbidden in certain documented contexts. Foreign partition IDs (in which the project ID does not match the context project ID ) are discouraged. Reads and writes of foreign partition IDs may fail if the project is not in an active state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_id** | **str** | If not empty, the ID of the database to which the entities belong. | [optional] 
**namespace_id** | **str** | If not empty, the ID of the namespace to which the entities belong. | [optional] 
**project_id** | **str** | The ID of the project to which the entities belong. | [optional] 

## Example

```python
from openapi_client.models.partition_id import PartitionId

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionId from a JSON string
partition_id_instance = PartitionId.from_json(json)
# print the JSON string representation of the object
print(PartitionId.to_json())

# convert the object into a dict
partition_id_dict = partition_id_instance.to_dict()
# create an instance of PartitionId from a dict
partition_id_from_dict = PartitionId.from_dict(partition_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


