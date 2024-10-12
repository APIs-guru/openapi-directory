# KMSEnvMap


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cipher_text** | **str** | The value of the cipherText response from the &#x60;encrypt&#x60; method. | [optional] 
**key_name** | **str** | The name of the KMS key that will be used to decrypt the cipher text. | [optional] 

## Example

```python
from openapi_client.models.kms_env_map import KMSEnvMap

# TODO update the JSON string below
json = "{}"
# create an instance of KMSEnvMap from a JSON string
kms_env_map_instance = KMSEnvMap.from_json(json)
# print the JSON string representation of the object
print(KMSEnvMap.to_json())

# convert the object into a dict
kms_env_map_dict = kms_env_map_instance.to_dict()
# create an instance of KMSEnvMap from a dict
kms_env_map_from_dict = KMSEnvMap.from_dict(kms_env_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


