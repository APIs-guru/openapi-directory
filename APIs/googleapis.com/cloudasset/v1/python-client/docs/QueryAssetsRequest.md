# QueryAssetsRequest

QueryAssets request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_reference** | **str** | Optional. Reference to the query job, which is from the &#x60;QueryAssetsResponse&#x60; of previous &#x60;QueryAssets&#x60; call. | [optional] 
**output_config** | [**QueryAssetsOutputConfig**](QueryAssetsOutputConfig.md) |  | [optional] 
**page_size** | **int** | Optional. The maximum number of rows to return in the results. Responses are limited to 10 MB and 1000 rows. By default, the maximum row count is 1000. When the byte or row count limit is reached, the rest of the query results will be paginated. The field will be ignored when [output_config] is specified. | [optional] 
**page_token** | **str** | Optional. A page token received from previous &#x60;QueryAssets&#x60;. The field will be ignored when [output_config] is specified. | [optional] 
**read_time** | **str** | Optional. Queries cloud assets as they appeared at the specified point in time. | [optional] 
**read_time_window** | [**TimeWindow**](TimeWindow.md) |  | [optional] 
**statement** | **str** | Optional. A SQL statement that&#39;s compatible with [BigQuery SQL](https://cloud.google.com/bigquery/docs/introduction-sql). | [optional] 
**timeout** | **str** | Optional. Specifies the maximum amount of time that the client is willing to wait for the query to complete. By default, this limit is 5 min for the first query, and 1 minute for the following queries. If the query is complete, the &#x60;done&#x60; field in the &#x60;QueryAssetsResponse&#x60; is true, otherwise false. Like BigQuery [jobs.query API](https://cloud.google.com/bigquery/docs/reference/rest/v2/jobs/query#queryrequest) The call is not guaranteed to wait for the specified timeout; it typically returns after around 200 seconds (200,000 milliseconds), even if the query is not complete. The field will be ignored when [output_config] is specified. | [optional] 

## Example

```python
from openapi_client.models.query_assets_request import QueryAssetsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryAssetsRequest from a JSON string
query_assets_request_instance = QueryAssetsRequest.from_json(json)
# print the JSON string representation of the object
print(QueryAssetsRequest.to_json())

# convert the object into a dict
query_assets_request_dict = query_assets_request_instance.to_dict()
# create an instance of QueryAssetsRequest from a dict
query_assets_request_from_dict = QueryAssetsRequest.from_dict(query_assets_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


