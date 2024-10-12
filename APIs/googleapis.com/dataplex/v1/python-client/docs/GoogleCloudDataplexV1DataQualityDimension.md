# GoogleCloudDataplexV1DataQualityDimension

A dimension captures data quality intent about a defined subset of the rules specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The dimension name a rule belongs to. Supported dimensions are \&quot;COMPLETENESS\&quot;, \&quot;ACCURACY\&quot;, \&quot;CONSISTENCY\&quot;, \&quot;VALIDITY\&quot;, \&quot;UNIQUENESS\&quot;, \&quot;INTEGRITY\&quot; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_quality_dimension import GoogleCloudDataplexV1DataQualityDimension

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataQualityDimension from a JSON string
google_cloud_dataplex_v1_data_quality_dimension_instance = GoogleCloudDataplexV1DataQualityDimension.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataQualityDimension.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_quality_dimension_dict = google_cloud_dataplex_v1_data_quality_dimension_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataQualityDimension from a dict
google_cloud_dataplex_v1_data_quality_dimension_from_dict = GoogleCloudDataplexV1DataQualityDimension.from_dict(google_cloud_dataplex_v1_data_quality_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


