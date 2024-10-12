# JsonWebKey

As of http://tools.ietf.org/html/draft-ietf-jose-json-web-key-18

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crv** | **str** | Elliptic curve name. For valid values, see JsonWebKeyCurveName. | [optional] 
**d** | **str** | RSA private exponent, or the D component of an EC private key. | [optional] 
**dp** | **str** | RSA private key parameter. | [optional] 
**dq** | **str** | RSA private key parameter. | [optional] 
**e** | **str** | RSA public exponent. | [optional] 
**k** | **str** | Symmetric key. | [optional] 
**key_hsm** | **str** | HSM Token, used with &#39;Bring Your Own Key&#39;. | [optional] 
**key_ops** | **List[str]** |  | [optional] 
**kid** | **str** | Key identifier. | [optional] 
**kty** | **str** | JsonWebKey Key Type (kty), as defined in https://tools.ietf.org/html/draft-ietf-jose-json-web-algorithms-40. | [optional] 
**n** | **str** | RSA modulus. | [optional] 
**p** | **str** | RSA secret prime. | [optional] 
**q** | **str** | RSA secret prime, with p &lt; q. | [optional] 
**qi** | **str** | RSA private key parameter. | [optional] 
**x** | **str** | X component of an EC public key. | [optional] 
**y** | **str** | Y component of an EC public key. | [optional] 

## Example

```python
from openapi_client.models.json_web_key import JsonWebKey

# TODO update the JSON string below
json = "{}"
# create an instance of JsonWebKey from a JSON string
json_web_key_instance = JsonWebKey.from_json(json)
# print the JSON string representation of the object
print(JsonWebKey.to_json())

# convert the object into a dict
json_web_key_dict = json_web_key_instance.to_dict()
# create an instance of JsonWebKey from a dict
json_web_key_from_dict = JsonWebKey.from_dict(json_web_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


