# RollingUpgradePolicy

The configuration parameters used while performing a rolling upgrade.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_batch_instance_percent** | **int** | The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. As this is a maximum, unhealthy instances in previous or future batches can cause the percentage of instances in a batch to decrease to ensure higher reliability. The default value for this parameter is 20%. | [optional] 
**max_unhealthy_instance_percent** | **int** | The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy, either as a result of being upgraded, or by being found in an unhealthy state by the virtual machine health checks before the rolling upgrade aborts. This constraint will be checked prior to starting any batch. The default value for this parameter is 20%. | [optional] 
**max_unhealthy_upgraded_instance_percent** | **int** | The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. This check will happen after each batch is upgraded. If this percentage is ever exceeded, the rolling update aborts. The default value for this parameter is 20%. | [optional] 
**pause_time_between_batches** | **str** | The wait time between completing the update for all virtual machines in one batch and starting the next batch. The time duration should be specified in ISO 8601 format. The default value is 0 seconds (PT0S). | [optional] 

## Example

```python
from openapi_client.models.rolling_upgrade_policy import RollingUpgradePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of RollingUpgradePolicy from a JSON string
rolling_upgrade_policy_instance = RollingUpgradePolicy.from_json(json)
# print the JSON string representation of the object
print(RollingUpgradePolicy.to_json())

# convert the object into a dict
rolling_upgrade_policy_dict = rolling_upgrade_policy_instance.to_dict()
# create an instance of RollingUpgradePolicy from a dict
rolling_upgrade_policy_from_dict = RollingUpgradePolicy.from_dict(rolling_upgrade_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


