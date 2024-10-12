# GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest

Request message for WidgetService.WidgetCompleteQuery method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_params** | [**GoogleCloudDiscoveryengineV1alphaAdditionalParams**](GoogleCloudDiscoveryengineV1alphaAdditionalParams.md) |  | [optional] 
**complete_query_request** | [**GoogleCloudDiscoveryengineV1alphaCompleteQueryRequest**](GoogleCloudDiscoveryengineV1alphaCompleteQueryRequest.md) |  | [optional] 
**config_id** | **str** | Required. The UUID of the WidgetConfig. This field is used to identify the widget configuration, set of models used to make the auto complete query. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_widget_complete_query_request import GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest from a JSON string
google_cloud_discoveryengine_v1alpha_widget_complete_query_request_instance = GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_widget_complete_query_request_dict = google_cloud_discoveryengine_v1alpha_widget_complete_query_request_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest from a dict
google_cloud_discoveryengine_v1alpha_widget_complete_query_request_from_dict = GoogleCloudDiscoveryengineV1alphaWidgetCompleteQueryRequest.from_dict(google_cloud_discoveryengine_v1alpha_widget_complete_query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


