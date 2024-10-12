# Report

The complex type that defines that defines the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_metadata** | [**List[Metadata]**](Metadata.md) | A complex type containing the header of the report and the type of data containted in the rows of the report. | [optional] 
**end_date** | **str** | The time stamp is formatted as an ISO 8601 string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. If you specify an end date that is beyond the lastUpdatedDate value, eBay returns a report that contains data only up to the lastUpdateDate date. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-20T07:09:00.000Z | [optional] 
**header** | [**Header**](Header.md) |  | [optional] 
**last_updated_date** | **str** | The date and time, in ISO 8601 format, that indicates the last time the data returned in the report was updated. | [optional] 
**records** | [**List[Record]**](Record.md) | A complex type containing the individual data records for the traffic report. | [optional] 
**start_date** | **str** | The start date of the date range used to calculate the report, in ISO 8601 format. | [optional] 
**warnings** | [**List[Error]**](Error.md) | An array of any process errors or warnings that were generated during the processing of the call processing. | [optional] 

## Example

```python
from openapi_client.models.report import Report

# TODO update the JSON string below
json = "{}"
# create an instance of Report from a JSON string
report_instance = Report.from_json(json)
# print the JSON string representation of the object
print(Report.to_json())

# convert the object into a dict
report_dict = report_instance.to_dict()
# create an instance of Report from a dict
report_from_dict = Report.from_dict(report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


