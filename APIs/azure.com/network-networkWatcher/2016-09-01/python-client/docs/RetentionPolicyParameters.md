# RetentionPolicyParameters

Parameters that define the retention policy for flow log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **int** | Number of days to retain flow log records. | [optional] 
**enabled** | **bool** | Flag to enable/disable retention. | [optional] [default to False]

## Example

```python
from openapi_client.models.retention_policy_parameters import RetentionPolicyParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RetentionPolicyParameters from a JSON string
retention_policy_parameters_instance = RetentionPolicyParameters.from_json(json)
# print the JSON string representation of the object
print(RetentionPolicyParameters.to_json())

# convert the object into a dict
retention_policy_parameters_dict = retention_policy_parameters_instance.to_dict()
# create an instance of RetentionPolicyParameters from a dict
retention_policy_parameters_from_dict = RetentionPolicyParameters.from_dict(retention_policy_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


