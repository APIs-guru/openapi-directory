# GoogleCloudRetailV2alphaTuneModelMetadata

Metadata associated with a tune operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **str** | The resource name of the model that this tune applies to. Format: &#x60;projects/{project_number}/locations/{location_id}/catalogs/{catalog_id}/models/{model_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_tune_model_metadata import GoogleCloudRetailV2alphaTuneModelMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaTuneModelMetadata from a JSON string
google_cloud_retail_v2alpha_tune_model_metadata_instance = GoogleCloudRetailV2alphaTuneModelMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaTuneModelMetadata.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_tune_model_metadata_dict = google_cloud_retail_v2alpha_tune_model_metadata_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaTuneModelMetadata from a dict
google_cloud_retail_v2alpha_tune_model_metadata_from_dict = GoogleCloudRetailV2alphaTuneModelMetadata.from_dict(google_cloud_retail_v2alpha_tune_model_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


