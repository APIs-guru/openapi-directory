# GoogleCloudApigeeV1ExportRequest

Request body for [CreateExportRequest]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**csv_delimiter** | **str** | Optional. Delimiter used in the CSV file, if &#x60;outputFormat&#x60; is set to &#x60;csv&#x60;. Defaults to the &#x60;,&#x60; (comma) character. Supported delimiter characters include comma (&#x60;,&#x60;), pipe (&#x60;|&#x60;), and tab (&#x60;\\t&#x60;). | [optional] 
**datastore_name** | **str** | Required. Name of the preconfigured datastore. | [optional] 
**date_range** | [**GoogleCloudApigeeV1DateRange**](GoogleCloudApigeeV1DateRange.md) |  | [optional] 
**description** | **str** | Optional. Description of the export job. | [optional] 
**name** | **str** | Required. Display name of the export job. | [optional] 
**output_format** | **str** | Optional. Output format of the export. Valid values include: &#x60;csv&#x60; or &#x60;json&#x60;. Defaults to &#x60;json&#x60;. Note: Configure the delimiter for CSV output using the &#x60;csvDelimiter&#x60; property. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_export_request import GoogleCloudApigeeV1ExportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ExportRequest from a JSON string
google_cloud_apigee_v1_export_request_instance = GoogleCloudApigeeV1ExportRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ExportRequest.to_json())

# convert the object into a dict
google_cloud_apigee_v1_export_request_dict = google_cloud_apigee_v1_export_request_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ExportRequest from a dict
google_cloud_apigee_v1_export_request_from_dict = GoogleCloudApigeeV1ExportRequest.from_dict(google_cloud_apigee_v1_export_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


