# GoogleCloudFunctionsV2alphaStateMessage

Informational messages about the state of the Cloud Function or Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | The message. | [optional] 
**severity** | **str** | Severity of the state message. | [optional] 
**type** | **str** | One-word CamelCase type of the state message. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_functions_v2alpha_state_message import GoogleCloudFunctionsV2alphaStateMessage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudFunctionsV2alphaStateMessage from a JSON string
google_cloud_functions_v2alpha_state_message_instance = GoogleCloudFunctionsV2alphaStateMessage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudFunctionsV2alphaStateMessage.to_json())

# convert the object into a dict
google_cloud_functions_v2alpha_state_message_dict = google_cloud_functions_v2alpha_state_message_instance.to_dict()
# create an instance of GoogleCloudFunctionsV2alphaStateMessage from a dict
google_cloud_functions_v2alpha_state_message_from_dict = GoogleCloudFunctionsV2alphaStateMessage.from_dict(google_cloud_functions_v2alpha_state_message_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


