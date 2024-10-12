# MerchantMatch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**alt_phone_number** | **str** | The Business or Merchant&#39;s alternate phone number. | [optional] 
**country_subdivision_tax_id** | **str** | The Merchant&#39;s state tax ID; for the U.S region only. Return value will be hidden. | [optional] 
**doing_business_as_name** | **str** | The name used by a merchant that could be different from the legal name of the business. Such as Bait R Us instead of the legal name, The Bait Shop | [optional] 
**name** | **str** | The name of the Business which has been terminated. | [optional] 
**national_tax_id** | **str** | The National tax ID or business registration number. Return value will be hidden. | [optional] 
**phone_number** | **str** | The Business or Merchant&#39;s phone number. | [optional] 
**principal_match** | [**List[PrincipalMatch]**](PrincipalMatch.md) |  | [optional] 
**service_prov_dba** | **str** | The name of the service provider associated with the merchant listed in the MATCH. | [optional] 
**service_prov_legal** | **str** | The name of the service provider associated with the merchant listed in the MATCH. | [optional] 

## Example

```python
from openapi_client.models.merchant_match import MerchantMatch

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantMatch from a JSON string
merchant_match_instance = MerchantMatch.from_json(json)
# print the JSON string representation of the object
print(MerchantMatch.to_json())

# convert the object into a dict
merchant_match_dict = merchant_match_instance.to_dict()
# create an instance of MerchantMatch from a dict
merchant_match_from_dict = MerchantMatch.from_dict(merchant_match_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


