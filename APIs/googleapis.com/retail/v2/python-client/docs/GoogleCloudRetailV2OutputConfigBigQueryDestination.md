# GoogleCloudRetailV2OutputConfigBigQueryDestination

The BigQuery output destination configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | Required. The ID of a BigQuery Dataset. | [optional] 
**table_id_prefix** | **str** | Required. The prefix of exported BigQuery tables. | [optional] 
**table_type** | **str** | Required. Describes the table type. The following values are supported: * &#x60;table&#x60;: A BigQuery native table. * &#x60;view&#x60;: A virtual table defined by a SQL query. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_output_config_big_query_destination import GoogleCloudRetailV2OutputConfigBigQueryDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2OutputConfigBigQueryDestination from a JSON string
google_cloud_retail_v2_output_config_big_query_destination_instance = GoogleCloudRetailV2OutputConfigBigQueryDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2OutputConfigBigQueryDestination.to_json())

# convert the object into a dict
google_cloud_retail_v2_output_config_big_query_destination_dict = google_cloud_retail_v2_output_config_big_query_destination_instance.to_dict()
# create an instance of GoogleCloudRetailV2OutputConfigBigQueryDestination from a dict
google_cloud_retail_v2_output_config_big_query_destination_from_dict = GoogleCloudRetailV2OutputConfigBigQueryDestination.from_dict(google_cloud_retail_v2_output_config_big_query_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


