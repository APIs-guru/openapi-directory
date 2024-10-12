# TrustPolicy

The content trust policy for a container registry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | The value that indicates whether the policy is enabled or not. | [optional] [default to 'disabled']
**type** | **str** | The type of trust policy. | [optional] [default to 'Notary']

## Example

```python
from openapi_client.models.trust_policy import TrustPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of TrustPolicy from a JSON string
trust_policy_instance = TrustPolicy.from_json(json)
# print the JSON string representation of the object
print(TrustPolicy.to_json())

# convert the object into a dict
trust_policy_dict = trust_policy_instance.to_dict()
# create an instance of TrustPolicy from a dict
trust_policy_from_dict = TrustPolicy.from_dict(trust_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


