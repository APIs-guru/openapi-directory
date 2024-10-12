# GoogleCloudDataplexV1StorageFormatCsvOptions

Describes CSV and similar semi-structured data formats.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delimiter** | **str** | Optional. The delimiter used to separate values. Defaults to &#39;,&#39;. | [optional] 
**encoding** | **str** | Optional. The character encoding of the data. Accepts \&quot;US-ASCII\&quot;, \&quot;UTF-8\&quot;, and \&quot;ISO-8859-1\&quot;. Defaults to UTF-8 if unspecified. | [optional] 
**header_rows** | **int** | Optional. The number of rows to interpret as header rows that should be skipped when reading data rows. Defaults to 0. | [optional] 
**quote** | **str** | Optional. The character used to quote column values. Accepts &#39;\&quot;&#39; (double quotation mark) or &#39;_&#39;_&#39; (single quotation mark). Defaults to &#39;\&quot;&#39; (double quotation mark) if unspecified. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_storage_format_csv_options import GoogleCloudDataplexV1StorageFormatCsvOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1StorageFormatCsvOptions from a JSON string
google_cloud_dataplex_v1_storage_format_csv_options_instance = GoogleCloudDataplexV1StorageFormatCsvOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1StorageFormatCsvOptions.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_storage_format_csv_options_dict = google_cloud_dataplex_v1_storage_format_csv_options_instance.to_dict()
# create an instance of GoogleCloudDataplexV1StorageFormatCsvOptions from a dict
google_cloud_dataplex_v1_storage_format_csv_options_from_dict = GoogleCloudDataplexV1StorageFormatCsvOptions.from_dict(google_cloud_dataplex_v1_storage_format_csv_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


