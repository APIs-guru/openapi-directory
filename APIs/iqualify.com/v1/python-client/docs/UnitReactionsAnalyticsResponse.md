# UnitReactionsAnalyticsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback** | [**UnitReactionsFeedback**](UnitReactionsFeedback.md) |  | [optional] 
**page_id** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.unit_reactions_analytics_response import UnitReactionsAnalyticsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UnitReactionsAnalyticsResponse from a JSON string
unit_reactions_analytics_response_instance = UnitReactionsAnalyticsResponse.from_json(json)
# print the JSON string representation of the object
print(UnitReactionsAnalyticsResponse.to_json())

# convert the object into a dict
unit_reactions_analytics_response_dict = unit_reactions_analytics_response_instance.to_dict()
# create an instance of UnitReactionsAnalyticsResponse from a dict
unit_reactions_analytics_response_from_dict = UnitReactionsAnalyticsResponse.from_dict(unit_reactions_analytics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


