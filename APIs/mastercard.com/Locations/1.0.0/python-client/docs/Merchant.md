# Merchant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acceptance** | [**Acceptance**](Acceptance.md) |  | [optional] 
**category** | **str** | Merchant&#39;s category. | [optional] 
**features** | [**Features**](Features.md) |  | [optional] 
**id** | **str** | Numerical merchant identifier. | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**merchant_offer_id** | **str** | Merchant&#39;s Easy Savings Offer Id | [optional] 
**name** | **str** | Name of the merchant | [optional] 
**phone_number** | **str** | Merchant&#39;s phone number | [optional] 
**products** | [**Products**](Products.md) |  | [optional] 
**topup** | [**Topup**](Topup.md) |  | [optional] 
**website_url** | **str** | Merchant&#39;s website URL address. | [optional] 

## Example

```python
from openapi_client.models.merchant import Merchant

# TODO update the JSON string below
json = "{}"
# create an instance of Merchant from a JSON string
merchant_instance = Merchant.from_json(json)
# print the JSON string representation of the object
print(Merchant.to_json())

# convert the object into a dict
merchant_dict = merchant_instance.to_dict()
# create an instance of Merchant from a dict
merchant_from_dict = Merchant.from_dict(merchant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


