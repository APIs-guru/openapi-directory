# MerchantIndustry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**MerchantIndustryAttributes**](MerchantIndustryAttributes.md) |  | [optional] 
**id** | **str** | Merchant-industry&#x60;s ID | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.merchant_industry import MerchantIndustry

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantIndustry from a JSON string
merchant_industry_instance = MerchantIndustry.from_json(json)
# print the JSON string representation of the object
print(MerchantIndustry.to_json())

# convert the object into a dict
merchant_industry_dict = merchant_industry_instance.to_dict()
# create an instance of MerchantIndustry from a dict
merchant_industry_from_dict = MerchantIndustry.from_dict(merchant_industry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


