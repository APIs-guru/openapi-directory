# GetOrgPolicyRequest

The request sent to the GetOrgPolicy method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraint** | **str** | Name of the &#x60;Constraint&#x60; to get the &#x60;Policy&#x60;. | [optional] 

## Example

```python
from openapi_client.models.get_org_policy_request import GetOrgPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrgPolicyRequest from a JSON string
get_org_policy_request_instance = GetOrgPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(GetOrgPolicyRequest.to_json())

# convert the object into a dict
get_org_policy_request_dict = get_org_policy_request_instance.to_dict()
# create an instance of GetOrgPolicyRequest from a dict
get_org_policy_request_from_dict = GetOrgPolicyRequest.from_dict(get_org_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


