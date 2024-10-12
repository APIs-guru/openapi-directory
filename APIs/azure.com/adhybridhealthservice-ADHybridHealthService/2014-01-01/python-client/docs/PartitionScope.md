# PartitionScope

The connector partition scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**containers_excluded** | **List[str]** | The list of containers excluded. | [optional] 
**containers_included** | **List[str]** | The list of containers included. | [optional] 
**is_default** | **bool** | Indicates if the partition scope is default or not. | [optional] 
**object_classes** | **List[str]** | The in-scope object classes. | [optional] 

## Example

```python
from openapi_client.models.partition_scope import PartitionScope

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionScope from a JSON string
partition_scope_instance = PartitionScope.from_json(json)
# print the JSON string representation of the object
print(PartitionScope.to_json())

# convert the object into a dict
partition_scope_dict = partition_scope_instance.to_dict()
# create an instance of PartitionScope from a dict
partition_scope_from_dict = PartitionScope.from_dict(partition_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


