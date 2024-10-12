# PartitionInformation

The information of the partition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high_key** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**low_key** | **str** |  | [optional] 
**name** | **List[str]** |  | [optional] 
**service_partition_kind** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.partition_information import PartitionInformation

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionInformation from a JSON string
partition_information_instance = PartitionInformation.from_json(json)
# print the JSON string representation of the object
print(PartitionInformation.to_json())

# convert the object into a dict
partition_information_dict = partition_information_instance.to_dict()
# create an instance of PartitionInformation from a dict
partition_information_from_dict = PartitionInformation.from_dict(partition_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


