# GoogleAnalyticsAdminV1betaAccessOrderBy

Order bys define how rows will be sorted in the response. For example, ordering rows by descending access count is one ordering, and ordering rows by the country string is a different ordering.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desc** | **bool** | If true, sorts by descending order. If false or unspecified, sorts in ascending order. | [optional] 
**dimension** | [**GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy**](GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy.md) |  | [optional] 
**metric** | [**GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy**](GoogleAnalyticsAdminV1betaAccessOrderByMetricOrderBy.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_access_order_by import GoogleAnalyticsAdminV1betaAccessOrderBy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaAccessOrderBy from a JSON string
google_analytics_admin_v1beta_access_order_by_instance = GoogleAnalyticsAdminV1betaAccessOrderBy.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaAccessOrderBy.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_access_order_by_dict = google_analytics_admin_v1beta_access_order_by_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaAccessOrderBy from a dict
google_analytics_admin_v1beta_access_order_by_from_dict = GoogleAnalyticsAdminV1betaAccessOrderBy.from_dict(google_analytics_admin_v1beta_access_order_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


