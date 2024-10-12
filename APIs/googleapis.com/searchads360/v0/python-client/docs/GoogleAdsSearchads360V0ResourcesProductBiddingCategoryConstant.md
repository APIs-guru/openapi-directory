# GoogleAdsSearchads360V0ResourcesProductBiddingCategoryConstant

A Product Bidding Category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | Output only. Two-letter upper-case country code of the product bidding category. | [optional] [readonly] 
**id** | **str** | Output only. ID of the product bidding category. This ID is equivalent to the google_product_category ID as described in this article: https://support.google.com/merchants/answer/6324436. | [optional] [readonly] 
**language_code** | **str** | Output only. Language code of the product bidding category. | [optional] [readonly] 
**level** | **str** | Output only. Level of the product bidding category. | [optional] [readonly] 
**localized_name** | **str** | Output only. Display value of the product bidding category localized according to language_code. | [optional] [readonly] 
**product_bidding_category_constant_parent** | **str** | Output only. Resource name of the parent product bidding category. | [optional] [readonly] 
**resource_name** | **str** | Output only. The resource name of the product bidding category. Product bidding category resource names have the form: &#x60;productBiddingCategoryConstants/{country_code}~{level}~{id}&#x60; | [optional] [readonly] 
**status** | **str** | Output only. Status of the product bidding category. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_product_bidding_category_constant import GoogleAdsSearchads360V0ResourcesProductBiddingCategoryConstant

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesProductBiddingCategoryConstant from a JSON string
google_ads_searchads360_v0_resources_product_bidding_category_constant_instance = GoogleAdsSearchads360V0ResourcesProductBiddingCategoryConstant.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesProductBiddingCategoryConstant.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_product_bidding_category_constant_dict = google_ads_searchads360_v0_resources_product_bidding_category_constant_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesProductBiddingCategoryConstant from a dict
google_ads_searchads360_v0_resources_product_bidding_category_constant_from_dict = GoogleAdsSearchads360V0ResourcesProductBiddingCategoryConstant.from_dict(google_ads_searchads360_v0_resources_product_bidding_category_constant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


