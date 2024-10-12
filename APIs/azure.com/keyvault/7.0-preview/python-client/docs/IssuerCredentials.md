# IssuerCredentials

The credentials to be used for the certificate issuer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The user name/account name/account id. | [optional] 
**pwd** | **str** | The password/secret/account key. | [optional] 

## Example

```python
from openapi_client.models.issuer_credentials import IssuerCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of IssuerCredentials from a JSON string
issuer_credentials_instance = IssuerCredentials.from_json(json)
# print the JSON string representation of the object
print(IssuerCredentials.to_json())

# convert the object into a dict
issuer_credentials_dict = issuer_credentials_instance.to_dict()
# create an instance of IssuerCredentials from a dict
issuer_credentials_from_dict = IssuerCredentials.from_dict(issuer_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


