# RetentionPolicy

Specifies the retention policy for the log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **int** | the number of days for the retention in days. A value of 0 will retain the events indefinitely. | 
**enabled** | **bool** | a value indicating whether the retention policy is enabled. | 

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


