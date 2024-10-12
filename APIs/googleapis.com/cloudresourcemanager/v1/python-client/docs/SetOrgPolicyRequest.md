# SetOrgPolicyRequest

The request sent to the SetOrgPolicyRequest method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy** | [**OrgPolicy**](OrgPolicy.md) |  | [optional] 

## Example

```python
from openapi_client.models.set_org_policy_request import SetOrgPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetOrgPolicyRequest from a JSON string
set_org_policy_request_instance = SetOrgPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(SetOrgPolicyRequest.to_json())

# convert the object into a dict
set_org_policy_request_dict = set_org_policy_request_instance.to_dict()
# create an instance of SetOrgPolicyRequest from a dict
set_org_policy_request_from_dict = SetOrgPolicyRequest.from_dict(set_org_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


