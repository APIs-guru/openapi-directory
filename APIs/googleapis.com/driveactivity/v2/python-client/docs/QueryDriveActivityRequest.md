# QueryDriveActivityRequest

The request message for querying Drive activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestor_name** | **str** | Return activities for this Drive folder, plus all children and descendants. The format is &#x60;items/ITEM_ID&#x60;. | [optional] 
**consolidation_strategy** | [**ConsolidationStrategy**](ConsolidationStrategy.md) |  | [optional] 
**filter** | **str** | The filtering for items returned from this query request. The format of the filter string is a sequence of expressions, joined by an optional \&quot;AND\&quot;, where each expression is of the form \&quot;field operator value\&quot;. Supported fields: - &#x60;time&#x60;: Uses numerical operators on date values either in terms of milliseconds since Jan 1, 1970 or in RFC 3339 format. Examples: - &#x60;time &gt; 1452409200000 AND time &lt;&#x3D; 1492812924310&#x60; - &#x60;time &gt;&#x3D; \&quot;2016-01-10T01:02:03-05:00\&quot;&#x60; - &#x60;detail.action_detail_case&#x60;: Uses the \&quot;has\&quot; operator (:) and either a singular value or a list of allowed action types enclosed in parentheses, separated by a space. To exclude a result from the response, prepend a hyphen (&#x60;-&#x60;) to the beginning of the filter string. Examples: - &#x60;detail.action_detail_case:RENAME&#x60; - &#x60;detail.action_detail_case:(CREATE RESTORE)&#x60; - &#x60;-detail.action_detail_case:MOVE&#x60;  | [optional] 
**item_name** | **str** | Return activities for this Drive item. The format is &#x60;items/ITEM_ID&#x60;. | [optional] 
**page_size** | **int** | The minimum number of activities desired in the response; the server attempts to return at least this quantity. The server may also return fewer activities if it has a partial response ready before the request times out. If not set, a default value is used. | [optional] 
**page_token** | **str** | The token identifies which page of results to return. Set this to the next_page_token value returned from a previous query to obtain the following page of results. If not set, the first page of results is returned. | [optional] 

## Example

```python
from openapi_client.models.query_drive_activity_request import QueryDriveActivityRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryDriveActivityRequest from a JSON string
query_drive_activity_request_instance = QueryDriveActivityRequest.from_json(json)
# print the JSON string representation of the object
print(QueryDriveActivityRequest.to_json())

# convert the object into a dict
query_drive_activity_request_dict = query_drive_activity_request_instance.to_dict()
# create an instance of QueryDriveActivityRequest from a dict
query_drive_activity_request_from_dict = QueryDriveActivityRequest.from_dict(query_drive_activity_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


