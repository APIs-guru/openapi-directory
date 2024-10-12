# AnalyticsGetAudience200Response

Audience with details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_properties** | **Dict[str, str]** | Custom properties used in the definition. | [optional] 
**enabled** | **bool** |  | [optional] [default to True]
**estimated_total_count** | **int** | Estimated total audience size. | [optional] 
**timestamp** | **datetime** | Date the audience was last refreshed. | [optional] 
**definition** | **str** | Audience definition in OData format. | [optional] 
**description** | **str** | Audience description. | [optional] 
**estimated_count** | **int** | Estimated audience size. | [optional] 
**name** | **str** | Audience name. | [optional] 
**state** | **str** | Audience state. | [optional] 

## Example

```python
from openapi_client.models.analytics_get_audience200_response import AnalyticsGetAudience200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsGetAudience200Response from a JSON string
analytics_get_audience200_response_instance = AnalyticsGetAudience200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsGetAudience200Response.to_json())

# convert the object into a dict
analytics_get_audience200_response_dict = analytics_get_audience200_response_instance.to_dict()
# create an instance of AnalyticsGetAudience200Response from a dict
analytics_get_audience200_response_from_dict = AnalyticsGetAudience200Response.from_dict(analytics_get_audience200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


