# GoogleCloudDataplexV1DataProfileResultProfile

Contains name, type, mode and field type specific profile information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[GoogleCloudDataplexV1DataProfileResultProfileField]**](GoogleCloudDataplexV1DataProfileResultProfileField.md) | List of fields with structural and profile information for each field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_data_profile_result_profile import GoogleCloudDataplexV1DataProfileResultProfile

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1DataProfileResultProfile from a JSON string
google_cloud_dataplex_v1_data_profile_result_profile_instance = GoogleCloudDataplexV1DataProfileResultProfile.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1DataProfileResultProfile.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_data_profile_result_profile_dict = google_cloud_dataplex_v1_data_profile_result_profile_instance.to_dict()
# create an instance of GoogleCloudDataplexV1DataProfileResultProfile from a dict
google_cloud_dataplex_v1_data_profile_result_profile_from_dict = GoogleCloudDataplexV1DataProfileResultProfile.from_dict(google_cloud_dataplex_v1_data_profile_result_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


