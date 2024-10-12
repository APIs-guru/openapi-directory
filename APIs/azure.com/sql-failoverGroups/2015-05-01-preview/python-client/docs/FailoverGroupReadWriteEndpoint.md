# FailoverGroupReadWriteEndpoint

Read-write endpoint of the failover group instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_policy** | **str** | Failover policy of the read-write endpoint for the failover group. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. | 
**failover_with_data_loss_grace_period_minutes** | **int** | Grace period before failover with data loss is attempted for the read-write endpoint. If failoverPolicy is Automatic then failoverWithDataLossGracePeriodMinutes is required. | [optional] 

## Example

```python
from openapi_client.models.failover_group_read_write_endpoint import FailoverGroupReadWriteEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverGroupReadWriteEndpoint from a JSON string
failover_group_read_write_endpoint_instance = FailoverGroupReadWriteEndpoint.from_json(json)
# print the JSON string representation of the object
print(FailoverGroupReadWriteEndpoint.to_json())

# convert the object into a dict
failover_group_read_write_endpoint_dict = failover_group_read_write_endpoint_instance.to_dict()
# create an instance of FailoverGroupReadWriteEndpoint from a dict
failover_group_read_write_endpoint_from_dict = FailoverGroupReadWriteEndpoint.from_dict(failover_group_read_write_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


