# SellerDetail

The type that defines the fields for basic and detailed information about the seller of the item returned by the <b> item</b> resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback_percentage** | **str** | The percentage of the total positive feedback. | [optional] 
**feedback_score** | **int** | The feedback score of the seller. This value is based on the ratings from eBay members that bought items from this seller. | [optional] 
**seller_account_type** | **str** | This indicates if the seller is a business or an individual. This is determined when the seller registers with eBay. If they register for a business account, this value will be BUSINESS. If they register for a private account, this value will be INDIVIDUAL. This designation is required by the tax laws in the following countries: This field is returned only on the following sites. EBAY_AT, EBAY_BE, EBAY_CH, EBAY_DE, EBAY_ES, EBAY_FR, EBAY_GB, EBAY_IE, EBAY_IT, EBAY_PL Valid Values: BUSINESS or INDIVIDUAL Code so that your app gracefully handles any future changes to this list. | [optional] 
**seller_legal_info** | [**SellerLegalInfo**](SellerLegalInfo.md) |  | [optional] 
**username** | **str** | The user name created by the seller for use on eBay. | [optional] 

## Example

```python
from openapi_client.models.seller_detail import SellerDetail

# TODO update the JSON string below
json = "{}"
# create an instance of SellerDetail from a JSON string
seller_detail_instance = SellerDetail.from_json(json)
# print the JSON string representation of the object
print(SellerDetail.to_json())

# convert the object into a dict
seller_detail_dict = seller_detail_instance.to_dict()
# create an instance of SellerDetail from a dict
seller_detail_from_dict = SellerDetail.from_dict(seller_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


