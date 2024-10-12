# ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction

Configures the Explicit Analog Television Output Restriction control bits. For further details see the PlayReady Compliance Rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**best_effort** | **bool** | Indicates whether this restriction is enforced on a Best Effort basis. | 
**configuration_data** | **int** | Configures the restriction control bits. Must be between 0 and 3 inclusive. | 

## Example

```python
from openapi_client.models.content_key_policy_play_ready_explicit_analog_television_restriction import ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction from a JSON string
content_key_policy_play_ready_explicit_analog_television_restriction_instance = ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction.to_json())

# convert the object into a dict
content_key_policy_play_ready_explicit_analog_television_restriction_dict = content_key_policy_play_ready_explicit_analog_television_restriction_instance.to_dict()
# create an instance of ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction from a dict
content_key_policy_play_ready_explicit_analog_television_restriction_from_dict = ContentKeyPolicyPlayReadyExplicitAnalogTelevisionRestriction.from_dict(content_key_policy_play_ready_explicit_analog_television_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


