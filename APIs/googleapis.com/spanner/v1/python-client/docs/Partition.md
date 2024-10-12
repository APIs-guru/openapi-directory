# Partition

Information returned for each partition returned in a PartitionResponse.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_token** | **bytearray** | This token can be passed to Read, StreamingRead, ExecuteSql, or ExecuteStreamingSql requests to restrict the results to those identified by this partition token. | [optional] 

## Example

```python
from openapi_client.models.partition import Partition

# TODO update the JSON string below
json = "{}"
# create an instance of Partition from a JSON string
partition_instance = Partition.from_json(json)
# print the JSON string representation of the object
print(Partition.to_json())

# convert the object into a dict
partition_dict = partition_instance.to_dict()
# create an instance of Partition from a dict
partition_from_dict = Partition.from_dict(partition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


