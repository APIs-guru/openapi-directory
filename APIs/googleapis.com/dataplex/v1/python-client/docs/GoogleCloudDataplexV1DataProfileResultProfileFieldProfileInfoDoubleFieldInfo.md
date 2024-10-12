# GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo

The profile information for a double type field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average** | **float** | Average of non-null values in the scanned data. NaN, if the field has a NaN. | [optional] 
**max** | **float** | Maximum of non-null values in the scanned data. NaN, if the field has a NaN. | [optional] 
**min** | **float** | Minimum of non-null values in the scanned data. NaN, if the field has a NaN. | [optional] 
**quartiles** | **List[float]** | A quartile divides the number of data points into four parts, or quarters, of more-or-less equal size. Three main quartiles used are: The first quartile (Q1) splits off the lowest 25% of data from the highest 75%. It is also known as the lower or 25th empirical quartile, as 25% of the data is below this point. The second quartile (Q2) is the median of a data set. So, 50% of the data lies below this point. The third quartile (Q3) splits off the highest 25% of data from the lowest 75%. It is known as the upper or 75th empirical quartile, as 75% of the data lies below this point. Here, the quartiles is provided as an ordered list of quartile values for the scanned data, occurring in order Q1, median, Q3. | [optional] 
**standard_deviation** | **float** | Standard deviation of non-null values in the scanned data. NaN, if the field has a NaN. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_double_field_info import GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo from a JSON string
google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_double_field_info_instance = GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_double_field_info_dict = google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_double_field_info_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo from a dict
google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_double_field_info_from_dict = GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo.from_dict(google_cloud_dataplex_v1_data_profile_result_profile_field_profile_info_double_field_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


