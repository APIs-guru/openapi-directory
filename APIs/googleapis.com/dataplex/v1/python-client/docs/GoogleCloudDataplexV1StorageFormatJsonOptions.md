# GoogleCloudDataplexV1StorageFormatJsonOptions

Describes JSON data format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | **str** | Optional. The character encoding of the data. Accepts \&quot;US-ASCII\&quot;, \&quot;UTF-8\&quot; and \&quot;ISO-8859-1\&quot;. Defaults to UTF-8 if not specified. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_storage_format_json_options import GoogleCloudDataplexV1StorageFormatJsonOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1StorageFormatJsonOptions from a JSON string
google_cloud_dataplex_v1_storage_format_json_options_instance = GoogleCloudDataplexV1StorageFormatJsonOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1StorageFormatJsonOptions.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_storage_format_json_options_dict = google_cloud_dataplex_v1_storage_format_json_options_instance.to_dict()
# create an instance of GoogleCloudDataplexV1StorageFormatJsonOptions from a dict
google_cloud_dataplex_v1_storage_format_json_options_from_dict = GoogleCloudDataplexV1StorageFormatJsonOptions.from_dict(google_cloud_dataplex_v1_storage_format_json_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


