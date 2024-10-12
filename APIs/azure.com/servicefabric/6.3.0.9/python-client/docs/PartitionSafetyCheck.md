# PartitionSafetyCheck

Represents a safety check for the service partition being performed by service fabric before continuing with operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | [optional] 

## Example

```python
from openapi_client.models.partition_safety_check import PartitionSafetyCheck

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionSafetyCheck from a JSON string
partition_safety_check_instance = PartitionSafetyCheck.from_json(json)
# print the JSON string representation of the object
print(PartitionSafetyCheck.to_json())

# convert the object into a dict
partition_safety_check_dict = partition_safety_check_instance.to_dict()
# create an instance of PartitionSafetyCheck from a dict
partition_safety_check_from_dict = PartitionSafetyCheck.from_dict(partition_safety_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


