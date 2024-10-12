# GoogleCloudDocumentaiV1beta2FormExtractionParams

Parameters to control form extraction behavior.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether to enable form extraction. | [optional] 
**key_value_pair_hints** | [**List[GoogleCloudDocumentaiV1beta2KeyValuePairHint]**](GoogleCloudDocumentaiV1beta2KeyValuePairHint.md) | Reserved for future use. | [optional] 
**model_version** | **str** | Model version of the form extraction system. Default is \&quot;builtin/stable\&quot;. Specify \&quot;builtin/latest\&quot; for the latest model. For custom form models, specify: \&quot;custom/{model_name}\&quot;. Model name format is \&quot;bucket_name/path/to/modeldir\&quot; corresponding to \&quot;gs://bucket_name/path/to/modeldir\&quot; where annotated examples are stored. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_form_extraction_params import GoogleCloudDocumentaiV1beta2FormExtractionParams

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2FormExtractionParams from a JSON string
google_cloud_documentai_v1beta2_form_extraction_params_instance = GoogleCloudDocumentaiV1beta2FormExtractionParams.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2FormExtractionParams.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_form_extraction_params_dict = google_cloud_documentai_v1beta2_form_extraction_params_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2FormExtractionParams from a dict
google_cloud_documentai_v1beta2_form_extraction_params_from_dict = GoogleCloudDocumentaiV1beta2FormExtractionParams.from_dict(google_cloud_documentai_v1beta2_form_extraction_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


