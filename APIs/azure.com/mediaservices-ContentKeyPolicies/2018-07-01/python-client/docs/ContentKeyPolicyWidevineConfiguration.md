# ContentKeyPolicyWidevineConfiguration

Specifies a configuration for Widevine licenses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**widevine_template** | **str** | The Widevine template. | 

## Example

```python
from openapi_client.models.content_key_policy_widevine_configuration import ContentKeyPolicyWidevineConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyWidevineConfiguration from a JSON string
content_key_policy_widevine_configuration_instance = ContentKeyPolicyWidevineConfiguration.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyWidevineConfiguration.to_json())

# convert the object into a dict
content_key_policy_widevine_configuration_dict = content_key_policy_widevine_configuration_instance.to_dict()
# create an instance of ContentKeyPolicyWidevineConfiguration from a dict
content_key_policy_widevine_configuration_from_dict = ContentKeyPolicyWidevineConfiguration.from_dict(content_key_policy_widevine_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


