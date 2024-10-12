# QueryMetadata

Query metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_range** | **str** | Range of report data. | [optional] 
**format** | **str** | Format of the generated report. | [optional] 
**google_cloud_storage_path_for_latest_report** | **str** | The path to the location in Google Cloud Storage where the latest report is stored. | [optional] 
**google_drive_path_for_latest_report** | **str** | The path in Google Drive for the latest report. | [optional] 
**latest_report_run_time_ms** | **str** | The time when the latest report started to run. | [optional] 
**locale** | **str** | Locale of the generated reports. Valid values are cs CZECH de GERMAN en ENGLISH es SPANISH fr FRENCH it ITALIAN ja JAPANESE ko KOREAN pl POLISH pt-BR BRAZILIAN_PORTUGUESE ru RUSSIAN tr TURKISH uk UKRAINIAN zh-CN CHINA_CHINESE zh-TW TAIWAN_CHINESE An locale string not in the list above will generate reports in English. | [optional] 
**report_count** | **int** | Number of reports that have been generated for the query. | [optional] 
**running** | **bool** | Whether the latest report is currently running. | [optional] 
**send_notification** | **bool** | Whether to send an email notification when a report is ready. Default to false. | [optional] 
**share_email_address** | **List[str]** | List of email addresses which are sent email notifications when the report is finished. Separate from sendNotification. | [optional] 
**title** | **str** | Query title. It is used to name the reports generated from this query. | [optional] 

## Example

```python
from openapi_client.models.query_metadata import QueryMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of QueryMetadata from a JSON string
query_metadata_instance = QueryMetadata.from_json(json)
# print the JSON string representation of the object
print(QueryMetadata.to_json())

# convert the object into a dict
query_metadata_dict = query_metadata_instance.to_dict()
# create an instance of QueryMetadata from a dict
query_metadata_from_dict = QueryMetadata.from_dict(query_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


