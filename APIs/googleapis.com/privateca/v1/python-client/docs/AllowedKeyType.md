# AllowedKeyType

Describes a \"type\" of key that may be used in a Certificate issued from a CaPool. Note that a single AllowedKeyType may refer to either a fully-qualified key algorithm, such as RSA 4096, or a family of key algorithms, such as any RSA key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elliptic_curve** | [**EcKeyType**](EcKeyType.md) |  | [optional] 
**rsa** | [**RsaKeyType**](RsaKeyType.md) |  | [optional] 

## Example

```python
from openapi_client.models.allowed_key_type import AllowedKeyType

# TODO update the JSON string below
json = "{}"
# create an instance of AllowedKeyType from a JSON string
allowed_key_type_instance = AllowedKeyType.from_json(json)
# print the JSON string representation of the object
print(AllowedKeyType.to_json())

# convert the object into a dict
allowed_key_type_dict = allowed_key_type_instance.to_dict()
# create an instance of AllowedKeyType from a dict
allowed_key_type_from_dict = AllowedKeyType.from_dict(allowed_key_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


