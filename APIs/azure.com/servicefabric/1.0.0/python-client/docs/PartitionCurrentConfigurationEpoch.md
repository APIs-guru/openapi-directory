# PartitionCurrentConfigurationEpoch

The epoch of the current configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration_version** | **str** |  | [optional] 
**data_loss_version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.partition_current_configuration_epoch import PartitionCurrentConfigurationEpoch

# TODO update the JSON string below
json = "{}"
# create an instance of PartitionCurrentConfigurationEpoch from a JSON string
partition_current_configuration_epoch_instance = PartitionCurrentConfigurationEpoch.from_json(json)
# print the JSON string representation of the object
print(PartitionCurrentConfigurationEpoch.to_json())

# convert the object into a dict
partition_current_configuration_epoch_dict = partition_current_configuration_epoch_instance.to_dict()
# create an instance of PartitionCurrentConfigurationEpoch from a dict
partition_current_configuration_epoch_from_dict = PartitionCurrentConfigurationEpoch.from_dict(partition_current_configuration_epoch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


