# QuarantinePolicy

An object that represents quarantine policy for a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The value that indicates whether the policy is enabled or not. | [optional] 

## Example

```python
from openapi_client.models.quarantine_policy import QuarantinePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of QuarantinePolicy from a JSON string
quarantine_policy_instance = QuarantinePolicy.from_json(json)
# print the JSON string representation of the object
print(QuarantinePolicy.to_json())

# convert the object into a dict
quarantine_policy_dict = quarantine_policy_instance.to_dict()
# create an instance of QuarantinePolicy from a dict
quarantine_policy_from_dict = QuarantinePolicy.from_dict(quarantine_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


