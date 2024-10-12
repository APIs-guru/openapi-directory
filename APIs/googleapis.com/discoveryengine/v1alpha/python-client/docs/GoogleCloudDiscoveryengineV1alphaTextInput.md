# GoogleCloudDiscoveryengineV1alphaTextInput

Defines text input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**GoogleCloudDiscoveryengineV1alphaConversationContext**](GoogleCloudDiscoveryengineV1alphaConversationContext.md) |  | [optional] 
**input** | **str** | Text input. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_text_input import GoogleCloudDiscoveryengineV1alphaTextInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaTextInput from a JSON string
google_cloud_discoveryengine_v1alpha_text_input_instance = GoogleCloudDiscoveryengineV1alphaTextInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaTextInput.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_text_input_dict = google_cloud_discoveryengine_v1alpha_text_input_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaTextInput from a dict
google_cloud_discoveryengine_v1alpha_text_input_from_dict = GoogleCloudDiscoveryengineV1alphaTextInput.from_dict(google_cloud_discoveryengine_v1alpha_text_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


