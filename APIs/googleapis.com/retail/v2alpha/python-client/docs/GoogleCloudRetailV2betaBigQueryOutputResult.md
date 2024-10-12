# GoogleCloudRetailV2betaBigQueryOutputResult

A BigQuery output result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | The ID of a BigQuery Dataset. | [optional] 
**table_id** | **str** | The ID of a BigQuery Table. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_big_query_output_result import GoogleCloudRetailV2betaBigQueryOutputResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaBigQueryOutputResult from a JSON string
google_cloud_retail_v2beta_big_query_output_result_instance = GoogleCloudRetailV2betaBigQueryOutputResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaBigQueryOutputResult.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_big_query_output_result_dict = google_cloud_retail_v2beta_big_query_output_result_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaBigQueryOutputResult from a dict
google_cloud_retail_v2beta_big_query_output_result_from_dict = GoogleCloudRetailV2betaBigQueryOutputResult.from_dict(google_cloud_retail_v2beta_big_query_output_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


