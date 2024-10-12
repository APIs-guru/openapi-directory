# GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse

Response message for ListBigQueryLinks RPC

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_links** | [**List[GoogleAnalyticsAdminV1alphaBigQueryLink]**](GoogleAnalyticsAdminV1alphaBigQueryLink.md) | List of BigQueryLinks. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_list_big_query_links_response import GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse from a JSON string
google_analytics_admin_v1alpha_list_big_query_links_response_instance = GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_list_big_query_links_response_dict = google_analytics_admin_v1alpha_list_big_query_links_response_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse from a dict
google_analytics_admin_v1alpha_list_big_query_links_response_from_dict = GoogleAnalyticsAdminV1alphaListBigQueryLinksResponse.from_dict(google_analytics_admin_v1alpha_list_big_query_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


