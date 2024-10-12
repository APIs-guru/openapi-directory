# FailoverGroupReadOnlyEndpoint

Read-only endpoint of the failover group instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_policy** | **str** | Failover policy of the read-only endpoint for the failover group. | [optional] 

## Example

```python
from openapi_client.models.failover_group_read_only_endpoint import FailoverGroupReadOnlyEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverGroupReadOnlyEndpoint from a JSON string
failover_group_read_only_endpoint_instance = FailoverGroupReadOnlyEndpoint.from_json(json)
# print the JSON string representation of the object
print(FailoverGroupReadOnlyEndpoint.to_json())

# convert the object into a dict
failover_group_read_only_endpoint_dict = failover_group_read_only_endpoint_instance.to_dict()
# create an instance of FailoverGroupReadOnlyEndpoint from a dict
failover_group_read_only_endpoint_from_dict = FailoverGroupReadOnlyEndpoint.from_dict(failover_group_read_only_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


