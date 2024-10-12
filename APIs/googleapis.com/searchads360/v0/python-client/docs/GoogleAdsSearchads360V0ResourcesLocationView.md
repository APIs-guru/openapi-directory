# GoogleAdsSearchads360V0ResourcesLocationView

A location view summarizes the performance of campaigns by Location criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_name** | **str** | Output only. The resource name of the location view. Location view resource names have the form: &#x60;customers/{customer_id}/locationViews/{campaign_id}~{criterion_id}&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_location_view import GoogleAdsSearchads360V0ResourcesLocationView

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesLocationView from a JSON string
google_ads_searchads360_v0_resources_location_view_instance = GoogleAdsSearchads360V0ResourcesLocationView.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesLocationView.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_location_view_dict = google_ads_searchads360_v0_resources_location_view_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesLocationView from a dict
google_ads_searchads360_v0_resources_location_view_from_dict = GoogleAdsSearchads360V0ResourcesLocationView.from_dict(google_ads_searchads360_v0_resources_location_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


