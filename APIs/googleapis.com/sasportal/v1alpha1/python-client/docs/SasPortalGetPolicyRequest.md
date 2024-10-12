# SasPortalGetPolicyRequest

Request message for `GetPolicy` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | **str** | Required. The resource for which the policy is being requested. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_get_policy_request import SasPortalGetPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalGetPolicyRequest from a JSON string
sas_portal_get_policy_request_instance = SasPortalGetPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(SasPortalGetPolicyRequest.to_json())

# convert the object into a dict
sas_portal_get_policy_request_dict = sas_portal_get_policy_request_instance.to_dict()
# create an instance of SasPortalGetPolicyRequest from a dict
sas_portal_get_policy_request_from_dict = SasPortalGetPolicyRequest.from_dict(sas_portal_get_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


