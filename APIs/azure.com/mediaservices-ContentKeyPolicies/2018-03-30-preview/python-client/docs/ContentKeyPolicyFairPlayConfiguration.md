# ContentKeyPolicyFairPlayConfiguration

Specifies a configuration for FairPlay licenses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ask** | **bytearray** | The key that must be used as FairPlay ASk. | 
**fair_play_pfx** | **str** | The Base64 representation of FairPlay certificate in PKCS 12 (pfx) format (including private key). | 
**fair_play_pfx_password** | **str** | The password encrypting FairPlay certificate in PKCS 12 (pfx) format. | 
**rental_and_lease_key_type** | **str** | The rental and lease key type. | 
**rental_duration** | **int** | The rental duration. Must be greater than or equal to 0. | 

## Example

```python
from openapi_client.models.content_key_policy_fair_play_configuration import ContentKeyPolicyFairPlayConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ContentKeyPolicyFairPlayConfiguration from a JSON string
content_key_policy_fair_play_configuration_instance = ContentKeyPolicyFairPlayConfiguration.from_json(json)
# print the JSON string representation of the object
print(ContentKeyPolicyFairPlayConfiguration.to_json())

# convert the object into a dict
content_key_policy_fair_play_configuration_dict = content_key_policy_fair_play_configuration_instance.to_dict()
# create an instance of ContentKeyPolicyFairPlayConfiguration from a dict
content_key_policy_fair_play_configuration_from_dict = ContentKeyPolicyFairPlayConfiguration.from_dict(content_key_policy_fair_play_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


