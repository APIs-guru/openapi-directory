# GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo

The profile information for each field type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distinct_ratio** | **float** | Ratio of rows with distinct values against total scanned rows. Not available for complex non-groupable field type RECORD and fields with REPEATABLE mode. | [optional] 
**double_profile** | [**GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo**](GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo.md) |  | [optional] 
**integer_profile** | [**GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo**](GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo.md) |  | [optional] 
**null_ratio** | **float** | Ratio of rows with null value against total scanned rows. | [optional] 
**string_profile** | [**GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo**](GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo.md) |  | [optional] 
**top_n_values** | [**List[GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue]**](GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue.md) | The list of top N non-null values, frequency and ratio with which they occur in the scanned data. N is 10 or equal to the number of distinct values in the field, whichever is smaller. Not available for complex non-groupable field type RECORD and fields with REPEATABLE mode. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info import GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo from a JSON string
google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_instance = GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_dict = google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo from a dict
google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_from_dict = GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo.from_dict(google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


