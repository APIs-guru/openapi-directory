# GoogleCloudRetailV2CompletionDataInputConfig

The input config source for completion data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query_source** | [**GoogleCloudRetailV2BigQuerySource**](GoogleCloudRetailV2BigQuerySource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_completion_data_input_config import GoogleCloudRetailV2CompletionDataInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2CompletionDataInputConfig from a JSON string
google_cloud_retail_v2_completion_data_input_config_instance = GoogleCloudRetailV2CompletionDataInputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2CompletionDataInputConfig.to_json())

# convert the object into a dict
google_cloud_retail_v2_completion_data_input_config_dict = google_cloud_retail_v2_completion_data_input_config_instance.to_dict()
# create an instance of GoogleCloudRetailV2CompletionDataInputConfig from a dict
google_cloud_retail_v2_completion_data_input_config_from_dict = GoogleCloudRetailV2CompletionDataInputConfig.from_dict(google_cloud_retail_v2_completion_data_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


