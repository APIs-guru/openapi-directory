# GoogleAnalyticsAdminV1alphaRollupPropertySourceLink

A link that references a source property under the parent rollup property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Output only. Resource name of this RollupPropertySourceLink. Format: &#39;properties/{property_id}/rollupPropertySourceLinks/{rollup_property_source_link}&#39; Format: &#39;properties/123/rollupPropertySourceLinks/456&#39; | [optional] [readonly] 
**source_property** | **str** | Immutable. Resource name of the source property. Format: properties/{property_id} Example: \&quot;properties/789\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_rollup_property_source_link import GoogleAnalyticsAdminV1alphaRollupPropertySourceLink

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaRollupPropertySourceLink from a JSON string
google_analytics_admin_v1alpha_rollup_property_source_link_instance = GoogleAnalyticsAdminV1alphaRollupPropertySourceLink.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaRollupPropertySourceLink.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_rollup_property_source_link_dict = google_analytics_admin_v1alpha_rollup_property_source_link_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaRollupPropertySourceLink from a dict
google_analytics_admin_v1alpha_rollup_property_source_link_from_dict = GoogleAnalyticsAdminV1alphaRollupPropertySourceLink.from_dict(google_analytics_admin_v1alpha_rollup_property_source_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


