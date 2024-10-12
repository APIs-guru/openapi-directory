# GoogleCloudDocumentaiV1beta2AutoMlParams

Parameters to control AutoML model prediction behavior.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | Resource name of the AutoML model. Format: &#x60;projects/{project-id}/locations/{location-id}/models/{model-id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_auto_ml_params import GoogleCloudDocumentaiV1beta2AutoMlParams

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2AutoMlParams from a JSON string
google_cloud_documentai_v1beta2_auto_ml_params_instance = GoogleCloudDocumentaiV1beta2AutoMlParams.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2AutoMlParams.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_auto_ml_params_dict = google_cloud_documentai_v1beta2_auto_ml_params_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2AutoMlParams from a dict
google_cloud_documentai_v1beta2_auto_ml_params_from_dict = GoogleCloudDocumentaiV1beta2AutoMlParams.from_dict(google_cloud_documentai_v1beta2_auto_ml_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


