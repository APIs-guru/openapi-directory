# PartitionDescription

The description of the partition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | [optional] 
**high_key** | **str** |  | [optional] 
**low_key** | **str** |  | [optional] 
**names** | **List[str]** |  | [optional] 
**partition_scheme** | [**PartitionScheme**](PartitionScheme.md) |  | [optional] 

## Example

```python
from openapi_client.models.partition_description import PartitionDescription

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionDescription from a JSON string
partition_description_instance = PartitionDescription.from_json(json)
# print the JSON string representation of the object
print(PartitionDescription.to_json())

# convert the object into a dict
partition_description_dict = partition_description_instance.to_dict()
# create an instance of PartitionDescription from a dict
partition_description_from_dict = PartitionDescription.from_dict(partition_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


