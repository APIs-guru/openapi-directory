# GoogleAdsSearchads360V0CommonSegments

Segment only fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_network_type** | **str** | Ad network type. | [optional] 
**asset_interaction_target** | [**GoogleAdsSearchads360V0CommonAssetInteractionTarget**](GoogleAdsSearchads360V0CommonAssetInteractionTarget.md) |  | [optional] 
**conversion_action** | **str** | Resource name of the conversion action. | [optional] 
**conversion_action_category** | **str** | Conversion action category. | [optional] 
**conversion_action_name** | **str** | Conversion action name. | [optional] 
**conversion_custom_dimensions** | [**List[GoogleAdsSearchads360V0CommonValue]**](GoogleAdsSearchads360V0CommonValue.md) | The conversion custom dimensions. | [optional] 
**var_date** | **str** | Date to which metrics apply. yyyy-MM-dd format, for example, 2018-04-17. | [optional] 
**day_of_week** | **str** | Day of the week, for example, MONDAY. | [optional] 
**device** | **str** | Device to which metrics apply. | [optional] 
**keyword** | [**GoogleAdsSearchads360V0CommonKeyword**](GoogleAdsSearchads360V0CommonKeyword.md) |  | [optional] 
**month** | **str** | Month as represented by the date of the first day of a month. Formatted as yyyy-MM-dd. | [optional] 
**product_bidding_category_level1** | **str** | Bidding category (level 1) of the product. | [optional] 
**product_bidding_category_level2** | **str** | Bidding category (level 2) of the product. | [optional] 
**product_bidding_category_level3** | **str** | Bidding category (level 3) of the product. | [optional] 
**product_bidding_category_level4** | **str** | Bidding category (level 4) of the product. | [optional] 
**product_bidding_category_level5** | **str** | Bidding category (level 5) of the product. | [optional] 
**product_brand** | **str** | Brand of the product. | [optional] 
**product_channel** | **str** | Channel of the product. | [optional] 
**product_channel_exclusivity** | **str** | Channel exclusivity of the product. | [optional] 
**product_condition** | **str** | Condition of the product. | [optional] 
**product_country** | **str** | Resource name of the geo target constant for the country of sale of the product. | [optional] 
**product_custom_attribute0** | **str** | Custom attribute 0 of the product. | [optional] 
**product_custom_attribute1** | **str** | Custom attribute 1 of the product. | [optional] 
**product_custom_attribute2** | **str** | Custom attribute 2 of the product. | [optional] 
**product_custom_attribute3** | **str** | Custom attribute 3 of the product. | [optional] 
**product_custom_attribute4** | **str** | Custom attribute 4 of the product. | [optional] 
**product_item_id** | **str** | Item ID of the product. | [optional] 
**product_language** | **str** | Resource name of the language constant for the language of the product. | [optional] 
**product_sold_bidding_category_level1** | **str** | Bidding category (level 1) of the product sold. | [optional] 
**product_sold_bidding_category_level2** | **str** | Bidding category (level 2) of the product sold. | [optional] 
**product_sold_bidding_category_level3** | **str** | Bidding category (level 3) of the product sold. | [optional] 
**product_sold_bidding_category_level4** | **str** | Bidding category (level 4) of the product sold. | [optional] 
**product_sold_bidding_category_level5** | **str** | Bidding category (level 5) of the product sold. | [optional] 
**product_sold_brand** | **str** | Brand of the product sold. | [optional] 
**product_sold_condition** | **str** | Condition of the product sold. | [optional] 
**product_sold_custom_attribute0** | **str** | Custom attribute 0 of the product sold. | [optional] 
**product_sold_custom_attribute1** | **str** | Custom attribute 1 of the product sold. | [optional] 
**product_sold_custom_attribute2** | **str** | Custom attribute 2 of the product sold. | [optional] 
**product_sold_custom_attribute3** | **str** | Custom attribute 3 of the product sold. | [optional] 
**product_sold_custom_attribute4** | **str** | Custom attribute 4 of the product sold. | [optional] 
**product_sold_item_id** | **str** | Item ID of the product sold. | [optional] 
**product_sold_title** | **str** | Title of the product sold. | [optional] 
**product_sold_type_l1** | **str** | Type (level 1) of the product sold. | [optional] 
**product_sold_type_l2** | **str** | Type (level 2) of the product sold. | [optional] 
**product_sold_type_l3** | **str** | Type (level 3) of the product sold. | [optional] 
**product_sold_type_l4** | **str** | Type (level 4) of the product sold. | [optional] 
**product_sold_type_l5** | **str** | Type (level 5) of the product sold. | [optional] 
**product_store_id** | **str** | Store ID of the product. | [optional] 
**product_title** | **str** | Title of the product. | [optional] 
**product_type_l1** | **str** | Type (level 1) of the product. | [optional] 
**product_type_l2** | **str** | Type (level 2) of the product. | [optional] 
**product_type_l3** | **str** | Type (level 3) of the product. | [optional] 
**product_type_l4** | **str** | Type (level 4) of the product. | [optional] 
**product_type_l5** | **str** | Type (level 5) of the product. | [optional] 
**quarter** | **str** | Quarter as represented by the date of the first day of a quarter. Uses the calendar year for quarters, for example, the second quarter of 2018 starts on 2018-04-01. Formatted as yyyy-MM-dd. | [optional] 
**raw_event_conversion_dimensions** | [**List[GoogleAdsSearchads360V0CommonValue]**](GoogleAdsSearchads360V0CommonValue.md) | The raw event conversion dimensions. | [optional] 
**week** | **str** | Week as defined as Monday through Sunday, and represented by the date of Monday. Formatted as yyyy-MM-dd. | [optional] 
**year** | **int** | Year, formatted as yyyy. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_segments import GoogleAdsSearchads360V0CommonSegments

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonSegments from a JSON string
google_ads_searchads360_v0_common_segments_instance = GoogleAdsSearchads360V0CommonSegments.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonSegments.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_segments_dict = google_ads_searchads360_v0_common_segments_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonSegments from a dict
google_ads_searchads360_v0_common_segments_from_dict = GoogleAdsSearchads360V0CommonSegments.from_dict(google_ads_searchads360_v0_common_segments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


