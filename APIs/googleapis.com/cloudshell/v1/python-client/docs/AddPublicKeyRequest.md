# AddPublicKeyRequest

Request message for AddPublicKey.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key that should be added to the environment. Supported formats are &#x60;ssh-dss&#x60; (see RFC4253), &#x60;ssh-rsa&#x60; (see RFC4253), &#x60;ecdsa-sha2-nistp256&#x60; (see RFC5656), &#x60;ecdsa-sha2-nistp384&#x60; (see RFC5656) and &#x60;ecdsa-sha2-nistp521&#x60; (see RFC5656). It should be structured as &lt;format&gt; &lt;content&gt;, where &lt;content&gt; part is encoded with Base64. | [optional] 

## Example

```python
from openapi_client.models.add_public_key_request import AddPublicKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddPublicKeyRequest from a JSON string
add_public_key_request_instance = AddPublicKeyRequest.from_json(json)
# print the JSON string representation of the object
print(AddPublicKeyRequest.to_json())

# convert the object into a dict
add_public_key_request_dict = add_public_key_request_instance.to_dict()
# create an instance of AddPublicKeyRequest from a dict
add_public_key_request_from_dict = AddPublicKeyRequest.from_dict(add_public_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


