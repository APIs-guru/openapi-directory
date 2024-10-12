# GoogleCloudAdvisorynotificationsV1CsvCsvRow

A representation of a single data row in a CSV file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | **List[str]** | The data entries in a CSV file row, as a string array rather than a single comma-separated string. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_advisorynotifications_v1_csv_csv_row import GoogleCloudAdvisorynotificationsV1CsvCsvRow

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAdvisorynotificationsV1CsvCsvRow from a JSON string
google_cloud_advisorynotifications_v1_csv_csv_row_instance = GoogleCloudAdvisorynotificationsV1CsvCsvRow.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAdvisorynotificationsV1CsvCsvRow.to_json())

# convert the object into a dict
google_cloud_advisorynotifications_v1_csv_csv_row_dict = google_cloud_advisorynotifications_v1_csv_csv_row_instance.to_dict()
# create an instance of GoogleCloudAdvisorynotificationsV1CsvCsvRow from a dict
google_cloud_advisorynotifications_v1_csv_csv_row_from_dict = GoogleCloudAdvisorynotificationsV1CsvCsvRow.from_dict(google_cloud_advisorynotifications_v1_csv_csv_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


