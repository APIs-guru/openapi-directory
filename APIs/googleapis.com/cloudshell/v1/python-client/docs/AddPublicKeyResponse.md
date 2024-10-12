# AddPublicKeyResponse

Response message for AddPublicKey.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key that was added to the environment. | [optional] 

## Example

```python
from openapi_client.models.add_public_key_response import AddPublicKeyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddPublicKeyResponse from a JSON string
add_public_key_response_instance = AddPublicKeyResponse.from_json(json)
# print the JSON string representation of the object
print(AddPublicKeyResponse.to_json())

# convert the object into a dict
add_public_key_response_dict = add_public_key_response_instance.to_dict()
# create an instance of AddPublicKeyResponse from a dict
add_public_key_response_from_dict = AddPublicKeyResponse.from_dict(add_public_key_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


