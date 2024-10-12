# Secret

Holds encrypted information that is only decrypted and stored in RAM by the worker VM when running the pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cipher_text** | **str** | The value of the cipherText response from the &#x60;encrypt&#x60; method. This field is intentionally unaudited. | [optional] 
**key_name** | **str** | The name of the Cloud KMS key that will be used to decrypt the secret value. The VM service account must have the required permissions and authentication scopes to invoke the &#x60;decrypt&#x60; method on the specified key. | [optional] 

## Example

```python
from openapi_client.models.secret import Secret

# TODO update the JSON string below
json = "{}"
# create an instance of Secret from a JSON string
secret_instance = Secret.from_json(json)
# print the JSON string representation of the object
print(Secret.to_json())

# convert the object into a dict
secret_dict = secret_instance.to_dict()
# create an instance of Secret from a dict
secret_from_dict = Secret.from_dict(secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


