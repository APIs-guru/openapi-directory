# InstancesFailoverRequest

Instance failover request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_context** | [**FailoverContext**](FailoverContext.md) |  | [optional] 

## Example

```python
from openapi_client.models.instances_failover_request import InstancesFailoverRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesFailoverRequest from a JSON string
instances_failover_request_instance = InstancesFailoverRequest.from_json(json)
# print the JSON string representation of the object
print(InstancesFailoverRequest.to_json())

# convert the object into a dict
instances_failover_request_dict = instances_failover_request_instance.to_dict()
# create an instance of InstancesFailoverRequest from a dict
instances_failover_request_from_dict = InstancesFailoverRequest.from_dict(instances_failover_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


