# CryptoKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** |  | [optional] 
**bits** | **int** |  | [optional] 
**file_hash** | **str** |  | [optional] 
**file_name** | **str** |  | [optional] 
**pem_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.crypto_key import CryptoKey

# TODO update the JSON string below
json = "{}"
# create an instance of CryptoKey from a JSON string
crypto_key_instance = CryptoKey.from_json(json)
# print the JSON string representation of the object
print(CryptoKey.to_json())

# convert the object into a dict
crypto_key_dict = crypto_key_instance.to_dict()
# create an instance of CryptoKey from a dict
crypto_key_from_dict = CryptoKey.from_dict(crypto_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


