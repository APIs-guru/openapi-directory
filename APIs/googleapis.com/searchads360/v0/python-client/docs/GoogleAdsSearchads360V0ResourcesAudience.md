# GoogleAdsSearchads360V0ResourcesAudience

Audience is an effective targeting option that lets you intersect different segment attributes, such as detailed demographics and affinities, to create audiences that represent sections of your target segments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of this audience. | [optional] 
**id** | **str** | Output only. ID of the audience. | [optional] [readonly] 
**name** | **str** | Required. Name of the audience. It should be unique across all audiences. It must have a minimum length of 1 and maximum length of 255. | [optional] 
**resource_name** | **str** | Immutable. The resource name of the audience. Audience names have the form: &#x60;customers/{customer_id}/audiences/{audience_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_audience import GoogleAdsSearchads360V0ResourcesAudience

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAudience from a JSON string
google_ads_searchads360_v0_resources_audience_instance = GoogleAdsSearchads360V0ResourcesAudience.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAudience.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_audience_dict = google_ads_searchads360_v0_resources_audience_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAudience from a dict
google_ads_searchads360_v0_resources_audience_from_dict = GoogleAdsSearchads360V0ResourcesAudience.from_dict(google_ads_searchads360_v0_resources_audience_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


