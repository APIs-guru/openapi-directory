# GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse

Response message for WidgetService.WidgetSearch method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_response** | [**GoogleCloudDiscoveryengineV1alphaSearchResponse**](GoogleCloudDiscoveryengineV1alphaSearchResponse.md) |  | [optional] 
**u_token** | **str** | The token in response. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_search_response import GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse from a JSON string
google_cloud_discoveryengine_v1alpha_widget_search_response_instance = GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_widget_search_response_dict = google_cloud_discoveryengine_v1alpha_widget_search_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse from a dict
google_cloud_discoveryengine_v1alpha_widget_search_response_from_dict = GoogleCloudDiscoveryengineV1alphaWidgetSearchResponse.from_dict(google_cloud_discoveryengine_v1alpha_widget_search_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


