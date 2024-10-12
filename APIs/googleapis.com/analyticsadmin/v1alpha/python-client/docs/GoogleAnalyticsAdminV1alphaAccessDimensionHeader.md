# GoogleAnalyticsAdminV1alphaAccessDimensionHeader

Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a report; correspondingly, those dimensions do not produce headers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_name** | **str** | The dimension&#39;s name; for example &#39;userEmail&#39;. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_access_dimension_header import GoogleAnalyticsAdminV1alphaAccessDimensionHeader

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccessDimensionHeader from a JSON string
google_analytics_admin_v1alpha_access_dimension_header_instance = GoogleAnalyticsAdminV1alphaAccessDimensionHeader.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccessDimensionHeader.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_access_dimension_header_dict = google_analytics_admin_v1alpha_access_dimension_header_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccessDimensionHeader from a dict
google_analytics_admin_v1alpha_access_dimension_header_from_dict = GoogleAnalyticsAdminV1alphaAccessDimensionHeader.from_dict(google_analytics_admin_v1alpha_access_dimension_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


