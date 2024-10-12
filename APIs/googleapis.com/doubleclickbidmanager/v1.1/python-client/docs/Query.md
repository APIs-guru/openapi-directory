# Query

Represents a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;doubleclickbidmanager#query\&quot;. | [optional] 
**metadata** | [**QueryMetadata**](QueryMetadata.md) |  | [optional] 
**params** | [**Parameters**](Parameters.md) |  | [optional] 
**query_id** | **str** | Query ID. | [optional] 
**report_data_end_time_ms** | **str** | The ending time for the data that is shown in the report. Note, reportDataEndTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise. | [optional] 
**report_data_start_time_ms** | **str** | The starting time for the data that is shown in the report. Note, reportDataStartTimeMs is required if metadata.dataRange is CUSTOM_DATES and ignored otherwise. | [optional] 
**schedule** | [**QuerySchedule**](QuerySchedule.md) |  | [optional] 
**timezone_code** | **str** | Canonical timezone code for report data time. Defaults to America/New_York. | [optional] 

## Example

```python
from openapi_client.models.query import Query

# TODO update the JSON string below
json = "{}"
# create an instance of Query from a JSON string
query_instance = Query.from_json(json)
# print the JSON string representation of the object
print(Query.to_json())

# convert the object into a dict
query_dict = query_instance.to_dict()
# create an instance of Query from a dict
query_from_dict = Query.from_dict(query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


