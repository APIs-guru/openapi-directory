# ListBusinessCallsInsightsResponse

Response message for ListBusinessCallsInsights.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_calls_insights** | [**List[BusinessCallsInsights]**](BusinessCallsInsights.md) | A collection of business calls insights for the location. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. Some of the metric_types (e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the next_page_token will be empty. | [optional] 

## Example

```python
from openapi_client.models.list_business_calls_insights_response import ListBusinessCallsInsightsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBusinessCallsInsightsResponse from a JSON string
list_business_calls_insights_response_instance = ListBusinessCallsInsightsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBusinessCallsInsightsResponse.to_json())

# convert the object into a dict
list_business_calls_insights_response_dict = list_business_calls_insights_response_instance.to_dict()
# create an instance of ListBusinessCallsInsightsResponse from a dict
list_business_calls_insights_response_from_dict = ListBusinessCallsInsightsResponse.from_dict(list_business_calls_insights_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


