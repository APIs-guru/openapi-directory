# PolicyName

An internal name for an IAM policy, based on the resource to which the policy applies. Not to be confused with a resource's external full resource name. For more information on this distinction, see go/iam-full-resource-names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Identifies an instance of the type. ID format varies by type. The ID format is defined in the IAM .service file that defines the type, either in path_mapping or in a comment. | [optional] 
**region** | **str** | For Cloud IAM: The location of the Policy. Must be empty or \&quot;global\&quot; for Policies owned by global IAM. Must name a region from prodspec/cloud-iam-cloudspec for Regional IAM Policies, see go/iam-faq#where-is-iam-currently-deployed. For Local IAM: This field should be set to \&quot;local\&quot;. | [optional] 
**type** | **str** | Resource type. Types are defined in IAM&#39;s .service files. Valid values for type might be &#39;gce&#39;, &#39;gcs&#39;, &#39;project&#39;, &#39;account&#39; etc. | [optional] 

## Example

```python
from openapi_client.models.policy_name import PolicyName

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyName from a JSON string
policy_name_instance = PolicyName.from_json(json)
# print the JSON string representation of the object
print(PolicyName.to_json())

# convert the object into a dict
policy_name_dict = policy_name_instance.to_dict()
# create an instance of PolicyName from a dict
policy_name_from_dict = PolicyName.from_dict(policy_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


