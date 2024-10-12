# ExtendedKeyUsageOptions

KeyUsage.ExtendedKeyUsageOptions has fields that correspond to certain common OIDs that could be specified as an extended key usage value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_auth** | **bool** | Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as \&quot;TLS WWW client authentication\&quot;, though regularly used for non-WWW TLS. | [optional] 
**code_signing** | **bool** | Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as \&quot;Signing of downloadable executable code client authentication\&quot;. | [optional] 
**email_protection** | **bool** | Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as \&quot;Email protection\&quot;. | [optional] 
**ocsp_signing** | **bool** | Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as \&quot;Signing OCSP responses\&quot;. | [optional] 
**server_auth** | **bool** | Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as \&quot;TLS WWW server authentication\&quot;, though regularly used for non-WWW TLS. | [optional] 
**time_stamping** | **bool** | Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as \&quot;Binding the hash of an object to a time\&quot;. | [optional] 

## Example

```python
from openapi_client.models.extended_key_usage_options import ExtendedKeyUsageOptions

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedKeyUsageOptions from a JSON string
extended_key_usage_options_instance = ExtendedKeyUsageOptions.from_json(json)
# print the JSON string representation of the object
print(ExtendedKeyUsageOptions.to_json())

# convert the object into a dict
extended_key_usage_options_dict = extended_key_usage_options_instance.to_dict()
# create an instance of ExtendedKeyUsageOptions from a dict
extended_key_usage_options_from_dict = ExtendedKeyUsageOptions.from_dict(extended_key_usage_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


