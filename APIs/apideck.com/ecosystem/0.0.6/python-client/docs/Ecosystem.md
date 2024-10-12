# Ecosystem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**about** | **str** |  | [optional] 
**alternatives_background_color** | **str** |  | [optional] 
**alternatives_color** | **str** |  | [optional] 
**attribution** | **bool** |  | [optional] 
**body_background_color** | **str** |  | [optional] 
**body_button_background_color** | **str** |  | [optional] 
**body_button_color** | **str** |  | [optional] 
**body_color** | **str** |  | [optional] 
**body_link_color** | **str** |  | [optional] 
**card_settings** | [**CardSettings**](CardSettings.md) |  | [optional] 
**categories_count_badge** | **bool** |  | [optional] 
**categories_show_max_items** | **int** |  | [optional] 
**collections_count_badge** | **bool** |  | [optional] 
**collections_title** | **str** |  | [optional] 
**create_link** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] [readonly] 
**cta_settings** | [**CTASettings**](CTASettings.md) |  | [optional] 
**custom_domain** | **str** |  | [optional] 
**custom_settings** | [**CustomSettings**](CustomSettings.md) |  | [optional] 
**detail_pages_enabled** | **bool** |  | [optional] 
**footer_background_color** | **str** |  | [optional] 
**footer_color** | **str** |  | [optional] 
**google_site_verification_id** | **str** |  | [optional] 
**hide_install_buttons** | **bool** |  | [optional] 
**home_page_collection_category_cards** | **bool** |  | [optional] 
**home_page_show_all_listings** | **bool** |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**installation_request_flow_enabled** | **bool** |  | [optional] 
**integration_settings** | [**IntegrationSettings**](IntegrationSettings.md) |  | [optional] 
**is_published** | **bool** |  | 
**lead_form_settings** | [**LeadFormSettings**](LeadFormSettings.md) |  | [optional] 
**listing_settings** | [**ListingSettings**](ListingSettings.md) |  | [optional] 
**masthead_settings** | [**MastheadSettings**](MastheadSettings.md) |  | [optional] 
**menu_position** | **str** |  | [optional] 
**menu_style** | **str** |  | [optional] 
**meta_tag_settings** | [**MetaTagSettings**](MetaTagSettings.md) |  | [optional] 
**name** | **str** |  | 
**navigation_background_color** | **str** |  | [optional] 
**navigation_color** | **str** |  | [optional] 
**navigation_logo_post_fix** | **str** |  | [optional] 
**navigation_mobile_menu_type** | **str** |  | [optional] 
**navigation_sticky** | **bool** |  | [optional] 
**primary_color** | **str** |  | [optional] 
**privacy_link** | **str** |  | [optional] 
**request_link** | **str** |  | [optional] 
**shadow_page_description** | **str** |  | [optional] 
**shadow_pages_enabled** | **bool** |  | [optional] 
**show_attribution_badge** | **bool** |  | [optional] 
**show_requested_listings** | **bool** |  | [optional] 
**slug** | **str** |  | 
**terms_link** | **str** |  | [optional] 
**total_published_listings** | **int** |  | [optional] 
**unify_application_id** | **str** |  | [optional] 
**updated_at** | **datetime** |  | [optional] [readonly] 
**utm_campaign** | **str** |  | [optional] 
**website** | **str** |  | [optional] 
**zaps_menu_title** | **str** |  | [optional] 
**zaps_page_enabled** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.ecosystem import Ecosystem

# TODO update the JSON string below
json = "{}"
# create an instance of Ecosystem from a JSON string
ecosystem_instance = Ecosystem.from_json(json)
# print the JSON string representation of the object
print(Ecosystem.to_json())

# convert the object into a dict
ecosystem_dict = ecosystem_instance.to_dict()
# create an instance of Ecosystem from a dict
ecosystem_from_dict = Ecosystem.from_dict(ecosystem_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


