# PartitionUsagesResult

The response to a list partition level usage request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[PartitionUsage]**](PartitionUsage.md) | The list of partition-level usages for the database. A usage is a point in time metric | [optional] [readonly] 

## Example

```python
from openapi_client.models.partition_usages_result import PartitionUsagesResult

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionUsagesResult from a JSON string
partition_usages_result_instance = PartitionUsagesResult.from_json(json)
# print the JSON string representation of the object
print(PartitionUsagesResult.to_json())

# convert the object into a dict
partition_usages_result_dict = partition_usages_result_instance.to_dict()
# create an instance of PartitionUsagesResult from a dict
partition_usages_result_from_dict = PartitionUsagesResult.from_dict(partition_usages_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


