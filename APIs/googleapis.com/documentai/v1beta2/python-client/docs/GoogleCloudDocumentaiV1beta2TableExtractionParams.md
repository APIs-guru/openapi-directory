# GoogleCloudDocumentaiV1beta2TableExtractionParams

Parameters to control table extraction behavior.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether to enable table extraction. | [optional] 
**header_hints** | **List[str]** | Optional. Reserved for future use. | [optional] 
**model_version** | **str** | Model version of the table extraction system. Default is \&quot;builtin/stable\&quot;. Specify \&quot;builtin/latest\&quot; for the latest model. | [optional] 
**table_bound_hints** | [**List[GoogleCloudDocumentaiV1beta2TableBoundHint]**](GoogleCloudDocumentaiV1beta2TableBoundHint.md) | Optional. Table bounding box hints that can be provided to complex cases which our algorithm cannot locate the table(s) in. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_table_extraction_params import GoogleCloudDocumentaiV1beta2TableExtractionParams

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2TableExtractionParams from a JSON string
google_cloud_documentai_v1beta2_table_extraction_params_instance = GoogleCloudDocumentaiV1beta2TableExtractionParams.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2TableExtractionParams.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_table_extraction_params_dict = google_cloud_documentai_v1beta2_table_extraction_params_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2TableExtractionParams from a dict
google_cloud_documentai_v1beta2_table_extraction_params_from_dict = GoogleCloudDocumentaiV1beta2TableExtractionParams.from_dict(google_cloud_documentai_v1beta2_table_extraction_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


