# MerchantIndustriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[MerchantIndustry]**](MerchantIndustry.md) |  | [optional] 
**links** | [**ResponseLinks**](ResponseLinks.md) |  | [optional] 
**meta** | [**ResponseMeta**](ResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.merchant_industries_response import MerchantIndustriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MerchantIndustriesResponse from a JSON string
merchant_industries_response_instance = MerchantIndustriesResponse.from_json(json)
# print the JSON string representation of the object
print(MerchantIndustriesResponse.to_json())

# convert the object into a dict
merchant_industries_response_dict = merchant_industries_response_instance.to_dict()
# create an instance of MerchantIndustriesResponse from a dict
merchant_industries_response_from_dict = MerchantIndustriesResponse.from_dict(merchant_industries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


