# GoogleAdsSearchads360V0ResourcesDynamicSearchAdsSearchTermView

A dynamic search ads search term view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**landing_page** | **str** | Output only. The dynamically selected landing page URL of the impression. This field is read-only. | [optional] [readonly] 
**resource_name** | **str** | Output only. The resource name of the dynamic search ads search term view. Dynamic search ads search term view resource names have the form: &#x60;customers/{customer_id}/dynamicSearchAdsSearchTermViews/{ad_group_id}~{search_term_fingerprint}~{headline_fingerprint}~{landing_page_fingerprint}~{page_url_fingerprint}&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_dynamic_search_ads_search_term_view import GoogleAdsSearchads360V0ResourcesDynamicSearchAdsSearchTermView

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesDynamicSearchAdsSearchTermView from a JSON string
google_ads_searchads360_v0_resources_dynamic_search_ads_search_term_view_instance = GoogleAdsSearchads360V0ResourcesDynamicSearchAdsSearchTermView.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesDynamicSearchAdsSearchTermView.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_dynamic_search_ads_search_term_view_dict = google_ads_searchads360_v0_resources_dynamic_search_ads_search_term_view_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesDynamicSearchAdsSearchTermView from a dict
google_ads_searchads360_v0_resources_dynamic_search_ads_search_term_view_from_dict = GoogleAdsSearchads360V0ResourcesDynamicSearchAdsSearchTermView.from_dict(google_ads_searchads360_v0_resources_dynamic_search_ads_search_term_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


