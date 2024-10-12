# GoogleCloudRetailV2alphaBigQueryOutputResult

A BigQuery output result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | The ID of a BigQuery Dataset. | [optional] 
**table_id** | **str** | The ID of a BigQuery Table. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_big_query_output_result import GoogleCloudRetailV2alphaBigQueryOutputResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaBigQueryOutputResult from a JSON string
google_cloud_retail_v2alpha_big_query_output_result_instance = GoogleCloudRetailV2alphaBigQueryOutputResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaBigQueryOutputResult.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_big_query_output_result_dict = google_cloud_retail_v2alpha_big_query_output_result_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaBigQueryOutputResult from a dict
google_cloud_retail_v2alpha_big_query_output_result_from_dict = GoogleCloudRetailV2alphaBigQueryOutputResult.from_dict(google_cloud_retail_v2alpha_big_query_output_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


