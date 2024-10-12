# GoogleAnalyticsAdminV1betaAccessDimensionValue

The value of a dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The dimension value. For example, this value may be &#39;France&#39; for the &#39;country&#39; dimension. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_access_dimension_value import GoogleAnalyticsAdminV1betaAccessDimensionValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaAccessDimensionValue from a JSON string
google_analytics_admin_v1beta_access_dimension_value_instance = GoogleAnalyticsAdminV1betaAccessDimensionValue.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaAccessDimensionValue.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_access_dimension_value_dict = google_analytics_admin_v1beta_access_dimension_value_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaAccessDimensionValue from a dict
google_analytics_admin_v1beta_access_dimension_value_from_dict = GoogleAnalyticsAdminV1betaAccessDimensionValue.from_dict(google_analytics_admin_v1beta_access_dimension_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


