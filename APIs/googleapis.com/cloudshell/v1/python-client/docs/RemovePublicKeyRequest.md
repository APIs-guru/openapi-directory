# RemovePublicKeyRequest

Request message for RemovePublicKey.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key that should be removed from the environment. | [optional] 

## Example

```python
from openapi_client.models.remove_public_key_request import RemovePublicKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemovePublicKeyRequest from a JSON string
remove_public_key_request_instance = RemovePublicKeyRequest.from_json(json)
# print the JSON string representation of the object
print(RemovePublicKeyRequest.to_json())

# convert the object into a dict
remove_public_key_request_dict = remove_public_key_request_instance.to_dict()
# create an instance of RemovePublicKeyRequest from a dict
remove_public_key_request_from_dict = RemovePublicKeyRequest.from_dict(remove_public_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


