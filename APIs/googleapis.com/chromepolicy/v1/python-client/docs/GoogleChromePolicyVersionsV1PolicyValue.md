# GoogleChromePolicyVersionsV1PolicyValue

A particular value for a policy managed by the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policy_schema** | **str** | The fully qualified name of the policy schema associated with this policy. | [optional] 
**value** | **Dict[str, object]** | The value of the policy that is compatible with the schema that it is associated with. | [optional] 

## Example

```python
from openapi_client.models.google_chrome_policy_versions_v1_policy_value import GoogleChromePolicyVersionsV1PolicyValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleChromePolicyVersionsV1PolicyValue from a JSON string
google_chrome_policy_versions_v1_policy_value_instance = GoogleChromePolicyVersionsV1PolicyValue.from_json(json)
# print the JSON string representation of the object
print(GoogleChromePolicyVersionsV1PolicyValue.to_json())

# convert the object into a dict
google_chrome_policy_versions_v1_policy_value_dict = google_chrome_policy_versions_v1_policy_value_instance.to_dict()
# create an instance of GoogleChromePolicyVersionsV1PolicyValue from a dict
google_chrome_policy_versions_v1_policy_value_from_dict = GoogleChromePolicyVersionsV1PolicyValue.from_dict(google_chrome_policy_versions_v1_policy_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


