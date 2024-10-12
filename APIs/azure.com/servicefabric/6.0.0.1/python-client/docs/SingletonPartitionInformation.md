# SingletonPartitionInformation

Information about a partition that is singleton. The services with singletone partitioning scheme are effectively non-partitioned. They only have one partition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.singleton_partition_information import SingletonPartitionInformation

# TODO update the JSON string below
json = "{}"
# create an instance of SingletonPartitionInformation from a JSON string
singleton_partition_information_instance = SingletonPartitionInformation.from_json(json)
# print the JSON string representation of the object
print(SingletonPartitionInformation.to_json())

# convert the object into a dict
singleton_partition_information_dict = singleton_partition_information_instance.to_dict()
# create an instance of SingletonPartitionInformation from a dict
singleton_partition_information_from_dict = SingletonPartitionInformation.from_dict(singleton_partition_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


