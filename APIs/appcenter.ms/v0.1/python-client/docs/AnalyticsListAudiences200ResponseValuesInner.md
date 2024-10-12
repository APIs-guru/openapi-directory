# AnalyticsListAudiences200ResponseValuesInner

Audience definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**definition** | **str** | Audience definition in OData format. | [optional] 
**description** | **str** | Audience description. | [optional] 
**estimated_count** | **int** | Estimated audience size. | [optional] 
**name** | **str** | Audience name. | [optional] 
**state** | **str** | Audience state. | [optional] 

## Example

```python
from openapi_client.models.analytics_list_audiences200_response_values_inner import AnalyticsListAudiences200ResponseValuesInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsListAudiences200ResponseValuesInner from a JSON string
analytics_list_audiences200_response_values_inner_instance = AnalyticsListAudiences200ResponseValuesInner.from_json(json)
# print the JSON string representation of the object
print(AnalyticsListAudiences200ResponseValuesInner.to_json())

# convert the object into a dict
analytics_list_audiences200_response_values_inner_dict = analytics_list_audiences200_response_values_inner_instance.to_dict()
# create an instance of AnalyticsListAudiences200ResponseValuesInner from a dict
analytics_list_audiences200_response_values_inner_from_dict = AnalyticsListAudiences200ResponseValuesInner.from_dict(analytics_list_audiences200_response_values_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


