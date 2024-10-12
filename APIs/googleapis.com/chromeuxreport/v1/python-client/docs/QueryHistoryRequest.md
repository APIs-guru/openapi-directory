# QueryHistoryRequest

Request payload sent by a physical web client. This request includes all necessary context to load a particular user experience history record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**form_factor** | **str** | The form factor is a query dimension that specifies the device class that the record&#39;s data should belong to. Note: If no form factor is specified, then a special record with aggregated data over all form factors will be returned. | [optional] 
**metrics** | **List[str]** | The metrics that should be included in the response. If none are specified then any metrics found will be returned. Allowed values: [\&quot;first_contentful_paint\&quot;, \&quot;first_input_delay\&quot;, \&quot;largest_contentful_paint\&quot;, \&quot;cumulative_layout_shift\&quot;, \&quot;experimental_time_to_first_byte\&quot;, \&quot;experimental_interaction_to_next_paint\&quot;] | [optional] 
**origin** | **str** | The url pattern \&quot;origin\&quot; refers to a url pattern that is the origin of a website. Examples: \&quot;https://example.com\&quot;, \&quot;https://cloud.google.com\&quot; | [optional] 
**url** | **str** | The url pattern \&quot;url\&quot; refers to a url pattern that is any arbitrary url. Examples: \&quot;https://example.com/\&quot;, \&quot;https://cloud.google.com/why-google-cloud/\&quot; | [optional] 

## Example

```python
from openapi_client.models.query_history_request import QueryHistoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of QueryHistoryRequest from a JSON string
query_history_request_instance = QueryHistoryRequest.from_json(json)
# print the JSON string representation of the object
print(QueryHistoryRequest.to_json())

# convert the object into a dict
query_history_request_dict = query_history_request_instance.to_dict()
# create an instance of QueryHistoryRequest from a dict
query_history_request_from_dict = QueryHistoryRequest.from_dict(query_history_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


