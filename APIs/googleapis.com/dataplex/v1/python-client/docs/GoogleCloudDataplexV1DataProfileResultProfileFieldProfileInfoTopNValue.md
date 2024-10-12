# GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue

Top N non-null values in the scanned data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | Count of the corresponding value in the scanned data. | [optional] 
**ratio** | **float** | Ratio of the corresponding value in the field against the total number of rows in the scanned data. | [optional] 
**value** | **str** | String value of a top N non-null value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_top_n_value import GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue from a JSON string
google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_top_n_value_instance = GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_top_n_value_dict = google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_top_n_value_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue from a dict
google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_top_n_value_from_dict = GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue.from_dict(google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_top_n_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


