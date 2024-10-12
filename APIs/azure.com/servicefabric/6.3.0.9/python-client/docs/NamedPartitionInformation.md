# NamedPartitionInformation

Describes the partition information for the name as a string that is based on partition schemes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the partition. | [optional] 

## Example

```python
from openapi_client.models.named_partition_information import NamedPartitionInformation

# TODO update the JSON string below
json = "{}"
# create an instance of NamedPartitionInformation from a JSON string
named_partition_information_instance = NamedPartitionInformation.from_json(json)
# print the JSON string representation of the object
print(NamedPartitionInformation.to_json())

# convert the object into a dict
named_partition_information_dict = named_partition_information_instance.to_dict()
# create an instance of NamedPartitionInformation from a dict
named_partition_information_from_dict = NamedPartitionInformation.from_dict(named_partition_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


