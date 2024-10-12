# MerchantIndustryAttributes

Array of Merchant-industry attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Merchant-industry&#x60;s name | [optional] 

## Example

```python
from openapi_client.models.merchant_industry_attributes import MerchantIndustryAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantIndustryAttributes from a JSON string
merchant_industry_attributes_instance = MerchantIndustryAttributes.from_json(json)
# print the JSON string representation of the object
print(MerchantIndustryAttributes.to_json())

# convert the object into a dict
merchant_industry_attributes_dict = merchant_industry_attributes_instance.to_dict()
# create an instance of MerchantIndustryAttributes from a dict
merchant_industry_attributes_from_dict = MerchantIndustryAttributes.from_dict(merchant_industry_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


