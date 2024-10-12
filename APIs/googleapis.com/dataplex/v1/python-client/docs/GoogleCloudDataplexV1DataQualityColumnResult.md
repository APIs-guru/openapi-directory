# GoogleCloudDataplexV1DataQualityColumnResult

DataQualityColumnResult provides a more detailed, per-column view of the results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | Output only. The column specified in the DataQualityRule. | [optional] [readonly] 
**score** | **float** | Output only. The column-level data quality score for this data scan job if and only if the &#39;column&#39; field is set.The score ranges between between 0, 100 (up to two decimal points). | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_column_result import GoogleCloudDataplexV1DataQualityColumnResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualityColumnResult from a JSON string
google_cloud_dataplex_v1_data_quality_column_result_instance = GoogleCloudDataplexV1DataQualityColumnResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualityColumnResult.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_column_result_dict = google_cloud_dataplex_v1_data_quality_column_result_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualityColumnResult from a dict
google_cloud_dataplex_v1_data_quality_column_result_from_dict = GoogleCloudDataplexV1DataQualityColumnResult.from_dict(google_cloud_dataplex_v1_data_quality_column_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


