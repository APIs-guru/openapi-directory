# GoogleCloudApigeeV1CustomReport


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart_type** | **str** | This field contains the chart type for the report | [optional] 
**comments** | **List[str]** | Legacy field: not used. This field contains a list of comments associated with custom report | [optional] 
**created_at** | **str** | Output only. Unix time when the app was created json key: createdAt | [optional] [readonly] 
**dimensions** | **List[str]** | This contains the list of dimensions for the report | [optional] 
**display_name** | **str** | This is the display name for the report | [optional] 
**environment** | **str** | Output only. Environment name | [optional] [readonly] 
**filter** | **str** | This field contains the filter expression | [optional] 
**from_time** | **str** | Legacy field: not used. Contains the from time for the report | [optional] 
**last_modified_at** | **str** | Output only. Modified time of this entity as milliseconds since epoch. json key: lastModifiedAt | [optional] [readonly] 
**last_viewed_at** | **str** | Output only. Last viewed time of this entity as milliseconds since epoch | [optional] [readonly] 
**limit** | **str** | Legacy field: not used This field contains the limit for the result retrieved | [optional] 
**metrics** | [**List[GoogleCloudApigeeV1CustomReportMetric]**](GoogleCloudApigeeV1CustomReportMetric.md) | Required. This contains the list of metrics | [optional] 
**name** | **str** | Required. Unique identifier for the report T his is a legacy field used to encode custom report unique id | [optional] 
**offset** | **str** | Legacy field: not used. This field contains the offset for the data | [optional] 
**organization** | **str** | Output only. Organization name | [optional] [readonly] 
**properties** | [**List[GoogleCloudApigeeV1ReportProperty]**](GoogleCloudApigeeV1ReportProperty.md) | This field contains report properties such as ui metadata etc. | [optional] 
**sort_by_cols** | **List[str]** | Legacy field: not used much. Contains the list of sort by columns | [optional] 
**sort_order** | **str** | Legacy field: not used much. Contains the sort order for the sort columns | [optional] 
**tags** | **List[str]** | Legacy field: not used. This field contains a list of tags associated with custom report | [optional] 
**time_unit** | **str** | This field contains the time unit of aggregation for the report | [optional] 
**to_time** | **str** | Legacy field: not used. Contains the end time for the report | [optional] 
**topk** | **str** | Legacy field: not used. This field contains the top k parameter value for restricting the result | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_custom_report import GoogleCloudApigeeV1CustomReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1CustomReport from a JSON string
google_cloud_apigee_v1_custom_report_instance = GoogleCloudApigeeV1CustomReport.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1CustomReport.to_json())

# convert the object into a dict
google_cloud_apigee_v1_custom_report_dict = google_cloud_apigee_v1_custom_report_instance.to_dict()
# create an instance of GoogleCloudApigeeV1CustomReport from a dict
google_cloud_apigee_v1_custom_report_from_dict = GoogleCloudApigeeV1CustomReport.from_dict(google_cloud_apigee_v1_custom_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


