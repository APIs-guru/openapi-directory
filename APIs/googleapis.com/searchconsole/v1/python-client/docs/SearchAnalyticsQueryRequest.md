# SearchAnalyticsQueryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_type** | **str** | [Optional; Default is \\\&quot;auto\\\&quot;] How data is aggregated. If aggregated by property, all data for the same property is aggregated; if aggregated by page, all data is aggregated by canonical URI. If you filter or group by page, choose AUTO; otherwise you can aggregate either by property or by page, depending on how you want your data calculated; see the help documentation to learn how data is calculated differently by site versus by page. **Note:** If you group or filter by page, you cannot aggregate by property. If you specify any value other than AUTO, the aggregation type in the result will match the requested type, or if you request an invalid type, you will get an error. The API will never change your aggregation type if the requested type is invalid. | [optional] 
**data_state** | **str** | The data state to be fetched, can be full or all, the latter including full and partial data. | [optional] 
**dimension_filter_groups** | [**List[ApiDimensionFilterGroup]**](ApiDimensionFilterGroup.md) | [Optional] Zero or more filters to apply to the dimension grouping values; for example, &#39;query contains \\\&quot;buy\\\&quot;&#39; to see only data where the query string contains the substring \\\&quot;buy\\\&quot; (not case-sensitive). You can filter by a dimension without grouping by it. | [optional] 
**dimensions** | **List[str]** | [Optional] Zero or more dimensions to group results by. Dimensions are the group-by values in the Search Analytics page. Dimensions are combined to create a unique row key for each row. Results are grouped in the order that you supply these dimensions. | [optional] 
**end_date** | **str** | [Required] End date of the requested date range, in YYYY-MM-DD format, in PST (UTC - 8:00). Must be greater than or equal to the start date. This value is included in the range. | [optional] 
**row_limit** | **int** | [Optional; Default is 1000] The maximum number of rows to return. Must be a number from 1 to 25,000 (inclusive). | [optional] 
**search_type** | **str** | [Optional; Default is \\\&quot;web\\\&quot;] The search type to filter for. | [optional] 
**start_date** | **str** |  [Required] Start date of the requested date range, in YYYY-MM-DD format, in PST time (UTC - 8:00). Must be less than or equal to the end date. This value is included in the range. | [optional] 
**start_row** | **int** | [Optional; Default is 0] Zero-based index of the first row in the response. Must be a non-negative number. | [optional] 
**type** | **str** | Optional. [Optional; Default is \\\&quot;web\\\&quot;] Type of report: search type, or either Discover or Gnews. | [optional] 

## Example

```python
from openapi_client.models.search_analytics_query_request import SearchAnalyticsQueryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAnalyticsQueryRequest from a JSON string
search_analytics_query_request_instance = SearchAnalyticsQueryRequest.from_json(json)
# print the JSON string representation of the object
print(SearchAnalyticsQueryRequest.to_json())

# convert the object into a dict
search_analytics_query_request_dict = search_analytics_query_request_instance.to_dict()
# create an instance of SearchAnalyticsQueryRequest from a dict
search_analytics_query_request_from_dict = SearchAnalyticsQueryRequest.from_dict(search_analytics_query_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


