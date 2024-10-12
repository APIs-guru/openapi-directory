# Policies

Policies for vpn gateway.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_branch_to_branch_traffic** | **bool** | True if branch to branch traffic is allowed. | [optional] 
**allow_vnet_to_vnet_traffic** | **bool** | True if Vnet to Vnet traffic is allowed. | [optional] 

## Example

```python
from openapi_client.models.policies import Policies

# TODO update the JSON string below
json = "{}"
# create an instance of Policies from a JSON string
policies_instance = Policies.from_json(json)
# print the JSON string representation of the object
print(Policies.to_json())

# convert the object into a dict
policies_dict = policies_instance.to_dict()
# create an instance of Policies from a dict
policies_from_dict = Policies.from_dict(policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


