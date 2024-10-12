# GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder

Represents a custom placeholder in the prompt text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique ID used to map custom placeholder to parameters in fulfillment. | [optional] 
**name** | **str** | Custom placeholder value in the prompt text. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_generator_placeholder import GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder from a JSON string
google_cloud_dialogflow_cx_v3beta1_generator_placeholder_instance = GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_generator_placeholder_dict = google_cloud_dialogflow_cx_v3beta1_generator_placeholder_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder from a dict
google_cloud_dialogflow_cx_v3beta1_generator_placeholder_from_dict = GoogleCloudDialogflowCxV3beta1GeneratorPlaceholder.from_dict(google_cloud_dialogflow_cx_v3beta1_generator_placeholder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


