# GoogleAnalyticsAdminV1alphaAccessDimension

Dimensions are attributes of your data. For example, the dimension `userEmail` indicates the email of the user that accessed reporting data. Dimension values in report responses are strings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_name** | **str** | The API name of the dimension. See [Data Access Schema](https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema) for the list of dimensions supported in this API. Dimensions are referenced by name in &#x60;dimensionFilter&#x60; and &#x60;orderBys&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_access_dimension import GoogleAnalyticsAdminV1alphaAccessDimension

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccessDimension from a JSON string
google_analytics_admin_v1alpha_access_dimension_instance = GoogleAnalyticsAdminV1alphaAccessDimension.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccessDimension.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_access_dimension_dict = google_analytics_admin_v1alpha_access_dimension_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccessDimension from a dict
google_analytics_admin_v1alpha_access_dimension_from_dict = GoogleAnalyticsAdminV1alphaAccessDimension.from_dict(google_analytics_admin_v1alpha_access_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


