# IapCredential

Describes authentication configuration for Identity-Aware-Proxy (IAP).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iap_test_service_account_info** | [**IapTestServiceAccountInfo**](IapTestServiceAccountInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.iap_credential import IapCredential

# TODO update the JSON string below
json = "{}"
# create an instance of IapCredential from a JSON string
iap_credential_instance = IapCredential.from_json(json)
# print the JSON string representation of the object
print(IapCredential.to_json())

# convert the object into a dict
iap_credential_dict = iap_credential_instance.to_dict()
# create an instance of IapCredential from a dict
iap_credential_from_dict = IapCredential.from_dict(iap_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


