# FailoverPolicies

The list of new failover policies for the failover priority change.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_policies** | [**List[FailoverPolicy]**](FailoverPolicy.md) | List of failover policies. | 

## Example

```python
from openapi_client.models.failover_policies import FailoverPolicies

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverPolicies from a JSON string
failover_policies_instance = FailoverPolicies.from_json(json)
# print the JSON string representation of the object
print(FailoverPolicies.to_json())

# convert the object into a dict
failover_policies_dict = failover_policies_instance.to_dict()
# create an instance of FailoverPolicies from a dict
failover_policies_from_dict = FailoverPolicies.from_dict(failover_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


