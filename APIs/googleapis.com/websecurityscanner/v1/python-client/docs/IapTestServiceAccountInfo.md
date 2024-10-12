# IapTestServiceAccountInfo

Describes authentication configuration when Web-Security-Scanner service account is added in Identity-Aware-Proxy (IAP) access policies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_audience_client_id** | **str** | Required. Describes OAuth2 client id of resources protected by Identity-Aware-Proxy (IAP). | [optional] 

## Example

```python
from openapi_client.models.iap_test_service_account_info import IapTestServiceAccountInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IapTestServiceAccountInfo from a JSON string
iap_test_service_account_info_instance = IapTestServiceAccountInfo.from_json(json)
# print the JSON string representation of the object
print(IapTestServiceAccountInfo.to_json())

# convert the object into a dict
iap_test_service_account_info_dict = iap_test_service_account_info_instance.to_dict()
# create an instance of IapTestServiceAccountInfo from a dict
iap_test_service_account_info_from_dict = IapTestServiceAccountInfo.from_dict(iap_test_service_account_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


