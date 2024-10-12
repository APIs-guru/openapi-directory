# GoogleCloudContactcenterinsightsV1ListViewsResponse

The response of listing views.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**views** | [**List[GoogleCloudContactcenterinsightsV1View]**](GoogleCloudContactcenterinsightsV1View.md) | The views that match the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_list_views_response import GoogleCloudContactcenterinsightsV1ListViewsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ListViewsResponse from a JSON string
google_cloud_contactcenterinsights_v1_list_views_response_instance = GoogleCloudContactcenterinsightsV1ListViewsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ListViewsResponse.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_list_views_response_dict = google_cloud_contactcenterinsights_v1_list_views_response_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ListViewsResponse from a dict
google_cloud_contactcenterinsights_v1_list_views_response_from_dict = GoogleCloudContactcenterinsightsV1ListViewsResponse.from_dict(google_cloud_contactcenterinsights_v1_list_views_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


