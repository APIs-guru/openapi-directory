# Merchant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**brand_name** | **str** | The brand name of the merchant. | [optional] 
**comment** | **str** | Notes or comments returned about the merchant. | [optional] 
**descriptor_text** | **str** | Descriptor for the merchant provided by the Merchant Service Provider(MSP). | [optional] 
**legal_corporate_name** | **str** | Corporate legal name of the merchant. | [optional] 
**location_id** | **int** | Merchant specific location identifier. | [optional] 
**match_confidence_score** | **int** | Confidence score (%) to help clients understand the quality of the search results. | [optional] 
**merchant_category** | **str** | Merchant category code and description associated with the merchant category code for the merchant.   5814 - FAST FOOD RESTAURANTS, 5541 - SERVICE STATIONS WITH OR WITHOUT ANCILLARY SERVICE,   5735 - RECORD SHOPS, 5971 - ART DEALERS AND GALLERIES | [optional] 
**merchant_dba_name** | **str** | Name under which the merchant is &#39;doing business as&#39;. | [optional] 
**phone_number** | **str** | The phone number of the merchant. | [optional] 
**sole_proprietor_name** | **str** |  | [optional] 

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


