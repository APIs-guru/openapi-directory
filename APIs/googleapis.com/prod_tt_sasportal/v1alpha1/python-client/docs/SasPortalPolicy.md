# SasPortalPolicy

Defines an access control policy to the resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignments** | [**List[SasPortalAssignment]**](SasPortalAssignment.md) | List of assignments | [optional] 
**etag** | **bytearray** | The etag is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the etag in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An etag is returned in the response to GetPolicy, and systems are expected to put that etag in the request to SetPolicy to ensure that their change will be applied to the same version of the policy. If no etag is provided in the call to GetPolicy, then the existing policy is overwritten blindly. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_policy import SasPortalPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalPolicy from a JSON string
sas_portal_policy_instance = SasPortalPolicy.from_json(json)
# print the JSON string representation of the object
print(SasPortalPolicy.to_json())

# convert the object into a dict
sas_portal_policy_dict = sas_portal_policy_instance.to_dict()
# create an instance of SasPortalPolicy from a dict
sas_portal_policy_from_dict = SasPortalPolicy.from_dict(sas_portal_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


