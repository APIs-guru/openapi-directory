# RetentionPolicy

The base class for retention policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_policy_type** | **str** | This property is used as the discriminator for deciding the specific types in the polymorphic chain of types. | [optional] 

## Example

```python
from openapi_client.models.retention_policy import RetentionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of RetentionPolicy from a JSON string
retention_policy_instance = RetentionPolicy.from_json(json)
# print the JSON string representation of the object
print(RetentionPolicy.to_json())

# convert the object into a dict
retention_policy_dict = retention_policy_instance.to_dict()
# create an instance of RetentionPolicy from a dict
retention_policy_from_dict = RetentionPolicy.from_dict(retention_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


