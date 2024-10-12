# MerchantIndustryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**MerchantIndustry**](MerchantIndustry.md) |  | [optional] 

## Example

```python
from openapi_client.models.merchant_industry_response import MerchantIndustryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantIndustryResponse from a JSON string
merchant_industry_response_instance = MerchantIndustryResponse.from_json(json)
# print the JSON string representation of the object
print(MerchantIndustryResponse.to_json())

# convert the object into a dict
merchant_industry_response_dict = merchant_industry_response_instance.to_dict()
# create an instance of MerchantIndustryResponse from a dict
merchant_industry_response_from_dict = MerchantIndustryResponse.from_dict(merchant_industry_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


