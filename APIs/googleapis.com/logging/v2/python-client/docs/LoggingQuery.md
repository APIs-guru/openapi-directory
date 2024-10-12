# LoggingQuery

Describes a Cloud Logging query that can be run in Logs Explorer UI or via the logging API.In addition to the query itself, additional information may be stored to capture the display configuration and other UI state used in association with analysis of query results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Required. An advanced query using the Logging Query Language (https://cloud.google.com/logging/docs/view/logging-query-language). The maximum length of the filter is 20000 characters. | [optional] 
**summary_field_end** | **int** | Characters will be counted from the end of the string. | [optional] 
**summary_field_start** | **int** | Characters will be counted from the start of the string. | [optional] 
**summary_fields** | [**List[SummaryField]**](SummaryField.md) | Optional. The set of summary fields to display for this saved query. | [optional] 

## Example

```python
from openapi_client.models.logging_query import LoggingQuery

# TODO update the JSON string below
json = "{}"
# create an instance of LoggingQuery from a JSON string
logging_query_instance = LoggingQuery.from_json(json)
# print the JSON string representation of the object
print(LoggingQuery.to_json())

# convert the object into a dict
logging_query_dict = logging_query_instance.to_dict()
# create an instance of LoggingQuery from a dict
logging_query_from_dict = LoggingQuery.from_dict(logging_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


