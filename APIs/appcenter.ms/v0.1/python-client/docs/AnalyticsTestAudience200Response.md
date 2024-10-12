# AnalyticsTestAudience200Response

Audience test result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_properties** | **Dict[str, str]** | Custom properties used in the definition. | [optional] 
**definition** | **str** | Audience definition in OData format. | [optional] 
**estimated_count** | **int** | Estimated audience size. | [optional] 
**estimated_total_count** | **int** | Estimated total audience size. | [optional] 

## Example

```python
from openapi_client.models.analytics_test_audience200_response import AnalyticsTestAudience200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsTestAudience200Response from a JSON string
analytics_test_audience200_response_instance = AnalyticsTestAudience200Response.from_json(json)
# print the JSON string representation of the object
print(AnalyticsTestAudience200Response.to_json())

# convert the object into a dict
analytics_test_audience200_response_dict = analytics_test_audience200_response_instance.to_dict()
# create an instance of AnalyticsTestAudience200Response from a dict
analytics_test_audience200_response_from_dict = AnalyticsTestAudience200Response.from_dict(analytics_test_audience200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


