# ContentKeyPolicyPlayReadyConfiguration

Specifies a configuration for PlayReady licenses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**licenses** | [**List[ContentKeyPolicyPlayReadyLicense]**](ContentKeyPolicyPlayReadyLicense.md) | The PlayReady licenses. | 
**response_custom_data** | **str** | The custom response data. | [optional] 

## Example

```python
from openapi_client.models.content_key_policy_play_ready_configuration import ContentKeyPolicyPlayReadyConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyPlayReadyConfiguration from a JSON string
content_key_policy_play_ready_configuration_instance = ContentKeyPolicyPlayReadyConfiguration.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyPlayReadyConfiguration.to_json())

# convert the object into a dict
content_key_policy_play_ready_configuration_dict = content_key_policy_play_ready_configuration_instance.to_dict()
# create an instance of ContentKeyPolicyPlayReadyConfiguration from a dict
content_key_policy_play_ready_configuration_from_dict = ContentKeyPolicyPlayReadyConfiguration.from_dict(content_key_policy_play_ready_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


