# GoogleCloudApigeeV1QueryTabularStatsResponse

Encapsulates two kinds of stats that are results of the dimensions and aggregations requested. - Tabular rows. - Time series data. Example of tabular rows, Represents security stats results as a row of flat values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** | Column names corresponding to the same order as the inner values in the stats field. | [optional] 
**next_page_token** | **str** | Next page token. | [optional] 
**values** | **List[List[object]]** | Resultant rows from the executed query. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_query_tabular_stats_response import GoogleCloudApigeeV1QueryTabularStatsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1QueryTabularStatsResponse from a JSON string
google_cloud_apigee_v1_query_tabular_stats_response_instance = GoogleCloudApigeeV1QueryTabularStatsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1QueryTabularStatsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_query_tabular_stats_response_dict = google_cloud_apigee_v1_query_tabular_stats_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1QueryTabularStatsResponse from a dict
google_cloud_apigee_v1_query_tabular_stats_response_from_dict = GoogleCloudApigeeV1QueryTabularStatsResponse.from_dict(google_cloud_apigee_v1_query_tabular_stats_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


