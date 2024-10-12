# GoogleCloudRetailV2alphaOutputResult

Output result that stores the information about where the exported data is stored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_result** | [**List[GoogleCloudRetailV2alphaBigQueryOutputResult]**](GoogleCloudRetailV2alphaBigQueryOutputResult.md) | The BigQuery location where the result is stored. | [optional] 
**gcs_result** | [**List[GoogleCloudRetailV2alphaGcsOutputResult]**](GoogleCloudRetailV2alphaGcsOutputResult.md) | The Google Cloud Storage location where the result is stored. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_output_result import GoogleCloudRetailV2alphaOutputResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaOutputResult from a JSON string
google_cloud_retail_v2alpha_output_result_instance = GoogleCloudRetailV2alphaOutputResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaOutputResult.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_output_result_dict = google_cloud_retail_v2alpha_output_result_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaOutputResult from a dict
google_cloud_retail_v2alpha_output_result_from_dict = GoogleCloudRetailV2alphaOutputResult.from_dict(google_cloud_retail_v2alpha_output_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


