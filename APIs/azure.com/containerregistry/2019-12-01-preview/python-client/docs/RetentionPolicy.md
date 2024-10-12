# RetentionPolicy

The retention policy for a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **int** | The number of days to retain an untagged manifest after which it gets purged. | [optional] [default to 7]
**last_updated_time** | **datetime** | The timestamp when the policy was last updated. | [optional] [readonly] 
**status** | **str** | The value that indicates whether the policy is enabled or not. | [optional] [default to 'disabled']

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


