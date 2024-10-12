# GoogleAdsSearchads360V0ResourcesWebpageView

A webpage view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_name** | **str** | Output only. The resource name of the webpage view. Webpage view resource names have the form: &#x60;customers/{customer_id}/webpageViews/{ad_group_id}~{criterion_id}&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_webpage_view import GoogleAdsSearchads360V0ResourcesWebpageView

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesWebpageView from a JSON string
google_ads_searchads360_v0_resources_webpage_view_instance = GoogleAdsSearchads360V0ResourcesWebpageView.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesWebpageView.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_webpage_view_dict = google_ads_searchads360_v0_resources_webpage_view_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesWebpageView from a dict
google_ads_searchads360_v0_resources_webpage_view_from_dict = GoogleAdsSearchads360V0ResourcesWebpageView.from_dict(google_ads_searchads360_v0_resources_webpage_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


