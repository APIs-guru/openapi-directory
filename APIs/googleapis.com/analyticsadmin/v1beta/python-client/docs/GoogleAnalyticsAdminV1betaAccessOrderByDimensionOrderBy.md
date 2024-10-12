# GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy

Sorts by dimension values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_name** | **str** | A dimension name in the request to order by. | [optional] 
**order_type** | **str** | Controls the rule for dimension value ordering. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_access_order_by_dimension_order_by import GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy from a JSON string
google_analytics_admin_v1beta_access_order_by_dimension_order_by_instance = GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_access_order_by_dimension_order_by_dict = google_analytics_admin_v1beta_access_order_by_dimension_order_by_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy from a dict
google_analytics_admin_v1beta_access_order_by_dimension_order_by_from_dict = GoogleAnalyticsAdminV1betaAccessOrderByDimensionOrderBy.from_dict(google_analytics_admin_v1beta_access_order_by_dimension_order_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


