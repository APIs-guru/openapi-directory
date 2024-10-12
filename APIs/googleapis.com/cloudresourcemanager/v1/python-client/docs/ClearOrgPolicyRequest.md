# ClearOrgPolicyRequest

The request sent to the ClearOrgPolicy method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraint** | **str** | Name of the &#x60;Constraint&#x60; of the &#x60;Policy&#x60; to clear. | [optional] 
**etag** | **bytearray** | The current version, for concurrency control. Not sending an &#x60;etag&#x60; will cause the &#x60;Policy&#x60; to be cleared blindly. | [optional] 

## Example

```python
from openapi_client.models.clear_org_policy_request import ClearOrgPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClearOrgPolicyRequest from a JSON string
clear_org_policy_request_instance = ClearOrgPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(ClearOrgPolicyRequest.to_json())

# convert the object into a dict
clear_org_policy_request_dict = clear_org_policy_request_instance.to_dict()
# create an instance of ClearOrgPolicyRequest from a dict
clear_org_policy_request_from_dict = ClearOrgPolicyRequest.from_dict(clear_org_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


