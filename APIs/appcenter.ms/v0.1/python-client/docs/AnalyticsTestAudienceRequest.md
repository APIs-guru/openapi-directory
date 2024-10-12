# AnalyticsTestAudienceRequest

Audience definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_properties** | **Dict[str, str]** | Custom properties used in the definition. | [optional] 
**definition** | **str** | Audience definition in OData format. | 
**description** | **str** | Audience description. | [optional] 
**enabled** | **bool** |  | [optional] [default to True]

## Example

```python
from openapi_client.models.analytics_test_audience_request import AnalyticsTestAudienceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsTestAudienceRequest from a JSON string
analytics_test_audience_request_instance = AnalyticsTestAudienceRequest.from_json(json)
# print the JSON string representation of the object
print(AnalyticsTestAudienceRequest.to_json())

# convert the object into a dict
analytics_test_audience_request_dict = analytics_test_audience_request_instance.to_dict()
# create an instance of AnalyticsTestAudienceRequest from a dict
analytics_test_audience_request_from_dict = AnalyticsTestAudienceRequest.from_dict(analytics_test_audience_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


