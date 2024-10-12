# WebAuthn

Security key information specific to the Web Authentication protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rp_id** | **str** | Relying party ID for Web Authentication. | [optional] 

## Example

```python
from openapi_client.models.web_authn import WebAuthn

# TODO update the JSON string below
json = "{}"
# create an instance of WebAuthn from a JSON string
web_authn_instance = WebAuthn.from_json(json)
# print the JSON string representation of the object
print(WebAuthn.to_json())

# convert the object into a dict
web_authn_dict = web_authn_instance.to_dict()
# create an instance of WebAuthn from a dict
web_authn_from_dict = WebAuthn.from_dict(web_authn_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


