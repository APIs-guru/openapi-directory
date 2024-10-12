# RetentionPolicyDescription

Describes the retention policy configured.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_policy_type** | [**RetentionPolicyType**](RetentionPolicyType.md) |  | 

## Example

```python
from openapi_client.models.retention_policy_description import RetentionPolicyDescription

# TODO update the JSON string below
json = "{}"
# create an instance of RetentionPolicyDescription from a JSON string
retention_policy_description_instance = RetentionPolicyDescription.from_json(json)
# print the JSON string representation of the object
print(RetentionPolicyDescription.to_json())

# convert the object into a dict
retention_policy_description_dict = retention_policy_description_instance.to_dict()
# create an instance of RetentionPolicyDescription from a dict
retention_policy_description_from_dict = RetentionPolicyDescription.from_dict(retention_policy_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


