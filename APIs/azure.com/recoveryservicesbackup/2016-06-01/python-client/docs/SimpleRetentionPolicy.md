# SimpleRetentionPolicy

Simple policy retention.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retention_duration** | [**RetentionDuration**](RetentionDuration.md) |  | [optional] 

## Example

```python
from openapi_client.models.simple_retention_policy import SimpleRetentionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleRetentionPolicy from a JSON string
simple_retention_policy_instance = SimpleRetentionPolicy.from_json(json)
# print the JSON string representation of the object
print(SimpleRetentionPolicy.to_json())

# convert the object into a dict
simple_retention_policy_dict = simple_retention_policy_instance.to_dict()
# create an instance of SimpleRetentionPolicy from a dict
simple_retention_policy_from_dict = SimpleRetentionPolicy.from_dict(simple_retention_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


