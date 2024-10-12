# GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest

Request message for WidgetService.WidgetSearch method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_params** | [**GoogleCloudDiscoveryengineV1alphaAdditionalParams**](GoogleCloudDiscoveryengineV1alphaAdditionalParams.md) |  | [optional] 
**config_id** | **str** | Required. The UUID of the Search WidgetConfig. This field is used to identify the search widget configuration, set of models used to make the search. | [optional] 
**search_request** | [**GoogleCloudDiscoveryengineV1alphaSearchRequest**](GoogleCloudDiscoveryengineV1alphaSearchRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_search_request import GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest from a JSON string
google_cloud_discoveryengine_v1alpha_widget_search_request_instance = GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_widget_search_request_dict = google_cloud_discoveryengine_v1alpha_widget_search_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest from a dict
google_cloud_discoveryengine_v1alpha_widget_search_request_from_dict = GoogleCloudDiscoveryengineV1alphaWidgetSearchRequest.from_dict(google_cloud_discoveryengine_v1alpha_widget_search_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


