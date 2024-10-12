# AccountBusinessIdentity

The [business identity attributes](https://support.google.com/merchants/answer/10342414) can be used to self-declare attributes that let customers know more about your business.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**black_owned** | [**AccountIdentityType**](AccountIdentityType.md) |  | [optional] 
**include_for_promotions** | **bool** | Required. By setting this field, your business may be included in promotions for all the selected attributes. If you clear this option, it won&#39;t affect your identification with any of the attributes. For this field to be set, the merchant must self identify with at least one of the &#x60;AccountIdentityType&#x60;. If none are included, the request will be considered invalid. | [optional] 
**latino_owned** | [**AccountIdentityType**](AccountIdentityType.md) |  | [optional] 
**small_business** | [**AccountIdentityType**](AccountIdentityType.md) |  | [optional] 
**veteran_owned** | [**AccountIdentityType**](AccountIdentityType.md) |  | [optional] 
**women_owned** | [**AccountIdentityType**](AccountIdentityType.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_business_identity import AccountBusinessIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of AccountBusinessIdentity from a JSON string
account_business_identity_instance = AccountBusinessIdentity.from_json(json)
# print the JSON string representation of the object
print(AccountBusinessIdentity.to_json())

# convert the object into a dict
account_business_identity_dict = account_business_identity_instance.to_dict()
# create an instance of AccountBusinessIdentity from a dict
account_business_identity_from_dict = AccountBusinessIdentity.from_dict(account_business_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


