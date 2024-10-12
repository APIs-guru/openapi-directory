# CloudBuildMembershipSpec

**Cloud Build**: Configurations for each Cloud Build enabled cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**security_policy** | **str** | Whether it is allowed to run the privileged builds on the cluster or not. | [optional] 
**version** | **str** | Version of the cloud build software on the cluster. | [optional] 

## Example

```python
from openapi_client.models.cloud_build_membership_spec import CloudBuildMembershipSpec

# TODO update the JSON string below
json = "{}"
# create an instance of CloudBuildMembershipSpec from a JSON string
cloud_build_membership_spec_instance = CloudBuildMembershipSpec.from_json(json)
# print the JSON string representation of the object
print(CloudBuildMembershipSpec.to_json())

# convert the object into a dict
cloud_build_membership_spec_dict = cloud_build_membership_spec_instance.to_dict()
# create an instance of CloudBuildMembershipSpec from a dict
cloud_build_membership_spec_from_dict = CloudBuildMembershipSpec.from_dict(cloud_build_membership_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


