# GoogleAnalyticsAdminV1betaListCustomDimensionsResponse

Response message for ListCustomDimensions RPC.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_dimensions** | [**List[GoogleAnalyticsAdminV1betaCustomDimension]**](GoogleAnalyticsAdminV1betaCustomDimension.md) | List of CustomDimensions. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_list_custom_dimensions_response import GoogleAnalyticsAdminV1betaListCustomDimensionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaListCustomDimensionsResponse from a JSON string
google_analytics_admin_v1beta_list_custom_dimensions_response_instance = GoogleAnalyticsAdminV1betaListCustomDimensionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaListCustomDimensionsResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_list_custom_dimensions_response_dict = google_analytics_admin_v1beta_list_custom_dimensions_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaListCustomDimensionsResponse from a dict
google_analytics_admin_v1beta_list_custom_dimensions_response_from_dict = GoogleAnalyticsAdminV1betaListCustomDimensionsResponse.from_dict(google_analytics_admin_v1beta_list_custom_dimensions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


