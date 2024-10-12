# GoogleAdsSearchads360V0ResourcesGenderView

A gender view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_name** | **str** | Output only. The resource name of the gender view. Gender view resource names have the form: &#x60;customers/{customer_id}/genderViews/{ad_group_id}~{criterion_id}&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_gender_view import GoogleAdsSearchads360V0ResourcesGenderView

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesGenderView from a JSON string
google_ads_searchads360_v0_resources_gender_view_instance = GoogleAdsSearchads360V0ResourcesGenderView.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesGenderView.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_gender_view_dict = google_ads_searchads360_v0_resources_gender_view_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesGenderView from a dict
google_ads_searchads360_v0_resources_gender_view_from_dict = GoogleAdsSearchads360V0ResourcesGenderView.from_dict(google_ads_searchads360_v0_resources_gender_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


