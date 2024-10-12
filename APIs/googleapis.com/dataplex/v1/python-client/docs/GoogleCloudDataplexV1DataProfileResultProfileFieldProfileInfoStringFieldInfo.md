# GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo

The profile information for a string type field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_length** | **float** | Average length of non-null values in the scanned data. | [optional] 
**max_length** | **str** | Maximum length of non-null values in the scanned data. | [optional] 
**min_length** | **str** | Minimum length of non-null values in the scanned data. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_string_field_info import GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo from a JSON string
google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_string_field_info_instance = GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_string_field_info_dict = google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_string_field_info_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo from a dict
google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_string_field_info_from_dict = GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoStringFieldInfo.from_dict(google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_string_field_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


