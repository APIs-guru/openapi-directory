# GoogleCloudContactcenterinsightsV1ListAnalysesResponse

The response to list analyses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyses** | [**List[GoogleCloudContactcenterinsightsV1Analysis]**](GoogleCloudContactcenterinsightsV1Analysis.md) | The analyses that match the request. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_list_analyses_response import GoogleCloudContactcenterinsightsV1ListAnalysesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ListAnalysesResponse from a JSON string
google_cloud_contactcenterinsights_v1_list_analyses_response_instance = GoogleCloudContactcenterinsightsV1ListAnalysesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ListAnalysesResponse.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_list_analyses_response_dict = google_cloud_contactcenterinsights_v1_list_analyses_response_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ListAnalysesResponse from a dict
google_cloud_contactcenterinsights_v1_list_analyses_response_from_dict = GoogleCloudContactcenterinsightsV1ListAnalysesResponse.from_dict(google_cloud_contactcenterinsights_v1_list_analyses_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


