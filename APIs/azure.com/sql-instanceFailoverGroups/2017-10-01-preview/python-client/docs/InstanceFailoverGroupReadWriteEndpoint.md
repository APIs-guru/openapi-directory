# InstanceFailoverGroupReadWriteEndpoint

Read-write endpoint of the failover group instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_policy** | **str** | Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. | 
**failover_with_data_loss_grace_period_minutes** | **int** | Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. | [optional] 

## Example

```python
from openapi_client.models.instance_failover_group_read_write_endpoint import InstanceFailoverGroupReadWriteEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceFailoverGroupReadWriteEndpoint from a JSON string
instance_failover_group_read_write_endpoint_instance = InstanceFailoverGroupReadWriteEndpoint.from_json(json)
# print the JSON string representation of the object
print(InstanceFailoverGroupReadWriteEndpoint.to_json())

# convert the object into a dict
instance_failover_group_read_write_endpoint_dict = instance_failover_group_read_write_endpoint_instance.to_dict()
# create an instance of InstanceFailoverGroupReadWriteEndpoint from a dict
instance_failover_group_read_write_endpoint_from_dict = InstanceFailoverGroupReadWriteEndpoint.from_dict(instance_failover_group_read_write_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


