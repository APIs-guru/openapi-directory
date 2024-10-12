# ContentKeyPolicyConfiguration

Base class for Content Key Policy configuration. A derived class must be used to create a configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 

## Example

```python
from openapi_client.models.content_key_policy_configuration import ContentKeyPolicyConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyConfiguration from a JSON string
content_key_policy_configuration_instance = ContentKeyPolicyConfiguration.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyConfiguration.to_json())

# convert the object into a dict
content_key_policy_configuration_dict = content_key_policy_configuration_instance.to_dict()
# create an instance of ContentKeyPolicyConfiguration from a dict
content_key_policy_configuration_from_dict = ContentKeyPolicyConfiguration.from_dict(content_key_policy_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


