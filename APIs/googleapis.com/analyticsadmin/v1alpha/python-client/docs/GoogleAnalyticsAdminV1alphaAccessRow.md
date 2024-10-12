# GoogleAnalyticsAdminV1alphaAccessRow

Access report data for each row.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_values** | [**List[GoogleAnalyticsAdminV1alphaAccessDimensionValue]**](GoogleAnalyticsAdminV1alphaAccessDimensionValue.md) | List of dimension values. These values are in the same order as specified in the request. | [optional] 
**metric_values** | [**List[GoogleAnalyticsAdminV1alphaAccessMetricValue]**](GoogleAnalyticsAdminV1alphaAccessMetricValue.md) | List of metric values. These values are in the same order as specified in the request. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_access_row import GoogleAnalyticsAdminV1alphaAccessRow

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccessRow from a JSON string
google_analytics_admin_v1alpha_access_row_instance = GoogleAnalyticsAdminV1alphaAccessRow.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccessRow.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_access_row_dict = google_analytics_admin_v1alpha_access_row_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccessRow from a dict
google_analytics_admin_v1alpha_access_row_from_dict = GoogleAnalyticsAdminV1alphaAccessRow.from_dict(google_analytics_admin_v1alpha_access_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


