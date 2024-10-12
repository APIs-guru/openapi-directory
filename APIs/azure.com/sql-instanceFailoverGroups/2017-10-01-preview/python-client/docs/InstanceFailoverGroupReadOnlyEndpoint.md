# InstanceFailoverGroupReadOnlyEndpoint

Read-only endpoint of the failover group instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_policy** | **str** | Failover policy of the read-only endpoint for the failover group. | [optional] 

## Example

```python
from openapi_client.models.instance_failover_group_read_only_endpoint import InstanceFailoverGroupReadOnlyEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of InstanceFailoverGroupReadOnlyEndpoint from a JSON string
instance_failover_group_read_only_endpoint_instance = InstanceFailoverGroupReadOnlyEndpoint.from_json(json)
# print the JSON string representation of the object
print(InstanceFailoverGroupReadOnlyEndpoint.to_json())

# convert the object into a dict
instance_failover_group_read_only_endpoint_dict = instance_failover_group_read_only_endpoint_instance.to_dict()
# create an instance of InstanceFailoverGroupReadOnlyEndpoint from a dict
instance_failover_group_read_only_endpoint_from_dict = InstanceFailoverGroupReadOnlyEndpoint.from_dict(instance_failover_group_read_only_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


