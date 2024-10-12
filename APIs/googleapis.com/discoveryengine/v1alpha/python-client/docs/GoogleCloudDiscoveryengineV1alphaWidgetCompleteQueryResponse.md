# GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse

Response message for WidgetService.WidgetCompleteQuery method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**u_token** | **str** | The token in response. | [optional] 
**widget_query_suggestions** | [**List[GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponseWidgetQuerySuggestion]**](GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponseWidgetQuerySuggestion.md) | Results of the matched query suggestions in widget. The result list is ordered and the first result is a top suggestion. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_complete_query_response import GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse from a JSON string
google_cloud_discoveryengine_v1alpha_widget_complete_query_response_instance = GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_widget_complete_query_response_dict = google_cloud_discoveryengine_v1alpha_widget_complete_query_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse from a dict
google_cloud_discoveryengine_v1alpha_widget_complete_query_response_from_dict = GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryResponse.from_dict(google_cloud_discoveryengine_v1alpha_widget_complete_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


