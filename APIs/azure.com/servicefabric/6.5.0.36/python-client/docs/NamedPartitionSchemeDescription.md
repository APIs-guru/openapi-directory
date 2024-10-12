# NamedPartitionSchemeDescription

Describes the named partition scheme of the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The number of partitions. | 
**names** | **List[str]** | Array of size specified by the ‘Count’ parameter, for the names of the partitions. | 

## Example

```python
from openapi_client.models.named_partition_scheme_description import NamedPartitionSchemeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of NamedPartitionSchemeDescription from a JSON string
named_partition_scheme_description_instance = NamedPartitionSchemeDescription.from_json(json)
# print the JSON string representation of the object
print(NamedPartitionSchemeDescription.to_json())

# convert the object into a dict
named_partition_scheme_description_dict = named_partition_scheme_description_instance.to_dict()
# create an instance of NamedPartitionSchemeDescription from a dict
named_partition_scheme_description_from_dict = NamedPartitionSchemeDescription.from_dict(named_partition_scheme_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


