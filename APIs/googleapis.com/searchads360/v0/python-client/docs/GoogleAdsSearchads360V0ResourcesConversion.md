# GoogleAdsSearchads360V0ResourcesConversion

A conversion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_id** | **str** | Output only. Ad ID. A value of 0 indicates that the ad is unattributed. | [optional] [readonly] 
**advertiser_conversion_id** | **str** | Output only. For offline conversions, this is an ID provided by advertisers. If an advertiser doesn&#39;t specify such an ID, Search Ads 360 generates one. For online conversions, this is equal to the id column or the floodlight_order_id column depending on the advertiser&#39;s Floodlight instructions. | [optional] [readonly] 
**asset_field_type** | **str** | Output only. Asset field type of the conversion event. | [optional] [readonly] 
**asset_id** | **str** | Output only. ID of the asset which was interacted with during the conversion event. | [optional] [readonly] 
**attribution_type** | **str** | Output only. What the conversion is attributed to: Visit or Keyword+Ad. | [optional] [readonly] 
**click_id** | **str** | Output only. A unique string, for the visit that the conversion is attributed to, that is passed to the landing page as the click id URL parameter. | [optional] [readonly] 
**conversion_date_time** | **str** | Output only. The timestamp of the conversion event. | [optional] [readonly] 
**conversion_last_modified_date_time** | **str** | Output only. The timestamp of the last time the conversion was modified. | [optional] [readonly] 
**conversion_quantity** | **str** | Output only. The quantity of items recorded by the conversion, as determined by the qty url parameter. The advertiser is responsible for dynamically populating the parameter (such as number of items sold in the conversion), otherwise it defaults to 1. | [optional] [readonly] 
**conversion_revenue_micros** | **str** | Output only. The adjusted revenue in micros for the conversion event. This will always be in the currency of the serving account. | [optional] [readonly] 
**conversion_visit_date_time** | **str** | Output only. The timestamp of the visit that the conversion is attributed to. | [optional] [readonly] 
**criterion_id** | **str** | Output only. Search Ads 360 criterion ID. A value of 0 indicates that the criterion is unattributed. | [optional] [readonly] 
**floodlight_order_id** | **str** | Output only. The Floodlight order ID provided by the advertiser for the conversion. | [optional] [readonly] 
**floodlight_original_revenue** | **str** | Output only. The original, unchanged revenue associated with the Floodlight event (in the currency of the current report), before Floodlight currency instruction modifications. | [optional] [readonly] 
**id** | **str** | Output only. The ID of the conversion | [optional] [readonly] 
**merchant_id** | **str** | Output only. The SearchAds360 inventory account ID containing the product that was clicked on. SearchAds360 generates this ID when you link an inventory account in SearchAds360. | [optional] [readonly] 
**product_channel** | **str** | Output only. The sales channel of the product that was clicked on: Online or Local. | [optional] [readonly] 
**product_country_code** | **str** | Output only. The country (ISO-3166-format) registered for the inventory feed that contains the product clicked on. | [optional] [readonly] 
**product_id** | **str** | Output only. The ID of the product clicked on. | [optional] [readonly] 
**product_language_code** | **str** | Output only. The language (ISO-639-1) that has been set for the Merchant Center feed containing data about the product. | [optional] [readonly] 
**product_store_id** | **str** | Output only. The store in the Local Inventory Ad that was clicked on. This should match the store IDs used in your local products feed. | [optional] [readonly] 
**resource_name** | **str** | Output only. The resource name of the conversion. Conversion resource names have the form: &#x60;customers/{customer_id}/conversions/{ad_group_id}~{criterion_id}~{ds_conversion_id}&#x60; | [optional] [readonly] 
**status** | **str** | Output only. The status of the conversion, either ENABLED or REMOVED.. | [optional] [readonly] 
**visit_id** | **str** | Output only. The SearchAds360 visit ID that the conversion is attributed to. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_conversion import GoogleAdsSearchads360V0ResourcesConversion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesConversion from a JSON string
google_ads_searchads360_v0_resources_conversion_instance = GoogleAdsSearchads360V0ResourcesConversion.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesConversion.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_conversion_dict = google_ads_searchads360_v0_resources_conversion_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesConversion from a dict
google_ads_searchads360_v0_resources_conversion_from_dict = GoogleAdsSearchads360V0ResourcesConversion.from_dict(google_ads_searchads360_v0_resources_conversion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


