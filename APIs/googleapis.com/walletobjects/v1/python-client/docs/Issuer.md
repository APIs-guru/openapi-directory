# Issuer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_options** | [**CallbackOptions**](CallbackOptions.md) |  | [optional] 
**contact_info** | [**IssuerContactInfo**](IssuerContactInfo.md) |  | [optional] 
**homepage_url** | **str** | URL for the issuer&#39;s home page. | [optional] 
**issuer_id** | **str** | The unique identifier for an issuer account. This is automatically generated when the issuer is inserted. | [optional] 
**name** | **str** | The account name of the issuer. | [optional] 
**smart_tap_merchant_data** | [**SmartTapMerchantData**](SmartTapMerchantData.md) |  | [optional] 

## Example

```python
from openapi_client.models.issuer import Issuer

# TODO update the JSON string below
json = "{}"
# create an instance of Issuer from a JSON string
issuer_instance = Issuer.from_json(json)
# print the JSON string representation of the object
print(Issuer.to_json())

# convert the object into a dict
issuer_dict = issuer_instance.to_dict()
# create an instance of Issuer from a dict
issuer_from_dict = Issuer.from_dict(issuer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


