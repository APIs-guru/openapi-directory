# GoogleAnalyticsAdminV1alphaNumericValue

To represent a number.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**double_value** | **float** | Double value | [optional] 
**int64_value** | **str** | Integer value | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_numeric_value import GoogleAnalyticsAdminV1alphaNumericValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaNumericValue from a JSON string
google_analytics_admin_v1alpha_numeric_value_instance = GoogleAnalyticsAdminV1alphaNumericValue.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaNumericValue.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_numeric_value_dict = google_analytics_admin_v1alpha_numeric_value_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaNumericValue from a dict
google_analytics_admin_v1alpha_numeric_value_from_dict = GoogleAnalyticsAdminV1alphaNumericValue.from_dict(google_analytics_admin_v1alpha_numeric_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


