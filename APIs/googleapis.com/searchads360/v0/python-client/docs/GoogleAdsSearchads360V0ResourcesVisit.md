# GoogleAdsSearchads360V0ResourcesVisit

A visit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_id** | **str** | Output only. Ad ID. A value of 0 indicates that the ad is unattributed. | [optional] [readonly] 
**asset_field_type** | **str** | Output only. Asset field type of the visit event. | [optional] [readonly] 
**asset_id** | **str** | Output only. ID of the asset which was interacted with during the visit event. | [optional] [readonly] 
**click_id** | **str** | Output only. A unique string for each visit that is passed to the landing page as the click id URL parameter. | [optional] [readonly] 
**criterion_id** | **str** | Output only. Search Ads 360 keyword ID. A value of 0 indicates that the keyword is unattributed. | [optional] [readonly] 
**id** | **str** | Output only. The ID of the visit. | [optional] [readonly] 
**merchant_id** | **str** | Output only. The Search Ads 360 inventory account ID containing the product that was clicked on. Search Ads 360 generates this ID when you link an inventory account in Search Ads 360. | [optional] [readonly] 
**product_channel** | **str** | Output only. The sales channel of the product that was clicked on: Online or Local. | [optional] [readonly] 
**product_country_code** | **str** | Output only. The country (ISO-3166 format) registered for the inventory feed that contains the product clicked on. | [optional] [readonly] 
**product_id** | **str** | Output only. The ID of the product clicked on. | [optional] [readonly] 
**product_language_code** | **str** | Output only. The language (ISO-639-1) that has been set for the Merchant Center feed containing data about the product. | [optional] [readonly] 
**product_store_id** | **str** | Output only. The store in the Local Inventory Ad that was clicked on. This should match the store IDs used in your local products feed. | [optional] [readonly] 
**resource_name** | **str** | Output only. The resource name of the visit. Visit resource names have the form: &#x60;customers/{customer_id}/visits/{ad_group_id}~{criterion_id}~{ds_visit_id}&#x60; | [optional] [readonly] 
**visit_date_time** | **str** | Output only. The timestamp of the visit event. The timestamp is in the customer&#39;s time zone and in \&quot;yyyy-MM-dd HH:mm:ss\&quot; format. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_visit import GoogleAdsSearchads360V0ResourcesVisit

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesVisit from a JSON string
google_ads_searchads360_v0_resources_visit_instance = GoogleAdsSearchads360V0ResourcesVisit.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesVisit.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_visit_dict = google_ads_searchads360_v0_resources_visit_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesVisit from a dict
google_ads_searchads360_v0_resources_visit_from_dict = GoogleAdsSearchads360V0ResourcesVisit.from_dict(google_ads_searchads360_v0_resources_visit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


