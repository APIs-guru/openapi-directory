# HmacKey

JSON template to produce a JSON-style HMAC Key resource for Create responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of item this is. For HMAC keys, this is always storage#hmacKey. | [optional] [default to 'storage#hmacKey']
**metadata** | [**HmacKeyMetadata**](HmacKeyMetadata.md) |  | [optional] 
**secret** | **str** | HMAC secret key material. | [optional] 

## Example

```python
from openapi_client.models.hmac_key import HmacKey

# TODO update the JSON string below
json = "{}"
# create an instance of HmacKey from a JSON string
hmac_key_instance = HmacKey.from_json(json)
# print the JSON string representation of the object
print(HmacKey.to_json())

# convert the object into a dict
hmac_key_dict = hmac_key_instance.to_dict()
# create an instance of HmacKey from a dict
hmac_key_from_dict = HmacKey.from_dict(hmac_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


