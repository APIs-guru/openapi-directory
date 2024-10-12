# GoogleAdsSearchads360V0ResourcesAdGroupLabel

A relationship between an ad group and a label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_group** | **str** | Immutable. The ad group to which the label is attached. | [optional] 
**label** | **str** | Immutable. The label assigned to the ad group. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the ad group label. Ad group label resource names have the form: &#x60;customers/{customer_id}/adGroupLabels/{ad_group_id}~{label_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_ad_group_label import GoogleAdsSearchads360V0ResourcesAdGroupLabel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupLabel from a JSON string
google_ads_searchads360_v0_resources_ad_group_label_instance = GoogleAdsSearchads360V0ResourcesAdGroupLabel.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAdGroupLabel.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_ad_group_label_dict = google_ads_searchads360_v0_resources_ad_group_label_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAdGroupLabel from a dict
google_ads_searchads360_v0_resources_ad_group_label_from_dict = GoogleAdsSearchads360V0ResourcesAdGroupLabel.from_dict(google_ads_searchads360_v0_resources_ad_group_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


