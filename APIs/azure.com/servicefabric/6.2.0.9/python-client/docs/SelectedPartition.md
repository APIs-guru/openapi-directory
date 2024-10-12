# SelectedPartition

This class returns information about the partition that the user-induced operation acted upon.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_id** | **str** | An internal ID used by Service Fabric to uniquely identify a partition. This is a randomly generated GUID when the service was created. The partition ID is unique and does not change for the lifetime of the service. If the same service was deleted and recreated the IDs of its partitions would be different. | [optional] 
**service_name** | **str** | The full name of the service with &#39;fabric:&#39; URI scheme. | [optional] 

## Example

```python
from openapi_client.models.selected_partition import SelectedPartition

# TODO update the JSON string below
json = "{}"
# create an instance of SelectedPartition from a JSON string
selected_partition_instance = SelectedPartition.from_json(json)
# print the JSON string representation of the object
print(SelectedPartition.to_json())

# convert the object into a dict
selected_partition_dict = selected_partition_instance.to_dict()
# create an instance of SelectedPartition from a dict
selected_partition_from_dict = SelectedPartition.from_dict(selected_partition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


