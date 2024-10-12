# SasPortalSetPolicyRequest

Request message for `SetPolicy` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disable_notification** | **bool** | Optional. Set the field as &#x60;true&#x60; to disable the onboarding notification. | [optional] 
**policy** | [**SasPortalPolicy**](SasPortalPolicy.md) |  | [optional] 
**resource** | **str** | Required. The resource for which the policy is being specified. This policy replaces any existing policy. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_set_policy_request import SasPortalSetPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalSetPolicyRequest from a JSON string
sas_portal_set_policy_request_instance = SasPortalSetPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(SasPortalSetPolicyRequest.to_json())

# convert the object into a dict
sas_portal_set_policy_request_dict = sas_portal_set_policy_request_instance.to_dict()
# create an instance of SasPortalSetPolicyRequest from a dict
sas_portal_set_policy_request_from_dict = SasPortalSetPolicyRequest.from_dict(sas_portal_set_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


