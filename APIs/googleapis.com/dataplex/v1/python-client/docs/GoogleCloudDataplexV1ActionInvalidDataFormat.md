# GoogleCloudDataplexV1ActionInvalidDataFormat

Action details for invalid or unsupported data files detected by discovery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_format** | **str** | The expected data format of the entity. | [optional] 
**new_format** | **str** | The new unexpected data format within the entity. | [optional] 
**sampled_data_locations** | **List[str]** | The list of data locations sampled and used for format/schema inference. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_action_invalid_data_format import GoogleCloudDataplexV1ActionInvalidDataFormat

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ActionInvalidDataFormat from a JSON string
google_cloud_dataplex_v1_action_invalid_data_format_instance = GoogleCloudDataplexV1ActionInvalidDataFormat.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ActionInvalidDataFormat.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_action_invalid_data_format_dict = google_cloud_dataplex_v1_action_invalid_data_format_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ActionInvalidDataFormat from a dict
google_cloud_dataplex_v1_action_invalid_data_format_from_dict = GoogleCloudDataplexV1ActionInvalidDataFormat.from_dict(google_cloud_dataplex_v1_action_invalid_data_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


