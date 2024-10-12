# WnsCredential

Description of a NotificationHub WnsCredential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WnsCredentialProperties**](WnsCredentialProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.wns_credential import WnsCredential

# TODO update the JSON string below
json = "{}"
# create an instance of WnsCredential from a JSON string
wns_credential_instance = WnsCredential.from_json(json)
# print the JSON string representation of the object
print(WnsCredential.to_json())

# convert the object into a dict
wns_credential_dict = wns_credential_instance.to_dict()
# create an instance of WnsCredential from a dict
wns_credential_from_dict = WnsCredential.from_dict(wns_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


