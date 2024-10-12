# GoogleCloudDiscoveryengineV1betaTextInput

Defines text input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**GoogleCloudDiscoveryengineV1betaConversationContext**](GoogleCloudDiscoveryengineV1betaConversationContext.md) |  | [optional] 
**input** | **str** | Text input. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_text_input import GoogleCloudDiscoveryengineV1betaTextInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaTextInput from a JSON string
google_cloud_discoveryengine_v1beta_text_input_instance = GoogleCloudDiscoveryengineV1betaTextInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaTextInput.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_text_input_dict = google_cloud_discoveryengine_v1beta_text_input_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaTextInput from a dict
google_cloud_discoveryengine_v1beta_text_input_from_dict = GoogleCloudDiscoveryengineV1betaTextInput.from_dict(google_cloud_discoveryengine_v1beta_text_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


