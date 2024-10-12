# GoogleCloudAdvisorynotificationsV1Csv

A representation of a CSV file attachment, as a list of column headers and a list of data rows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_rows** | [**List[GoogleCloudAdvisorynotificationsV1CsvCsvRow]**](GoogleCloudAdvisorynotificationsV1CsvCsvRow.md) | The list of data rows in a CSV file, as string arrays rather than as a single comma-separated string. | [optional] 
**headers** | **List[str]** | The list of headers for data columns in a CSV file. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_advisorynotifications_v1_csv import GoogleCloudAdvisorynotificationsV1Csv

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAdvisorynotificationsV1Csv from a JSON string
google_cloud_advisorynotifications_v1_csv_instance = GoogleCloudAdvisorynotificationsV1Csv.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAdvisorynotificationsV1Csv.to_json())

# convert the object into a dict
google_cloud_advisorynotifications_v1_csv_dict = google_cloud_advisorynotifications_v1_csv_instance.to_dict()
# create an instance of GoogleCloudAdvisorynotificationsV1Csv from a dict
google_cloud_advisorynotifications_v1_csv_from_dict = GoogleCloudAdvisorynotificationsV1Csv.from_dict(google_cloud_advisorynotifications_v1_csv_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


