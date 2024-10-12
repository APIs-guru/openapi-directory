# GoogleAnalyticsAdminV1betaCustomDimension

A definition for a CustomDimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Optional. Description for this custom dimension. Max length of 150 characters. | [optional] 
**disallow_ads_personalization** | **bool** | Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization. This is currently only supported by user-scoped custom dimensions. | [optional] 
**display_name** | **str** | Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82 characters, alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain square brackets, but updates to this field will never permit square brackets. | [optional] 
**name** | **str** | Output only. Resource name for this CustomDimension resource. Format: properties/{property}/customDimensions/{customDimension} | [optional] [readonly] 
**parameter_name** | **str** | Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped dimension, then this is the user property name. If this is an event-scoped dimension, then this is the event parameter name. If this is an item-scoped dimension, then this is the parameter name found in the eCommerce items array. May only contain alphanumeric and underscore characters, starting with a letter. Max length of 24 characters for user-scoped dimensions, 40 characters for event-scoped dimensions. | [optional] 
**scope** | **str** | Required. Immutable. The scope of this dimension. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_custom_dimension import GoogleAnalyticsAdminV1betaCustomDimension

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaCustomDimension from a JSON string
google_analytics_admin_v1beta_custom_dimension_instance = GoogleAnalyticsAdminV1betaCustomDimension.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaCustomDimension.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_custom_dimension_dict = google_analytics_admin_v1beta_custom_dimension_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaCustomDimension from a dict
google_analytics_admin_v1beta_custom_dimension_from_dict = GoogleAnalyticsAdminV1betaCustomDimension.from_dict(google_analytics_admin_v1beta_custom_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


