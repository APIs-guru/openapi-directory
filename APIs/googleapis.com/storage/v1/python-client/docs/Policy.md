# Policy

A bucket/object/managedFolder IAM policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bindings** | [**List[PolicyBindingsInner]**](PolicyBindingsInner.md) | An association between a role, which comes with a set of permissions, and members who may assume that role. | [optional] 
**etag** | **bytearray** | HTTP 1.1  Entity tag for the policy. | [optional] 
**kind** | **str** | The kind of item this is. For policies, this is always storage#policy. This field is ignored on input. | [optional] [default to 'storage#policy']
**resource_id** | **str** | The ID of the resource to which this policy belongs. Will be of the form projects/_/buckets/bucket for buckets, projects/_/buckets/bucket/objects/object for objects, and projects/_/buckets/bucket/managedFolders/managedFolder. A specific generation may be specified by appending #generationNumber to the end of the object name, e.g. projects/_/buckets/my-bucket/objects/data.txt#17. The current generation can be denoted with #0. This field is ignored on input. | [optional] 
**version** | **int** | The IAM policy format version. | [optional] 

## Example

```python
from openapi_client.models.policy import Policy

# TODO update the JSON string below
json = "{}"
# create an instance of Policy from a JSON string
policy_instance = Policy.from_json(json)
# print the JSON string representation of the object
print(Policy.to_json())

# convert the object into a dict
policy_dict = policy_instance.to_dict()
# create an instance of Policy from a dict
policy_from_dict = Policy.from_dict(policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


