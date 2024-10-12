# ManagementPolicySchema

The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[ManagementPolicyRule]**](ManagementPolicyRule.md) | The Storage Account ManagementPolicies Rules. See more details in: https://docs.microsoft.com/en-us/azure/storage/common/storage-lifecycle-managment-concepts. | 

## Example

```python
from openapi_client.models.management_policy_schema import ManagementPolicySchema

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementPolicySchema from a JSON string
management_policy_schema_instance = ManagementPolicySchema.from_json(json)
# print the JSON string representation of the object
print(ManagementPolicySchema.to_json())

# convert the object into a dict
management_policy_schema_dict = management_policy_schema_instance.to_dict()
# create an instance of ManagementPolicySchema from a dict
management_policy_schema_from_dict = ManagementPolicySchema.from_dict(management_policy_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


