# GoogleCloudDataplexV1DataQualityDimensionResult

DataQualityDimensionResult provides a more detailed, per-dimension view of the results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension** | [**GoogleCloudDataplexV1DataQualityDimension**](GoogleCloudDataplexV1DataQualityDimension.md) |  | [optional] 
**passed** | **bool** | Whether the dimension passed or failed. | [optional] 
**score** | **float** | Output only. The dimension-level data quality score for this data scan job if and only if the &#39;dimension&#39; field is set.The score ranges between 0, 100 (up to two decimal points). | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_dimension_result import GoogleCloudDataplexV1DataQualityDimensionResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualityDimensionResult from a JSON string
google_cloud_dataplex_v1_data_quality_dimension_result_instance = GoogleCloudDataplexV1DataQualityDimensionResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualityDimensionResult.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_dimension_result_dict = google_cloud_dataplex_v1_data_quality_dimension_result_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualityDimensionResult from a dict
google_cloud_dataplex_v1_data_quality_dimension_result_from_dict = GoogleCloudDataplexV1DataQualityDimensionResult.from_dict(google_cloud_dataplex_v1_data_quality_dimension_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


