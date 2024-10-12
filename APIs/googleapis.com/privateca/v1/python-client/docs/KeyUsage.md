# KeyUsage

A KeyUsage describes key usage values that may appear in an X.509 certificate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_key_usage** | [**KeyUsageOptions**](KeyUsageOptions.md) |  | [optional] 
**extended_key_usage** | [**ExtendedKeyUsageOptions**](ExtendedKeyUsageOptions.md) |  | [optional] 
**unknown_extended_key_usages** | [**List[ObjectId]**](ObjectId.md) | Used to describe extended key usages that are not listed in the KeyUsage.ExtendedKeyUsageOptions message. | [optional] 

## Example

```python
from openapi_client.models.key_usage import KeyUsage

# TODO update the JSON string below
json = "{}"
# create an instance of KeyUsage from a JSON string
key_usage_instance = KeyUsage.from_json(json)
# print the JSON string representation of the object
print(KeyUsage.to_json())

# convert the object into a dict
key_usage_dict = key_usage_instance.to_dict()
# create an instance of KeyUsage from a dict
key_usage_from_dict = KeyUsage.from_dict(key_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


