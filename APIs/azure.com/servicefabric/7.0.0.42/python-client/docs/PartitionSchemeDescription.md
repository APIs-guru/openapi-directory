# PartitionSchemeDescription

Describes how the service is partitioned.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_scheme** | [**PartitionScheme**](PartitionScheme.md) |  | 

## Example

```python
from openapi_client.models.partition_scheme_description import PartitionSchemeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionSchemeDescription from a JSON string
partition_scheme_description_instance = PartitionSchemeDescription.from_json(json)
# print the JSON string representation of the object
print(PartitionSchemeDescription.to_json())

# convert the object into a dict
partition_scheme_description_dict = partition_scheme_description_instance.to_dict()
# create an instance of PartitionSchemeDescription from a dict
partition_scheme_description_from_dict = PartitionSchemeDescription.from_dict(partition_scheme_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


