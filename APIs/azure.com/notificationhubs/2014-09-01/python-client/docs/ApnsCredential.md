# ApnsCredential

Description of a NotificationHub ApnsCredential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApnsCredentialProperties**](ApnsCredentialProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.apns_credential import ApnsCredential

# TODO update the JSON string below
json = "{}"
# create an instance of ApnsCredential from a JSON string
apns_credential_instance = ApnsCredential.from_json(json)
# print the JSON string representation of the object
print(ApnsCredential.to_json())

# convert the object into a dict
apns_credential_dict = apns_credential_instance.to_dict()
# create an instance of ApnsCredential from a dict
apns_credential_from_dict = ApnsCredential.from_dict(apns_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


