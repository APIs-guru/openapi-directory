# SecretDescriptor

The secret type-specific descriptor.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_characters** | **str** | The allowed characters in the password | [optional] 
**alternative_dns_names** | **List[str]** | Alternative DNS Names. | [optional] 
**alternative_ip_addresses** | **List[str]** | The list of alternative IP addresses. | [optional] 
**key_length** | **int** | The key length. | [optional] 
**password_length** | **int** | The minimum password length is 8 characters, and the maximum password length is 128 characters. | [optional] 
**password_validation_regex** | **str** | Password validation regular expression. | [optional] 
**rotation_status** | **str** | The storage account key secret rotation status. | [optional] 
**secondary_key_is_active** | **bool** | A value indicating whether the secondary or primary storage account key is active as a secret. | [optional] 
**subject** | **str** | Certificate&#39;s subject | [optional] 

## Example

```python
from openapi_client.models.secret_descriptor import SecretDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of SecretDescriptor from a JSON string
secret_descriptor_instance = SecretDescriptor.from_json(json)
# print the JSON string representation of the object
print(SecretDescriptor.to_json())

# convert the object into a dict
secret_descriptor_dict = secret_descriptor_instance.to_dict()
# create an instance of SecretDescriptor from a dict
secret_descriptor_from_dict = SecretDescriptor.from_dict(secret_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


