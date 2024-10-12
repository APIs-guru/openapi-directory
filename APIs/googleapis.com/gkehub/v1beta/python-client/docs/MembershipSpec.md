# MembershipSpec

**Cloud Build**: Configurations for each Cloud Build enabled cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**security_policy** | **str** | Whether it is allowed to run the privileged builds on the cluster or not. | [optional] 
**version** | **str** | Version of the cloud build software on the cluster. | [optional] 

## Example

```python
from openapi_client.models.membership_spec import MembershipSpec

# TODO update the JSON string below
json = "{}"
# create an instance of MembershipSpec from a JSON string
membership_spec_instance = MembershipSpec.from_json(json)
# print the JSON string representation of the object
print(MembershipSpec.to_json())

# convert the object into a dict
membership_spec_dict = membership_spec_instance.to_dict()
# create an instance of MembershipSpec from a dict
membership_spec_from_dict = MembershipSpec.from_dict(membership_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


